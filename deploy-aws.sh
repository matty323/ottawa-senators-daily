#!/bin/bash

# AWS App Runner Deployment Script for Ottawa Senators Daily
# Usage: ./deploy-aws.sh [create|update|delete|status]

set -e  # Exit on any error

# Configuration
SERVICE_NAME="ottawa-senators-daily"
REGION="us-east-1"  # Change this to your preferred region
CONFIG_FILE="apprunner-config.json"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Helper functions
log_info() {
    echo -e "${BLUE}ℹ️  $1${NC}"
}

log_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

log_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

log_error() {
    echo -e "${RED}❌ $1${NC}"
}

# Check prerequisites
check_prerequisites() {
    log_info "Checking prerequisites..."
    
    # Check if AWS CLI is installed
    if ! command -v aws &> /dev/null; then
        log_error "AWS CLI is not installed. Please install it first."
        exit 1
    fi
    
    # Check if AWS is configured
    if ! aws sts get-caller-identity &> /dev/null; then
        log_error "AWS CLI is not configured. Run 'aws configure' first."
        exit 1
    fi
    
    # Check if config file exists
    if [ ! -f "$CONFIG_FILE" ]; then
        log_error "Configuration file $CONFIG_FILE not found."
        exit 1
    fi
    
    log_success "Prerequisites check passed"
}

# Update repository URL in config
update_config() {
    if [ -z "$REPO_URL" ]; then
        log_warning "REPO_URL not set. Please update apprunner-config.json with your repository URL"
        log_info "Example: export REPO_URL=https://github.com/yourusername/yourrepo"
        exit 1
    fi
    
    log_info "Updating repository URL in config..."
    
    # Create temporary config with updated repo URL
    jq --arg repo_url "$REPO_URL" '.SourceConfiguration.CodeRepository.RepositoryUrl = $repo_url' $CONFIG_FILE > temp-config.json
    mv temp-config.json $CONFIG_FILE
    
    log_success "Configuration updated with repository URL: $REPO_URL"
}

# Create App Runner service
create_service() {
    log_info "Creating App Runner service: $SERVICE_NAME"
    
    # Check if service already exists
    if aws apprunner describe-service --service-arn $(get_service_arn) &> /dev/null; then
        log_warning "Service $SERVICE_NAME already exists. Use 'update' command instead."
        exit 1
    fi
    
    # Create the service
    SERVICE_ARN=$(aws apprunner create-service \
        --cli-input-json file://$CONFIG_FILE \
        --region $REGION \
        --query 'Service.ServiceArn' \
        --output text)
    
    log_success "Service creation initiated. ARN: $SERVICE_ARN"
    log_info "Waiting for service to become available..."
    
    # Wait for service to be running
    aws apprunner wait service-created --service-arn $SERVICE_ARN --region $REGION
    
    # Get service URL
    SERVICE_URL=$(aws apprunner describe-service \
        --service-arn $SERVICE_ARN \
        --region $REGION \
        --query 'Service.ServiceUrl' \
        --output text)
    
    log_success "Service is now running!"
    log_success "🌐 Application URL: https://$SERVICE_URL"
}

# Update existing service
update_service() {
    log_info "Updating App Runner service: $SERVICE_NAME"
    
    SERVICE_ARN=$(get_service_arn)
    
    if [ -z "$SERVICE_ARN" ]; then
        log_error "Service $SERVICE_NAME not found. Use 'create' command first."
        exit 1
    fi
    
    # Update the service
    aws apprunner update-service \
        --service-arn $SERVICE_ARN \
        --cli-input-json file://$CONFIG_FILE \
        --region $REGION
    
    log_success "Service update initiated"
    log_info "Waiting for deployment to complete..."
    
    # Wait for update to complete
    aws apprunner wait service-updated --service-arn $SERVICE_ARN --region $REGION
    
    log_success "Service updated successfully!"
}

# Delete service
delete_service() {
    log_info "Deleting App Runner service: $SERVICE_NAME"
    
    SERVICE_ARN=$(get_service_arn)
    
    if [ -z "$SERVICE_ARN" ]; then
        log_warning "Service $SERVICE_NAME not found."
        exit 0
    fi
    
    # Confirm deletion
    read -p "Are you sure you want to delete the service? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        log_info "Deletion cancelled."
        exit 0
    fi
    
    # Delete the service
    aws apprunner delete-service \
        --service-arn $SERVICE_ARN \
        --region $REGION
    
    log_success "Service deletion initiated"
    log_info "Waiting for service to be deleted..."
    
    # Wait for deletion to complete
    aws apprunner wait service-deleted --service-arn $SERVICE_ARN --region $REGION
    
    log_success "Service deleted successfully!"
}

# Get service status
get_status() {
    log_info "Getting service status for: $SERVICE_NAME"
    
    SERVICE_ARN=$(get_service_arn)
    
    if [ -z "$SERVICE_ARN" ]; then
        log_warning "Service $SERVICE_NAME not found."
        exit 0
    fi
    
    # Get service details
    aws apprunner describe-service \
        --service-arn $SERVICE_ARN \
        --region $REGION \
        --query '{
            ServiceName: Service.ServiceName,
            Status: Service.Status,
            ServiceUrl: Service.ServiceUrl,
            CreatedAt: Service.CreatedAt,
            UpdatedAt: Service.UpdatedAt,
            CPU: Service.InstanceConfiguration.Cpu,
            Memory: Service.InstanceConfiguration.Memory
        }' \
        --output table
}

# Helper to get service ARN
get_service_arn() {
    aws apprunner list-services \
        --region $REGION \
        --query "ServiceSummaryList[?ServiceName=='$SERVICE_NAME'].ServiceArn" \
        --output text
}

# Get service logs
get_logs() {
    log_info "Getting recent logs for: $SERVICE_NAME"
    
    # Note: App Runner logs are automatically sent to CloudWatch
    LOG_GROUP="/aws/apprunner/$SERVICE_NAME/application"
    
    aws logs describe-log-streams \
        --log-group-name $LOG_GROUP \
        --region $REGION \
        --order-by LastEventTime \
        --descending \
        --max-items 1 \
        --query 'logStreams[0].logStreamName' \
        --output text | xargs -I {} aws logs get-log-events \
        --log-group-name $LOG_GROUP \
        --log-stream-name {} \
        --region $REGION \
        --query 'events[*].[timestamp,message]' \
        --output table
}

# Main script logic
main() {
    case "$1" in
        create)
            check_prerequisites
            if [ -n "$REPO_URL" ]; then
                update_config
            fi
            create_service
            ;;
        update)
            check_prerequisites
            if [ -n "$REPO_URL" ]; then
                update_config
            fi
            update_service
            ;;
        delete)
            check_prerequisites
            delete_service
            ;;
        status)
            check_prerequisites
            get_status
            ;;
        logs)
            check_prerequisites
            get_logs
            ;;
        *)
            echo "Usage: $0 {create|update|delete|status|logs}"
            echo ""
            echo "Commands:"
            echo "  create  - Create a new App Runner service"
            echo "  update  - Update existing App Runner service"
            echo "  delete  - Delete the App Runner service"
            echo "  status  - Show service status and details"
            echo "  logs    - Show recent application logs"
            echo ""
            echo "Environment Variables:"
            echo "  REPO_URL - Your Git repository URL (required for create/update)"
            echo ""
            echo "Example:"
            echo "  export REPO_URL=https://github.com/yourusername/ottawa-senators-daily"
            echo "  $0 create"
            exit 1
            ;;
    esac
}

main "$@"