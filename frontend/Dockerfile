FROM node:20-alpine
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY --chown=node:node . /usr/src/app
RUN npm ci --omit=dev
RUN npm run front:build
USER node

CMD ["npm", "run", "front:start"]
