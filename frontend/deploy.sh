#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}Starting deployment process...${NC}"

# Frontend deployment
echo -e "${BLUE}Deploying frontend...${NC}"
cd frontend

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo -e "${BLUE}Installing frontend dependencies...${NC}"
    npm install
fi

# Build the project
echo -e "${BLUE}Building frontend...${NC}"
npm run build

# Deploy to Vercel
echo -e "${BLUE}Deploying to Vercel...${NC}"
vercel --prod

# Backend deployment
echo -e "${BLUE}Deploying backend...${NC}"
cd ../backend

# Create virtual environment if it doesn't exist
if [ ! -d "venv" ]; then
    echo -e "${BLUE}Creating virtual environment...${NC}"
    python -m venv venv
fi

# Activate virtual environment
source venv/bin/activate

# Install requirements
echo -e "${BLUE}Installing backend dependencies...${NC}"
pip install -r requirements.txt

# Deploy to Railway
echo -e "${BLUE}Deploying to Railway...${NC}"
railway up

echo -e "${GREEN}Deployment completed!${NC}"