# README.md

## 🚀 О проекте

Этот проект объединяет:

* **Next.js** (front-end) с поддержкой TypeScript и SSR/SSG
* **Express.js** на TypeScript (back-end)
* **Docker** для контейнеризации
* **Nginx** как обратный прокси
* **Let's Encrypt** (Certbot) для HTTPS

Backend подключается к облачной БД (PostgreSQL/MongoDB и т.п.). Директория фронтенда встроена в бэкенд и обслуживается Express.

---

```bash
docker compose down
docker compose build
docker compose up -d
```

## 📋 Структура проекта

```bash
my-app/
├── backend/                  # Серверная часть
│   ├── src/
│   │   ├── config/           # Файлы конфигурации
│   │   │   └── db.ts         # Подключение к БД
│   │   ├── controllers/      # Обработчики запросов
│   │   ├── middlewares/      # Промежуточные обработки
│   │   │   └── errorHandler.ts
│   │   ├── routes/           # Определение маршрутов
│   │   ├── services/         # Бизнес-логика
│   │   ├── utils/            # Утилиты (логирование, валидация)
│   │   └── server.ts         # Точка входа
│   ├── tsconfig.json
│   ├── package.json
│   └── .env.example
├── frontend/                 # Клиентская часть
│   ├── pages/                # Next.js-страницы
│   ├── components/           # React-компоненты
│   ├── public/               # Статические файлы
│   ├── styles/               # Стили (CSS/SCSS)
│   ├── next.config.js        # Настройка Next.js
│   ├── tsconfig.json
│   ├── package.json
│   └── .env.example
├── .dockerignore
├── docker-compose.yml        # Опционально для разработки/CI
└── Dockerfile
```

---

## 🔧 1. Настройка окружения

1. Склонируйте репозиторий и перейдите в корень:

   ```bash
   git clone https://github.com/youruser/my-app.git
   cd my-app
   ```
2. В директориях `frontend/` и `backend/` скопируйте `.env.example` в `.env`:

   ```bash
   cd backend && cp .env.example .env
   cd ../frontend && cp .env.example .env
   ```
3. Заполните переменные в `backend/.env`:

   * `PORT=3000`
   * `DB_URL_PROD=postgresql://user:pass@host:5432/dbname`
   * `JWT_SECRET_ACCESS=...`
   * `JWT_SECRET_REFRESH=...`
4. Заполните переменные в `frontend/.env`:

   * `NEXT_PUBLIC_API_URL=/api`
5. Установите Node.js >=v18 на локальной машине.
6. Установите Docker и Docker Compose.

---

## 🖥 Локальная разработка

### 1. Backend

```bash
cd backend
npm install
npm run dev  # старт ts-node-dev, на порте 3000
```

* **Live reload** через `ts-node-dev`.
* API-документация (если Swagger): `http://localhost:3000/api-docs`.

### 2. Frontend

```bash
cd frontend
npm install
npm run dev  # Next.js на порте 3001
```

* Next.js автоматически проксирует запросы, настроенные в `next.config.js`:

  ```js
  module.exports = {
    async rewrites() {
      return [{ source: '/api/:path*', destination: 'http://localhost:3000/api/:path*' }];
    }
  };
  ```

---

## 🐳 Сборка и контейнеризация

### .dockerignore

```
node_modules
dist
.next
.env
```

### Dockerfile (multi-stage)

```dockerfile
# Stage 1: builder
FROM node:22-alpine AS builder
WORKDIR /app

# Установить pnpm (или npm/yarn по выбору)
RUN npm install -g pnpm

# Копируем зависимости для workspace
COPY package.json pnpm-lock.yaml .
RUN pnpm install --frozen-lockfile

# Собираем фронтенд
COPY frontend ./frontend
RUN pnpm --filter frontend build

# Собираем бэкенд
COPY backend ./backend
RUN pnpm --filter backend build

# Stage 2: runtime
FROM node:22-alpine AS runtime
WORKDIR /app

# Копируем зависимости runtime
COPY --from=builder /app/node_modules ./node_modules

# Копируем артефакты
COPY --from=builder /app/frontend/.next ./frontend/.next
COPY --from=builder /app/frontend/public ./frontend/public
COPY --from=builder /app/backend/dist ./backend/dist

EXPOSE 3000

# Запуск сервера
CMD ["node", "backend/dist/server.js"]
```

### docker-compose.yml (опционально)

```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - '3000:3000'
    environment:
      - DB_URL_PROD=${DB_URL_PROD}
      - JWT_SECRET_ACCESS=${JWT_SECRET_ACCESS}
      - JWT_SECRET_REFRESH=${JWT_SECRET_REFRESH}
    volumes:
      - /app/node_modules
    depends_on:
      - db
  db:
    image: postgres:15
    environment:
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=pass
      - POSTGRES_DB=dbname
    ports:
      - '5432:5432'
```

---

## 🛠 Обработка ошибок и логирование (Express)

1. **errorHandler middleware** (`backend/src/middlewares/errorHandler.ts`):

   ```ts
   import { Request, Response, NextFunction } from 'express';

   export function errorHandler(err: any, _req: Request, res: Response, _next: NextFunction) {
     const status = err.statusCode || 500;
     console.error('[Error]', err);
     res.status(status).json({ error: err.message || 'Internal Server Error' });
   }
   ```
2. **Централизованное логирование** через `winston` или `pino` в `utils/logger.ts`.
3. **Ручное бросание ошибок** в сервисах:

   ```ts
   if (!user) throw { statusCode: 404, message: 'User not found' };
   ```
4. **Встраивание middleware** в `server.ts`:

   ```ts
   import express from 'express';
   import path from 'path';
   import { errorHandler } from './middlewares/errorHandler';

   const app = express();
   app.use(express.json());
   app.use('/api/users', userRoutes);
   app.use(express.static(path.join(__dirname, '../frontend/public')));
   app.get(/.*/, (_req, res) => {
     res.sendFile(path.join(__dirname, '../frontend/public/index.html'));
   });
   app.use(errorHandler);
   ```

---

## 🌐 Домен, Nginx и HTTPS

### Установка на сервере

```bash
apt update && apt install -y nginx certbot python3-certbot-nginx
```

### Конфиг Nginx (`/etc/nginx/sites-available/yourdomain.ru`)

```nginx
server {
    listen 80;
    server_name yourdomain.ru www.yourdomain.ru;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Доступ к логам
    access_log /var/log/nginx/yourdomain.access.log;
    error_log /var/log/nginx/yourdomain.error.log;
}
```

Активировать и проверить:

```bash
ln -sf /etc/nginx/sites-available/yourdomain.ru /etc/nginx/sites-enabled/
nginx -t && systemctl reload nginx
```

### Получение SSL-сертификата

```bash
certbot --nginx -d yourdomain.ru -d www.yourdomain.ru --redirect --hsts --staple-ocsp --email your@mail.com --agree-tos
```

* Включится автоматическое обновление через `cron`.

---

## ☁️ Деплой на Selectel

1. Создать сервер (Ubuntu 20.04, 1 vCPU, 1 GB ОЗУ).
2. Подключиться по SSH:

   ```bash
   ssh root@<SERVER_IP>
   ```
3. Установить Docker и Docker Compose:

   ```bash
   apt install -y docker.io docker-compose
   systemctl enable --now docker
   ```
4. Скопировать `.env` в папку проекта на сервере.
5. Запустить контейнеры через `docker-compose`:

   ```bash
   docker-compose up -d --build
   ```

---

## ✅ Проверка и CI/CD

* **Smoke tests**: простой curl к `https://yourdomain.ru/api/health`.
* **Логи**: `docker logs -f app` и `journalctl -u nginx`.
* **CI/CD**: GitHub Actions:

  * Шаги: линтинг, тесты, сборка Docker, пуш в Docker Hub, SSH-deploy.

---

*Автор: Denis Sadikov*
