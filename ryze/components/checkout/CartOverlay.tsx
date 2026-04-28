"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "@/lib/store/useCart";
import { formatPrice } from "@/lib/data/products";
import Image from "next/image";
import Link from "next/link";

export default function CartOverlay() {
  const { items, isOpen, toggleCart, removeItem } = useCart();
  const total = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleCart}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />
          <motion.div 
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-screen w-full max-w-md bg-zinc-950 border-l border-white/10 z-[101] flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="p-8 border-b border-white/5 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <ShoppingBag size={20} className="text-white" />
                <h2 className="text-lg font-bold uppercase tracking-widest text-white">Your Manifest</h2>
              </div>
              <button onClick={toggleCart} className="p-2 hover:bg-white/5 rounded-full text-zinc-500 transition-colors">
                <X size={20} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-grow overflow-y-auto p-8 space-y-8 custom-scrollbar">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <p className="text-zinc-500 font-light italic">Your collection is currently empty.</p>
                  <button onClick={toggleCart} className="text-xs font-bold uppercase tracking-[0.3em] text-white border-b border-white/20 pb-1">
                    Begin Selection
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-6 group">
                    <div className="relative h-24 w-24 rounded-lg bg-zinc-900 overflow-hidden flex-shrink-0 border border-white/5">
                      <Image src={item.image} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex flex-col justify-center flex-grow">
                      <div className="flex justify-between items-start">
                        <h3 className="text-sm font-bold text-white uppercase tracking-wider">{item.name}</h3>
                        <button onClick={() => removeItem(item.id)} className="text-xs text-zinc-600 hover:text-white transition-colors">Remove</button>
                      </div>
                      <p className="text-xs text-zinc-500 mt-1 uppercase tracking-tighter italic">{item.variantName}</p>
                      <p className="text-sm text-white mt-3 font-light">{formatPrice(item.price)}</p>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-8 border-t border-white/5 bg-zinc-900/50 space-y-6">
                <div className="flex justify-between items-end">
                  <span className="text-[10px] items-center uppercase tracking-[0.5em] text-zinc-500 font-bold">Total Allocation</span>
                  <span className="text-2xl font-bold text-white tracking-tighter">{formatPrice(total)}</span>
                </div>
                <Link 
                  href="/checkout" 
                  onClick={toggleCart}
                  className="w-full bg-white text-black py-5 flex items-center justify-center gap-3 group hover:bg-zinc-200 transition-all font-bold uppercase tracking-[0.2em] text-xs"
                >
                  Proceed to Checkout <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <p className="text-[9px] text-center text-zinc-600 uppercase tracking-widest font-medium"> Complimentary Insured Shipping Applied </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
