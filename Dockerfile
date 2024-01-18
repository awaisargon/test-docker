# Use the official Node.js 16 image as base
FROM node:16-alpine
ENV NODE_ENV=development

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application to the container
COPY . .

# Expose the port the app runs on
EXPOSE 9000

# Define the command to run the application
CMD ["npm", "start"]
