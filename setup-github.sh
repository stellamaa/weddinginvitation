#!/bin/bash

# Script to help set up GitHub repository
# Run this after creating the repository on GitHub

echo "=========================================="
echo "GitHub Repository Setup"
echo "=========================================="
echo ""
echo "Step 1: Create a new repository on GitHub"
echo "   - Go to https://github.com/new"
echo "   - Repository name: wedding-invitation (or your preferred name)"
echo "   - Choose Public or Private"
echo "   - DO NOT initialize with README, .gitignore, or license"
echo "   - Click 'Create repository'"
echo ""
echo "Step 2: Copy the repository URL (HTTPS or SSH)"
echo ""
read -p "Enter your GitHub repository URL (e.g., https://github.com/username/wedding-invitation.git): " REPO_URL

if [ -z "$REPO_URL" ]; then
    echo "No URL provided. Exiting."
    exit 1
fi

echo ""
echo "Adding remote origin..."
git remote add origin "$REPO_URL"

echo "Pushing to GitHub..."
git branch -M main
git push -u origin main

echo ""
echo "=========================================="
echo "✅ Successfully pushed to GitHub!"
echo "=========================================="
echo ""
echo "Your repository is now available at: $REPO_URL"
echo ""
echo "Next steps for deployment:"
echo "1. Go to https://www.netlify.com or https://vercel.com"
echo "2. Connect your GitHub repository"
echo "3. Set build command: npm run build"
echo "4. Set publish directory: build"
echo "5. Deploy!"






