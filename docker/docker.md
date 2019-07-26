ctrl + C => ctrl + D

container dont share segement automatically

docker build . => id

tagged docker build -t visits .

' => "

FROM RUN CMD

build process
very step run in container base on previous image , then ouput image(container snapshot)

build cache

manual image generate with docker commit
docker commit -c 'CMD ["redis-server"]' id

port mapping -p 8080:8080

docker exec -it 01825113a274 sh 


COPY ./package.json ./
RUN npm install
COPY ./ ./


version: 3       
services:   // container created
  redis-server:
    image:'redis'  use redis image
  node-app:
    build: . // build dockerfile
    ports:   // port map
      - "4001:8081" 



docker run    =====> docker-compose up
docker build 
docker run    =====> docker-compose up --build
docker stop   ====> docker-compose down

docker auto restart
yml no interpret false

docker-compose ps
on the dir, find container difined in yml

development --> testing --> development

pull feature pull request  travis CI Hosting

sudo apt install nodejs

npm install -g create-react-app

docker build -f Dockerfile.dev .

docker run -p 3000:3000 -v /app/node_modules -v $(pwd):/app <image_id>

docker run -p 3000:3000 -v /app/node_modules -v $(pwd):/app 40b9e0e68832


version: '3'
services:
  web:
   build:
     context: .
     dockerfile: Dockerfile.dev
    ports:
      - "3000:3000"
    volumes:
      - app/node_modules
      - .:/app



override default command
> docker run -it <image-id> npm run test

reuse container
> docker exec -it <image-id> npm run test

use docker-compose run container, this time docker attach will connect primary process input output err, the container may not reflect the keyboard input


78