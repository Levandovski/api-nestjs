FROM node:16-alpine3.16

RUN npm install -g @nestjs/cli

USER node

WORKDIR /home/node/app

