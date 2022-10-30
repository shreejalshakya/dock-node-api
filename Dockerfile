FROM node:lts-alpine

# set our node environment, either development or production
# defaults to production, compose overrides this to development on build and run
# ARG NODE_ENV=production
# ENV NODE_ENV $NODE_ENV

WORKDIR /code

# COPY package.json /code/package.json
# COPY package-lock.json /code/package-lock.json
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
# RUN npm ci
RUN npm install --production --silent && mv node_modules ../

# check every 30s to encure this service returns HTTP 200
# HEALTHCHECK --interval=30s \
#     CMD node healthcheck.js

COPY . .

# default to port 80 for node, and 9229 and 9230 (tests) for debug
# ARG PORT=80
# ENV PORT $PORT
# EXPOSE $PORT 9229 9230
EXPOSE 3005
RUN chown -R node /code
USER node

# CMD ["node", "src/index.js"]
CMD ["npm", "start"]
