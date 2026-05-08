"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const placeholders = [
  { height: "h-64", delay: 0 },
  { height: "h-80", delay: 0.1 },
  { height: "h-56", delay: 0.2 },
  { height: "h-72", delay: 0.15 },
  { height: "h-60", delay: 0.25 },
  { height: "h-80", delay: 0.05 },
  { height: "h-52", delay: 0.3 },
  { height: "h-72", delay: 0.2 },
  { height: "h-64", delay: 0.1 },
];

export function TransformationGallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8"
      style={{ background: "linear-gradient(135deg, #123244 0%, #1a4462 100%)" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6 text-white/80 border border-white/20 bg-white/10"
          >
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

        {/* Masonry grid */}
        <div className="columns-2 sm:columns-3 lg:columns-3 gap-4 space-y-4">
          {placeholders.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: item.delay }}
              className={`break-inside-avoid ${item.height} rounded-2xl relative overflow-hidden group`}
              style={{
                background: "linear-gradient(135deg, rgba(34,184,240,0.1) 0%, rgba(255,10,122,0.1) 100%)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div
                  className="w-12 h-12 rounded-full mb-3 opacity-30"
                  style={{
                    background: `linear-gradient(135deg, ${i % 2 === 0 ? "#22B8F0" : "#FF0A7A"}, ${i % 2 === 0 ? "#FF0A7A" : "#22B8F0"})`,
                  }}
                />
                <p className="text-white/30 text-xs font-medium text-center px-4">
                  Transformation placeholder
                </p>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#123244]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-xs font-medium">
                  Client result ✦
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
