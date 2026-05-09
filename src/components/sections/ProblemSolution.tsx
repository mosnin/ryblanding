"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

const points = [
  {
    n: "01",
    title: "Strong Glutes, Stronger You",
    body: "Targeted workouts designed to build shape, strength, and confidence. Every rep has a purpose.",
  },
  {
    n: "02",
    title: "Time Smart Training",
    body: "20–40 minute sessions that fit your schedule. No wasted hours. Real results.",
  },
  {
    n: "03",
    title: "Postpartum and Beyond",
    body: "Safe, supportive programming that meets you where your body is today and helps you come back stronger.",
  },
];

export function ProblemSolution() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#E8EDF0]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[2fr_3fr] gap-16 lg:gap-24 items-start">

          {/* Left: editorial statement */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: EASE }}
          >
            <h2
              className="font-black text-[#0B1720] leading-tight tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 5vw, 3.75rem)" }}
            >
              Built for real women with real schedules.
            </h2>
          </motion.div>

          {/* Right: numbered points */}
          <div className="flex flex-col">
            {points.map((p, i) => (
              <motion.div
                key={p.n}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
                className="flex gap-8 py-8 border-t border-[#E8EDF0]"
              >
                <span className="text-sm font-semibold text-[#25AEEB] tabular-nums mt-0.5 flex-shrink-0">
                  {p.n}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-[#0B1720] mb-2">{p.title}</h3>
                  <p className="text-[#607586] leading-relaxed">{p.body}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
