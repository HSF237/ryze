"use client";

import { useUserStore } from "@/lib/store/useUserStore";
import { motion } from "framer-motion";

interface DynamicPriceProps {
  basePrice: number;
  className?: string;
}

export default function DynamicPrice({ basePrice, className }: DynamicPriceProps) {
  const { profile, getDiscountMultiplier } = useUserStore();
  const multiplier = getDiscountMultiplier();
  const finalPrice = basePrice * multiplier;
  const hasDiscount = multiplier < 1;

  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex items-center gap-3">
        <span className="font-playfair text-2xl font-bold text-white">
          ${finalPrice.toFixed(2)}
        </span>
        {hasDiscount && (
          <span className="text-zinc-500 line-through text-sm">
            ${basePrice.toFixed(2)}
          </span>
        )}
      </div>
      
      {hasDiscount && (
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="mt-1 inline-flex items-center px-2 py-0.5 rounded bg-white/5 border border-white/10"
        >
          <span className="text-[10px] uppercase tracking-widest font-bold text-zinc-300">
            {profile?.tier} BENEFIT APPLIED
          </span>
        </motion.div>
      )}
    </div>
  );
}
