---
author: Pratham N Gundikere
title: Fixing Blog Automation
description: My previous blog had some small mistakes. I am changing them here.
date: 2025-03-14
type: post
draft: false
coffee: 1
tags:
  - post
  - script
  - blogposting
categories:
  - Automation
image: 
back-links: "[[Blog Post]]"
---
All the installation steps is the same in [My Blog Automation](https://prathamngundikere.github.io/post/my-blog-automation/).

## Changes
 - I now have all the script and image file in a seperate folder
 - Add new changes in the script

`image.py` ->
```python
import os
import re
import shutil

# Paths
posts_dir = "/home/prathamngundikere/Programming/My Site/prathamngundikere.github.io/content"
attachments_dir = "/home/prathamngundikere/Obsidian/3 - Attachments"
static_images_dir = "/home/prathamngundikere/Programming/My Site/prathamngundikere.github.io/static/images"

# Ensure the static images directory exists
os.makedirs(static_images_dir, exist_ok=True)

# Step 1: Process each markdown file in the posts directory
for filename in os.listdir(posts_dir):
    if filename.endswith(".md"):
        filepath = os.path.join(posts_dir, filename)
        
        with open(filepath, "r") as file:
            content = file.read()
        
        # Step 2: Find all image links in the format [[image.png]]
        images = re.findall(r'\[\[([^]]*\.png)\]\]', content)
        
        # Step 3: Replace image links with Hugo-compatible Markdown format
        for image in images:
            # Prepare the Markdown-compatible link with %20 replacing spaces
            markdown_image = f"![Image Description](/images/{image.replace(' ', '%20')})"
            content = content.replace(f"[[{image}]]", markdown_image)
            
            # Step 4: Copy the image to the Hugo static/images directory if it exists
            image_source = os.path.join(attachments_dir, image)
            if os.path.exists(image_source):
                shutil.copy(image_source, static_images_dir)
            else:
                print(f"Warning: Image not found -> {image_source}")

        # Step 5: Write the updated content back to the markdown file
        with open(filepath, "w") as file:
            file.write(content)

print("Markdown files processed and images copied successfully.")
```

`sync.sh` ->
```shell
#!/bin/bash
set -euo pipefail

# Change to the script's directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

# Set paths
sourcePath="/home/prathamngundikere/Obsidian/post"
destinationPath="/home/prathamngundikere/Programming/My Site/prathamngundikere.github.io/content/post"
blogPath="/home/prathamngundikere/Programming/My Site/prathamngundikere.github.io"

# Check for required commands
for cmd in git rsync python3; do
    if ! command -v $cmd &> /dev/null; then
        echo "$cmd is not installed or not in PATH."
        exit 1
    fi
done

# Step 1: Sync posts from Obsidian to Hugo content folder using rsync
echo "Syncing posts from Obsidian..."
if [ ! -d "$sourcePath" ]; then
    echo "Source path does not exist: $sourcePath"
    exit 1
fi
if [ ! -d "$destinationPath" ]; then
    echo "Destination path does not exist: $destinationPath"
    exit 1
fi
rsync -av --delete "$sourcePath/" "$destinationPath/"

# Step 2: Process Markdown files with Python script
echo "Processing image links in Markdown files..."
if ! python3 "/home/prathamngundikere/Programming/My Site/image.py"; then
    echo "Failed to process image links."
    exit 1
fi

# Step 3: Change to blog directory and handle Git operations
cd "$blogPath"

# Step 4: Add changes to Git
echo "Staging changes for Git..."
git add .

# Step 5: Extract blog title from git status and commit
modified_file=$(git status --porcelain | grep "content/post.*\.md" | head -n 1 | sed 's/^...//g')

if [ -n "$modified_file" ]; then
    blog_title=$(basename "$modified_file" .md)
    commit_message="$blog_title $(date +'%d-%m-%Y')"
else
    commit_message="Blog update $(date +'%d-%m-%Y')"
fi

# Step 6: Commit only if there are changes
if ! git diff --cached --quiet; then
    echo "Committing with message: $commit_message"
    git commit -m "$commit_message"
else
    echo "No changes to commit."
    exit 0
fi

# Step 7: Push changes to master branch with retry logic
echo "Pushing to GitHub..."
if ! git push origin master; then
    echo "Push failed. Retrying in 10 seconds..."
    sleep 10
    git push origin master || { echo "Final push attempt failed."; exit 1; }
fi

echo "All done! Site synced, processed, and deployed."

```

And all others remain the same as before. Make sure to check out my other blogs.