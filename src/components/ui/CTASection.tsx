"use client";

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
  return (
    <section
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ background: "#0B1720" }}
    >
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div>
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
        </div>
      </div>
    </section>
  );
}
