FROM node:22.14-alpine

WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "run", "dev"]