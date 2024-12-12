# Use Node.js base image
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --force

# Copy the application code
COPY . .

# Create the uploads folder
RUN mkdir -p /usr/src/app/uploads

# Expose the API server port
EXPOSE 5000

# Start the application
CMD ["npm", "start"]
