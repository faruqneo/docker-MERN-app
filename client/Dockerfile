FROM node:14-alpine
WORKDIR /usr/src/app/client
COPY package*.json ./
RUN npm ci
COPY . .
CMD ["npm", "start"]
EXPOSE 3000