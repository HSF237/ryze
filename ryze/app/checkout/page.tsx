"use client";

import { useCart } from "@/lib/store/useCart";
import { formatPrice } from "@/lib/data/products";
import { ShieldCheck, ArrowLeft, Lock, Info } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import MagicCheckout from "@/components/checkout/MagicCheckout";
import { motion } from "framer-motion";
import { useState } from "react";

export default function CheckoutPage() {
  const { items } = useCart();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    address_1: "",
    city: "",
    postcode: "",
    email: "",
    phone: "",
    state: "India"
  });

  const total = items.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-40 flex flex-col items-center justify-center bg-zinc-950 text-white px-6">
        <h2 className="font-playfair text-4xl mb-6 tracking-tighter">Your manifest is empty.</h2>
        <Link href="/shop/all" className="text-xs font-bold uppercase tracking-widest border-b border-white pb-2">
          Return to collection
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-4 mb-12 opacity-40">
           <Link href="/" className="text-[10px] font-bold uppercase tracking-widest hover:text-white transition-colors">Manifest</Link>
           <div className="h-[1px] w-4 bg-white/20" />
           <span className="text-[10px] font-bold uppercase tracking-widest text-white">Allocation Verification</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left Side: Verification Form */}
          <div className="space-y-12">
             <div className="space-y-4">
                <h1 className="font-playfair text-5xl font-bold tracking-tight">Shipping Allocation.</h1>
                <p className="text-zinc-500 font-light text-sm uppercase tracking-widest">Provide coordinates for delivery.</p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                   <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">First Name</label>
                   <input 
                     name="first_name"
                     value={formData.first_name}
                     onChange={handleInputChange}
                     type="text" 
                     className="w-full bg-zinc-900 border border-white/5 p-4 rounded text-sm focus:border-white/20 outline-none transition-all" 
                     placeholder="Enter first name" 
                   />
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">Last Name</label>
                   <input 
                     name="last_name"
                     value={formData.last_name}
                     onChange={handleInputChange}
                     type="text" 
                     className="w-full bg-zinc-900 border border-white/5 p-4 rounded text-sm focus:border-white/20 outline-none transition-all" 
                     placeholder="Enter last name" 
                   />
                </div>
             </div>

             <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">Email Address</label>
                <input 
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  type="email" 
                  className="w-full bg-zinc-900 border border-white/5 p-4 rounded text-sm focus:border-white/20 outline-none transition-all" 
                  placeholder="name@domain.com" 
                />
             </div>

             <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">Shipping Address</label>
                <input 
                  name="address_1"
                  value={formData.address_1}
                  onChange={handleInputChange}
                  type="text" 
                  className="w-full bg-zinc-900 border border-white/5 p-4 rounded text-sm focus:border-white/20 outline-none transition-all" 
                  placeholder="Street name and house number" 
                />
             </div>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-2">
                   <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">City</label>
                   <input 
                     name="city"
                     value={formData.city}
                     onChange={handleInputChange}
                     type="text" 
                     className="w-full bg-zinc-900 border border-white/5 p-4 rounded text-sm focus:border-white/20 outline-none transition-all" 
                   />
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">PIN Code</label>
                   <input 
                     name="postcode"
                     value={formData.postcode}
                     onChange={handleInputChange}
                     type="text" 
                     className="w-full bg-zinc-900 border border-white/5 p-4 rounded text-sm focus:border-white/20 outline-none transition-all" 
                   />
                </div>
             </div>

             <div className="pt-8">
                <MagicCheckout orderData={formData} />
             </div>
          </div>

          {/* Right Side: Manifest Summary */}
          <div className="bg-zinc-900/40 border border-white/5 rounded-2xl p-8 md:p-12 h-fit space-y-12">
             <h3 className="text-xs font-bold uppercase tracking-[0.4em] text-zinc-600">Manifest Summary</h3>
             
             <div className="space-y-8 max-h-[400px] overflow-y-auto pr-4 custom-scrollbar">
                {items.map((item) => (
                   <div key={item.id} className="flex gap-6">
                      <div className="relative h-20 w-20 bg-zinc-800 rounded border border-white/5 overflow-hidden shrink-0">
                         <Image src={item.image} alt={item.name} fill className="object-cover" />
                      </div>
                      <div className="flex flex-col justify-center gap-1">
                         <h4 className="text-sm font-bold uppercase tracking-widest text-white">{item.name}</h4>
                         <p className="text-[10px] text-zinc-500 uppercase tracking-tighter italic">{item.variantName} x {item.quantity}</p>
                         <p className="text-sm font-light mt-2">{formatPrice(item.price * item.quantity)}</p>
                      </div>
                   </div>
                ))}
             </div>

             <div className="space-y-6 pt-12 border-t border-white/5">
                <div className="flex justify-between items-center text-sm font-light">
                   <span className="text-zinc-500 uppercase tracking-widest">Allocation Subtotal</span>
                   <span>{formatPrice(total)}</span>
                </div>
                <div className="flex justify-between items-center text-sm font-light">
                   <span className="text-zinc-500 uppercase tracking-widest">Priority Air Logistics</span>
                   <span className="text-emerald-500 uppercase text-[10px] font-bold tracking-widest">Complimentary</span>
                </div>
                <div className="flex justify-between items-center pt-6 border-t border-white/5">
                   <span className="text-xs font-bold uppercase tracking-[0.4em] text-white">Total Due</span>
                   <span className="text-3xl font-bold tracking-tighter">{formatPrice(total)}</span>
                </div>
             </div>

             <div className="pt-8 flex flex-col gap-4">
                <div className="flex items-center gap-3 text-zinc-500">
                   <Lock size={14} />
                   <span className="text-[9px] uppercase tracking-[0.2em] font-medium">SSL 256-bit Encrypted Session</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-500">
                   <ShieldCheck size={14} />
                   <span className="text-[9px] uppercase tracking-[0.2em] font-medium">PCI-DSS Compliant Infrastructure</span>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}
