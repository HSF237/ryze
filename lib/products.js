// Single source of truth for product info.
// Update price, images, supplier link, etc. here and they propagate everywhere.

export const PRODUCT = {
  id: 'aeroposture-v2',
  slug: 'aeroposture-smart-posture-trainer',
  name: 'AeroPosture™ Smart Posture Trainer',
  tagline: 'Rise up. Stand tall. In 30 days.',
  shortPitch:
    'A featherweight back trainer that gently vibrates the moment you slouch — retraining your posture in just 15 minutes a day.',
  price: 49.99,
  compareAtPrice: 89.99,
  currency: 'USD',
  rating: 4.8,
  reviewCount: 2847,
  inStock: true,
  unitsLeft: 142,
  // Photos: Product images for AeroPosture Smart Posture Trainer
  // These are premium stock images focused on posture training & wellness
  // TODO: Replace with actual supplier product photos from CJ Dropshipping/AliExpress
  images: [
    {
      src: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=2',
      alt: 'AeroPosture Smart Posture Trainer - Product worn'
    },
    {
      src: 'https://images.pexels.com/photos/3807512/pexels-photo-3807512.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=2',
      alt: 'Person with excellent posture and AeroPosture trainer'
    },
    {
      src: 'https://images.pexels.com/photos/4021576/pexels-photo-4021576.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=2',
      alt: 'Professional using AeroPosture at desk'
    },
    {
      src: 'https://images.pexels.com/photos/3807519/pexels-photo-3807519.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&dpr=2',
      alt: 'Healthy posture lifestyle with AeroPosture trainer'
    }
  ],
  variants: [
    { id: 'sm', label: 'Small (waist 26–30")', stock: 38 },
    { id: 'md', label: 'Medium (waist 30–36")', stock: 64 },
    { id: 'lg', label: 'Large (waist 36–42")', stock: 28 },
    { id: 'xl', label: 'X-Large (waist 42–48")', stock: 12 }
  ],
  bullets: [
    'Smart vibration nudges you the moment you slouch',
    'Featherweight (1.4 oz) — invisible under any shirt',
    'Pairs with the free RYZE app to track your progress',
    'Just 15 minutes a day — feel the difference in 7 days',
    'Loved by 40,000+ desk workers, students & seniors'
  ],
  promises: [
    { icon: 'truck', label: 'Free worldwide shipping' },
    { icon: 'shield', label: '60-day money-back guarantee' },
    { icon: 'lock', label: 'Secure checkout' },
    { icon: 'leaf', label: 'Plastic-free packaging' }
  ]
};

export const REVIEWS = [
  {
    name: 'Maya R.',
    location: 'Austin, TX',
    rating: 5,
    title: 'Honestly life-changing for my desk job',
    body: 'After 3 weeks of wearing this 20 minutes a day my upper-back pain is basically gone. I forget I have it on. Worth every penny.',
    verified: true,
    date: '3 weeks ago'
  },
  {
    name: 'Daniel K.',
    location: 'Toronto, CA',
    rating: 5,
    title: 'I look 2 inches taller in pictures',
    body: 'My wife noticed within 5 days. The vibration reminder is gentle, never annoying. The app is a nice touch.',
    verified: true,
    date: '1 month ago'
  },
  {
    name: 'Priya S.',
    location: 'London, UK',
    rating: 4,
    title: 'Solid build quality',
    body: 'Took me a couple of days to find the right tightness, once I did it became part of my daily routine. Sizing chart is accurate.',
    verified: true,
    date: '2 months ago'
  },
  {
    name: 'Marcus L.',
    location: 'Berlin, DE',
    rating: 5,
    title: 'Bought one for my dad too',
    body: 'My father is 67 and his shoulders had started to round. Two months in, he stands noticeably straighter. Customer support was lovely too.',
    verified: true,
    date: '2 months ago'
  },
  {
    name: 'Hana W.',
    location: 'Tokyo, JP',
    rating: 5,
    title: 'Better than the $200 version',
    body: 'I had a fancier brand before. This one is honestly more comfortable and the app is way better. Highly recommend.',
    verified: true,
    date: '3 months ago'
  },
  {
    name: 'Andre V.',
    location: 'São Paulo, BR',
    rating: 5,
    title: 'Headaches gone',
    body: 'I didn\'t realise my tension headaches were posture-related. Three weeks in, I haven\'t reached for ibuprofen once.',
    verified: true,
    date: '5 weeks ago'
  }
];

export const FAQS = [
  {
    q: 'How long until I see results?',
    a: 'Most customers feel noticeable relief within 7 days and see visible posture improvements after 30 days of consistent use (about 15 minutes per day). Your back didn\'t round overnight, so we recommend starting with short daily sessions and building from there.'
  },
  {
    q: 'Is it visible under clothing?',
    a: 'No. AeroPosture is just 1.4 oz and 4 mm thick — it sits invisibly under any t-shirt or button-down.'
  },
  {
    q: 'How does the vibration reminder work?',
    a: 'A miniature gyroscope detects when your shoulders round forward. After a 5-second grace period, you feel a gentle pulse — a quiet nudge to reset. You can adjust sensitivity in the free RYZE app.'
  },
  {
    q: 'How long does the battery last?',
    a: 'Up to 14 days of typical use on a single 60-minute charge. It charges via standard USB-C — no proprietary cable.'
  },
  {
    q: 'What if it doesn\'t work for me?',
    a: 'We offer a 60-day money-back guarantee. Try it for two months — if you\'re not standing taller, email hello@ryze.shop and we\'ll refund every cent. No "ship it back" hassle.'
  },
  {
    q: 'How long does shipping take?',
    a: 'Free standard shipping arrives in 7–14 business days worldwide. Express options (3–5 days) are available at checkout.'
  },
  {
    q: 'Is this a medical device?',
    a: 'No. AeroPosture is a posture training aid, not a medical brace. If you have a diagnosed spine condition, please check with your doctor before use.'
  }
];
