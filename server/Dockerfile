FROM node:14-alpine
WORKDIR /usr/src/app/server
COPY package*.json ./
RUN npm ci
COPY . .
CMD ["npm", "start"]
EXPOSE 8000