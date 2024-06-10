FROM node:iron-alpine AS base

FROM base AS dev
ARG APP=APP
ENV APP=${APP}

ARG NODE_ENV=development 
ENV NODE_ENV=${NODE_ENV}
ENV KAFKA_BROKERS=${KAFKA_BROKERS}

WORKDIR /nest-ms
COPY package*.json .
RUN npm install -g @nestjs/cli
RUN npm ci
# TODO: copy only the necessary files
COPY . .
# RUN npm run build ${APP}
CMD nest start ${APP} --watch
