"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Globe, Zap, Shield, Cpu } from "lucide-react";

export default function HomeClient({ children }: { children: React.ReactNode }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const revealVariants: Variants = {
    hidden: { y: 100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } as any
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <div ref={containerRef} className="bg-zinc-950 min-h-screen selection:bg-white selection:text-zinc-950">
      
      {/* 1. HERO: Cinematic Reveal */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div style={{ scale: heroScale, opacity: heroOpacity }} className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1620626011761-9963d7521476?q=80&w=2000&auto=format&fit=crop"
            alt="RYZE Architectural Essence"
            fill
            className="object-cover opacity-40 mix-blend-luminosity grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-zinc-950/20" />
        </motion.div>
        
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mb-8 flex justify-center"
          >
            <div className="px-6 py-2 border border-white/10 rounded-full bg-white/5 backdrop-blur-md flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-zinc-400">Batch 001 Allocation Live</span>
            </div>
          </motion.div>

          <div className="overflow-hidden mb-6">
            <motion.h1 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-playfair text-6xl sm:text-[8rem] md:text-[10rem] lg:text-[12rem] font-bold leading-tight tracking-tighter text-white"
            >
              RYZE<span className="text-zinc-600">.</span>
            </motion.h1>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-2xl font-light tracking-wide text-zinc-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Instruments for high-performance minds. Architecting the intersection of <span className="text-white italic">precision engineering</span> and biological wellness.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link 
              href="/shop/all"
              className="group relative px-12 py-6 bg-white text-zinc-950 font-bold uppercase tracking-widest text-xs overflow-hidden transition-all duration-500"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-500">Secure Your Allocation</span>
              <div className="absolute inset-0 bg-zinc-900 w-0 group-hover:w-full transition-all duration-500 ease-[0.76, 0, 0.24, 1]" />
            </Link>
            <button className="text-zinc-500 hover:text-white text-xs font-bold uppercase tracking-[0.3em] transition-colors border-b border-transparent hover:border-white pb-1">
              Watch The Manifesto
            </button>
          </motion.div>
        </div>

        <motion.div 
           animate={{ y: [0, 10, 0] }}
           transition={{ repeat: Infinity, duration: 2 }}
           className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30"
        >
           <div className="h-10 w-[1px] bg-gradient-to-b from-transparent to-white" />
        </motion.div>
      </section>

      {/* 2. REAL INVENTORY SECTION */}
      <section className="py-40 px-6 border-t border-white/5 relative bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-8">
             <div className="space-y-4 text-center md:text-left">
                <h2 className="font-playfair text-6xl md:text-8xl font-bold text-white tracking-tighter">The Manifest<span className="text-zinc-700">.</span></h2>
                <div className="h-1 w-24 bg-white mx-auto md:mx-0" />
             </div>
             <p className="text-zinc-500 max-w-sm text-sm font-light leading-relaxed uppercase tracking-[0.2em] text-center md:text-right">
               Verified Allocations. Sourced for the high-performance mind.
             </p>
          </div>
          {children}
        </div>
      </section>

      {/* 4. CALL TO ACTION */}
      <section className="relative py-48 bg-white text-zinc-950 text-center overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="absolute inset-0 flex items-center justify-center opacity-[0.03]"
        >
          <h2 className="text-[30rem] font-bold">RYZE</h2>
        </motion.div>
        
        <div className="relative z-10 px-6">
          <h2 className="font-playfair text-6xl md:text-8xl font-bold mb-8 tracking-tighter">Ready to Elevate?</h2>
          <p className="text-xl md:text-2xl font-light mb-12 max-w-xl mx-auto text-zinc-600">
            Join the elite circle of owners architecting the next era of performance.
          </p>
          <Link href="/shop/all" className="inline-flex items-center gap-4 bg-zinc-950 text-white px-12 py-6 font-bold uppercase tracking-widest text-xs hover:bg-zinc-800 transition-colors">
            Access The Vault <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="py-20 bg-zinc-950 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-16 items-center">
           <div className="flex flex-col gap-2">
             <div className="flex items-center gap-3 text-zinc-500">
               <Zap size={16} />
               <span className="text-[10px] font-bold tracking-widest uppercase">Razorpay Secure India Gateway</span>
             </div>
             <div className="flex items-center gap-3 text-zinc-500">
               <Shield size={16} />
               <span className="text-[10px] font-bold tracking-widest uppercase">UPI & EMI Available</span>
             </div>
           </div>
           <div className="text-center flex flex-col items-center">
              <h2 className="font-playfair text-3xl font-bold text-white mb-2">RYZE<span className="text-zinc-500">.</span></h2>
              <p className="text-[9px] uppercase tracking-[0.4em] text-zinc-600 font-bold">Engineering The Human Horizon</p>
           </div>
           <div className="flex flex-col items-end gap-4">
              <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest text-zinc-500">
                 <Link href="/policies" className="hover:text-white transition-colors">Privacy</Link>
                 <Link href="/policies" className="hover:text-white transition-colors">Terms</Link>
                 <Link href="/support" className="hover:text-white transition-colors">Help</Link>
              </div>
              <p className="text-[10px] text-zinc-700">© 2026 RYZE GLOBAL | ARCHITECT SERIES B001</p>
           </div>
        </div>
      </footer>
    </div>
  );
}
