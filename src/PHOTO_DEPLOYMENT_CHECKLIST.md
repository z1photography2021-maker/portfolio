# Personal Photo Deployment Checklist
## For Amitav Burman Portfolio Website

### ✅ What I've Done:
1. **Updated HeroSection.tsx** - Now uses `/amitav-burman-photo.jpg` with Unsplash fallback
2. **Updated AboutSection.tsx** - Same photo source for consistency
3. **Enhanced ImageWithFallback.tsx** - Added fallback support for graceful degradation

### 📋 What You Need to Do:

#### Step 1: Add Your Photo
- [ ] **File name**: `amitav-burman-photo.jpg` (exactly this name)
- [ ] **Location**: `/public/amitav-burman-photo.jpg`
- [ ] **Size**: Recommended 800x800px or 1000x1000px
- [ ] **Format**: JPG or PNG (JPG preferred)
- [ ] **Quality**: Professional headshot with good lighting

#### Step 2: Upload Options

**Option A: Local Development**
```bash
# 1. Add photo to /public/ folder
# 2. Test locally
npm run dev
# 3. Visit http://localhost:5173 to verify

# 4. Build and deploy
npm run build
git add .
git commit -m "Add personal photo"
git push origin main
```

**Option B: Direct to Repository**
1. Upload `amitav-burman-photo.jpg` to `/public/` folder in your GitHub repo
2. Commit changes
3. Netlify will auto-deploy

#### Step 3: Alternative Photo Names
If you want to use a different filename, update these lines in both components:

```tsx
// Change this line in both HeroSection.tsx and AboutSection.tsx:
src="/amitav-burman-photo.jpg"

// To your preferred filename:
src="/your-photo-name.jpg"
```

### 🎯 Expected Behavior:

1. **Primary**: Loads your personal photo from `/public/amitav-burman-photo.jpg`
2. **Fallback**: If your photo fails to load, uses professional Unsplash photo
3. **Error**: If both fail, shows generic image placeholder

### 🔍 Testing Your Photo:

#### After uploading, test these URLs:
- ✅ `https://amitavburman.com/amitav-burman-photo.jpg` (should show your photo)
- ✅ `https://amitavburman.com` (should show your photo in hero section)
- ✅ `https://amitavburman.com#about` (should show your photo in about section)

#### Mobile Responsiveness Test:
- ✅ Photo displays correctly on mobile devices
- ✅ Photo maintains aspect ratio and quality
- ✅ Loading speed is acceptable (< 2 seconds)

### 📱 Photo Optimization Tips:

```bash
# Recommended photo specs:
# - Width: 800-1000px
# - Height: 800-1000px (square preferred)
# - Format: JPG with 85-90% quality
# - File size: < 500KB
# - Background: Clean, professional
# - Lighting: Bright, even lighting
# - Composition: Centered, shoulders up
```

### 🚨 Troubleshooting:

**If photo doesn't appear:**
1. Check browser console (F12) for errors
2. Try direct URL: `https://amitavburman.com/amitav-burman-photo.jpg`
3. Verify file is in `/public/` folder (not `/src/` or `/assets/`)
4. Check filename spelling exactly matches code
5. Clear browser cache (Ctrl+F5)

**If photo is blurry/pixelated:**
1. Upload higher resolution version
2. Ensure original photo is sharp and high quality
3. Consider professional photo editing

### 🎉 Success Indicators:

Your photo setup is complete when:
- ✅ Hero section shows your professional photo
- ✅ About section shows same photo (smaller version)
- ✅ Photo loads quickly on all devices
- ✅ Photo looks sharp and professional
- ✅ Fallback works if you remove the photo file

### 🔄 Future Updates:

To change your photo later:
1. Replace `/public/amitav-burman-photo.jpg` with new photo (same filename)
2. Clear cache and reload
3. Or rename new photo and update component code

---

**Ready to Deploy**: Once you add your photo file, push to GitHub and Netlify will automatically deploy your updated portfolio with your personal branding!