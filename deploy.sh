#!/bin/bash

# Deploy Sensdle to Minikube
echo "🏒 Deploying Sensdle to Minikube..."

# Apply Kubernetes manifests
echo "📦 Creating namespace..."
kubectl apply -f k8s/namespace.yaml

echo "⚙️  Applying ConfigMap..."
kubectl apply -f k8s/configmap.yaml

echo "🚀 Deploying application..."
kubectl apply -f k8s/deployment.yaml

echo "🌐 Creating service..."
kubectl apply -f k8s/service.yaml

echo "🔗 Setting up ingress..."
kubectl apply -f k8s/ingress.yaml

echo "⏳ Waiting for deployment to be ready..."
kubectl wait --for=condition=available --timeout=300s deployment/sensdle-app -n sensdle

echo "📊 Checking pod status..."
kubectl get pods -n sensdle

echo "🌐 Checking service status..."
kubectl get svc -n sensdle

echo ""
echo "🎉 Sensdle deployed successfully!"
echo ""
echo "🔗 Setting up network access..."

# Start the port forward in background
echo "🌐 Starting port forward to enp1s0 interface..."
./scripts/port-forward.sh &
PORT_FORWARD_PID=$!

# Wait a moment for it to start
sleep 3

echo ""
echo "✅ Sensdle is now accessible at:"
echo "   🏒 Main URL: http://192.168.1.63:3333"
echo "   🔧 Management: kubectl get pods -n sensdle"
echo ""
echo "📋 To make this permanent:"
echo "   Run: ./scripts/setup-service.sh"
echo "   This will create a systemd service that starts automatically"
echo ""
echo "🛑 To stop port forward: pkill -f 'kubectl port-forward.*sensdle'"
echo ""
echo "🎯 Ready to play Sensdle! Go Sens Go! 🏒"