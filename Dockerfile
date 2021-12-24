# pull official base image
FROM node:16.13.1-alpine AS development
ENV NODE_ENV development

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# set working directory
WORKDIR /app
COPY ./package*.json ./
ADD . ./

RUN npm install -g gatsby-cli

# install app dependencies
RUN yarn install && yarn cache clean
RUN gatsby build

EXPOSE 8000

# start app
CMD ["yarn", "develop", "-H", "0.0.0.0", "-p", "8000"]
