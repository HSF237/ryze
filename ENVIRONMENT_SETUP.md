# 🔧 Environment Variables Setup Guide

Your Vercel build is failing because the environment variables are missing. This guide walks you through fixing it.

---

## ✅ Step 1: Install Dependencies Locally

The new payment and database features need packages installed. Open **Command Prompt** or **PowerShell** and run:

```bash
cd C:\Users\HI\Desktop\MY CODESPACE\RYZE
npm install
```

This installs: Firebase, Stripe, Resend email service, and other dependencies. It will take 2-5 minutes.

---

## ✅ Step 2: Test Build Locally

After `npm install` completes, test that everything builds:

```bash
npm run build
```

If it says "✓ Built successfully", your local setup is working. ✅

To run the dev server and test in your browser:

```bash
npm run dev
```

Then open http://localhost:3000 in Chrome.

---

## ✅ Step 3: Get Your Real API Keys

You need real API keys from Stripe, Firebase, and Resend. The `.env.local` file I created has placeholders — replace them with real ones.

### **Get Stripe Keys (for payments)**

1. Go to https://dashboard.stripe.com/apikeys
2. You'll see two keys at the top:
   - **Publishable key** (starts with `pk_test_`) → Copy into `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - **Secret key** (starts with `sk_test_`) → Copy into `STRIPE_SECRET_KEY`

### **Get Firebase Keys (for order database)**

1. Go to https://console.firebase.google.com
2. Click on your project (or create one if you don't have one)
3. Click ⚙️ **Settings** (gear icon top-left) → **Project Settings**
4. Scroll down to "Your apps" and click the web icon `</>`
5. Copy these values into `.env.local`:
   - `apiKey` → `NEXT_PUBLIC_FIREBASE_API_KEY`
   - `authDomain` → `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
   - `projectId` → `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
   - `storageBucket` → `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
   - `messagingSenderId` → `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
   - `appId` → `NEXT_PUBLIC_FIREBASE_APP_ID`

### **Get Resend API Key (for order confirmation emails)**

1. Go to https://resend.com (create a free account)
2. Click **API Keys** in the left sidebar
3. Copy the key that starts with `re_` → `RESEND_API_KEY`

---

## ✅ Step 4: Update `.env.local` with Your Real Keys

Open `C:\Users\HI\Desktop\MY CODESPACE\RYZE\.env.local` in your editor and replace:
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` with your real Stripe publishable key
- `STRIPE_SECRET_KEY` with your real Stripe secret key
- Firebase values with your real Firebase config
- `RESEND_API_KEY` with your real Resend key
- `ADMIN_PASSWORD` - change `admin123` to something only you know

Save the file.

---

## ✅ Step 5: Test Payment Locally with Stripe Test Card

1. Run `npm run dev`
2. Go to http://localhost:3000
3. Click "Add to cart" → "Checkout"
4. Fill in the form with test data:
   - Name: `Test User`
   - Email: `test@example.com`
   - Address: `123 Main St, City, State, 12345`
5. For the card number, use Stripe's test card: `4242 4242 4242 4242`
   - Expiry: Any future date (e.g., `12/25`)
   - CVC: Any 3 digits (e.g., `123`)
6. Click **Pay Now**

If it says "Payment successful" → Everything works! ✅

---

## ✅ Step 6: Deploy to Vercel (Fix Build Errors)

Now that your local build works, you need to add the same environment variables to **Vercel** so the cloud build succeeds.

1. Go to your Vercel project dashboard: https://vercel.com/dashboard
2. Find your `ryze` project → Click it
3. Click **Settings** → **Environment Variables**
4. Add each variable:
   - **Name:** `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | **Value:** (your Stripe publishable key)
   - **Name:** `STRIPE_SECRET_KEY` | **Value:** (your Stripe secret key)
   - **Name:** `NEXT_PUBLIC_FIREBASE_API_KEY` | **Value:** (your Firebase API key)
   - **Name:** `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | **Value:** (your Firebase auth domain)
   - **Name:** `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | **Value:** (your Firebase project ID)
   - **Name:** `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | **Value:** (your Firebase storage bucket)
   - **Name:** `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | **Value:** (your Firebase messaging sender ID)
   - **Name:** `NEXT_PUBLIC_FIREBASE_APP_ID` | **Value:** (your Firebase app ID)
   - **Name:** `RESEND_API_KEY` | **Value:** (your Resend API key)
   - **Name:** `ADMIN_PASSWORD` | **Value:** (your secure admin password)
   - **Name:** `NEXT_PUBLIC_APP_URL` | **Value:** `https://ryze.vercel.app`

5. Click **Save**
6. Go back to **Deployments** tab
7. Click the failed deploy → **Redeploy** button at the top-right

Vercel will rebuild with the environment variables. If the build passes, you'll get a new live URL! ✅

---

## 🧪 Test Checkout on Live Site

Once Vercel deploys successfully:

1. Go to your live site (e.g., `https://ryze.vercel.app`)
2. Add product to cart → Click **Checkout**
3. Use the same test card: `4242 4242 4242 4242`
4. After payment succeeds, check the **Admin Dashboard**: https://ryze.vercel.app/admin/orders
   - Password: whatever you set `ADMIN_PASSWORD` to
   - You should see your test order listed

---

## ⚠️ Important: Replace Test Keys with Real Ones (When Mom's Bank Account Ready)

Right now you're using **Stripe test mode** (test cards work, no real charges).

When your mom's bank account is ready:
1. Go to Stripe dashboard
2. Disable **Test Mode** → Switch to **Live Mode**
3. Copy your **live** publishable and secret keys (they start with `pk_live_` and `sk_live_`)
4. Update `.env.local` and Vercel environment variables with the live keys
5. **NOW** real payments will process to your mom's bank account ✅

---

## 📋 Checklist

- [ ] Ran `npm install`
- [ ] Ran `npm run build` (no errors)
- [ ] Copied real Stripe keys to `.env.local`
- [ ] Copied real Firebase keys to `.env.local`
- [ ] Copied real Resend key to `.env.local`
- [ ] Changed `ADMIN_PASSWORD` to something secure
- [ ] Added all environment variables to Vercel dashboard
- [ ] Redeployed on Vercel
- [ ] Tested payment locally with test card `4242 4242 4242 4242`
- [ ] Tested payment on live Vercel site
- [ ] Confirmed order appears in Admin Dashboard (/admin/orders)

---

**Questions?** Check the FULFILLMENT_SETUP.md guide for more details.

Good luck! 🚀
