FROM node:14-alpine

RUN mkdir /app && chown node:node /app
WORKDIR /app

USER node

COPY --chown=node:node ./package*.json ./

RUN npm install --silent --ignore-optional

COPY --chown=node:node . .

CMD ["npm", "run", "dev"]
