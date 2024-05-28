# Use Node.js LTS version as the base image
FROM node:14 as build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire React app to the working directory
COPY . .

# Build the React app
RUN npm run build

# Use Nginx as the production server
FROM nginx:alpine

# Copy the built React app from the build stage to the nginx public directory
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]