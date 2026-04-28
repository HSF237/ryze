"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, ShoppingCart, DollarSign, Activity, Target } from "lucide-react";

export default function AnalyticsDashboard() {
  const stats = [
    { label: "LTV (Lifetime Value)", value: "₹52,400", change: "+12.4%", icon: Users },
    { label: "CAC (Acquisition Cost)", value: "₹3,200", change: "-8.1%", icon: Target },
    { label: "AOV (Average Order)", value: "₹18,500", change: "+18.2%", icon: ShoppingCart },
    { label: "ROAS (Ad Spend Return)", value: "4.2x", change: "+0.4x", icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 md:px-12 bg-zinc-950 font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h1 className="font-playfair text-4xl font-bold text-white mb-2 tracking-tight">Executive Dashboard</h1>
            <p className="text-zinc-500 text-sm tracking-widest uppercase">RYZE Global Operations | Phase 4 Scaling</p>
          </div>
          <div className="px-4 py-2 border border-white/10 rounded flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold text-white tracking-widest uppercase">Live Telemetry Active</span>
          </div>
        </div>

        {/* Metric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-zinc-900/50 border border-white/5 rounded-2xl hover:border-white/20 transition-all group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-zinc-950 border border-white/5 rounded-xl group-hover:scale-110 transition-transform">
                  <stat.icon size={20} className="text-zinc-400" />
                </div>
                <span className={`text-xs font-bold ${stat.change.startsWith('+') ? 'text-emerald-500' : 'text-zinc-500'}`}>
                  {stat.change}
                </span>
              </div>
              <p className="text-[10px] font-bold text-zinc-600 uppercase tracking-widest mb-1">{stat.label}</p>
              <h3 className="text-3xl font-playfair font-bold text-white">{stat.value}</h3>
            </motion.div>
          ))}
        </div>

        {/* Operational Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 p-8 bg-zinc-900/50 border border-white/5 rounded-2xl h-[400px] flex items-center justify-center">
             <div className="text-center">
                <Activity size={48} className="text-zinc-800 mb-4 mx-auto" />
                <p className="text-zinc-600 text-sm font-playfair italic">Scaling Graph Telemetry Visualization Placeholder</p>
             </div>
          </div>
          
          <div className="p-8 bg-zinc-900 border border-white/5 rounded-2xl space-y-8">
            <h3 className="text-sm font-bold tracking-widest uppercase text-white">Operational Health</h3>
            
            <div className="space-y-4">
               <div>
                  <div className="flex justify-between text-[10px] uppercase tracking-widest font-bold mb-2">
                     <span className="text-zinc-500">Supplier Connection</span>
                     <span className="text-emerald-500">99.8% Sync</span>
                  </div>
                  <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                     <div className="h-full bg-emerald-500 w-[99.8%]" />
                  </div>
               </div>
               
               <div>
                  <div className="flex justify-between text-[10px] uppercase tracking-widest font-bold mb-2">
                     <span className="text-zinc-500">Email Automation Flow</span>
                     <span className="text-zinc-300">Active</span>
                  </div>
                  <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                     <div className="h-full bg-white w-full" />
                  </div>
               </div>

               <div>
                  <div className="flex justify-between text-[10px] uppercase tracking-widest font-bold mb-2">
                     <span className="text-zinc-500">Inventory Scarcity Trigger</span>
                     <span className="text-zinc-300">Ready</span>
                  </div>
                  <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                     <div className="h-full bg-white w-full opacity-50" />
                  </div>
               </div>
            </div>

            <button className="w-full py-4 bg-white text-zinc-950 text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-zinc-200 transition-colors">
               Generate Shift Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
