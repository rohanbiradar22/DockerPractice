FROM node:18 AS build

WORKDIR /app

COPY package*.json ./

COPY . .

# RUN apt-get update -y && \
#     apt-get install -y curl && \
#     curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
#     apt-get install -y nodejs 

RUN npm install

ENV PORT 3000

CMD node index.js



# STAGE 2

# FROM gcr.io/distroless/nodejs22-debian12

# WORKDIR /app

# COPY package*.json ./

