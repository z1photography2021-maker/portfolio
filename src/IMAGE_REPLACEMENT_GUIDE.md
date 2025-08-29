# Image Replacement Guide

## How to Replace the Auto Parts Platform Image

Currently, the Auto Parts Trading Platform is using a professional stock image. To replace it with your own uploaded image:

### Option 1: Using Local File (Recommended for production)
1. Save your automotive parts image as `/public/auto-parts-professional.jpg` or `/public/auto-parts-professional.png`
2. Update the `thumbnailUrl` in `/components/VideoAssets.ts` for the `auto-parts-platform` entry:

```typescript
{
  id: 'auto-parts-platform',
  title: 'Auto Parts Trading Platform',
  // ... other properties
  thumbnailUrl: '/auto-parts-professional.jpg', // or .png
  // ... rest of properties
}
```

### Option 2: Using External URL
If you host your image elsewhere (like a CDN or image hosting service):

1. Upload your image to your preferred hosting service
2. Get the direct URL to the image
3. Update the `thumbnailUrl` in `/components/VideoAssets.ts`:

```typescript
{
  id: 'auto-parts-platform',
  title: 'Auto Parts Trading Platform',
  // ... other properties
  thumbnailUrl: 'https://your-image-host.com/your-auto-parts-image.jpg',
  // ... rest of properties
}
```

### Option 3: Using Figma Assets (Development)
If you're working in Figma Make and have uploaded the image:

1. The image should be available at the figma:asset path you were using
2. Make sure the ImageWithFallback component can access the figma:asset properly

### Current Status
The Auto Parts Trading Platform currently uses a professional automotive warehouse image that shows:
- Professional automotive parts storage
- Industrial/business setting
- Clean, organized presentation

This provides a good professional appearance while you prepare your custom image.

### Image Requirements
For best results, your replacement image should:
- Be at least 1080px wide
- Show automotive parts, warehouse, or business operations
- Have good lighting and professional appearance
- Be in JPG or PNG format
- Be optimized for web (under 500KB recommended)

### Testing
After making the change:
1. Refresh your portfolio page
2. Check that the image loads properly
3. Verify it displays correctly on mobile devices
4. Test the hover effects and video modal functionality