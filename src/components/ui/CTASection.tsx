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
      style={{ background: "#0B1720" }}
    >
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6 text-white/80 bg-white/10 border border-white/20">
            Your journey starts now ✦
          </span>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6">
            {headline}{" "}
            {highlightText && (
              <span className="text-[#25AEEB]">{highlightText}</span>
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
              <Link
                href={secondaryHref}
                className="inline-flex items-center gap-2 px-8 py-4 text-white border-2 border-white/30 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
              >
                {secondaryCTA}
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
