# GitHub Pages Deployment Guide

This portfolio can be deployed to GitHub Pages as a static site. The backend server functionality is disabled in the static build.

## Automatic Deployment Setup

1. **Push to GitHub**: Make sure your code is in a GitHub repository
2. **Enable GitHub Pages**: 
   - Go to your repository Settings
   - Navigate to "Pages" section
   - Under "Source", select "GitHub Actions"
3. **Deploy**: The site will automatically build and deploy when you push to the `main` branch

## Manual Build and Deploy

If you want to build locally and deploy manually:

```bash
# Build the static site
node build-static.js

# The built files will be in client/dist/
# You can then manually upload these files or use gh-pages
```

## Using gh-pages CLI

Install and use the gh-pages package for manual deployment:

```bash
# Install gh-pages
npm install -g gh-pages

# Build the site
node build-static.js

# Deploy to GitHub Pages
gh-pages -d client/dist
```

## Custom Domain (Optional)

To use a custom domain:

1. Uncomment and modify the CNAME creation in `build-static.js`
2. Add your domain name
3. Configure DNS records with your domain provider

## GitHub Actions Workflow

The `.github/workflows/deploy.yml` file handles automatic deployment:

- Triggers on push to main branch
- Installs dependencies
- Builds the static site
- Deploys to GitHub Pages

## Features in Static Build

✅ **Working Features:**
- Complete portfolio showcase
- Dark/light theme toggle
- Multilingual support (EN/FR/AR)
- Responsive design
- Medium articles integration
- All animations and interactions

❌ **Disabled Features:**
- Contact form submissions (form will be visible but non-functional)
- Backend API calls

## Repository Settings Required

Make sure these settings are enabled in your GitHub repository:

1. **Actions**: Go to Settings > Actions > General
   - Allow all actions and reusable workflows
2. **Pages**: Go to Settings > Pages
   - Source: GitHub Actions
   - Custom domain (if using one)

Your portfolio will be available at: `https://yourusername.github.io/repository-name/`