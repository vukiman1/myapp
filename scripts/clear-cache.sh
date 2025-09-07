#!/bin/bash

echo "🧹 Clearing Next.js cache and node_modules..."

# Stop any running dev server
echo "Stopping any running processes..."
pkill -f "next dev" || true

# Remove Next.js cache
echo "Removing .next directory..."
rm -rf .next

# Remove node_modules cache
echo "Removing node_modules cache..."
rm -rf node_modules/.cache

# Clear pnpm cache
echo "Clearing pnpm cache..."
pnpm store prune

# Reinstall dependencies
echo "Reinstalling dependencies..."
pnpm install

echo "✅ Cache cleared! You can now run 'pnpm dev'"
