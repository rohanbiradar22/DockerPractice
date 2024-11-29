FROM ubuntu:latest

WORKDIR /app

COPY . /app

RUN  apt-get update -y && npm i nodemon

ENV PORT 3000

CMD nodemon index.js