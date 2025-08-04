#!/bin/bash

# Simple App Runner deployment using ECR instead of GitHub
# This avoids GitHub authentication issues

set -e

AWS_PROFILE="ca-central-1"
REGION="us-east-1"
SERVICE_NAME="ottawa-senators-daily"
ACCOUNT_ID=$(aws sts get-caller-identity --profile $AWS_PROFILE --query Account --output text)
ECR_REPO="$ACCOUNT_ID.dkr.ecr.$REGION.amazonaws.com/$SERVICE_NAME"

echo "🏒 Deploying Ottawa Senators Daily to AWS App Runner"
echo "=================================================="

# Step 1: Create ECR repository
echo "Creating ECR repository..."
aws ecr create-repository \
    --repository-name $SERVICE_NAME \
    --region $REGION \
    --profile $AWS_PROFILE || echo "Repository may already exist"

# Step 2: Get login token and login to ECR
echo "Logging into ECR..."
aws ecr get-login-password \
    --region $REGION \
    --profile $AWS_PROFILE | docker login --username AWS --password-stdin $ECR_REPO

# Step 3: Build and tag Docker image
echo "Building Docker image..."
docker build -t $SERVICE_NAME .
docker tag $SERVICE_NAME:latest $ECR_REPO:latest

# Step 4: Push image to ECR
echo "Pushing image to ECR..."
docker push $ECR_REPO:latest

# Step 5: Create App Runner service from ECR
echo "Creating App Runner service..."
ROLE_ARN="arn:aws:iam::$ACCOUNT_ID:role/AppRunnerECRAccessRole"

cat > ecr-apprunner-config.json << EOF
{
  "ServiceName": "$SERVICE_NAME",
  "SourceConfiguration": {
    "ImageRepository": {
      "ImageIdentifier": "$ECR_REPO:latest",
      "ImageConfiguration": {
        "Port": "3333",
        "RuntimeEnvironmentVariables": {
          "NODE_ENV": "production",
          "PORT": "3333"
        }
      },
      "ImageRepositoryType": "ECR"
    },
    "AutoDeploymentsEnabled": false,
    "AuthenticationConfiguration": {
      "AccessRoleArn": "$ROLE_ARN"
    }
  },
  "InstanceConfiguration": {
    "Cpu": "0.25 vCPU",
    "Memory": "0.5 GB"
  },
  "Tags": [
    {
      "Key": "Application",
      "Value": "ottawa-senators-daily"
    }
  ]
}
EOF

aws apprunner create-service \
    --cli-input-json file://ecr-apprunner-config.json \
    --region $REGION \
    --profile $AWS_PROFILE

echo "✅ Deployment initiated! Check AWS Console for service URL."