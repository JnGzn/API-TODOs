FROM node:22

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm i
COPY . .
EXPOSE 4422
RUN npm run build
CMD [ "npm", "run", "start" ]