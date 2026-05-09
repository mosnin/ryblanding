"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ShimmerButton } from "@/components/ui/ShimmerButton";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

export function CoachingHero() {
  return (
    <section
      className="relative pt-32 pb-0 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ background: "#0B1720" }}
    >
      <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-[#FF0A7A]/10 blur-3xl" />
      <div className="absolute bottom-0 left-10 w-64 h-64 rounded-full bg-[#22B8F0]/15 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="pb-20"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6 text-white/80 bg-white/10 border border-white/20">
              Premium 1:1 Coaching
            </span>
            <h1 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight">
              Your Coach.{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #22B8F0 0%, #FF0A7A 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Your Plan.
              </span>{" "}
              Your Results.
            </h1>
            <p className="text-xl text-white/60 mb-8 leading-relaxed">
              Work directly with a coach who builds your program from scratch,
              checks in with you weekly, and adjusts everything as you progress.
            </p>
            <div className="flex flex-wrap gap-4">
              <ShimmerButton size="lg">
                <Link href="/get-started">Apply for Coaching</Link>
              </ShimmerButton>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="#details"
                  className="inline-flex items-center gap-2 px-8 py-4 text-white border-2 border-white/30 rounded-full font-semibold hover:bg-white/10 transition-all"
                >
                  See What&apos;s Included
                </Link>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <ImagePlaceholder
              label="Coach image placeholder"
              className="rounded-t-3xl rounded-b-none h-96 lg:h-[500px]"
              aspectRatio=""
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
