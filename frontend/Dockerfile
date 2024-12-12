# Use Node.js base image for building React app
FROM node:18 AS build

# Create app directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --force

# Copy the application code
COPY . .

# Build the React app
RUN npm run build

# Use nginx for serving the React app
FROM nginx:alpine

# Copy built React app to nginx html directory
COPY --from=build /usr/src/app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
