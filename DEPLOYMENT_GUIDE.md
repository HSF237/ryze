# 🚀 RYZE GitHub + Vercel Deployment Guide

**Status: Ready to Deploy**

Your Next.js RYZE storefront is configured and ready to go live. Follow these steps to deploy on Vercel (recommended for Next.js).

---

## Step 1: Initialize Git & Push to GitHub

### On Your Computer (Command Line)

Open **Command Prompt** or **PowerShell** and navigate to your RYZE folder:

```bash
cd C:\Users\HI\Desktop\MY CODESPACE\RYZE
```

### Initialize Git

```bash
git init
git add .
git commit -m "Initial commit: RYZE Smart Posture Trainer storefront"
```

---

## Step 2: Create GitHub Repository

1. Go to **https://github.com/new**
2. Create a new repository:
   - **Name:** `ryze` (or similar)
   - **Description:** "Smart Posture Trainer Dropshipping Storefront"
   - **Privacy:** Public (so Vercel can access it)
   - **Do NOT initialize with README** (we already have files)
   - Click **Create Repository**

3. Copy your repository URL from GitHub (looks like: `https://github.com/YOUR-USERNAME/ryze.git`)

### Back in Command Line

Add the remote repository and push:

```bash
git remote add origin https://github.com/YOUR-USERNAME/ryze.git
git branch -M main
git push -u origin main
```

**Done!** Your code is now on GitHub.

---

## Step 3: Deploy on Vercel

Vercel is the easiest hosting for Next.js apps (free tier, auto-deploys on push, global CDN).

### Option A: Quick Deploy (Recommended)

1. Go to **https://vercel.com/new**
2. Click **"Import Git Repository"**
3. Paste your GitHub repo URL (the one from Step 2)
4. Vercel will auto-detect Next.js settings ✅
5. Click **"Deploy"**

**That's it!** Vercel will build and deploy automatically. You'll get a live URL like:
```
https://ryze.vercel.app
```

### Option B: Connect Vercel to GitHub (Auto-Deploy on Push)

After your first deploy:

1. Go to your project in Vercel dashboard
2. Click **"Settings"** → **"Git"**
3. Connect your GitHub account
4. Enable **"Automatic Deployments"** (pushes to `main` auto-deploy)

---

## Step 4: Verify Deployment

✅ Check these after deployment:

- [ ] Site loads at `https://ryze.vercel.app`
- [ ] Product images display correctly
- [ ] Add-to-cart works (uses localStorage)
- [ ] Checkout page loads
- [ ] FAQ, About, Contact pages work
- [ ] Mobile responsive (test on phone)

---

## Next Steps After Launch

Once your site is live:

1. **Custom Domain** (optional)
   - Buy a domain (e.g., `getryze.com`)
   - Add it in Vercel Settings → Domains

2. **Connect Payment** (Stripe/PayPal)
   - Edit `app/checkout/page.jsx`
   - Wire up your payment processor

3. **Add Real Product Images**
   - Replace Pexels URLs in `lib/products.js` with actual supplier photos
   - Store images in `/public/images/` folder

4. **Email Capture**
   - Connect footer email form to Mailchimp/ConvertKit
   - Edit `components/Footer.jsx`

5. **Analytics**
   - Add Google Analytics to `app/layout.jsx`

6. **Launch Marketing**
   - Set up Facebook/Google ads
   - Start pre-orders or soft launch

---

## Troubleshooting

**Build fails on Vercel?**
- Check `next.config.js` exists
- Verify `package.json` has all dependencies
- Look at Vercel build logs

**Images don't load?**
- Ensure image URLs are accessible
- Check browser console for 404 errors
- Use `/public/images/` folder for local images

**Cart doesn't persist?**
- localStorage works in production
- Check browser console for errors
- Test in different browsers

---

## Quick Reference

| File | What It Does |
|------|-------------|
| `lib/products.js` | Product data, price, images, reviews, FAQs |
| `app/page.jsx` | Home page / hero |
| `app/checkout/page.jsx` | Add Stripe/PayPal here |
| `tailwind.config.js` | Brand colors (brand-500 = green #1ea679) |
| `components/Logo.jsx` | Your logo (replace SVG) |

---

**Questions?** Check the main README.md for more details.

Good luck launching RYZE! 🚀
