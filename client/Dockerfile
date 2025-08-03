# 1. Сборка проекта
FROM node:24-alpine AS builder

WORKDIR /app

# Копируем только client из корня
COPY ../client ./

RUN npm install
RUN npm run build

# 2. Продакшн-стадия
FROM node:24-alpine

WORKDIR /app

COPY --from=builder /app ./

EXPOSE 3000
ENV PORT=3000
CMD ["npm", "start"]
