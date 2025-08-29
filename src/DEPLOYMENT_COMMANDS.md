# 🖥️ Quick Command Reference

## Copy-Paste Commands for Deployment

### 📂 Step 1: Navigate to Your Project
```bash
# Replace with your actual project path
cd C:\path\to\your\portfolio-project
# or
cd /Users/yourname/portfolio-project
```

### 🔄 Step 2: Initialize Git
```bash
git init
git add .
git commit -m "Initial commit: Complete portfolio with client testimonials"
```

### 🔗 Step 3: Connect to GitHub
**⚠️ IMPORTANT: Replace `YOUR_USERNAME` with your actual GitHub username**

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/amitav-portfolio.git
git push -u origin main
```

**Example if your username is `amitavburman`:**
```bash
git remote add origin https://github.com/amitavburman/amitav-portfolio.git
```

### 🔄 Step 4: Future Updates
**Use these commands whenever you make changes:**
```bash
git add .
git commit -m "Update: describe your changes here"
git push origin main
```

## 🌐 DNS Configuration Values

### For GoDaddy DNS Settings:

**A Record:**
- Type: `A`
- Name: `@`
- Value: `75.2.60.5`
- TTL: `600 seconds`

**CNAME Record:**
- Type: `CNAME`
- Name: `www`
- Value: `your-site-name.netlify.app` (get this from Netlify)
- TTL: `1 Hour`

## 📋 Accounts You'll Need

### GitHub Account
- **URL**: [github.com](https://github.com)
- **Username**: Choose something professional like `amitavburman`
- **Email**: Use `amitavburman01@gmail.com`

### Netlify Account
- **URL**: [netlify.com](https://netlify.com)
- **Sign up method**: Use "Sign up with GitHub" (easier)

### GoDaddy Account
- **URL**: [godaddy.com](https://godaddy.com)
- **You already have this** (for amitavburman.com domain)

## ✅ Success Indicators

### Git Commands Success:
```
✅ "Initialized empty Git repository"
✅ "1 file changed, X insertions(+)"
✅ "Branch 'main' set up to track remote branch"
```

### Netlify Build Success:
```
✅ "Site is live"
✅ Build time: 2-5 minutes
✅ No red error messages
```

### DNS Success:
```
✅ Green checkmarks on dnschecker.org
✅ amitavburman.com loads your site
✅ Green lock icon (HTTPS working)
```

## 🚨 Troubleshooting Quick Fixes

### Git Errors:
```bash
# If you get permission errors
git config --global user.name "Your Name"
git config --global user.email "amitavburman01@gmail.com"
```

### Build Errors:
```bash
# Test locally first
npm install
npm run build
# Fix any errors, then push again
```

### Repository Already Exists:
```bash
# Remove existing remote and add new one
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/amitav-portfolio.git
```

## 📱 Testing Checklist

### After Deployment Test These URLs:
- ✅ `https://amitavburman.com`
- ✅ `https://www.amitavburman.com`
- ✅ `http://amitavburman.com` (should redirect to HTTPS)

### Test These Features:
- ✅ Homepage loads
- ✅ Your photo displays in hero section
- ✅ Mithun Ghosh testimonial with photo
- ✅ EK Piseth testimonial with photo
- ✅ Testimonial carousel navigation
- ✅ Contact form works
- ✅ Mobile responsive design
- ✅ All navigation links work

## 🎯 Timeline Expectations

| Task | Time | Status |
|------|------|--------|
| GitHub account setup | 5 min | Manual |
| Repository creation | 2 min | Manual |
| Code upload | 3 min | Commands |
| Netlify account | 2 min | Manual |
| Site deployment | 5 min | Automatic |
| Domain configuration | 10 min | Manual |
| DNS propagation | 24-48 hours | Automatic |
| SSL certificate | 1 hour | Automatic |

**Total active work time: ~30 minutes**

## 🎉 Success!

When everything is working, you'll have:
- ✅ **Professional website** at https://amitavburman.com
- ✅ **Client testimonials** showcasing international work
- ✅ **Automatic deployments** for future updates
- ✅ **Secure, fast, and mobile-friendly** site

**Your portfolio is ready to impress clients worldwide! 🌍**