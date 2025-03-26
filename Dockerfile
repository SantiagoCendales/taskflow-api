FROM node:22.14-alpine

WORKDIR /app

COPY package.json package-lock.json /app/
COPY package-lock.json /app
RUN npm install

COPY . /app

EXPOSE 3000

CMD ["npm", "run", "dev"]