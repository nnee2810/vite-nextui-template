FROM node:lts-alpine as build-stage

WORKDIR /app

RUN npm install -g pnpm
COPY package.json pnpm-lock.yaml .npmrc ./
RUN pnpm i --frozen-lockfile

COPY . .
RUN pnpm build:prod


FROM nginx:alpine

COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]