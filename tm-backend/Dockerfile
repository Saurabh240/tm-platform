FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm install dotenv

# Install TypeScript globally
RUN npm install -g typescript

COPY . .

# Build TypeScript files
RUN tsc

EXPOSE 5000

# Change this to run your main server script
CMD ["node", "dist/index.js"]

