FROM node:18-alpine3.18

# Set working directory
WORKDIR /reactapp

# Copy package files first to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Expose the Vite default dev port
EXPOSE 5173

# Start the Vite dev server
CMD ["npm", "run", "dev"]
