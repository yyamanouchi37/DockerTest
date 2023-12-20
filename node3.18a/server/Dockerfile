FROM node:20-alpine3.19

WORKDIR /src
COPY package*.json ./

RUN npm install
COPY . .
EXPOSE 3000

CMD ["node", "/src/app/app.js"]