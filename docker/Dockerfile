FROM node:alpine as build
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .
RUN ./node_modules/.bin/ng build

FROM nginx:latest
USER root
EXPOSE 8443:8443
RUN chmod 775 -R /etc/nginx
RUN chmod 775 -R /var/cache/nginx
COPY --from=build /app/dist/shabok /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
RUN chgrp -R root /var/cache/nginx /var/run /var/log/nginx && \
    chmod -R 770 /var/cache/nginx /var/run /var/log/nginx

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
