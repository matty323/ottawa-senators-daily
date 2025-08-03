# Deploy Ottawa Senators Daily to AWS App Runner

## Prerequisites
1. AWS CLI installed and configured
2. Git repository (GitHub/GitLab/Bitbucket)
3. Docker installed locally (for testing)

## Deployment Steps

### Option 1: Deploy from Source Code (Recommended)

1. **Push your code to a Git repository:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Ottawa Senators Daily game"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Create App Runner service via AWS Console:**
   - Go to AWS App Runner console
   - Click "Create service"
   - Choose "Source code repository"
   - Connect your GitHub/GitLab account
   - Select your repository and branch (main)
   - Choose "Automatic" deployments
   - App Runner will detect the `apprunner.yaml` configuration

3. **Configure service settings:**
   - Service name: `ottawa-senators-daily`
   - Virtual CPU: 0.25 vCPU (can scale up later)
   - Memory: 0.5 GB (can scale up later)
   - Environment variables (if needed):
     - `NODE_ENV=production`
     - `PORT=3333`

### Option 2: Deploy from Container Image

1. **Build and push Docker image:**
   ```bash
   # Build the image
   docker build -t senators-daily .
   
   # Test locally first
   docker run -p 3333:3333 senators-daily
   
   # Tag for ECR
   aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin <account-id>.dkr.ecr.us-east-1.amazonaws.com
   docker tag senators-daily:latest <account-id>.dkr.ecr.us-east-1.amazonaws.com/senators-daily:latest
   docker push <account-id>.dkr.ecr.us-east-1.amazonaws.com/senators-daily:latest
   ```

2. **Create App Runner service from ECR image**
   - Choose "Container registry"
   - Select your ECR image
   - Configure port: 3333

## Environment Configuration

The app is configured to work with these environment variables:
- `PORT` - Application port (default: 3333)
- `NODE_ENV` - Set to "production" for AWS

## Monitoring & Scaling

App Runner automatically provides:
- Health checks on port 3333
- Auto-scaling based on CPU/memory
- HTTPS certificate
- Load balancing

## Cost Estimate

With default settings (0.25 vCPU, 0.5 GB RAM):
- Base cost: ~$7/month for always-on
- Additional usage costs based on traffic
- Free tier: 750 hours/month for first 2 months

## Next Steps After Deployment

1. **Custom Domain:** Configure a custom domain in App Runner settings
2. **Database:** Consider migrating from in-memory storage to DynamoDB or RDS for persistence
3. **Monitoring:** Set up CloudWatch alarms
4. **CDN:** Add CloudFront for static assets

## Troubleshooting

- Check App Runner logs in CloudWatch
- Verify health check endpoint responds on port 3333
- Ensure Dockerfile exposes correct port
- Check environment variables are set correctly

## Local Testing

Before deploying, test with Docker:
```bash
docker build -t senators-daily .
docker run -p 3333:3333 senators-daily
# Visit http://localhost:3333
```