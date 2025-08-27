#!/bin/bash
set -e # exit if any command fails

# 1. Rebuild site
echo "🔨 Building site with Jekyll..."
bundle exec jekyll build

# 2. Push master branch
echo "⬆️ Pushing master branch..."
git checkout master
git add .
git commit -m "Update source" || echo "No changes to commit on master"
git push origin master

# 3. Deploy to gh-pages
echo "🚀 Deploying to gh-pages..."
git checkout gh-pages || git checkout --orphan gh-pages

# Clean old files (but keep .git)
find . -mindepth 1 -not -name ".git" -exec rm -rf {} +

# Copy new build
cp -r _site/* .

# Commit & push
git add .
git commit -m "Deploy site" || echo "No changes to commit on gh-pages"
git push origin gh-pages --force

# Switch back to master
git checkout master

echo "✅ Deployment complete!"
