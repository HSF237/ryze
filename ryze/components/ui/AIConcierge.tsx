"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, Bot, ShieldCheck } from "lucide-react";

export default function AIConcierge() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", content: "Greetings. I am the RYZE Concierge. How may I optimize your experience today?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { role: "user", content: input }]);
    setInput("");

    // Mock AI Response Logic
    setTimeout(() => {
      let reply = "I am processing your architectural technical inquiry. One moment.";
      if (input.toLowerCase().includes("status")) reply = "Order RZ-92841 is currently in-transit via DHL Premium Air. Estimated arrival: 48 hours.";
      if (input.toLowerCase().includes("return")) reply = "Our scaling protocol allows returns within 14 days of allocation. I've initiated a support ticket for you.";
      
      setMessages(prev => [...prev, { role: "bot", content: reply }]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Trigger */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 h-16 w-16 bg-white text-zinc-950 rounded-full shadow-[0_0_50px_rgba(255,255,255,0.2)] flex items-center justify-center hover:scale-110 transition-transform"
      >
        <MessageSquare size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-24 right-4 left-4 md:left-auto md:bottom-28 md:right-8 z-50 w-auto md:w-full md:max-w-[380px] h-[70vh] md:h-[550px] bg-zinc-900 border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 bg-zinc-950 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 bg-white/5 rounded-full flex items-center justify-center text-white">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-bold tracking-widest text-white uppercase">RYZE AI Concierge</h3>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] text-zinc-500 uppercase tracking-tighter">Operational</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-zinc-500 hover:text-white">
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[80%] p-4 text-xs leading-relaxed ${
                    m.role === "user" 
                    ? "bg-white text-zinc-950 rounded-l-xl rounded-tr-xl font-medium" 
                    : "bg-zinc-800 text-zinc-300 rounded-r-xl rounded-tl-xl"
                  }`}>
                    {m.content}
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Footer */}
            <div className="px-6 py-2 bg-zinc-950/50 flex items-center gap-2">
              <ShieldCheck size={12} className="text-zinc-600" />
              <span className="text-[9px] text-zinc-600 uppercase tracking-widest">End-to-End Encrypted Support</span>
            </div>

            {/* Input */}
            <div className="p-4 bg-zinc-950 border-t border-white/5 flex gap-2">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Inquire about allocation status..."
                className="flex-1 bg-zinc-900 border border-white/5 rounded-lg px-4 py-3 text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-white/20"
              />
              <button 
                onClick={handleSend}
                className="h-10 w-10 bg-white text-zinc-950 rounded-lg flex items-center justify-center hover:bg-zinc-200 transition-colors"
              >
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
