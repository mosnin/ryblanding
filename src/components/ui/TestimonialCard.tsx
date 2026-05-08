"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  handle: string;
  months: string;
  delay?: number;
  inView?: boolean;
}

export function TestimonialCard({
  quote, name, handle, months, delay = 0, inView = true
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -4 }}
      className="relative rounded-3xl p-8 bg-[#F5F7FA] border border-gray-100 hover:shadow-lg transition-all duration-300 group"
    >
      {/* Quote icon */}
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
        style={{ background: "linear-gradient(135deg, #22B8F0, #FF0A7A)" }}
      >
        <Quote size={18} className="text-white" />
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <span key={i} style={{ color: "#FF0A7A" }}>★</span>
        ))}
      </div>

      {/* Quote */}
      <p className="text-[#123244] text-lg font-medium leading-relaxed mb-6">
        &ldquo;{quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full"
          style={{ background: "linear-gradient(135deg, #22B8F0, #FF0A7A)", opacity: 0.4 }}
        />
        <div>
          <p className="font-semibold text-[#123244] text-sm">{name}</p>
          <p className="text-gray-400 text-xs">{handle} · {months}</p>
        </div>
      </div>
    </motion.div>
  );
}
