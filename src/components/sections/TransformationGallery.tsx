"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { StaggerContainer, StaggerItem } from "@/components/ui/SectionReveal";

const cards = [
  { bg: "rgba(37,174,235,0.08)" },
  { bg: "rgba(247,37,133,0.08)" },
  { bg: "rgba(37,174,235,0.08)" },
  { bg: "rgba(247,37,133,0.08)" },
  { bg: "rgba(37,174,235,0.08)" },
  { bg: "rgba(247,37,133,0.08)" },
];

export function TransformationGallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8"
      style={{ background: "#0B1720" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6 text-white/80 border border-white/20 bg-white/10">
            Real Results
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Transformation{" "}
            <span style={{ color: "#25AEEB" }}>
              Gallery
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Real women, real results. See what happens when you commit to the program.
          </p>
        </motion.div>

        {/* Static grid */}
        <StaggerContainer
          className="grid md:grid-cols-3 gap-6"
          stagger={0.1}
          direction="up"
        >
          {cards.map((card, i) => (
            <StaggerItem key={i}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="rounded-2xl overflow-hidden h-72 flex flex-col items-center justify-center gap-2"
                style={{
                  background: card.bg,
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <span className="text-white/40 text-sm font-medium tracking-widest uppercase">
                  Before · After
                </span>
                <span className="text-white/25 text-xs">
                  Transformation placeholder
                </span>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
