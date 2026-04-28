"use client";

import { useState } from "react";
import { Search, Package, Truck, CheckCircle, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function TrackingPage() {
  const [orderId, setOrderId] = useState("");
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState<any>(null);

  const handleTrack = () => {
    setLoading(true);
    // Simulated lookup logic - in reality, you'd fetch from Firebase here
    setTimeout(() => {
      setOrder({
        id: orderId || "RZ-92841",
        status: "In Transit",
        location: "Mumbai Distribution Hub",
        eta: "April 30, 2026",
        steps: [
          { label: "Allocation Secured", date: "April 28", completed: true },
          { label: "Quality Manifest Verified", date: "April 28", completed: true },
          { label: "Handed to Air Logistics", date: "April 29", completed: true },
          { label: "In Transit", date: "Today", completed: false },
        ]
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white pt-40 pb-24 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h1 className="font-playfair text-5xl font-bold tracking-tight">Order Telemetry.</h1>
          <p className="text-zinc-500 uppercase tracking-[0.3em] text-[10px] font-bold">Track your allocation in real-time</p>
        </div>

        <div className="relative mb-12">
          <input 
            type="text" 
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            placeholder="Enter Order ID (e.g. RZ-92841)"
            className="w-full bg-zinc-900 border border-white/5 p-6 rounded-xl text-lg focus:border-white/20 outline-none transition-all pr-16"
          />
          <button 
            onClick={handleTrack}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white text-zinc-950 rounded-lg hover:bg-zinc-200 transition-colors"
          >
            <Search size={20} />
          </button>
        </div>

        <AnimatePresence>
          {loading && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="flex justify-center py-12"
            >
              <div className="h-8 w-8 border-2 border-white/20 border-t-white rounded-full animate-spin" />
            </motion.div>
          )}

          {order && !loading && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-zinc-900/50 border border-white/5 rounded-2xl p-8 space-y-12"
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-1">Status</p>
                  <h3 className="text-2xl font-playfair font-bold text-emerald-500">{order.status}</h3>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-1">Expected Arrival</p>
                  <h3 className="text-xl font-bold text-white">{order.eta}</h3>
                </div>
              </div>

              <div className="space-y-8">
                {order.steps.map((step: any, i: number) => (
                  <div key={i} className="flex gap-6 relative">
                    {i !== order.steps.length - 1 && (
                      <div className={`absolute left-3 top-8 w-[2px] h-12 ${step.completed ? 'bg-emerald-500' : 'bg-zinc-800'}`} />
                    )}
                    <div className={`h-6 w-6 rounded-full flex items-center justify-center shrink-0 z-10 ${step.completed ? 'bg-emerald-500' : 'bg-zinc-800 border border-white/10'}`}>
                      {step.completed ? <CheckCircle size={14} className="text-zinc-950" /> : <Clock size={12} className="text-zinc-500" />}
                    </div>
                    <div className="flex justify-between w-full items-center">
                      <span className={`text-sm font-bold uppercase tracking-widest ${step.completed ? 'text-white' : 'text-zinc-600'}`}>{step.label}</span>
                      <span className="text-[10px] text-zinc-500 font-medium">{step.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
