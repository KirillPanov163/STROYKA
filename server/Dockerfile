# Этап зависимостей
FROM node:24-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm install --frozen-lockfile

# Этап сборки
FROM node:24-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npx tsc

# Финальный этап
FROM node:24-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/src/generated ./dist
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public
EXPOSE 3001
CMD ["node", "./dist/app.js"]