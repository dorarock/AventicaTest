# Образ для сборки
FROM node:13.8.0-alpine as builder 
WORKDIR /app/

# Установка зависимостей
COPY package*.json ./
RUN npm install

# Сборка проекта
COPY . .
RUN npm run build

# Копия собранного проекта в итоговый образ
FROM nginx:1.17.8-alpine
COPY --from=builder /app/build /usr/share/nginx/html