FROM ubuntu:latest

WORKDIR /app

COPY package*.json ./

COPY . .

RUN apt-get update -y && \
    apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs 

ENV PORT 3000

CMD node index.js