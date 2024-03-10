FROM node:21 AS builder

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install
COPY . .

FROM node:21

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app .

EXPOSE 3000
CMD ["node", "index.js"]