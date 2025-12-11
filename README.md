# Professional Website - Next.js

A modern, professional website built with Next.js featuring Web Development and SEO services.

## Features

- **Home Page**: Welcome section with Services overview and Lift button
- **Services Page**: Detailed information about Web Development and SEO services
- **Order Form**: Professional order form with validation and local storage
- **Form Validation**: Email mandatory when bill not made by someone else
- **Local Storage**: Form data persists in browser local storage
- **Success Popup**: Confirmation message on successful submission
- **Responsive Design**: Mobile-friendly layout using Tailwind CSS
- **Professional UI**: Modern gradient designs and smooth transitions

## Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
web/
├── app/
│   ├── layout.jsx          # Root layout
│   ├── page.jsx            # Home page
│   ├── globals.css         # Global styles
│   ├── services/
│   │   └── page.jsx        # Services page
│   └── order/
│       └── page.jsx        # Order form page
├── components/
│   ├── Header.jsx          # Navigation header
│   └── Footer.jsx          # Footer component
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

## Pages

### Home Page (/)
- Welcome heading
- Services section with Web Development and SEO overview
- Lift button linking to Services page
- Order button linking to Order form

### Services Page (/services)
- Detailed Web Development services
- Detailed SEO services
- Order Now button

### Order Page (/order)
- Name field (required)
- Phone number field (required, minimum 10 digits)
- Email field (mandatory if bill not made by someone else)
- Checkbox for bill made by someone else
- Form validation
- Success popup on submission
- Local storage integration

## Form Validation Rules

- **Name**: Required
- **Phone**: Required, minimum 10 digits
- **Email**: Mandatory unless "Bill is being made by someone else" is checked
- **Email Format**: Must be valid email format

## Local Storage

Form data is automatically saved to browser local storage and restored on page reload.

## Technologies Used

- **Next.js 14**: React framework
- **Tailwind CSS**: Utility-first CSS framework
- **React Hooks**: useState, useEffect for state management

## Building for Production

```bash
npm run build
npm start
```

## GitHub Setup & Deployment

### Step 1: Initialize Git Repository

```bash
cd c:\Users\USER\Desktop\web
git init
git add .
git commit -m "Initial commit: Professional Next.js website"
```

### Step 2: Create GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Click **New Repository**
3. Name it: `professional-website` (or your preferred name)
4. Add description: "Professional Next.js website with Web Development and SEO services"
5. Choose **Public** (for Vercel deployment)
6. Click **Create Repository**

### Step 3: Push to GitHub

```bash
git remote add origin https://github.com/CharlieJamesGwapo/professional-website.git
git branch -M main
git push -u origin main
```

**Note**: Replace `CharlieJamesGwapo` with your GitHub username if different.

## Vercel Deployment

### Step 1: Connect to Vercel

1. Go to [Vercel.com](https://vercel.com)
2. Click **Sign Up** or **Sign In**
3. Choose **Continue with GitHub**
4. Authorize Vercel to access your GitHub account

### Step 2: Import Project

1. Click **Add New** → **Project**
2. Select your GitHub repository: `professional-website`
3. Click **Import**

### Step 3: Configure Project

1. **Framework Preset**: Select **Next.js**
2. **Root Directory**: Leave as default (.)
3. **Environment Variables**: Leave empty (no API keys needed)
4. Click **Deploy**

### Step 4: Images & Assets

All images are in the `public/` folder and will be automatically deployed:
- `public/logo.png` - Profile photo (favicon & header logo)
- `public/webdev.jfif` - Web Development service image
- `public/seo.jfif` - SEO service image

**Vercel automatically serves static files from the `public/` folder.**

### Step 5: Custom Domain (Optional)

1. In Vercel dashboard, go to **Settings** → **Domains**
2. Add your custom domain
3. Follow DNS configuration instructions

## Project Structure for Deployment

```
public/
├── logo.png           # Profile photo (favicon & header)
├── webdev.jfif        # Web Development image
├── seo.jfif           # SEO image
├── favicon.ico        # Favicon (auto-generated from logo.png)

app/
├── layout.jsx         # Root layout with favicon links
├── page.jsx           # Home page with Maps component
├── globals.css        # Global styles & animations
├── services/
│   └── page.jsx       # Services page
└── order/
    └── page.jsx       # Order form page

components/
├── Header.jsx         # Navigation with logo
├── Footer.jsx         # Footer with social links
└── Maps.jsx           # Location & contact maps

.gitignore            # Excludes node_modules, .next, etc.
package.json          # Dependencies
next.config.js        # Next.js configuration
tailwind.config.js    # Tailwind CSS config
postcss.config.js     # PostCSS config
tsconfig.json         # TypeScript config
```

## Important Notes for Deployment

### Image Optimization
- Next.js automatically optimizes images in production
- Images in `public/` folder are served as static assets
- No additional configuration needed for Vercel

### Environment Variables
- No API keys or secrets needed for this project
- All features work without environment variables
- Maps use embedded Google Maps iframe (no API key required)

### Build Process
Vercel automatically:
1. Installs dependencies (`npm install`)
2. Builds the project (`npm run build`)
3. Deploys to CDN
4. Provides SSL certificate
5. Sets up automatic deployments on GitHub push

### Automatic Deployments
After initial setup:
- Every push to `main` branch automatically deploys
- Preview deployments for pull requests
- Rollback capability for previous versions

## Troubleshooting

### Images Not Showing on Vercel
- Ensure all images are in `public/` folder
- Check file paths use `/filename` (not relative paths)
- Verify file names match exactly (case-sensitive on Linux servers)

### Form Not Working
- Local storage works in browser
- SweetAlert2 is installed and imported
- All dependencies are in package.json

### Favicon Not Showing
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh (Ctrl+Shift+R)
- Favicon links are in `app/layout.jsx`

## Deployment Checklist

- ✅ All images in `public/` folder
- ✅ No hardcoded absolute paths
- ✅ All dependencies in `package.json`
- ✅ `.gitignore` configured properly
- ✅ GitHub repository created and linked
- ✅ Vercel project connected to GitHub
- ✅ Environment variables set (if needed)
- ✅ Custom domain configured (optional)

## Support & Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Deployment Guide](https://vercel.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [GitHub Help](https://docs.github.com)

## License

This project is open source and available under the MIT License.
