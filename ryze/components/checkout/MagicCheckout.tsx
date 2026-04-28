"use client";

import { useState } from "react";
import { ShieldCheck, Truck, Zap } from "lucide-react";
import { motion } from "framer-motion";

import { createFirebaseOrder } from "@/lib/services/orderService";
import { useRouter } from "next/navigation";
import { useCart } from "@/lib/store/useCart";

export default function MagicCheckout({ orderData }: { orderData: any }) {
  const [processing, setProcessing] = useState(false);
  const { items } = useCart();
  const router = useRouter();

  const handleMagicCheckout = async () => {
    if (!orderData.first_name || !orderData.email) {
      alert("Please provide your delivery coordinates first.");
      return;
    }

    setProcessing(true);
    try {
      const total = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
      await createFirebaseOrder({
        ...orderData,
        line_items: items.map(i => ({ product_id: i.id, name: i.name, quantity: i.quantity, price: i.price })),
        total: total
      });
      
      router.push("/checkout/success");
    } catch (error) {
      console.error("Checkout Failed:", error);
      alert("Allocation failed. Please check your telemetry connection.");
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="p-6 border border-white/10 bg-zinc-900/50 rounded-lg">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-playfair text-xl font-bold">RYZE Magic Checkout</h3>
        <Zap size={20} className="text-amber-400 fill-amber-400" />
      </div>
      
      <p className="text-xs text-zinc-500 mb-6 leading-relaxed">
        Optimized for the Indian market. Addresses and payments are pre-filled via Razorpay/Cashfree secure vault.
      </p>

      <button 
        onClick={handleMagicCheckout}
        disabled={processing}
        className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-4 rounded font-bold uppercase tracking-widest text-xs flex items-center justify-center space-x-2 transition-all"
      >
        {processing ? (
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full"
          />
        ) : (
          <>
            <ShieldCheck size={16} />
            <span>One-Click Secure Pay</span>
          </>
        )}
      </button>

      <div className="mt-4 flex items-center justify-center space-x-4 opacity-40 grayscale">
        <Truck size={14} />
        <span className="text-[10px] uppercase tracking-tighter">Priority Air Shipping Included</span>
      </div>
    </div>
  );
}
