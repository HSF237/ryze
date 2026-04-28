"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    const interval = setInterval(() => {
      setProgress(prev => (prev < 100 ? prev + 1 : 100));
    }, 15);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.5 }
          }}
          className="fixed inset-0 z-[100] bg-zinc-950 flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Background Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full" />
          
          <div className="relative z-10 flex flex-col items-center">
            {/* Logo Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-8"
            >
              <h1 className="font-playfair text-6xl md:text-8xl font-bold tracking-[0.2em] text-white">
                RYZE<span className="text-zinc-500">.</span>
              </h1>
            </motion.div>

            {/* Progress Bar Container */}
            <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden">
               <motion.div 
                 initial={{ x: "-100%" }}
                 animate={{ x: "0%" }}
                 transition={{ duration: 2, ease: "easeInOut" }}
                 className="absolute inset-0 bg-white"
               />
            </div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 1 }}
              className="mt-4 text-[10px] tracking-[0.5em] uppercase font-bold text-zinc-400"
            >
              Architecting Reality
            </motion.p>
          </div>

          {/* Abstract Line Art Layer */}
          <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none">
             <motion.path
               initial={{ pathLength: 0 }}
               animate={{ pathLength: 1 }}
               transition={{ duration: 2, ease: "easeInOut" }}
               d="M 0 100 Q 250 50 500 100 T 1000 100"
               stroke="white"
               strokeWidth="0.5"
               fill="none"
             />
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
