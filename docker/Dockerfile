FROM node:alpine as build
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .
RUN ./node_modules/.bin/ng build

FROM nginx:latest
EXPOSE 8443:8443
RUN chmod 775 -R etc/nginx/conf.d
COPY --from=build /app/dist/shabok /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf