FROM node:alpine as builder
WORKDIR '/app'
RUN ls
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build

RUN ls dist

FROM nginx
EXPOSE 8443
RUN ls
COPY --from=builder ./dist/shabok /usr/share/nginx/html