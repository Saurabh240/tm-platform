npx @angular/cli new tm-frontend --directory .

npm init -y
npm install express mongoose kafka-node

docker-compose down
docker-compose build
docker-compose up -d

