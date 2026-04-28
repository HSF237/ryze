export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  category: string;
  shortDescription: string;
  longDescription: string;
  images: string[];
  specs: { title: string; content: string }[];
  variants?: { id: string; name: string; price_modifier: number; color: string; material: string }[];
}

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(price);
};

// We'll just define the final set here to be very clean
export const PRODUCTS: Product[] = [
  {
    id: "p1",
    slug: "ryze-architect-stand",
    name: "Architect Laptop Stand",
    price: 12499,
    category: "ergonomics",
    shortDescription: "Aerospace-grade aluminum. Precision-milled for the professional workspace.",
    longDescription: "Forged for those who architect the future. The RYZE Architect Stand features a dual-hinge friction system that remains stable at any angle. CNC-machined from 6061 aluminum alloy with a sandblasted finish.",
    images: [
      "https://images.unsplash.com/photo-1544006659-f0b21884cb1d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616627547584-bf28cee262db?q=80&w=1200&auto=format&fit=crop"
    ],
    specs: [
      { title: "Material", content: "6061 Aerospace Aluminum" },
      { title: "Capacity", content: "Supports up to 16-inch laptops" },
      { title: "Stability", content: "Triple-reinforced friction hinges" }
    ],
    variants: [
      { id: "v1", name: "Lunar Gray", price_modifier: 0, color: "Lunar Gray", material: "Aluminum" },
      { id: "v2", name: "Obsidian Black", price_modifier: 10, color: "Obsidian Black", material: "Aluminum" }
    ]
  },
  {
    id: "p2",
    slug: "ryze-gyro-power",
    name: "LED Gyro Powerball",
    price: 8499,
    category: "wellness",
    shortDescription: "Kinetic energy training. Neural-glow LED feedback system.",
    longDescription: "The intersection of physics and performance. The RYZE Gyroball generates up to 15kg of resistance through centrifugal force. Integrated LED lighting provides real-time RPM feedback.",
    images: [
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518459031867-a89b944bffe4?q=80&w=1200&auto=format&fit=crop"
    ],
    specs: [
      { title: "RPM", content: "Up to 18,000 RPM capacity" },
      { title: "Feedback", content: "Dynamic RGB LED Intensity" },
      { title: "Health", content: "RSI Prevention & Grip Strengthening" }
    ],
    variants: [
      { id: "v3", name: "Standard", price_modifier: 0, color: "Neural Blue", material: "Polycarbonate" }
    ]
  },
  {
    id: "p3",
    slug: "ryze-flame-humidifier",
    name: "Flame Smart Humidifier",
    price: 16999,
    category: "wellness",
    shortDescription: "Ultrasonic mist technology with cinematic flame illumination.",
    longDescription: "Ambiance engineered. The RYZE Humidifier uses ultrasonic vibration to create a fine mist, illuminated by precision-placed LEDs to mimic a controlled flame. Controlled via the RYZE app.",
    images: [
      "https://images.unsplash.com/photo-1585837222241-9957918d2cc9?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1570912387496-e4db0a9624b5?q=80&w=1200&auto=format&fit=crop"
    ],
    specs: [
      { title: "Technology", content: "2.4MHz Ultrasonic Atomization" },
      { title: "Capacity", content: "400ml Ceramic Reservoir" },
      { title: "Smart", content: "iOS/Android Connectivity" }
    ],
    variants: [
      { id: "v4", name: "Architect Sand", price_modifier: 0, color: "Architect Sand", material: "Ceramic" }
    ]
  },
  {
    id: "p4",
    slug: "ryze-horizon-earbuds",
    name: "Horizon Earbuds",
    price: 32999,
    category: "audio",
    shortDescription: "Beryllium Drivers / 36h Battery / Zero-latency noise cancellation.",
    longDescription: "Forged from aerospace-grade titanium, featuring a bespoke acoustic architecture. Experience zero-latency active noise cancellation powered by our proprietary NeuralCore™ silicon.",
    images: [
      "https://images.unsplash.com/photo-1590658268037-641154081b85?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1572569438028-4c2e405db9ba?q=80&w=1200&auto=format&fit=crop"
    ],
    specs: [
      { title: "Architecture", content: "Custom 11mm beryllium drivers" },
      { title: "Power", content: "36 hours total listening time" },
      { title: "Connectivity", content: "Bluetooth 5.4 with multipoint" }
    ],
    variants: [
      { id: "v5", name: "Obsidian Black", price_modifier: 0, color: "Obsidian Black", material: "Titanium" },
      { id: "v6", name: "Lunar Silver", price_modifier: 0, color: "Lunar Silver", material: "Titanium" }
    ]
  }
];
