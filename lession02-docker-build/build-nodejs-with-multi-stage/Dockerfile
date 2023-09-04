# Stage 1: Build the application
FROM node:14 AS build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Stage 2: Create a minimal production-ready image
FROM node:14-slim

# Set the working directory
WORKDIR /app

# Copy only the necessary artifacts from the previous stage
COPY --from=build /app/package*.json ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/app.js ./

# Expose the port your app will run on
EXPOSE 3000

# Start your application
CMD ["node", "app.js"]

