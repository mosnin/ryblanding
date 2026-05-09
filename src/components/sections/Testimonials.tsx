"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const EASE = [0.22, 1, 0.36, 1] as const;

const featured = {
  quote: "I finally stopped guessing and started seeing real progress. This program changed everything.",
  name: "Sarah M.",
  detail: "3 months in",
};

const supporting = [
  {
    quote: "The workouts fit my schedule and actually made me stronger.",
    name: "Jessica R.",
    detail: "5 months in",
  },
  {
    quote: "This helped me feel confident in my body again.",
    name: "Amanda K.",
    detail: "4 months in",
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#E8EDF0]">
      <div className="max-w-7xl mx-auto">

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: EASE }}
          className="text-xs font-semibold uppercase tracking-[0.18em] text-[#607586] mb-16"
        >
          What members say
        </motion.p>

        <div className="grid lg:grid-cols-[3fr_2fr] gap-16 items-start">

          {/* Featured quote */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.05, ease: EASE }}
          >
            <p
              className="font-black text-[#0B1720] leading-tight tracking-tight mb-8"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
            >
              &ldquo;{featured.quote}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#25AEEB] flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                {featured.name.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-[#0B1720] text-sm">{featured.name}</p>
                <p className="text-[#607586] text-xs">{featured.detail}</p>
              </div>
            </div>
          </motion.div>

          {/* Supporting quotes */}
          <div className="flex flex-col gap-0">
            {supporting.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.12 + i * 0.1, ease: EASE }}
                className="py-8 border-t border-[#E8EDF0]"
              >
                <p className="text-[#0B1720] font-medium leading-relaxed mb-4 text-lg">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="text-[#607586] text-sm">{t.name} · {t.detail}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
