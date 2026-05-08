"use client";

import { motion } from "framer-motion";

export function GetStartedHero() {
  return (
    <section
      className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{
        background: "linear-gradient(-45deg, #0a2233, #123244, #1a4462, #0d2d42)",
        backgroundSize: "400% 400%",
        animation: "gradient-x 12s ease infinite",
      }}
    >
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-[#22B8F0]/15 blur-3xl" />
      <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-[#FF0A7A]/10 blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6 text-white/80 bg-white/10 border border-white/20">
            Choose Your Plan
          </span>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight">
            Start Your{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #22B8F0 0%, #FF0A7A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Transformation
            </span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Every plan includes full access to workouts, nutrition, tracking, and
            community. No contracts. Cancel anytime.
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none">
          <path d="M0 60L1440 60L1440 30C1080 0 360 0 0 30L0 60Z" fill="#F5F7FA" />
        </svg>
      </div>
    </section>
  );
}
