#!/bin/bash
set -e # exit on error

# 0. Build the site (ensure latest changes are in _site)
echo "🏗️ Building site with Jekyll..."
bundle exec jekyll build

# 1. Ensure we’re on master
git checkout master

# 2. Show status
git status

# 3. Stage changes
git add .

# 4. Commit with user prompt
echo "Enter commit message for master branch:"
read commit_msg
git commit -m "$commit_msg" || echo "⚠️ No changes to commit on master."

# 5. Push master
git push origin master

# 6. Switch to gh-pages
git checkout gh-pages

# 7. Remove everything tracked
git rm -rf *

# 8. Checkout _site from master
git checkout master -- _site

# 9. Move contents of _site to root
mv _site/* .
rm -rf _site

# 10. Show status
git status

# 11. Stage changes
git add .

# 12. Commit deploy
git commit -m "Deploy SITE" || echo "⚠️ No changes to commit on gh-pages."

# 13. Force push to gh-pages
git push origin gh-pages --force

# 14. Switch back to master for next edit session
git checkout master

echo "✅ Deployment complete!"
