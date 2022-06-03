FROM node:16-alpine AS build

RUN mkdir -p /app

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . /app

RUN npm run build


FROM node:16-alpine

WORKDIR /app

RUN npm install -g webserver.local

COPY --from=build /app/dist ./dist

EXPOSE 3000

CMD webserver.local -d ./dist

