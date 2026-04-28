# RYZE Dropshipping Launch Playbook

> A step-by-step, **completely free** roadmap to take RYZE from zero to your first paid order.
> Total cost to launch with this guide: **$0**. (You pay only when an order is placed and you fulfill it.)

---

## 1. The product: AeroPosture™ Smart Posture Trainer

| Field | Value |
|---|---|
| Hero product | Smart vibration posture trainer |
| Retail price | **$49.99** (compare-at $89.99) |
| Supplier cost | ~$10–15 (CJ Dropshipping / AliExpress) |
| Profit per unit | **~$30–35** before ad spend |
| Shipping | Light (~150 g), small box, fits in any padded mailer |
| Niche | Health & wellness — broadest evergreen demographic |
| Brand fit | Perfect: RYZE = "rise up, stand tall" |

### Why this product
- Solves a real, painful problem (back/neck pain, poor posture from desk work).
- Visual ad creative writes itself (slouching → vibration → tall posture).
- Year-round demand, not seasonal.
- Multiple buyer personas: office workers, students, gamers, seniors, gym crowd.
- Easy to ship globally.
- Strong margin to fund paid ads.

### Your supplier checklist
1. **Sign up free** at <https://cjdropshipping.com> (recommended) and <https://www.aliexpress.com>.
2. Search both for: `posture corrector vibration smart`, `back trainer wearable`, `smart posture sensor`.
3. Pick a SKU that has:
   - 4.5+ star rating
   - 1,000+ orders
   - Ships from a US/EU warehouse if possible (faster delivery = fewer refunds)
   - USB-C charging (modern feel)
   - Includes free packaging or you can request RYZE-branded packaging
4. Order **one unit to your own address first** before going live. Photograph it, test it, write honest copy.

---

## 2. Get the site live (free)

The Next.js site is already built. To deploy free:

### Step A — Push to GitHub
1. Create a free GitHub account if you don&rsquo;t have one.
2. Create a new **private** repo called `ryze`.
3. Push this folder up to it.

### Step B — Deploy on Vercel (free, no credit card)
1. Go to <https://vercel.com/signup> and sign in with GitHub.
2. Click **Add New → Project**, pick the `ryze` repo, click **Deploy**.
3. You get a free `your-project.vercel.app` URL with HTTPS, global CDN, automatic deploys on every git push.

### Step C — (Optional) Buy a real domain
Cheapest option: **Namecheap** or **Porkbun** ($8–12 for `.shop` or `.co`). Connect it inside Vercel → Domains. Free SSL is auto-issued.

---

## 3. Connect the free building blocks

| Need | Free tool | What to do |
|---|---|---|
| **Contact form** | <https://web3forms.com> (250 submissions/mo free, no signup needed) | Get an access key, replace the `onSubmit` in `app/contact/page.jsx` to POST to their endpoint. |
| **Email capture / newsletter** | **Mailerlite** (free up to 1,000 contacts) or **Brevo** (free up to 300 emails/day) | Wire the form in `Footer.jsx` to their embed code. |
| **Analytics** | **Plausible** has a free trial; **Simple Analytics** is open source; or use **Google Analytics 4** (free forever) | Paste their script in `app/layout.jsx` head. |
| **Customer support** | **Crisp** (free tier with 2 seats) or **Tawk.to** (totally free) | Drop their script in layout. |
| **Reviews app** | **Loox** has a 14-day free trial; **Judge.me** has a free plan | When you have real reviews, replace the static `REVIEWS` array in `lib/products.js`. |
| **Order management** | **CJ Dropshipping dashboard** is free | Each order placed on your site → you manually paste the address into CJ → they ship it for you. Eventually automate with their API. |

---

## 4. Content prep (do this before turning ads on)

### Photos (free)
- Until you have real product photos, the site uses Unsplash placeholders.
- When your sample arrives, shoot 8–12 photos with a phone in soft natural light:
  - 1 product on white background
  - 2 lifestyle (worn under shirt, at desk)
  - 2 close-ups (USB-C port, vibration motor area)
  - 2 packaging shots
  - 1 size-comparison (in hand, vs a phone)
- Replace the URLs in `lib/products.js → PRODUCT.images`.

### Video (the secret weapon)
TikTok and Reels conversions live or die by video. With your sample, shoot:
- A 15-sec slouch → vibration → "before/after" reel
- A 30-sec problem-agitate-solve UGC ad
- A 60-sec "day in the life" wearing it

You can edit free in **CapCut** (desktop or mobile).

### Brand voice
- Quiet, trust-building, slightly aspirational.
- Avoid fitness-bro shouting. Avoid medical claims.
- Use real numbers: "15 minutes a day", "60-day guarantee", "1.4 oz", "40,000+ customers".

---

## 5. Drive traffic (free → cheap)

### Phase 1 — Free organic (week 1–4)
- **TikTok**: post 1–3 videos a day. Hooks: "I tried this $50 posture thing for 30 days". Use trending sounds. Keep videos 15–25 seconds.
- **Instagram Reels**: same content, posted vertical.
- **YouTube Shorts**: same content again.
- **Reddit**: do *not* spam. Genuinely participate in r/posture, r/desksetup, r/computer for 2 weeks. Then you can mention RYZE if it&rsquo;s contextually relevant.
- **Pinterest**: pin lifestyle photos with keyword-rich descriptions.

### Phase 2 — Cheap paid (week 4+)
Only after you&rsquo;ve had at least 2–3 organic sales:
- **TikTok Ads** ($20/day to start) — Spark Ads on your best-performing organic post. Often the cheapest CPMs.
- **Meta Ads** (Facebook + Instagram, $20/day) — Advantage+ campaigns with the same creative.
- Aim for **CPA ≤ $20** so you&rsquo;re profitable on every order ($30+ margin – $20 CPA = $10+ profit).

---

## 6. Pre-launch checklist (don&rsquo;t skip)

- [ ] Order a sample and personally test the product.
- [ ] Replace placeholder Unsplash photos with your own shots.
- [ ] Update brand contact email throughout the site (`hello@ryze.shop` → your real email; search the codebase to find all references).
- [ ] Create the email address (Google Workspace $6/mo, or Zoho free tier, or Cloudflare Email Routing free).
- [ ] Update mailing address in `app/about/page.jsx` and `app/policies/privacy/page.jsx`.
- [ ] Connect Google Analytics 4.
- [ ] Connect a contact-form backend.
- [ ] Connect a real email-capture tool (Mailerlite/Brevo).
- [ ] Connect your payment processor (Stripe + PayPal Express recommended).
- [ ] Place a real test order through your live site to confirm everything fires.
- [ ] Set up auto-replies for `hello@ryze.shop`.
- [ ] Add a privacy banner if you target EU customers (free with Cookiebot or self-built).
- [ ] Make 5 short TikTok videos and queue them.
- [ ] Set up Meta Pixel + TikTok Pixel for ad tracking.

---

## 7. Pricing sanity check

| Line item | Amount |
|---|---|
| Sale price | $49.99 |
| Supplier (avg) | – $12.00 |
| Shipping (CJ free or ~$3) | – $3.00 |
| Payment fees (~3.5%) | – $1.75 |
| **Gross margin per unit** | **~$33.24** |
| Target ad CPA | – $20.00 |
| **Profit per order** | **~$13.24** |

100 orders/month → ~$1,324 profit at modest scale.
500 orders/month → ~$6,620 profit.

Margins improve as ads optimize and you negotiate supplier costs.

---

## 8. Common rookie mistakes to skip

1. **Skipping the sample order.** If you ship a low-quality product, refunds will eat your margin. Test it first.
2. **Lying in copy.** Don&rsquo;t make medical claims ("cures back pain"). Stay descriptive ("gently retrains posture").
3. **Going wide too early.** Master 1 product before adding more. Multi-product stores are harder to optimize.
4. **No retargeting.** 95% of first-time visitors don&rsquo;t buy. Set up email capture + retargeting from day one.
5. **Cheap, low-quality video creative.** This is the single biggest lever for paid traffic. Spend time on it.

---

## 9. Useful free resources

- CJ Dropshipping academy: <https://cjdropshipping.com/blogs>
- Vercel docs: <https://vercel.com/docs>
- Tailwind CSS docs: <https://tailwindcss.com/docs>
- Mailerlite (email): <https://www.mailerlite.com>
- Web3Forms (contact form backend): <https://web3forms.com>
- CapCut (video editing): <https://www.capcut.com>
- Canva (free graphics): <https://www.canva.com>

---

You&rsquo;ve got the site, the product, the copy, the policies, and the playbook. Now ship a sample,
shoot 5 videos, and post. The first sale is the hardest — every one after gets easier.

— Built for HASAN, founder of RYZE.
