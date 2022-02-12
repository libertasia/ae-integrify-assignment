FROM node:16.13-alpine
WORKDIR /usersapp
COPY ./package.json /usersapp/package.json
COPY ./public /usersapp/public
COPY ./src /usersapp/src
RUN npm install
EXPOSE 3000
CMD [ "npm", "start" ]
