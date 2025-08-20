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
RUN npm run build

# Финальный этап
FROM node:24-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public
EXPOSE 4000
CMD ["npm", "start", "--", "-p", "4000"]