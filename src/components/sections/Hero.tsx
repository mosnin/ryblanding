"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-white pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px] gap-16 items-center">

          {/* ── Left: Content ── */}
          <div>
            <motion.p
              initial={reduce ? {} : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0, ease: EASE }}
              className="text-xs font-semibold uppercase tracking-[0.18em] text-[#607586] mb-8"
            >
              Premium coaching for women
            </motion.p>

            <motion.h1
              initial={reduce ? {} : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.07, ease: EASE }}
              className="font-black text-[#0B1720] leading-[0.95] tracking-tight mb-8"
              style={{ fontSize: "clamp(3.5rem, 9vw, 7rem)" }}
            >
              Raise<br />Your Bar
            </motion.h1>

            <motion.p
              initial={reduce ? {} : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.14, ease: EASE }}
              className="text-lg text-[#607586] leading-relaxed max-w-md mb-10"
            >
              Glute focused training, custom nutrition, and confidence coaching
              for busy women who want results that fit real life.
            </motion.p>

            <motion.div
              initial={reduce ? {} : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: EASE }}
              className="flex flex-wrap items-center gap-5 mb-14"
            >
              <Link
                href="/get-started"
                className="btn-primary px-8 py-4 text-base font-semibold rounded-full inline-flex items-center"
              >
                Start Today
              </Link>
              <Link
                href="/get-started"
                className="text-[#0B1720] text-base font-medium underline underline-offset-4 decoration-[#25AEEB] hover:decoration-[#0B1720] transition-colors duration-150"
              >
                View Plans
              </Link>
            </motion.div>

            <motion.p
              initial={reduce ? {} : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.28, ease: EASE }}
              className="text-sm text-[#607586]"
            >
              Trusted by 2,000+ women worldwide
            </motion.p>
          </div>

          {/* ── Right: Image placeholder ── */}
          <motion.div
            initial={reduce ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: EASE }}
            className="hidden lg:block"
          >
            <div
              className="w-full rounded-2xl overflow-hidden bg-[#F0F4F7]"
              style={{ aspectRatio: "3/4" }}
              role="img"
              aria-label="Hero lifestyle fitness photo placeholder"
            >
              <div className="w-full h-full flex items-end p-6">
                <p className="text-[#607586]/60 text-xs font-medium tracking-widest uppercase">
                  Lifestyle · fitness photo
                </p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* ── Divider + stats strip ── */}
        <motion.div
          initial={reduce ? {} : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35, ease: EASE }}
          className="mt-16 pt-10 border-t border-[#E8EDF0] grid grid-cols-3 gap-8"
        >
          {[
            { stat: "20–40 min", label: "Workouts" },
            { stat: "Custom", label: "Meal Plans" },
            { stat: "App-based", label: "Coaching Platform" },
          ].map(({ stat, label }) => (
            <div key={label}>
              <p className="text-2xl font-black text-[#0B1720] tracking-tight">{stat}</p>
              <p className="text-sm text-[#607586] mt-1">{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
