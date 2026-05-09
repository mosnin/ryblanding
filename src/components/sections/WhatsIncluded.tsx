"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

const features = [
  "Custom glute focused workouts",
  "Personalized meal plans",
  "Exercise video library",
  "Progress tracking",
  "Habit coaching",
  "Community support",
  "Flexible home or gym options",
  "Confidence coaching",
];

export function WhatsIncluded() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F8FAFB]">
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-[2fr_3fr] gap-16 lg:gap-24 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, ease: EASE }}
          >
            <h2
              className="font-black text-[#0B1720] leading-tight tracking-tight mb-6"
              style={{ fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)" }}
            >
              One membership.<br />Everything included.
            </h2>
            <p className="text-[#607586] text-lg leading-relaxed">
              No upsells, no hidden tiers. Every plan gives you full access to the
              complete coaching system.
            </p>
          </motion.div>

          {/* Right: feature list */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.1, ease: EASE }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-0"
          >
            {features.map((feature, i) => (
              <div
                key={feature}
                className={`flex items-center gap-4 py-5 border-b border-[#E8EDF0] ${
                  i % 2 === 0 ? "sm:pr-8" : "sm:pl-8 sm:border-l sm:border-[#E8EDF0]"
                }`}
              >
                <span className="w-5 h-5 rounded-full border-2 border-[#25AEEB] flex items-center justify-center flex-shrink-0">
                  <span className="w-2 h-2 rounded-full bg-[#25AEEB]" />
                </span>
                <span className="text-[#0B1720] font-medium text-sm">{feature}</span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
