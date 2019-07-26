
# specify a base image
FROM node:alpine

WORKDIR /usr/app
# install some dependencies
COPY package.json .
RUN npm install
COPY ./ ./
 
# default cmd
CMD ["npm", "start"]