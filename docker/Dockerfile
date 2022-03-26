FROM ubi8/nodejs-16 as build
WORKDIR /app
USER root
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm install -g npm@8.5.5
RUN ./node_modules/.bin/ng build

FROM ubi8/nginx-118:latest
USER root
EXPOSE 8443:8443
RUN chmod 775 -R /etc/nginx
COPY --from=build /app/dist/shabok /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
