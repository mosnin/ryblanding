"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { ShimmerButton } from "@/components/ui/ShimmerButton";
import { ArrowRight } from "lucide-react";

interface CTASectionProps {
  headline?: string;
  subtext?: string;
  primaryCTA?: string;
  primaryHref?: string;
  secondaryCTA?: string;
  secondaryHref?: string;
}

export function CTASection({
  headline = "Ready to raise your bar?",
  subtext = "Join thousands of women building strength, confidence, and results.",
  primaryCTA = "Start Today",
  primaryHref = "/get-started",
  secondaryCTA,
  secondaryHref,
}: CTASectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

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
      {/* Orbs */}
      <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-[#22B8F0]/15 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-[#FF0A7A]/10 blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6 text-white/80 bg-white/10 border border-white/20"
          >
            Your journey starts now ✦
          </span>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
            {headline.split("raise your bar").map((part, i) =>
              i === 0 ? (
                <span key={i}>{part}</span>
              ) : (
                <span key={i}>
                  <span
                    style={{
                      background: "linear-gradient(135deg, #22B8F0 0%, #FF0A7A 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    raise your bar
                  </span>
                  {part}
                </span>
              )
            )}
          </h2>

          <p className="text-xl text-white/60 mb-10 max-w-xl mx-auto">{subtext}</p>

          <div className="flex flex-wrap gap-4 justify-center">
            <ShimmerButton size="lg">
              <Link href={primaryHref} className="flex items-center gap-2">
                {primaryCTA}
                <ArrowRight size={18} />
              </Link>
            </ShimmerButton>

            {secondaryCTA && secondaryHref && (
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
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
