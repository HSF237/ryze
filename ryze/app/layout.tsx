import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import CartOverlay from "@/components/checkout/CartOverlay";
import AIConcierge from "@/components/ui/AIConcierge";
import Preloader from "@/components/ui/Preloader";
import LuxuryCursor from "@/components/ui/LuxuryCursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RYZE | Luxury Tech",
  description: "Advanced Headless E-commerce Site for RYZE Luxury Tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} scroll-smooth antialiased bg-zinc-950 text-white`}
    >
      <body className="font-sans min-h-screen flex flex-col">
        <div className="grain-overlay" />
        <Preloader />
        <LuxuryCursor />
        <AIConcierge />
        <Navbar />
        <main className="flex-grow">{children}</main>
        {/* Simple Footer just to finish out the layout */}
        <footer className="border-t border-white/10 py-12 text-center text-zinc-500 font-sans text-sm">
          <p>© 2026 RYZE Luxury Tech. All rights reserved.</p>
        </footer>
        <CartOverlay />
      </body>
    </html>
  );
}
