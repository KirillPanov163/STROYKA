FROM node:24-alpine

WORKDIR /app

# Копируем только папку server из корня проекта
COPY ../server ./

RUN npm install

# Генерация Prisma (если используется)
RUN npm install --force
RUN npx prisma generate

EXPOSE 3001
CMD ["npm", "start"]
