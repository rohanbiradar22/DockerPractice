FROM ubuntu:latest

WORKDIR /app

COPY . /app

RUN  apt-get update -y && apt-get install -y nodejs

ENV NAME Euu

CMD node index.js