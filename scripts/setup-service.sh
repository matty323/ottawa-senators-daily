#!/bin/bash

# Setup Sensdle as a system service
echo "🏒 Setting up Sensdle service..."

# Copy service file to systemd
sudo cp sensdle.service /etc/systemd/system/

# Reload systemd
sudo systemctl daemon-reload

# Enable the service
sudo systemctl enable sensdle.service

echo "✅ Sensdle service installed and enabled"
echo ""
echo "🔧 Service management commands:"
echo "   Start:   sudo systemctl start sensdle"
echo "   Stop:    sudo systemctl stop sensdle"
echo "   Status:  sudo systemctl status sensdle"
echo "   Logs:    sudo journalctl -u sensdle -f"
echo ""
echo "🎯 The service will automatically start on boot and restart if it fails!"