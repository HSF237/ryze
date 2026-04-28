"use client";

import { useEffect } from "react";
import { useBatchStore } from "@/lib/store/useBatchStore";
import { motion } from "framer-motion";

interface BatchScarcityProps {
  productId: string;
}

export default function BatchScarcity({ productId }: BatchScarcityProps) {
  const stock = useBatchStore((state) => state.inventory[productId]);
  const simulateSale = useBatchStore((state) => state.simulateLiveSale);

  useEffect(() => {
    const interval = setInterval(() => {
      simulateSale(productId);
    }, 15000); // Check for a simulated sale every 15 seconds
    return () => clearInterval(interval);
  }, [productId, simulateSale]);

  if (!stock) return null;

  const percentage = (stock.count / stock.total) * 100;
  const isSoldOut = stock.count <= 0;

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-end">
        <div>
          <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-500 block mb-1">
            Current Allocation
          </span>
          <span className="text-sm font-medium text-white">
            Batch {stock.batchId}
          </span>
        </div>
        <div className="text-right">
          <span className={`text-xs font-bold uppercase tracking-widest ${isSoldOut ? 'text-red-500' : 'text-zinc-300'}`}>
            {isSoldOut ? "Allocation Excluded" : `${stock.count} Units Remaining`}
          </span>
        </div>
      </div>

      <div className="h-1 w-full bg-zinc-900 rounded-full overflow-hidden relative">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className={`h-full rounded-full ${
            isSoldOut ? "bg-red-900" : percentage < 20 ? "bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]" : "bg-white"
          }`}
        />
      </div>

      {isSoldOut && (
        <p className="text-[10px] text-zinc-600 uppercase tracking-widest">
          Join the waitlist for Batch {parseInt(stock.batchId.split('-')[1]) + 1}
        </p>
      )}
    </div>
  );
}
