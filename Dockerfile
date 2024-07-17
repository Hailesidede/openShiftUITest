FROM node:20.15.0-alpine as angular

WORKDIR /app

COPY . .

RUN npm install 
RUN npm run build -- --configuration=production

FROM httpd:alpine

WORKDIR /usr/local/apache2/htdocs

COPY --from=angular /app/dist/open-shift-test-ui .

EXPOSE 80