FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install dotenv

COPY . .

EXPOSE 5000
CMD ["node", "src/index.js"] # Adjust as per your entry point
