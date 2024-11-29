FROM ubuntu:latest

WORKDIR /app

COPY . /app

RUN  apt get update -y && apt install nodejs

ENV NAME Euu

CMD node index.js