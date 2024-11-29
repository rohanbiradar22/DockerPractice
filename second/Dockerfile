FROM ubuntu:latest

WORKDIR /app

COPY . /app

RUN  apt-get update -y && apt-get install -y nodejs && npm i 

ENV PORT 3000

CMD nodemon index.js