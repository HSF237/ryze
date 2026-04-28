# RYZE — Smart Posture Trainer storefront

Single-product storefront for **RYZE**, a dropshipping brand selling the
**AeroPosture™ Smart Posture Trainer**.

The site comes in **two versions** — pick whichever fits your skill level:

## Option A — No-install static HTML (easiest)

Just **double-click `index.html`** to open in your browser. Works offline, no setup.
The pages: `index.html`, `about.html`, `faq.html`, `contact.html`, `checkout.html`, and `policies/*.html`.

To put it online for free:
1. Drag the whole RYZE folder into <https://app.netlify.com/drop> — instant free URL, no signup needed.
2. Or upload to GitHub Pages, Cloudflare Pages, or Vercel.

The cart works via `localStorage` (persists across page reloads in the same browser).

## Option B — Next.js 14 + Tailwind (more powerful)

Built with **Next.js 14 (App Router) + Tailwind CSS** — better for scaling, server-side rendering, and adding more features.

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

To build for production:

```bash
npm run build
npm run start
```

## Deploy free on Vercel

1. Push this folder to a new GitHub repo.
2. Go to <https://vercel.com/new>, import the repo, click **Deploy**. That&rsquo;s it &mdash; free hosting, free SSL, global CDN.

---

## Where to plug things in

| Thing | Where | Notes |
|---|---|---|
| Product price / images / copy | `lib/products.js` | Single source of truth for product info, reviews, FAQ. |
| Brand colours / fonts | `tailwind.config.js` | The accent color is `brand-500` &mdash; tweak the whole palette here. |
| Logo | `components/Logo.jsx` | Inline SVG. Replace with your own when you have a designed mark. |
| Cart logic | `lib/cart.jsx` | Pure React state. Hook up localStorage or a backend later if you want carts to persist across reloads. |
| Checkout payment | `app/checkout/page.jsx` | Look for the &ldquo;Payment provider not connected&rdquo; block. Drop in your Stripe/PayPal call there. |
| Contact form submissions | `app/contact/page.jsx` | Wire to Formspree, Web3Forms, or Getform &mdash; all have free tiers. |
| Email capture | `components/Footer.jsx` | Same &mdash; point the form at your email tool. |
| Analytics | `app/layout.jsx` | Add a `<Script>` tag for Plausible, Google Analytics, or Simple Analytics. |

---

## File map

```
app/
  layout.jsx           Root shell (loads CartProvider, Navbar, Footer, CartDrawer)
  page.jsx             Home / landing page
  globals.css          Tailwind + custom utilities
  not-found.jsx        404
  sitemap.js           SEO sitemap
  robots.js            SEO robots.txt
  about/page.jsx
  faq/page.jsx
  contact/page.jsx
  checkout/page.jsx
  policies/
    privacy/page.jsx
    refund/page.jsx
    shipping/page.jsx
    terms/page.jsx
components/
  AnnouncementBar.jsx
  Logo.jsx
  Navbar.jsx
  Footer.jsx
  Hero.jsx
  PressMarquee.jsx
  ValueProps.jsx
  ProductShowcase.jsx
  HowItWorksSteps.jsx
  Reviews.jsx
  Comparison.jsx
  GuaranteeCTA.jsx
  FAQList.jsx
  CartDrawer.jsx
  PolicyShell.jsx
lib/
  products.js          Product / reviews / FAQ data
  cart.jsx             Cart context provider
```

---

## What&rsquo;s next?

See **DROPSHIPPING-PLAYBOOK.md** in this folder for the step-by-step launch guide
(supplier setup, free hosting, ads, email tool, pre-launch checklist).
