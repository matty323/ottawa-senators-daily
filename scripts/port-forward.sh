#!/bin/bash

# Sensdle Port Forward Script
# Forwards the Kubernetes service to the enp1s0 interface

# Configuration
NAMESPACE="sensdle"
SERVICE="sensdle-service"
LOCAL_IP="192.168.1.63"
LOCAL_PORT="3333"
TARGET_PORT="3333"

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${GREEN}🏒 Starting Sensdle port forward...${NC}"

# Check if kubectl is available
if ! command -v kubectl &> /dev/null; then
    echo -e "${RED}❌ kubectl not found. Please install kubectl.${NC}"
    exit 1
fi

# Check if the namespace exists
if ! kubectl get namespace $NAMESPACE &> /dev/null; then
    echo -e "${RED}❌ Namespace '$NAMESPACE' not found. Please deploy Sensdle first.${NC}"
    exit 1
fi

# Check if the service exists
if ! kubectl get svc $SERVICE -n $NAMESPACE &> /dev/null; then
    echo -e "${RED}❌ Service '$SERVICE' not found in namespace '$NAMESPACE'.${NC}"
    exit 1
fi

# Function to cleanup on exit
cleanup() {
    echo -e "\n${YELLOW}🛑 Stopping port forward...${NC}"
    if [ ! -z "$PF_PID" ]; then
        kill $PF_PID 2>/dev/null
    fi
    echo -e "${GREEN}✨ Cleanup complete!${NC}"
    exit 0
}

# Set trap for cleanup
trap cleanup INT TERM

# Start port forwarding
echo -e "${BLUE}🔗 Forwarding ${LOCAL_IP}:${LOCAL_PORT} -> ${SERVICE}:${TARGET_PORT}${NC}"
echo -e "${BLUE}📍 Service will be available at: http://${LOCAL_IP}:${LOCAL_PORT}${NC}"
echo -e "${YELLOW}💡 Press Ctrl+C to stop${NC}"
echo ""

# Start the port forward in background and capture PID
kubectl port-forward -n $NAMESPACE svc/$SERVICE --address $LOCAL_IP $LOCAL_PORT:$TARGET_PORT &
PF_PID=$!

# Wait a moment to check if it started successfully
sleep 2

if kill -0 $PF_PID 2>/dev/null; then
    echo -e "${GREEN}✅ Port forward active! Sensdle is running on http://${LOCAL_IP}:${LOCAL_PORT}${NC}"
    echo -e "${GREEN}🎯 Ready to play! Go Sens Go! 🏒${NC}"
    
    # Keep the script running
    while kill -0 $PF_PID 2>/dev/null; do
        sleep 5
    done
    
    echo -e "${RED}❌ Port forward stopped unexpectedly${NC}"
else
    echo -e "${RED}❌ Failed to start port forward${NC}"
    exit 1
fi