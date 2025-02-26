---
author: Pratham N Gundikere
title: My Blog Automation
description: Here is my cool way to post a blog right from my Obsidian, with less friction as possible. Check out!!
date: 2025-02-23
type: post
draft: false
coffee: 1
tags:
  - post
  - script
  - blogposting
  - networkchuck
categories:
  - Automation
image: ""
---
## What I mean by Automation?

It is just a shell script which i run just after I finished typing my blog and my coffee. I just makes thing way more easier and also serves me the ego of having my own blog site. It is just cool. Here you go -->

## Where do I type my Blog?

In Obsidian. If you are not using it then you have to give it a try it awesome and you get way more control of your data.

## Here is my Pipeline

![Image Description](/images/Pasted%20image%2020250223214612.png)

Just make a folder like this. Here you add all the you posts in the future.

I am using Ubuntu so all my commands are made to work on Ubuntu... If you are using something different then make necessary changes.

### Set up Prerequisites

- Install Go
- Install Hugo
- Install Git

That's it. Google them and follow the instructions.

### Set up Hugo Site

Go to your terminal `ctrl+alt+t` in Linux.

There go to the directory of your choice and 

```shell
	hugo new site mysite
	cd mysite
	git init
```

here `mysite` can be anything you wish.

#### Add theme 
For theme I chose `hugo-brewm` . It just looks cool. Here are the instruction and this applies to most of the Hugo theme. 

Add git-sub-module

```shell
	git submodule add https://github.com/foxihd/hugo-brewm themes/hugo-brewm
```

Inside `hugo.toml` 

```toml
## Base URL for the site
baseURL = "https://prathamngundikere.github.io/"
## Site title
title = 'Pratham'
## Use hugo-brewm theme
theme = 'hugo-brewm'
## Enable Git information for pages, (e.g. lastMod date information)
enableGitInfo = true
## Convert all URLs to absolute URLs
canonifyURLs = true
## Default language for content
defaultContentLanguage = 'en'
## Put default language in subdirectory
defaultContentLanguageInSubdir = false
## Use sections for main menu
sectionPagesMenu = 'main'
## Files to ignore when building site
ignoreFiles = [ '\.redacted', '\.old','\.bak', '\.tmp', '\.swp', '\.DS_Store']

## Enable code fence highlighting
[markup]
    [markup.highlight]
        codeFences = true

## Sitemap configuration
[sitemap]
    ## Change frequency setting (will affect posts listings layout): 'always', 'hourly', 'daily', 'weekly', 'monthly', 'yearly', 'never'
    changeFreq = 'monthly'

## Site parameters
[params]
    ## Site title
    title = "Pratham"
    ## Site description
    description = "An ExampleSite built with Hugo and Hugo-Brewm theme"
    ## Copyright notice
    copyright = "Copyright 2025 (c) Pratham"
    ## Enable extended metadata (social cards)
    extMeta = true
    ## Enable coffee metric
    coffeeStat = true
    ## Default social card image, recommended resolution: 1200 x 630px
    # images = "example.com/img/social-share.jpg" 


    ## Author information
    [params.author]
        ## site author's name
        name = 'Pratham N Gundikere'
        ## Author's email
        email = 'prathamngundikere@yahoo.com'
        ## Other method to customize author and co-authors information
        #coauthor = [
        #    {name = "A.N. Other", bio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
        #]

    ## Comments configuration
    [params.comments]
        ## Disable comments (disable fediverse comments)
        disabled = true
        ## Comment platform selection, currently only 'fediverse' is supported, further options to be determined
        # platform = 'fediverse'

    ## Fediverse integration settings
    [params.fediverse]
        ## Fediverse instance URL
        #instance = 'example.com'
        ## Fediverse username
        #username = 'username'

    ## Logo configuration
    [params.logo]
        ## Light mode logo mark
        #logoMark = 'https://example.com/logoMark.svg'
        ## Dark mode logo mark
        #logoMarkDark = 'https://example.com/logoMarkDark.svg'
        ## Enable logo type
        logoType = true

    ## Feed display settings
    [params.feed]
        ## Enable flowlines
        flowlines = true
        ## Limit number of flowlines with maximum 42
        flowlinesLimit = 21

    ## Home page display settings
    [params.home]
        ## Disable slide carousel
        disableSlide = false
        ## Disable taxonomy listing carousel
        disableListing = false

    ## Post display settings
    [params.posts]
        ## Enable text justification
        justifying = false
        ## Disable paragraph indentation
        noIndent = false
        ## Show colophon section (including QR code)
        colophon = true
        ## disable redaction history
        disableHistory = false
        ## SHow related content
        related = true
        ## Show share buttons
        share = true

    ## Search configuration
    [params.search]
        ## Enable search functionality, use duckduckgo (no javascript)
        enable = true
        ## Use pagefind search when javascript enabled, currently only 'pagefind' is supported, further options to be determined
        pagefind = true
        ## fallback searchbox when javascript disabled, currently only 'duckduckgo' is supported, further options to be determined
         fallback = 'duckduckgo'

    ## Typography settings
    [params.typeface]
        ## Use web safe fonts (will overide font selection below)
        webSafe = false
        ## Serif font selection
        roman = 'crimson'
        ## Sans-serif font selection
        sans = 'inter'

    ## Extended Metadata and Social card configuration
    [params.socialCard]
        ## Enable twitter and opengraph social cards (same as .params.extMeta)
        enable = true
        ## Default social card image, same as .Params.images
        # images = "img/social-share.jpg" 
        ## Enable Twitter cards
         twitter = true
        ## Twitter creator handle
         twitterCreator = "@prathamng"
        ## Twitter site handle
         twitterSite = "@prathamng"

        ## Enable OpenGraph
        # opengraph = true
        ## Facebook App ID
        # facebookAppID = "123456789"
        ## Facebook Admin ID
        # facebookAdmin = "USER_ID"

        ## Schema.org (EXPERIMENTAL, not fully supported body tags)
        # schema = true
        ## JsonLD (EXPERIMENTAL, cannot validate permalink)
        # jsonLD = true

[[menu.footer]]
    identifier = "github"
    name = "GitHub"
    url = "https://github.com/prathamngundikere"
    pre = "github"

[[menu.footer]]
    identifier = "linkedin"
    name = "LinkedIn"
    url = "https://in.linkedin.com/in/prathamngundikere"
    pre = "linkedin"

[[menu.footer]]
    identifier = "instagram"
    name = "Instagram"
    url = "https://www.instagram.com/prathamngundikere"
    pre = "instagram"

[[menu.footer]]
    identifier = "x"
    name = "X"
    url = "https://x.com/prathamng"
    pre = "x"
```

And changes theses as you wish.

Then In terminal under the site directory 

```shell
	hugo server
```

If it is all good then it runs.

In the static directory create a folder called `images`

Now create a file structure in the site directory -->  `.github/workflows/hugo.yml`

```yml
# Workflow for building and deploying a Hugo site to GitHub Pages
name: Deploy Hugo Site to Pages

on:
  # Runs on pushes targeting the default branch
  push:
    branches:
      - master

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow only one concurrent deployment, skipping runs queued between the run in-progress and latest queued.
# However, do NOT cancel in-progress runs as we want to allow these production deployments to complete.
concurrency:
  group: "pages"
  cancel-in-progress: false

# Default to bash
defaults:
  run:
    shell: bash

jobs:
  # Build job
  build:
    runs-on: ubuntu-24.04-arm
    env:
      HUGO_VERSION: 0.143.1
    steps:
      - name: Install Hugo CLI
        run: |
          wget -O ${{ runner.temp }}/hugo.deb https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_extended_${HUGO_VERSION}_linux-arm64.deb \
          && sudo dpkg -i ${{ runner.temp }}/hugo.deb          
      - name: Checkout
        uses: actions/checkout@v4.2.2
        with:
          submodules: recursive
          fetch-depth: 0
      - name: Setup Pages
        id: pages
        uses: actions/configure-pages@v5
      - name: Install Node.js dependencies
        run: "[[ -f package-lock.json || -f npm-shrinkwrap.json ]] && npm ci || true"
      - name: Build with Hugo
        env:
          # For maximum backward compatibility with Hugo modules
          HUGO_ENVIRONMENT: production
          HUGO_ENV: production
        run: |
          hugo \
            --gc \
            --minify \
            --baseURL "${{ steps.pages.outputs.base_url }}/" 
      - name: Index pagefind
        run: npx pagefind --source "./public"
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3.0.1
        with:
          path: ./public

  # Deployment job
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-24.04-arm
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4.0.5
```

Now all is set. It is time for Python Script to copy images from Obsidian attachment folder to your site. I got this from [NetworkChuck](https://www.youtube.com/@NetworkChuck). Make a `image,py` in you home directory (recommended)

```python
import os
import re
import shutil

# Paths
posts_dir = "/home/prathamngundikere/PrathamBlog/content/post"
attachments_dir = "/home/prathamngundikere/Obsidian/4 - Attachments"
static_images_dir = "/home/prathamngundikere/PrathamBlog/static/images"

# Step 1: Process each markdown file in the posts directory
for filename in os.listdir(posts_dir):
    if filename.endswith(".md"):
        filepath = os.path.join(posts_dir, filename)
        
        with open(filepath, "r") as file:
            content = file.read()
        
        # Step 2: Find all image links in the format ![Image Description](/images/Pasted%20image%20...%20.png)
        images = re.findall(r'\[\[([^]]*\.png)\]\]', content)
        
        # Step 3: Replace image links and ensure URLs are correctly formatted
        for image in images:
            # Prepare the Markdown-compatible link with %20 replacing spaces
            markdown_image = f"[Image Description](/images/{image.replace(' ', '%20')})"
            content = content.replace(f"[[{image}]]", markdown_image)
            
            # Step 4: Copy the image to the Hugo static/images directory if it exists
            image_source = os.path.join(attachments_dir, image)
            if os.path.exists(image_source):
                shutil.copy(image_source, static_images_dir)

        # Step 5: Write the updated content back to the markdown file
        with open(filepath, "w") as file:
            file.write(content)

print("Markdown files processed and images copied successfully.")
```

Make changes with your own file locations.

> Note : Add you git and push it GitHub atleast once before you run mega script. I cannot spoon feed you everything

Now time for **MEGA SCRIPT**. In your home directory create a file `sync.sh` 

```shell
#!/bin/bash
set -euo pipefail

# Change to the script's directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

# Set paths
sourcePath="/home/prathamngundikere/Obsidian/post"
destinationPath="/home/prathamngundikere/PrathamBlog/content"
blogPath="/home/prathamngundikere/PrathamBlog"

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
rsync -av --delete "$sourcePath" "$destinationPath"

# Step 2: Process Markdown files with Python script
echo "Processing image links in Markdown files..."
if ! python3 images.py; then
    echo "Failed to process image links."
    exit 1
fi

# Step 3: Change to blog directory and handle Git operations
cd "$blogPath"

# Step 4: Add changes to Git
echo "Staging changes for Git..."
git add .

# Step 5: Extract blog title from git status and commit
# Get the name of the modified/new .md file
modified_file=$(git status --porcelain | grep "content/post.*\.md" | head -n 1 | sed 's/^...//g')

if [ -n "$modified_file" ]; then
    # Extract just the filename without path and extension
    blog_title=$(basename "$modified_file" .md)
    commit_message="$blog_title $(date +'%d-%m-%Y')"
else
    # Fallback if no .md file is found
    commit_message="Blog update $(date +'%d-%m-%Y')"
fi

echo "Committing with message: $commit_message"
git commit -m "$commit_message"

# Step 6: Push changes to master branch
echo "Pushing to GitHub..."
if ! git push origin master; then
    echo "Failed to push to master branch."
    exit 1
fi

echo "All done! Site synced, processed, and deployed."
```

If everything is good, It should work. If not, don't worry you will figure it out. You are smart.

Alright thank you for coming down this far. See you in next one

***BYE!!!***
