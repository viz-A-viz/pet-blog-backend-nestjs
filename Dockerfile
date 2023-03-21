# FROM python:3.11.2-slim-bullseye
FROM node:19

WORKDIR /app

COPY package*.json .

RUN npm i

COPY . .

RUN npx prisma generate

COPY ./dist ./dist

CMD npx prisma db push && npx prisma migrate reset --force && npm start