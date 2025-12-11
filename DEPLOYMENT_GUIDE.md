# Complete Deployment Guide: GitHub & Vercel

## Quick Summary
This guide will help you:
1. Push your project to GitHub
2. Deploy to Vercel with all images included

---

## PART 1: PUSH TO GITHUB

### Prerequisites
- GitHub account (create at https://github.com if you don't have one)
- Git installed on your computer

### Step-by-Step Instructions

#### Step 1: Create a GitHub Repository

1. Go to https://github.com
2. Click the **+** icon in top right corner
3. Select **New repository**
4. Fill in the details:
   - **Repository name**: `professional-website`
   - **Description**: `Professional Next.js website with Web Development and SEO services`
   - **Public** (important for Vercel)
   - Click **Create repository**

#### Step 2: Initialize Git in Your Project

Open PowerShell/Command Prompt and run:

```bash
cd c:\Users\USER\Desktop\web
git init
```

#### Step 3: Add All Files to Git

```bash
git add .
```

#### Step 4: Create First Commit

```bash
git commit -m "Initial commit: Professional Next.js website with services, order form, and maps"
```

#### Step 5: Connect to GitHub Repository

Replace `CharlieJamesGwapo` with your GitHub username:

```bash
git remote add origin https://github.com/CharlieJamesGwapo/professional-website.git
git branch -M main
git push -u origin main
```

**You will be prompted to enter your GitHub credentials. Use:**
- Username: Your GitHub username
- Password: Your GitHub personal access token (or password)

#### Step 6: Verify on GitHub

1. Go to https://github.com/CharlieJamesGwapo/professional-website
2. You should see all your files uploaded
3. Check that `public/` folder contains:
   - `logo.png`
   - `webdev.jfif`
   - `seo.jfif`

---

## PART 2: DEPLOY TO VERCEL

### Prerequisites
- GitHub repository created (completed above)
- Vercel account (create at https://vercel.com)

### Step-by-Step Instructions

#### Step 1: Sign Up/Login to Vercel

1. Go to https://vercel.com
2. Click **Sign Up**
3. Choose **Continue with GitHub**
4. Authorize Vercel to access your GitHub account

#### Step 2: Import Your Project

1. Click **Add New** button (top right)
2. Select **Project**
3. Find and click on `professional-website` repository
4. Click **Import**

#### Step 3: Configure Project Settings

On the import screen:

- **Framework Preset**: Select **Next.js** (should auto-detect)
- **Root Directory**: Leave as `.` (default)
- **Environment Variables**: Leave empty (no API keys needed)
- **Build Command**: Leave as default
- **Output Directory**: Leave as default

Click **Deploy**

#### Step 4: Wait for Deployment

- Vercel will build your project (takes 2-5 minutes)
- You'll see a progress indicator
- Once complete, you'll get a live URL like: `https://professional-website.vercel.app`

#### Step 5: Test Your Deployed Website

1. Click the URL provided by Vercel
2. Test all pages:
   - Home page (/)
   - Services page (/services)
   - Order form (/order)
3. Verify images are showing:
   - Logo in header
   - Web Development image
   - SEO image
4. Test Maps component
5. Test form submission with SweetAlert

---

## IMAGES & ASSETS DEPLOYMENT

### How Images Are Deployed

All images in your `public/` folder are automatically deployed by Vercel:

```
public/
├── logo.png          → Used as favicon and header logo
├── webdev.jfif       → Web Development service image
├── seo.jfif          → SEO service image
└── favicon.ico       → Browser tab icon
```

**Vercel automatically serves these files at:**
- `https://your-domain.vercel.app/logo.png`
- `https://your-domain.vercel.app/webdev.jfif`
- `https://your-domain.vercel.app/seo.jfif`

### Image Optimization

Next.js automatically:
- Optimizes image sizes
- Converts to modern formats
- Serves appropriate sizes for different devices
- Caches images for fast loading

**No additional configuration needed!**

---

## AUTOMATIC DEPLOYMENTS

After initial setup, every time you push to GitHub:

1. Vercel automatically detects the push
2. Builds your project
3. Deploys to production
4. Provides a new URL

### How to Update Your Website

```bash
# Make changes to your files
# Then:
git add .
git commit -m "Description of changes"
git push origin main
```

Vercel will automatically deploy within 1-2 minutes!

---

## CUSTOM DOMAIN (OPTIONAL)

If you want a custom domain like `yourname.com`:

1. In Vercel dashboard, go to **Settings** → **Domains**
2. Click **Add Domain**
3. Enter your domain name
4. Follow DNS configuration instructions
5. Wait 24-48 hours for DNS to propagate

---

## TROUBLESHOOTING

### Images Not Showing on Vercel

**Problem**: Images appear broken on deployed site

**Solution**:
1. Check file paths in code use `/filename` (not relative paths)
2. Verify image files are in `public/` folder
3. Check file names match exactly (case-sensitive)
4. Clear browser cache and hard refresh (Ctrl+Shift+R)

### Build Fails on Vercel

**Problem**: Deployment shows error

**Solution**:
1. Check build logs in Vercel dashboard
2. Ensure all dependencies are in `package.json`
3. Verify no hardcoded local paths
4. Check for TypeScript errors

### Form Not Working

**Problem**: Order form doesn't submit

**Solution**:
1. Check browser console for errors (F12)
2. Verify SweetAlert2 is installed
3. Check local storage is enabled in browser
4. Test on different browser

### Favicon Not Showing

**Problem**: Profile picture doesn't appear in browser tab

**Solution**:
1. Hard refresh browser (Ctrl+Shift+R)
2. Clear browser cache
3. Check favicon links in `app/layout.jsx`
4. Wait 24 hours for cache to clear

---

## DEPLOYMENT CHECKLIST

Before deploying, verify:

- ✅ All images in `public/` folder
- ✅ No errors in terminal when running `npm run build`
- ✅ All pages work locally (`npm run dev`)
- ✅ GitHub repository created and linked
- ✅ Vercel account created
- ✅ Project imported to Vercel
- ✅ Deployment completed successfully
- ✅ All pages accessible on live URL
- ✅ Images displaying correctly
- ✅ Forms working properly

---

## USEFUL LINKS

- **GitHub**: https://github.com/CharlieJamesGwapo/professional-website
- **Vercel Dashboard**: https://vercel.com/dashboard
- **Your Live Website**: https://professional-website.vercel.app (after deployment)
- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Docs**: https://vercel.com/docs

---

## SUPPORT

If you encounter issues:

1. Check Vercel deployment logs
2. Review GitHub repository for file structure
3. Test locally with `npm run dev`
4. Check browser console for errors (F12)
5. Verify all dependencies in `package.json`

---

## NEXT STEPS

1. **Push to GitHub** (Part 1 above)
2. **Deploy to Vercel** (Part 2 above)
3. **Share your live URL** with clients/portfolio
4. **Update your portfolio** to link to this new website
5. **Monitor performance** in Vercel dashboard

---

**Your website is now ready for production deployment! 🚀**
