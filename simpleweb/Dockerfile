
# specify a base image
FROM node:alpine

WORKDIR /usr/app
# install some dependencies
COPY ./ ./
RUN npm install
 
# default cmd
CMD ["npm", "start"]