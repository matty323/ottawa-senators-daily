#!/bin/bash

# Create IAM role for App Runner to access ECR
set -e

AWS_PROFILE="ca-central-1"
REGION="us-east-1"
ROLE_NAME="AppRunnerECRAccessRole"

echo "Setting up IAM role for App Runner..."

# Create trust policy for App Runner
cat > trust-policy.json << EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Service": "build.apprunner.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }
  ]
}
EOF

# Create the IAM role
aws iam create-role \
    --role-name $ROLE_NAME \
    --assume-role-policy-document file://trust-policy.json \
    --profile $AWS_PROFILE || echo "Role may already exist"

# Attach the ECR read policy
aws iam attach-role-policy \
    --role-name $ROLE_NAME \
    --policy-arn arn:aws:iam::aws:policy/service-role/AWSAppRunnerServicePolicyForECRAccess \
    --profile $AWS_PROFILE

# Get the role ARN
ROLE_ARN=$(aws iam get-role \
    --role-name $ROLE_NAME \
    --profile $AWS_PROFILE \
    --query 'Role.Arn' \
    --output text)

echo "✅ IAM Role created: $ROLE_ARN"
echo "Use this ARN in your App Runner configuration"

# Clean up temporary file
rm trust-policy.json