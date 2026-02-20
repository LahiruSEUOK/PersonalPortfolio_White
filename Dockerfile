# ---------- Build Stage ----------
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files first to leverage Docker cache
COPY package*.json ./

# Use --legacy-peer-deps to fix eslint-plugin-react-hooks conflict
RUN npm install --legacy-peer-deps

# Copy the rest of the code
COPY . .

# Build the project
RUN npm run build

# ---------- Production Stage ----------
FROM nginx:alpine

# Copy build output from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Remove default nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d

# Expose the port your app will run on
EXPOSE 3050

# Start nginx in foreground
CMD ["nginx", "-g", "daemon off;"]