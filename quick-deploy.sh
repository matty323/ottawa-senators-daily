#!/bin/bash

# Quick Deploy Script for Ottawa Senators Daily
# This script handles the complete deployment process

set -e

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

echo -e "${BLUE}🏒 Ottawa Senators Daily - Quick Deploy${NC}"
echo "=========================================="

# Check if git repo exists
if [ ! -d ".git" ]; then
    echo -e "${YELLOW}Initializing git repository...${NC}"
    git init
    git add .
    git commit -m "Initial commit - Ottawa Senators Daily game"
    echo -e "${GREEN}✅ Git repository initialized${NC}"
fi

# Get repository URL
if [ -z "$REPO_URL" ]; then
    echo ""
    echo "Please provide your Git repository URL:"
    echo "Example: https://github.com/yourusername/ottawa-senators-daily"
    read -p "Repository URL: " REPO_URL
    
    if [ -z "$REPO_URL" ]; then
        echo "❌ Repository URL is required"
        exit 1
    fi
    
    # Add remote if it doesn't exist
    if ! git remote get-url origin &> /dev/null; then
        git remote add origin "$REPO_URL"
    fi
fi

# Push to repository
echo -e "${YELLOW}Pushing code to repository...${NC}"
git add .
git commit -m "Deploy to AWS App Runner - $(date)" || echo "No changes to commit"
git push -u origin main

echo -e "${GREEN}✅ Code pushed to repository${NC}"

# Export repo URL for deployment script
export REPO_URL

# Run deployment
echo -e "${YELLOW}Deploying to AWS App Runner...${NC}"
./deploy-aws.sh create

echo ""
echo -e "${GREEN}🎉 Deployment completed!${NC}"
echo "Your Ottawa Senators Daily game is now live on AWS!"