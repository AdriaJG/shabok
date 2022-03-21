FROM node:current-slim

WORKDIR /usr/src/app
COPY . .
RUN npm install
RUn ng serve

EXPOSE 3001
CMD [ "npm", "run", "console" ]