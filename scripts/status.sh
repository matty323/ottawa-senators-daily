#!/bin/bash

# Sensdle Status Check Script

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${GREEN}🏒 Sensdle Status Check${NC}"
echo "========================"

# Check if namespace exists
echo -e "${BLUE}📦 Checking namespace...${NC}"
if kubectl get namespace sensdle &> /dev/null; then
    echo -e "${GREEN}✅ Namespace 'sensdle' exists${NC}"
else
    echo -e "${RED}❌ Namespace 'sensdle' not found${NC}"
    exit 1
fi

# Check pods
echo -e "${BLUE}🚀 Checking pods...${NC}"
kubectl get pods -n sensdle

# Check service
echo -e "${BLUE}🌐 Checking service...${NC}"
kubectl get svc -n sensdle

# Check if port forward is running
echo -e "${BLUE}🔗 Checking port forward...${NC}"
if pgrep -f "kubectl port-forward.*sensdle" > /dev/null; then
    PF_PID=$(pgrep -f "kubectl port-forward.*sensdle")
    echo -e "${GREEN}✅ Port forward is running (PID: $PF_PID)${NC}"
    
    # Test connectivity
    echo -e "${BLUE}🧪 Testing connectivity...${NC}"
    if curl -s http://192.168.1.63:3333/api/players > /dev/null; then
        echo -e "${GREEN}✅ Sensdle is accessible at http://192.168.1.63:3333${NC}"
    else
        echo -e "${RED}❌ Cannot reach Sensdle at http://192.168.1.63:3333${NC}"
    fi
else
    echo -e "${RED}❌ Port forward is not running${NC}"
    echo -e "${YELLOW}💡 Start it with: ./scripts/port-forward.sh${NC}"
fi

# Check systemd service if it exists
echo -e "${BLUE}⚙️  Checking systemd service...${NC}"
if systemctl list-unit-files | grep -q sensdle.service; then
    SERVICE_STATUS=$(systemctl is-active sensdle.service)
    if [ "$SERVICE_STATUS" = "active" ]; then
        echo -e "${GREEN}✅ Sensdle systemd service is active${NC}"
    else
        echo -e "${YELLOW}⚠️  Sensdle systemd service is $SERVICE_STATUS${NC}"
    fi
else
    echo -e "${YELLOW}⚠️  Sensdle systemd service not installed${NC}"
    echo -e "${YELLOW}💡 Install it with: ./scripts/setup-service.sh${NC}"
fi

echo ""
echo -e "${GREEN}🎯 Status check complete!${NC}"