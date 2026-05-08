"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Marquee } from "@/components/ui/Marquee";

const HEIGHTS = ["h-48", "h-56", "h-64"] as const;

// Build card data for each row
function makeCards(count: number, rowSeed: number) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    height: HEIGHTS[(i + rowSeed) % HEIGHTS.length],
    flip: (i + rowSeed) % 2 === 0,
  }));
}

const row1Cards = makeCards(8, 0);
const row2Cards = makeCards(8, 1);

function TransformCard({ height, flip }: { height: string; flip: boolean }) {
  return (
    <div
      role="img"
      aria-label="Before and after transformation placeholder"
      className={`relative ${height} w-52 flex-shrink-0 rounded-2xl overflow-hidden group cursor-pointer
        border border-white/10 transition-transform duration-300 hover:scale-105`}
      style={{
        background: flip
          ? "linear-gradient(135deg, rgba(34,184,240,0.14) 0%, rgba(255,10,122,0.1) 100%)"
          : "linear-gradient(135deg, rgba(255,10,122,0.1) 0%, rgba(34,184,240,0.14) 100%)",
      }}
    >
      {/* Gradient circle */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full opacity-25"
        style={{
          background: flip
            ? "linear-gradient(135deg, #22B8F0, #FF0A7A)"
            : "linear-gradient(135deg, #FF0A7A, #22B8F0)",
        }}
      />

      {/* Labels */}
      <div className="absolute inset-0 flex flex-col items-center justify-end p-4 gap-1">
        <span className="text-white/35 text-[10px] font-medium tracking-widest uppercase">
          Before · After
        </span>
        <span className="text-white/50 text-xs font-medium">
          Transformation placeholder
        </span>
      </div>
    </div>
  );
}

export function TransformationGallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-24 overflow-hidden"
      style={{ background: "linear-gradient(160deg, #0a2233 0%, #123244 50%, #1a4462 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6 text-white/80 border border-white/20 bg-white/10">
            Real Results
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Transformation{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #22B8F0 0%, #FF0A7A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Gallery
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Real women, real results. See what happens when you commit to the program.
          </p>
        </motion.div>
      </div>

      {/* Dual-row marquee (full bleed) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="flex flex-col gap-5"
      >
        {/* Row 1 — scrolls LEFT */}
        <Marquee speed="normal" pauseOnHover>
          <div className="flex gap-4 px-2">
            {row1Cards.map((card) => (
              <TransformCard key={card.id} height={card.height} flip={card.flip} />
            ))}
          </div>
        </Marquee>

        {/* Row 2 — scrolls RIGHT */}
        <Marquee speed="slow" reverse pauseOnHover>
          <div className="flex gap-4 px-2">
            {row2Cards.map((card) => (
              <TransformCard key={card.id} height={card.height} flip={card.flip} />
            ))}
          </div>
        </Marquee>
      </motion.div>
    </section>
  );
}
