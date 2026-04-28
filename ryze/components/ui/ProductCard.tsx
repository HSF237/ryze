"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { useCart } from "@/lib/store/useCart";
import { formatPrice } from "@/lib/data/products";

interface ProductCardProps {
  product: {
    slug: string;
    name: string;
    price: number;
    images: string[];
    specs?: string;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      id: `${product.slug}-default`,
      name: product.name,
      price: product.price,
      image: product.images[0],
      color: "Default",
    });
  };

  return (
    <Link 
      href={`/product/${product.slug}`}
      className="group relative flex flex-col group block bg-zinc-950"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* High-End Badging */}
      {product.price > 300 && (
         <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 rounded-full">
            <span className="text-[9px] font-bold text-white uppercase tracking-[0.3em]">Architect Pick</span>
         </div>
      )}

      {/* Image Container with Hover-to-Swap */}
      <div className="relative aspect-[4/5] w-full bg-zinc-900 overflow-hidden mb-6 luxury-gradient">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className={`object-cover transition-opacity duration-700 ease-in-out ${
            isHovered && product.images[1] ? "opacity-0" : "opacity-100"
          }`}
        />
        {product.images[1] && (
          <Image
            src={product.images[1]}
            alt={`${product.name} alternate view`}
            fill
            className={`object-cover transition-opacity duration-700 ease-in-out absolute inset-0 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />
        )}

        {/* Quick Add Button - Visible on hover or permanently on small touch devices */}
        <AnimatePresence>
          {(isHovered) && (
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={handleQuickAdd}
              className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-zinc-950 p-3 rounded-full hover:bg-white hover:scale-105 transition-all shadow-lg md:flex"
            >
              <Plus size={20} />
            </motion.button>
          )}
        </AnimatePresence>
        
        {/* Mobile-only Permanent Quick Add for UX */}
        <button 
          onClick={handleQuickAdd}
          className="absolute bottom-4 right-4 bg-white text-zinc-950 p-2.5 rounded-full shadow-lg md:hidden flex items-center justify-center"
        >
          <Plus size={18} />
        </button>
      </div>

      {/* Product Details */}
      <div className="flex flex-col flex-grow group-hover:px-2 transition-all duration-500">
        <h3 className="font-playfair text-xl md:text-2xl font-bold text-white mb-2 leading-tight">
          {product.name}
        </h3>
        {product.specs && (
          <p className="text-[10px] text-zinc-500 mb-6 uppercase tracking-[0.2em] font-medium">{product.specs}</p>
        )}
        <p className="font-sans text-lg font-light text-zinc-300 mt-auto flex items-center gap-3">
          <span className="w-8 h-[1px] bg-white/20" />
          {formatPrice(product.price)}
        </p>
      </div>
      
      {/* Animated underline on hover */}
      <div className="h-[1px] w-full bg-white/0 mt-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-[0.76, 0, 0.24, 1]" />
      </div>
    </Link>
  );
}
