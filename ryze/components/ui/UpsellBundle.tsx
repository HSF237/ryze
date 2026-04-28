"use client";

import { motion } from "framer-motion";
import { Plus, ArrowRight } from "lucide-react";
import Image from "next/image";
import { formatPrice } from "@/lib/data/products";

export default function UpsellBundle() {
  return (
    <div className="mt-20 pt-20 border-t border-white/5">
      <h3 className="text-[10px] font-bold tracking-[0.5em] text-zinc-600 uppercase mb-12">The Founder's Collection</h3>
      
      <div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-8 md:p-12 flex flex-col lg:flex-row items-center gap-12 group">
        <div className="flex -space-x-12">
            <div className="relative h-48 w-48 rounded-xl bg-zinc-800 border-2 border-zinc-950 overflow-hidden shadow-2xl z-10">
                <Image src="https://images.unsplash.com/photo-1620626011761-9963d7521476?q=80&w=600&auto=format&fit=crop" alt="Item 1" fill className="object-cover" />
            </div>
            <div className="relative h-48 w-48 rounded-xl bg-zinc-800 border-2 border-zinc-950 overflow-hidden shadow-2xl translate-y-6">
                <Image src="https://images.unsplash.com/photo-1544006659-f0b21884cb1d?q=80&w=600&auto=format&fit=crop" alt="Item 2" fill className="object-cover" />
            </div>
        </div>

        <div className="flex-grow space-y-4 text-center lg:text-left">
          <h4 className="text-2xl font-playfair font-bold text-white leading-tight">Complete the Architecture.</h4>
          <p className="text-sm text-zinc-500 max-w-sm mx-auto lg:mx-0 font-light">
             Add the **Architect Stand** to your order and unlock Batch 001 tiered priority pricing.
          </p>
          <div className="flex items-center justify-center lg:justify-start gap-4 pt-4">
            <span className="text-2xl font-bold text-white">{formatPrice(21999)}</span>
            <span className="text-sm text-zinc-600 line-through">{formatPrice(28498)}</span>
          </div>
        </div>

        <button className="bg-white text-black h-16 px-10 rounded-full font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-zinc-200 transition-all shrink-0">
          Combine Allocation <Plus size={16} />
        </button>
      </div>
    </div>
  );
}
