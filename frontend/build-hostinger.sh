#!/bin/bash

# Build the React application
echo "Building React application..."
npm run build

# Create necessary directories if they don't exist
mkdir -p dist

# Copy build files to dist directory
cp -r build/* dist/

# Copy .htaccess to dist
cp .htaccess dist/

echo "Build completed! Files are ready in the dist directory."