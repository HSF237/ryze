"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/lib/store/useCart";
import DynamicPrice from "@/components/ui/DynamicPrice";
import BatchScarcity from "@/components/ui/BatchScarcity";
import UpsellBundle from "@/components/ui/UpsellBundle";
import { useBatchStore } from "@/lib/store/useBatchStore";
import { formatPrice } from "@/lib/data/products";
import { ChevronDown, MessageCircle, Plus } from "lucide-react";

export default function ProductClient({ product }: { product: any }) {
  const [activeImage, setActiveImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [openSpec, setOpenSpec] = useState<number | null>(0);
  const [showWhatsApp, setShowWhatsApp] = useState(false);
  const { addItem } = useCart();
  const inventory = useBatchStore((state) => state.inventory[product.slug]);
  const isSoldOut = inventory ? inventory.count <= 0 : false;

  // Trigger WhatsApp button after 30 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWhatsApp(true);
    }, 30000);
    return () => clearTimeout(timer);
  }, []);

  const handleAddToCart = () => {
    if (isSoldOut) return;
    addItem({
      id: selectedVariant.id,
      name: product.name,
      price: selectedVariant.price,
      image: product.images[0],
      color: selectedVariant.color,
      material: selectedVariant.material,
    });
  };

  return (
    <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16">
      
      {/* Interactive Gallery */}
      <div className="flex flex-col-reverse md:flex-row gap-6 h-[60vh] lg:h-[80vh]">
        <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-y-auto no-scrollbar w-full md:w-24 shrink-0">
          {product.images.map((img: string, idx: number) => (
            <button 
              key={idx}
              onClick={() => setActiveImage(idx)}
              className={`relative h-20 md:h-24 w-20 md:w-full shrink-0 border ${
                activeImage === idx ? 'border-white/50' : 'border-transparent'
              } opacity-80 hover:opacity-100 transition-all rounded overflow-hidden`}
            >
              <Image src={img} alt={`${product.name} view ${idx + 1}`} fill className="object-cover" />
            </button>
          ))}
        </div>
        
        <div className="relative flex-1 bg-zinc-900 rounded overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeImage}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0"
            >
              <Image 
                src={product.images[activeImage]} 
                alt={product.name} 
                fill 
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Product Details */}
      <div className="flex flex-col justify-center">
        {/* Dynamic Batch Scarcity Engine */}
        <div className="mb-8 border-b border-white/5 pb-8">
          <BatchScarcity productId={product.slug} />
        </div>

        <h1 className="font-playfair text-4xl md:text-5xl font-bold tracking-wide mb-4">
          {product.name}
        </h1>
        
        <DynamicPrice basePrice={selectedVariant.price} className="mb-8" />

        <p className="text-zinc-400 leading-relaxed font-light mb-10">
          {product.description}
        </p>

        {/* Variants Selection */}
        <div className="mb-10 space-y-6">
          <div>
            <div className="flex justify-between items-center mb-4 text-sm tracking-wide font-medium">
              <span className="text-zinc-300">Edition</span>
              <span className="text-white">{selectedVariant.color} ({selectedVariant.material})</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {product.variants.map((variant: any) => (
                <button
                  key={variant.id}
                  onClick={() => setSelectedVariant(variant)}
                  className={`py-3 px-4 text-xs font-semibold tracking-wider uppercase border transition-colors ${
                    selectedVariant.id === variant.id
                      ? "border-white bg-white text-zinc-950"
                      : "border-zinc-800 text-zinc-400 hover:border-zinc-500"
                  }`}
                >
                  {variant.color}
                </button>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={handleAddToCart}
          disabled={isSoldOut}
          className={`w-full py-5 text-sm font-bold tracking-widest uppercase transition-all mb-12 shadow-[0_0_40px_rgba(255,255,255,0.05)] ${
            isSoldOut 
            ? "bg-zinc-900 text-zinc-600 cursor-not-allowed border border-white/5" 
            : "bg-white text-zinc-950 hover:bg-zinc-200 hover:shadow-[0_0_60px_rgba(255,255,255,0.1)]"
          }`}
        >
          {isSoldOut ? "Allocation Closed" : "Secure Your Allocation"}
        </button>
        <UpsellBundle />

        {/* Deep Spec Accordions */}
        <div className="border-t border-zinc-800">
          {product.specs.map((spec: any, idx: number) => (
            <div key={idx} className="border-b border-zinc-800">
              <button
                onClick={() => setOpenSpec(openSpec === idx ? null : idx)}
                className="w-full py-6 flex justify-between items-center text-left hover:text-zinc-300 transition-colors"
              >
                <span className="font-medium tracking-wide text-sm">{spec.title}</span>
                <motion.div
                  animate={{ rotate: openSpec === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={18} className="text-zinc-500" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openSpec === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-sm text-zinc-400 font-light leading-relaxed">
                      {spec.content}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {showWhatsApp && (
          <motion.a
            href="https://wa.me/yourwhatsappnumber"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 50 }}
            className="fixed bottom-24 left-6 lg:bottom-8 lg:left-8 z-[60] bg-emerald-500 text-white p-4 rounded-full shadow-[0_0_30px_rgba(16,185,129,0.3)] hover:scale-105 transition-transform flex items-center justify-center cursor-pointer group"
          >
            <MessageCircle size={24} />
            <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out pl-0 group-hover:pl-3 text-sm font-medium">
              Consult an Architect
            </span>
          </motion.a>
        )}
      </AnimatePresence>

      {/* MOBILE ONLY: Sticky Purchase Bar (The #1 Conversion Booster) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-zinc-950/80 backdrop-blur-xl border-t border-white/10 flex items-center justify-between gap-4">
        <div className="flex flex-col">
          <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Allocation</span>
          <span className="text-lg font-bold text-white">{formatPrice(selectedVariant.price)}</span>
        </div>
        <button
          onClick={handleAddToCart}
          disabled={isSoldOut}
          className={`flex-grow h-14 rounded-full text-xs font-bold tracking-[0.2em] uppercase transition-all flex items-center justify-center gap-2 ${
            isSoldOut 
            ? "bg-zinc-900 text-zinc-600" 
            : "bg-white text-zinc-950"
          }`}
        >
          {isSoldOut ? "Closed" : "Secure"} <Plus size={16} />
        </button>
      </div>
    </div>
  );
}
