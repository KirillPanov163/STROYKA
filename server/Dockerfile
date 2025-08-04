# server/Dockerfile
FROM node:24-alpine
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npx tsc

EXPOSE 3001
CMD ["node", "--loader", "ts-node/esm", "./src/app.ts"]

