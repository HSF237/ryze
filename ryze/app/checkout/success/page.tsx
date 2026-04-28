"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Package, ArrowRight, Share2 } from "lucide-react";
import { useCart } from "@/lib/store/useCart";

export default function CheckoutSuccessPage() {
  const { clearCart } = useCart();
  const [unboxed, setUnboxed] = useState(false);

  useEffect(() => {
    clearCart();
    const timer = setTimeout(() => setUnboxed(true), 1500);
    return () => clearTimeout(timer);
  }, [clearCart]);

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 flex flex-col items-center justify-center bg-zinc-950">
      <div className="max-w-2xl w-full text-center">
        {/* Unboxing Animation Overlay */}
        <AnimatePresence>
          {!unboxed && (
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.2, opacity: 0 }}
              className="mb-12 flex justify-center"
            >
              <div className="relative h-48 w-48 border-2 border-white/20 rounded-lg flex items-center justify-center">
                <Package size={64} className="text-zinc-600 animate-bounce" />
                <motion.div 
                  className="absolute inset-0 bg-white"
                  initial={{ height: "100%" }}
                  animate={{ height: "0%" }}
                  transition={{ delay: 1, duration: 0.5 }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {unboxed && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="flex justify-center mb-6">
              <CheckCircle size={80} className="text-emerald-500" />
            </div>
            
            <h1 className="font-playfair text-5xl md:text-7xl font-bold tracking-tight text-white">
              Allocation Secured.
            </h1>
            
            <p className="text-xl text-zinc-500 font-light max-w-lg mx-auto leading-relaxed">
              Your order RZ-92841 is being processed via our global fulfillment pipeline. You will receive telemetry updates shortly.
            </p>

            <div className="pt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link 
                href="/track-your-order"
                className="flex items-center justify-center space-x-3 bg-white text-zinc-950 py-5 px-8 font-bold uppercase tracking-widest text-xs hover:bg-zinc-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)]"
              >
                <span>Track Telemetry</span>
                <ArrowRight size={16} />
              </Link>
              
              <button 
                className="flex items-center justify-center space-x-3 border border-white/10 text-white py-5 px-8 font-bold uppercase tracking-widest text-xs hover:bg-white/5 transition-all"
                onClick={() => {
                  navigator.share?.({
                    title: 'Joined the RYZE Batch',
                    text: 'Just secured my allocation from RYZE Batch 04.',
                    url: window.location.origin
                  });
                }}
              >
                <Share2 size={16} />
                <span>Refer an Architect</span>
              </button>
            </div>

            <div className="mt-20 p-8 bg-zinc-900/50 border border-white/5 rounded text-left">
              <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-zinc-600 mb-4">Post-Purchase Status</h3>
              <div className="flex items-center space-x-3">
                <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <p className="text-sm font-medium text-zinc-300">Supplier Handshake: SUCCESS</p>
              </div>
              <p className="mt-2 text-xs text-zinc-500 ml-5">Logistics unit assigned: DHL-PREMIUM-AIR</p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
