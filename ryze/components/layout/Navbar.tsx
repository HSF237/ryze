"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingBag, Menu, X, Search } from "lucide-react";
import { useCart } from "@/lib/store/useCart";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { toggleCart, items } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
    <div className="fixed top-0 left-0 right-0 z-50 bg-white text-zinc-950 py-1.5 overflow-hidden">
      <div className="flex animate-infinite-scroll whitespace-nowrap">
        <span className="text-[9px] font-bold uppercase tracking-[0.4em] px-12 italic">Batch 001 Now Shipping Locally (India)</span>
        <span className="text-[9px] font-bold uppercase tracking-[0.4em] px-12 italic">Batch 001 Now Shipping Locally (India)</span>
        <span className="text-[9px] font-bold uppercase tracking-[0.4em] px-12 italic">Batch 001 Now Shipping Locally (India)</span>
      </div>
    </div>
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 mt-[30px] ${
        scrolled 
          ? "bg-zinc-950/80 backdrop-blur-xl border-b border-white/5 py-4" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-zinc-300 hover:text-white"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu size={24} />
        </button>

        {/* Brand */}
        <Link href="/" className="font-playfair text-2xl md:text-3xl font-bold tracking-widest text-white">
          RYZE<span className="text-zinc-500">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-10 text-sm font-medium tracking-wide">
          <Link href="/shop/all" className="text-zinc-400 hover:text-white transition-colors">SHOP</Link>
          <Link href="/about" className="text-zinc-400 hover:text-white transition-colors">ETHOS</Link>
          <Link href="/process" className="text-zinc-400 hover:text-white transition-colors">ENGINEERING</Link>
          <Link href="/support" className="text-zinc-400 hover:text-white transition-colors">SUPPORT</Link>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-5">
          <button className="hidden md:block text-zinc-400 hover:text-white transition-colors">
            <Search size={20} />
          </button>
          <button 
            className="relative text-zinc-400 hover:text-white transition-colors"
            onClick={toggleCart}
          >
            <ShoppingBag size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-white text-zinc-950 text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-50 bg-zinc-950 flex flex-col p-6 border-r border-white/10 md:hidden"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="font-playfair text-2xl font-bold tracking-widest text-white">RYZE<span className="text-zinc-500">.</span></span>
              <button 
                className="text-zinc-400 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X size={24} />
              </button>
            </div>
            
            <nav className="flex flex-col space-y-8 text-xl font-medium tracking-wide">
              <Link href="/shop/all" onClick={() => setMobileMenuOpen(false)} className="text-white">Shop</Link>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="text-zinc-400 hover:text-white transition-colors">Ethos</Link>
              <Link href="/process" onClick={() => setMobileMenuOpen(false)} className="text-zinc-400 hover:text-white transition-colors">Engineering</Link>
              <Link href="/support" onClick={() => setMobileMenuOpen(false)} className="text-zinc-400 hover:text-white transition-colors">Support</Link>
              <Link href="/track-your-order" onClick={() => setMobileMenuOpen(false)} className="text-zinc-400 hover:text-white transition-colors">Track Order</Link>
            </nav>
            
            <div className="mt-auto pb-8">
              <div className="text-sm text-zinc-600">Premium Tech Built For Tomorrow.</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
    </>
  );
}
