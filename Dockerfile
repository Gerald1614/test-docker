FROM node:11
RUN mkdir -p /usr/app
WORKDIR /usr/app
COPY package.json ./
RUN npm install
COPY . /usr/app
EXPOSE 8081
CMD [ "npm", "start" ]