'use client';

import './globals.css';
import { CartProvider } from '@/lib/cart';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import AnnouncementBar from '@/components/AnnouncementBar';

export const metadata = {
  title: 'RYZE — Rise Up. Stand Tall. | Smart Posture Trainer',
  description: 'Meet AeroPosture™ by RYZE — the smart posture trainer that gently retrains your back in 30 days. Free worldwide shipping. 60-day money-back guarantee.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-ink-900 font-sans">
        <CartProvider>
          <AnnouncementBar />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
