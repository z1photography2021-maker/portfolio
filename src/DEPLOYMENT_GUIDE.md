# Portfolio Website Deployment Guide

## Overview
This guide will help you deploy your portfolio website to Netlify using GitHub integration. Your site will be live at http://amitavburman.com after deployment.

## Prerequisites
- [x] GitHub account
- [x] Netlify account
- [x] Domain (amitavburman.com) - already purchased through GoDaddy
- [x] Project code ready for deployment

## Step 1: Prepare Your Code for Deployment

### 1.1 Verify Build Configuration
Your project is already configured with Vite. Ensure your `package.json` has the correct build scripts:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  }
}
```

### 1.2 Check Netlify Configuration
Your `netlify.toml` file should contain:

```toml
[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 1.3 Environment Variables (if needed)
If you're using any environment variables, create a `.env.example` file to document them:

```bash
# Add any environment variables here
# VITE_API_URL=your_api_url
```

## Step 2: Push Code to GitHub

### 2.1 Initialize Git Repository (if not already done)
```bash
git init
git add .
git commit -m "Initial commit: Complete portfolio website with client testimonials"
```

### 2.2 Create GitHub Repository
1. Go to [GitHub.com](https://github.com)
2. Click "+" in the top right corner
3. Select "New repository"
4. Name it `amitav-portfolio` or `portfolio-website`
5. Keep it public (or private if you prefer)
6. Don't initialize with README (since you already have code)
7. Click "Create repository"

### 2.3 Connect Local Repository to GitHub
```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git
git push -u origin main
```

## Step 3: Deploy to Netlify

### 3.1 Connect GitHub to Netlify
1. Log in to [Netlify](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Choose "Deploy with GitHub"
4. Authorize Netlify to access your GitHub account
5. Select your portfolio repository

### 3.2 Configure Build Settings
Netlify should auto-detect your settings, but verify:
- **Base directory**: Leave empty (root)
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: 18 or later (recommended)

### 3.3 Deploy the Site
1. Click "Deploy site"
2. Wait for the build to complete (usually 2-3 minutes)
3. Your site will be live at a random Netlify URL (e.g., `amazing-curie-123456.netlify.app`)

## Step 4: Configure Custom Domain

### 4.1 Add Custom Domain in Netlify
1. In your Netlify site dashboard, go to "Site settings"
2. Click "Domain management"
3. Click "Add custom domain"
4. Enter `amitavburman.com`
5. Click "Verify" and "Add domain"

### 4.2 Configure DNS at GoDaddy
1. Log in to your GoDaddy account
2. Go to "My Products" → "Domains" → Manage `amitavburman.com`
3. Go to "DNS" → "Manage Zones"
4. Update the following records:

**Delete existing A records and add:**
```
Type: A
Name: @
Value: 75.2.60.5
TTL: 600 seconds
```

**Add CNAME record:**
```
Type: CNAME
Name: www
Value: YOUR_NETLIFY_SITE_NAME.netlify.app
TTL: 1 Hour
```

### 4.3 Enable HTTPS
1. In Netlify, go to "Site settings" → "Domain management"
2. Click "Verify DNS configuration"
3. Once verified, click "Provision certificate" under HTTPS
4. Wait for SSL certificate to be issued (can take up to 24 hours)

## Step 5: Set Up Continuous Deployment

### 5.1 Automatic Deployments
Your site is now set up for continuous deployment. Every time you push to the `main` branch, Netlify will automatically rebuild and deploy your site.

### 5.2 Deploy Previews
Netlify will also create deploy previews for pull requests, allowing you to test changes before merging.

## Step 6: Optimize for Production

### 6.1 Add Performance Headers
Update your `netlify.toml` to include performance optimizations:

```toml
[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"

[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

### 6.2 Enable Form Handling (for Contact Form)
If your contact form isn't working, add this to your contact form:
```html
<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
  <!-- your form fields -->
</form>
```

## Step 7: Verify Deployment

### 7.1 Check Your Live Site
1. Visit `https://amitavburman.com`
2. Test all sections:
   - [x] Hero section with your photo
   - [x] About section
   - [x] Services section
   - [x] Portfolio section
   - [x] Testimonials (Mithun Ghosh and EK Piseth)
   - [x] Contact section
   - [x] Footer

### 7.2 Test Performance
1. Use [Google PageSpeed Insights](https://pagespeed.web.dev/)
2. Test your site URL
3. Optimize any issues found

### 7.3 Test Mobile Responsiveness
1. Test on various devices and screen sizes
2. Use browser dev tools to simulate different devices

## Troubleshooting Common Issues

### Build Failures
- Check build logs in Netlify dashboard
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

### Image Loading Issues
- Ensure all Figma assets are properly imported
- Check image file paths
- Verify fallback images are accessible

### DNS Issues
- DNS changes can take 24-48 hours to propagate
- Use [DNS Checker](https://dnschecker.org/) to verify propagation
- Clear browser cache and DNS cache

## Quick Deployment Commands

```bash
# Make changes to your code
git add .
git commit -m "Update: Description of your changes"
git push origin main

# Your site will automatically deploy in 2-3 minutes
```

## Post-Deployment Checklist

- [ ] Site loads correctly at amitavburman.com
- [ ] HTTPS is working (green lock icon)
- [ ] All images display properly
- [ ] Contact form works
- [ ] Mobile responsive design works
- [ ] All navigation links work
- [ ] Testimonials carousel functions
- [ ] Performance score > 90 on PageSpeed Insights

## Maintenance

### Regular Updates
1. Keep dependencies updated
2. Monitor site performance
3. Update content as needed
4. Check for broken links monthly

### Backup Strategy
Your code is automatically backed up on GitHub. Consider:
- Tagging important releases
- Keeping documentation updated
- Regular content backups

---

**Your portfolio website is now ready for deployment! 🚀**

Follow these steps and your site will be live at https://amitavburman.com with professional testimonials from Mithun Ghosh (EduNet) and EK Piseth (ANTI PEST).