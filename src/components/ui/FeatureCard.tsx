"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  color?: string;
  delay?: number;
  inView?: boolean;
  variant?: "default" | "compact";
  className?: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  color = "#22B8F0",
  delay = 0,
  inView = true,
  variant = "default",
  className,
}: FeatureCardProps) {
  if (variant === "compact") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay }}
        whileHover={{ y: -4, scale: 1.02 }}
        className={cn(
          "group flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-white shadow-sm hover:shadow-lg transition-all duration-300",
          className
        )}
      >
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
          style={{ background: `${color}15` }}
        >
          <Icon size={22} style={{ color }} />
        </div>
        <span className="text-sm font-semibold text-[#123244] leading-snug">{title}</span>
        <div
          className="mt-3 w-5 h-5 rounded-full flex items-center justify-center"
          style={{ background: `${color}20` }}
        >
          <span style={{ color }} className="text-xs">✓</span>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className={cn(
        "group relative rounded-3xl p-8 border border-gray-100 bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden",
        className
      )}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"
        style={{ background: `linear-gradient(135deg, ${color}08 0%, ${color}04 100%)` }}
      />
      <div className="relative z-10">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
          style={{ background: `${color}15` }}
        >
          <Icon size={24} style={{ color }} />
        </div>
        <h3 className="text-xl font-bold text-[#123244] mb-3">{title}</h3>
        {description && <p className="text-gray-500 leading-relaxed">{description}</p>}
      </div>
    </motion.div>
  );
}
