# 🛒 RYZE Fulfillment System Setup Guide

Your RYZE storefront now has a complete order management system! Follow these steps to get it live.

---

## **⚡ Step 1: Get Stripe API Keys (5 min)**

Stripe handles all payment processing securely.

### Setup:
1. Go to **https://dashboard.stripe.com/register**
2. Sign up with your email
3. Verify your email
4. Go to **Developers** → **API Keys**
5. You'll see two keys:
   - **Publishable Key** (starts with `pk_test_`)
   - **Secret Key** (starts with `sk_test_`)

### Add to your .env.local:
```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_YOUR_KEY_HERE
STRIPE_SECRET_KEY=sk_test_YOUR_KEY_HERE
```

**🎯 Tip**: When ready for real sales, upgrade to live keys (pk_live_ and sk_live_)

---

## **⚡ Step 2: Set Up Firebase (Free Database)**

Firebase stores all customer orders securely.

### Setup:
1. Go to **https://console.firebase.google.com**
2. Click **Create Project** → Name: "ryze"
3. Accept terms, create project
4. Go to **Firestore Database**
5. Click **Create Database**
6. Select "Start in test mode" (or production if preferred)
7. Go to **Project Settings** ⚙️ (top-right)
8. Click **Service Accounts** tab
9. Select Node.js as language
10. Click **Generate new private key**
11. Save the JSON file - you'll copy values from it

### Add to your .env.local:
From the JSON file you downloaded, copy these values:
```
NEXT_PUBLIC_FIREBASE_API_KEY=YOUR_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-project-id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-project-id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=YOUR_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID=YOUR_APP_ID
```

**🎯 Tip**: Orders automatically save to Firestore when customers checkout.

---

## **⚡ Step 3: Set Up Email Service (Resend)**

Send order confirmations to customers automatically.

### Setup:
1. Go to **https://resend.com**
2. Sign up with your email
3. Verify your email
4. Go to **API Keys**
5. Copy your **API Key** (starts with `re_`)
6. Verify your domain (Resend → Domains → Add your domain)

### Add to your .env.local:
```
RESEND_API_KEY=re_YOUR_API_KEY_HERE
```

**🎯 Alternative**: Use SendGrid, Mailgun, or Gmail SMTP instead

---

## **⚡ Step 4: Create .env.local File**

In your RYZE folder, create a new file called `.env.local` and add all the keys above:

```
# STRIPE
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...

# FIREBASE
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...

# EMAIL
RESEND_API_KEY=re_...

# ADMIN
ADMIN_PASSWORD=choose_a_strong_password

# APP URL
NEXT_PUBLIC_APP_URL=https://ryze-git-main-hasans-projects-a89be667.vercel.app
```

---

## **⚡ Step 5: Install Dependencies**

The checkout now uses Stripe React library. Install it:

```bash
npm install @stripe/react-stripe-js @stripe/js
```

Or if using yarn:
```bash
yarn add @stripe/react-stripe-js @stripe/js
```

---

## **⚡ Step 6: Test the Checkout Flow**

### Test with Stripe's test card:
- **Card Number**: `4242 4242 4242 4242`
- **Exp Date**: Any future date (e.g., `12/25`)
- **CVC**: Any 3 digits (e.g., `123`)

Steps to test:
1. Go to your checkout page
2. Fill in customer details
3. Enter test card above
4. Click "Place order"
5. Check Stripe dashboard to see payment
6. Check Firebase Firestore to see order saved
7. Check inbox for order confirmation email

---

## **⚡ Step 7: Push to GitHub & Deploy**

```bash
git add .
git commit -m "Add Stripe payment, Firebase orders, email"
git push origin main
```

Vercel will auto-deploy when you push!

---

## **⚡ Step 8: Manage Orders**

### View all orders:
Go to: `https://your-site.com/admin/orders`

Login with admin password you set in .env.local

From here you can see:
- ✅ Customer names & addresses
- ✅ Products ordered
- ✅ Payment status
- ✅ Order dates

### Fulfill orders manually:
1. See customer address on admin dashboard
2. Log into CJ Dropshipping / AliExpress
3. Place order using customer's shipping address
4. Share tracking number with customer via email

---

## **📊 How Orders Work (Complete Flow)**

```
1. Customer visits your site
   ↓
2. Adds product to cart & goes to checkout
   ↓
3. Enters shipping & payment info
   ↓
4. You collect payment via Stripe (secure)
   ↓
5. Order automatically saves to Firebase
   ↓
6. Confirmation email sent to customer
   ↓
7. You see order in /admin/orders
   ↓
8. You log into supplier (CJ/AliExpress)
   ↓
9. Place order with supplier using customer address
   ↓
10. Supplier ships to customer
   ↓
11. You share tracking with customer
   ↓
12. Customer receives product!
```

---

## **💰 Profit Calculation**

Example order:

```
Customer pays:       $49.99
↓
Stripe fee (-2.9%):   -$1.45
↓
Supplier cost:      -$12.00
↓
Your profit:        $36.54
```

With 10 orders/month = **$365 profit** (before time investment)

---

## **🚀 What's Next**

- **Automate fulfillment**: Use Printful or Oberlo to auto-fulfill orders
- **Add email marketing**: Capture emails in footer, send newsletters
- **Custom domain**: Add getryze.com or similar in Vercel settings
- **Scale marketing**: Facebook/Google ads once cash flowing
- **Add second product**: Duplicate AeroPosture, add new product

---

## **🆘 Troubleshooting**

### "Payment failed" error
- Check Stripe keys are correct in .env.local
- Make sure keys are test keys (pk_test_ / sk_test_)
- Restart dev server after adding .env.local

### Orders not saving to Firebase
- Check Firebase config in .env.local
- Make sure Firestore database is created
- Check Firebase security rules allow writes

### No emails being sent
- Check Resend API key is correct
- Verify you've set up a domain in Resend
- Check spam folder

### Can't access /admin/orders
- Password must match ADMIN_PASSWORD in .env.local
- Refresh the page after login

---

## **📞 Support**

- **Stripe Help**: https://support.stripe.com
- **Firebase Help**: https://firebase.google.com/docs
- **Resend Help**: https://resend.com/docs
- **Next.js Help**: https://nextjs.org/docs

---

**You're all set! Your dropshipping store is now live and ready to take orders.** 🎉

Start getting sales! 🚀
