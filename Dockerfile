FROM node:alpine as build

WORKDIR /app

COPY package.json /app
COPY package-lock.json /app

ENV PATH /app/node_modules/.bin:$PATH

RUN npm install && npm install react-scripts -g

COPY . /app
# build the app
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
