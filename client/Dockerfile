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
# Создаём .env.production для Next.js
RUN echo "NODE_ENV=production" > .env.prodction \
    && echo "NEXT_PUBLIC_API_URL=http://localhost:3001/api" >> .env.production \
    && echo "NEXT_PUBLIC_UPLOADS_URL=http://localhost:3001/uploads" >> .env.production \
    && echo "NEXT_PUBLIC_URL=http://localhost:3001" >> .env.production
RUN npm run build

# Финальный этап
FROM node:24-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/public ./public
COPY --from=builder /app/.env.production ./.env.production
EXPOSE 4000
CMD ["npm", "start", "--", "-p", "4000"]
