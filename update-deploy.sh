#!/bin/bash

# Update existing App Runner service with new ECR image
set -e

AWS_PROFILE="ca-central-1"
REGION="us-east-1"
SERVICE_NAME="ottawa-senators-daily"
ACCOUNT_ID=$(aws sts get-caller-identity --profile $AWS_PROFILE --query Account --output text)
ECR_REPO="$ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com/$SERVICE_NAME"

echo "🏒 Updating Ottawa Senators Daily on AWS App Runner"
echo "=================================================="

# Step 1: Get login token and login to ECR
echo "Logging into ECR..."
aws ecr get-login-password \
    --region $REGION \
    --profile $AWS_PROFILE | docker login --username AWS --password-stdin $ECR_REPO

# Step 2: Build and tag Docker image
echo "Building Docker image..."
docker build -t $SERVICE_NAME .
docker tag $SERVICE_NAME:latest $ECR_REPO:latest

# Step 3: Push image to ECR
echo "Pushing updated image to ECR..."
docker push $ECR_REPO:latest

# Step 4: Update App Runner service to use new image
echo "Updating App Runner service..."
SERVICE_ARN=$(aws apprunner list-services \
    --region $REGION \
    --profile $AWS_PROFILE \
    --query "ServiceSummaryList[?ServiceName=='$SERVICE_NAME'].ServiceArn" \
    --output text)

if [ -z "$SERVICE_ARN" ]; then
    echo "❌ Service not found!"
    exit 1
fi

echo "Found service: $SERVICE_ARN"

# Start deployment by updating the service
aws apprunner start-deployment \
    --service-arn $SERVICE_ARN \
    --region $REGION \
    --profile $AWS_PROFILE

echo "✅ Update deployment started!"
echo "🌐 Your site will be updated at: https://sensdle.bigottawapigeon.ca/"
echo "⏳ It may take a few minutes for changes to be live."