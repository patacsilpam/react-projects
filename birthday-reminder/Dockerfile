# Fetching the latest node image on alpine linux
FROM node:16

# Declaring env
ENV NODE_ENV development

# Setting up the work directory
WORKDIR /birthday-reminder/

# Installing dependencies
COPY package.json .

RUN npm install

# Copying all the files in our project
COPY . .
#Expose the port that the app will run
EXPOSE 8080
# Starting our application
CMD ["npm", "start"]