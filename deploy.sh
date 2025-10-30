#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}Starting deployment process...${NC}"

# Frontend Deployment to Vercel
echo -e "${GREEN}Deploying frontend to Vercel...${NC}"
cd frontend
vercel --prod

# Backend Deployment to Railway
echo -e "${GREEN}Deploying backend to Railway...${NC}"
cd ../backend
railway up

echo -e "${BLUE}Deployment complete!${NC}"
echo -e "Don't forget to set up your environment variables in both platforms:"
echo -e "Vercel - Frontend ENV vars:"
echo -e "  REACT_APP_API_URL=<your-railway-backend-url>"
echo -e "\nRailway - Backend ENV vars:"
echo -e "  MONGO_URL=<your-mongodb-url>"
echo -e "  DB_NAME=<your-database-name>"
echo -e "  CORS_ORIGINS=<your-vercel-frontend-url>"