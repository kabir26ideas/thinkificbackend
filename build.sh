#!/usr/bin/env bash

# Install Chromium for Puppeteer
echo "Installing Chromium for Puppeteer"
npx puppeteer browsers install chrome

# Install all project dependencies
echo "Running npm install"
npm install
