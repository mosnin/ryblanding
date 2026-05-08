"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ShimmerButton } from "@/components/ui/ShimmerButton";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  headline?: string;
  highlightText?: string;
  subtext?: string;
  primaryCTA?: string;
  primaryHref?: string;
  secondaryCTA?: string;
  secondaryHref?: string;
}

export function CTASection({
  headline = "Ready to",
  highlightText = "raise your bar?",
  subtext = "Join thousands of women building strength, confidence, and results.",
  primaryCTA = "Start Today",
  primaryHref = "/get-started",
  secondaryCTA,
  secondaryHref,
}: CTASectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();

  return (
    <section
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{
        background: "linear-gradient(-45deg, #0a2233, #123244, #1a4462, #0d2d42)",
        backgroundSize: "400% 400%",
        animation: "gradient-x 12s ease infinite",
      }}
    >
      {/* Animated gradient orbs */}
      <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-[#22B8F0]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-[#FF0A7A]/10 blur-3xl pointer-events-none" />

      {/* Radial depth overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(34,184,240,0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative dots */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ background: "#22B8F0" }}
            />
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{
                background: "linear-gradient(135deg, #22B8F0 0%, #FF0A7A 100%)",
              }}
            />
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ background: "#FF0A7A" }}
            />
          </div>

          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6 text-white/80 bg-white/10 border border-white/20">
            Your journey starts now ✦
          </span>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6">
            {headline}{" "}
            {highlightText && (
              <span className="gradient-text">{highlightText}</span>
            )}
          </h2>

          <p className="text-lg sm:text-xl text-white/60 mb-10 max-w-2xl mx-auto">
            {subtext}
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <ShimmerButton size="lg">
              <Link href={primaryHref} className="flex items-center gap-2">
                {primaryCTA}
                <ArrowRight size={18} />
              </Link>
            </ShimmerButton>

            {secondaryCTA && secondaryHref && (
              <motion.div
                whileHover={reduce ? {} : { scale: 1.03 }}
                whileTap={reduce ? {} : { scale: 0.97 }}
              >
                <Link
                  href={secondaryHref}
                  className="inline-flex items-center gap-2 px-8 py-4 text-white border-2 border-white/30 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  {secondaryCTA}
                </Link>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
