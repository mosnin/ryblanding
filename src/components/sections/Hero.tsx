"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { Dumbbell, Apple, TrendingUp } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const trustCards = [
  { icon: Dumbbell,    label: "Custom Workouts" },
  { icon: Apple,       label: "Smart Nutrition" },
  { icon: TrendingUp,  label: "Progress Tracking" },
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      className="relative min-h-screen flex items-center"
      style={{ backgroundColor: "#0B1720" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        {/* ── Two-column grid ── */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: Content ── */}
          <div>
            {/* Eyebrow */}
            <motion.p
              initial={reduce ? {} : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0, ease: EASE }}
              className="uppercase tracking-widest text-sm font-medium mb-6"
              style={{ color: "#607586" }}
            >
              Premium coaching for women
            </motion.p>

            {/* H1 */}
            <motion.h1
              initial={reduce ? {} : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.06, ease: EASE }}
              className="font-black text-white leading-tight tracking-tight mb-6"
              style={{ fontSize: "clamp(3rem, 7vw, 5.5rem)" }}
            >
              Raise Your Bar
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={reduce ? {} : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12, ease: EASE }}
              className="text-lg text-white/60 leading-relaxed max-w-lg mb-10"
            >
              Glute focused training, custom nutrition, and confidence coaching
              for busy women who want results that fit real life.
            </motion.p>

            {/* CTA row */}
            <motion.div
              initial={reduce ? {} : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18, ease: EASE }}
              className="flex flex-wrap items-center gap-4"
            >
              <Link
                href="/get-started"
                className="btn-primary px-8 py-4 text-base font-semibold rounded-full inline-flex items-center"
              >
                Start Today
              </Link>
              <Link
                href="/get-started"
                className="text-white/60 hover:text-white text-base font-medium inline-flex items-center gap-1 transition-colors duration-150"
              >
                View Plans
              </Link>
            </motion.div>
          </div>

          {/* ── Right: Image placeholder ── */}
          <motion.div
            initial={reduce ? {} : { opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease: EASE }}
          >
            <div
              className="rounded-2xl flex flex-col items-center justify-end p-6"
              style={{
                aspectRatio: "4/5",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <div className="w-full h-3/4 bg-white/5 rounded-xl mb-4" />
              <p
                className="text-white/20 text-xs tracking-wider uppercase text-center"
              >
                Hero image · lifestyle fitness photo
              </p>
            </div>
          </motion.div>
        </div>

        {/* ── Trust cards ── */}
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.25, ease: EASE }}
          className="grid grid-cols-3 gap-4 mt-16"
        >
          {trustCards.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="rounded-xl p-5"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.10)",
              }}
            >
              <Icon size={22} style={{ color: "#25AEEB" }} className="mb-3" />
              <p className="text-white text-sm font-semibold">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
