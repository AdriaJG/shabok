FROM node:alpine as builder
WORKDIR '/app'
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build

RUN ls 

FROM nginx
EXPOSE 443
RUN ls
COPY --from=builder /app/build /usr/share/nginx/html