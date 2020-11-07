FROM node:15.1.0-alpine

WORKDIR /app

ENV NODE_ENV=local

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

COPY db/**/* ./

COPY lambdas/**/* ./

COPY layers/**/* ./

RUN npm install

RUN npm install -g --unsafe-perm serverless --silent

USER node