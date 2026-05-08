"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShimmerButton } from "@/components/ui/ShimmerButton";
import { Zap, UtensilsCrossed, TrendingUp, Heart } from "lucide-react";

const stats = [
  { icon: Zap, label: "20–40 min workouts", color: "#22B8F0" },
  { icon: UtensilsCrossed, label: "Custom meal plans", color: "#FF0A7A" },
  { icon: TrendingUp, label: "Progress tracking", color: "#22B8F0" },
  { icon: Heart, label: "Postpartum friendly", color: "#FF0A7A" },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(-45deg, #0a2233, #123244, #1a4462, #0d2d42)",
          backgroundSize: "400% 400%",
          animation: "gradient-x 12s ease infinite",
        }}
      />

      {/* Orb decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-[#22B8F0]/15 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#FF0A7A]/10 blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full bg-[#22B8F0]/10 blur-2xl animate-float-slow" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left: Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm font-medium mb-8 backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#22B8F0] animate-pulse" />
              Premium Coaching for Women
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6"
            >
              Raise Your{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #22B8F0 0%, #FF0A7A 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Bar
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-white/70 leading-relaxed mb-10 max-w-xl"
            >
              Glute focused training, custom nutrition, and confidence coaching
              for busy women ready to feel strong in real life.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 mb-16"
            >
              <ShimmerButton size="lg">
                <Link href="/get-started" className="flex items-center gap-2">
                  Start Today
                </Link>
              </ShimmerButton>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/get-started#pricing"
                  className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  See What&apos;s Included
                </Link>
              </motion.div>
            </motion.div>

            {/* Floating stat cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 gap-3"
            >
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    whileHover={{ scale: 1.03, y: -2 }}
                    className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm"
                    style={{ animation: `float ${4 + i * 0.5}s ease-in-out ${i * 0.3}s infinite` }}
                  >
                    <div
                      className="p-2 rounded-xl"
                      style={{ background: `${stat.color}20` }}
                    >
                      <Icon size={16} style={{ color: stat.color }} />
                    </div>
                    <span className="text-white/90 text-sm font-medium">{stat.label}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Right: Hero Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(34,184,240,0.1) 0%, rgba(255,10,122,0.1) 100%)",
                border: "1px solid rgba(255,255,255,0.15)",
                backdropFilter: "blur(10px)",
              }}
            >
              {/* Decorative glow */}
              <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-[#22B8F0]/30 blur-2xl" />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-[#FF0A7A]/20 blur-2xl" />

              {/* Placeholder */}
              <div className="relative aspect-[4/5] flex flex-col items-center justify-center p-12">
                <div className="absolute inset-0 rounded-3xl"
                  style={{
                    background: "linear-gradient(135deg, rgba(34,184,240,0.08) 0%, rgba(255,10,122,0.08) 100%)"
                  }}
                />
                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 rounded-full mx-auto mb-4"
                    style={{
                      background: "linear-gradient(135deg, #22B8F0, #FF0A7A)",
                      opacity: 0.3
                    }}
                  />
                  <div className="space-y-2">
                    <div className="h-2 rounded-full bg-white/20 w-40 mx-auto" />
                    <div className="h-2 rounded-full bg-white/15 w-32 mx-auto" />
                    <div className="h-2 rounded-full bg-white/10 w-36 mx-auto" />
                  </div>
                  <p className="mt-8 text-white/40 text-sm font-medium tracking-wide uppercase">
                    Hero image placeholder
                  </p>
                </div>
              </div>
            </div>

            {/* Floating accent badge */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 px-5 py-3 rounded-2xl bg-white shadow-xl shadow-pink-500/20"
            >
              <span className="text-[#123244] font-bold text-sm">Join 2,000+ women</span>
            </motion.div>

            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 px-4 py-2 rounded-xl bg-gradient-to-r from-[#22B8F0] to-[#FF0A7A] text-white text-xs font-bold shadow-lg"
            >
              ✦ Results Guaranteed
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L1440 80L1440 40C1440 40 1080 0 720 0C360 0 0 40 0 40L0 80Z" fill="#FFFFFF" />
        </svg>
      </div>
    </section>
  );
}
