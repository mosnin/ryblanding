"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ShimmerButton } from "@/components/ui/ShimmerButton";
import { Zap, UtensilsCrossed, TrendingUp, Heart } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const stats = [
  { icon: Zap,              label: "20–40 min workouts",  color: "#22B8F0", floatClass: "animate-float" },
  { icon: UtensilsCrossed,  label: "Custom meal plans",   color: "#FF0A7A", floatClass: "animate-float-delayed" },
  { icon: TrendingUp,       label: "Progress tracking",   color: "#22B8F0", floatClass: "animate-float-slow" },
  { icon: Heart,            label: "Postpartum friendly",  color: "#FF0A7A", floatClass: "animate-float-reverse" },
];

export function Hero() {
  const reduce = useReducedMotion();

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

      {/* Background orbs */}
      <div className="absolute top-20 left-10 w-80 h-80 rounded-full bg-[#22B8F0]/15 blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-[28rem] h-[28rem] rounded-full bg-[#FF0A7A]/10 blur-3xl animate-float-delayed" />
      {/* Third centre-depth orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] rounded-full bg-[#22B8F0]/6 blur-[100px] animate-float-slow pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* ── Left: Content ── */}
          <div>
            {/* Badge */}
            <motion.div
              initial={reduce ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0, ease: EASE }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/80 font-medium mb-8 backdrop-blur-sm"
              style={{ fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase" }}
            >
              <span className="w-2 h-2 rounded-full bg-[#22B8F0] animate-pulse" />
              Premium Coaching for Women
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={reduce ? {} : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: EASE }}
              className="font-black text-white tracking-tight leading-[1.0] mb-6"
              style={{ fontSize: "clamp(2.75rem, 7vw, 5rem)" }}
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
              initial={reduce ? {} : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16, ease: EASE }}
              className="text-[18px] sm:text-[20px] text-white/65 leading-relaxed mb-10 max-w-lg"
            >
              Glute focused training, custom nutrition, and confidence coaching
              for busy women ready to feel strong in real life.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={reduce ? {} : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24, ease: EASE }}
              className="flex flex-wrap gap-4 mb-14"
            >
              <ShimmerButton size="lg">
                <Link href="/get-started" className="flex items-center gap-2">
                  Start Today
                </Link>
              </ShimmerButton>
              <motion.div whileHover={reduce ? {} : { scale: 1.03 }} whileTap={reduce ? {} : { scale: 0.97 }}>
                <Link
                  href="/get-started#pricing"
                  className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white border-2 border-white/30 rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  See What&apos;s Included
                </Link>
              </motion.div>
            </motion.div>

            {/* Stat cards (stagger each one) */}
            <motion.div
              initial={reduce ? {} : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1, delay: 0.32 }}
              className="grid grid-cols-2 gap-3"
            >
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={reduce ? {} : { opacity: 0, scale: 0.88 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.45, delay: 0.32 + i * 0.06, ease: EASE }}
                    whileHover={reduce ? {} : { scale: 1.03, y: -3 }}
                    className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-sm${reduce ? "" : " " + stat.floatClass}`}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${stat.color}22` }}
                    >
                      <Icon size={18} style={{ color: stat.color }} />
                    </div>
                    <span className="text-white/90 text-[13px] font-medium leading-snug">{stat.label}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* ── Right: Hero image placeholder ── */}
          <motion.div
            initial={reduce ? {} : { opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
            className="relative"
          >
            {/* Outer glow ring */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                background: "linear-gradient(135deg, rgba(34,184,240,0.18) 0%, rgba(255,10,122,0.12) 100%)",
                filter: "blur(32px)",
                transform: "scale(1.06)",
              }}
            />

            <div
              role="img"
              aria-label="Hero image placeholder"
              className="relative rounded-3xl overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(34,184,240,0.08) 0%, rgba(255,10,122,0.08) 100%)",
                border: "1px solid rgba(255,255,255,0.15)",
                backdropFilter: "blur(10px)",
              }}
            >
              {/* Corner glow blobs */}
              <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-[#22B8F0]/30 blur-2xl pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-[#FF0A7A]/20 blur-2xl pointer-events-none" />

              {/* Inner glow ring */}
              <div
                className="absolute inset-6 rounded-2xl pointer-events-none"
                style={{
                  background: "transparent",
                  boxShadow: "inset 0 0 60px rgba(34,184,240,0.12), inset 0 0 120px rgba(255,10,122,0.07)",
                }}
              />

              <div className="relative aspect-[4/5] flex flex-col items-center justify-center p-12">
                <div className="relative z-10 text-center">
                  {/* Glow circle */}
                  <div
                    className="w-28 h-28 rounded-full mx-auto mb-6 flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, rgba(34,184,240,0.25), rgba(255,10,122,0.25))",
                      boxShadow: "0 0 60px rgba(34,184,240,0.2), 0 0 100px rgba(255,10,122,0.12)",
                    }}
                  >
                    <div
                      className="w-16 h-16 rounded-full"
                      style={{
                        background: "linear-gradient(135deg, #22B8F0, #FF0A7A)",
                        opacity: 0.4,
                      }}
                    />
                  </div>
                  <div className="space-y-2.5 mb-8">
                    <div className="h-2 rounded-full bg-white/20 w-44 mx-auto" />
                    <div className="h-2 rounded-full bg-white/15 w-36 mx-auto" />
                    <div className="h-2 rounded-full bg-white/10 w-40 mx-auto" />
                  </div>
                  <p className="text-white/35 text-[11px] font-medium tracking-[0.15em] uppercase">
                    Hero image placeholder
                  </p>
                </div>
              </div>
            </div>

            {/* Floating badge: Join 2,000+ women */}
            <motion.div
              initial={reduce ? {} : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: EASE }}
            >
              <motion.div
                animate={reduce ? {} : { y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-6 -left-6 px-5 py-3 rounded-2xl bg-white shadow-xl shadow-pink-500/20"
              >
                <span className="text-[#123244] font-bold text-sm">Join 2,000+ women</span>
              </motion.div>
            </motion.div>

            {/* Floating badge: Results Guaranteed */}
            <motion.div
              initial={reduce ? {} : { opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: EASE }}
            >
              <motion.div
                animate={reduce ? {} : { y: [5, -5, 5] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 px-4 py-2 rounded-xl bg-gradient-to-r from-[#22B8F0] to-[#FF0A7A] text-white text-xs font-bold shadow-lg"
              >
                ✦ Results Guaranteed
              </motion.div>
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
