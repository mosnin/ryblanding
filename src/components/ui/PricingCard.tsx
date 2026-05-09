"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";
import { ShimmerButton } from "@/components/ui/ShimmerButton";
import { cn } from "@/lib/utils";

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  billing: string;
  savings?: string;
  features: string[];
  cta: string;
  ctaHref?: string;
  popular?: boolean;
  delay?: number;
  inView?: boolean;
  className?: string;
}

export function PricingCard({
  name, price, period, billing, savings, features,
  cta, ctaHref = "/get-started", popular = false,
  delay = 0, inView = true, className,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -4 }}
      className={cn(
        "relative rounded-3xl overflow-hidden",
        popular ? "shadow-2xl shadow-pink-500/20" : "shadow-lg",
        className
      )}
    >
      {popular && (
        <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{ background: "#25AEEB" }}
        />
      )}

      <div className={cn("p-8 h-full", popular ? "bg-[#123244]" : "bg-white")}>
        <div className="flex items-start justify-between mb-6">
          <div>
            <h3 className={cn("text-xl font-bold mb-1", popular ? "text-white" : "text-[#123244]")}>
              {name}
            </h3>
            <p className={cn("text-sm", popular ? "text-white/60" : "text-gray-400")}>{billing}</p>
          </div>
          {popular && (
            <span
              className="px-3 py-1 rounded-full text-xs font-bold text-white"
              style={{ background: "#25AEEB" }}
            >
              Best Value
            </span>
          )}
        </div>

        <div className="mb-2">
          <span className={cn("text-5xl font-black", popular ? "text-white" : "text-[#123244]")}>
            {price}
          </span>
          <span className={cn("text-lg", popular ? "text-white/60" : "text-gray-400")}>{period}</span>
        </div>

        {savings && (
          <span
            className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-6"
            style={{ background: "rgba(34,184,240,0.2)", color: "#22B8F0" }}
          >
            {savings}
          </span>
        )}

        <ul className="space-y-3 mt-6 mb-8">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-3">
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  background: popular ? "rgba(34,184,240,0.2)" : "rgba(255,10,122,0.1)"
                }}
              >
                <Check size={11} style={{ color: popular ? "#22B8F0" : "#FF0A7A" }} />
              </div>
              <span className={cn("text-sm", popular ? "text-white/80" : "text-gray-600")}>{f}</span>
            </li>
          ))}
        </ul>

        {popular ? (
          <ShimmerButton size="lg" className="w-full justify-center">
            <Link href={ctaHref}>{cta}</Link>
          </ShimmerButton>
        ) : (
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href={ctaHref}
              className="block w-full text-center px-6 py-4 rounded-full border-2 border-[#22B8F0] text-[#22B8F0] font-semibold hover:bg-[#22B8F0] hover:text-white transition-all duration-300"
            >
              {cta}
            </Link>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
