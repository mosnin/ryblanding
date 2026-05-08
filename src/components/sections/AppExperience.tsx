"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const screens = [
  { label: "Workouts", delay: 0, rotate: -6, y: 0 },
  { label: "Nutrition", delay: 0.15, rotate: 0, y: -20 },
  { label: "Progress", delay: 0.3, rotate: 6, y: 0 },
];

export function AppExperience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span
              className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
              style={{
                background: "linear-gradient(135deg, rgba(34,184,240,0.1), rgba(255,10,122,0.1))",
                color: "#FF0A7A",
                border: "1px solid rgba(255,10,122,0.2)"
              }}
            >
              The App Experience
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-[#123244] leading-tight mb-6">
              Everything in one{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #22B8F0 0%, #FF0A7A 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                simple coaching hub.
              </span>
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-8">
              Your workouts, nutrition, progress photos, habit tracking, and
              community — all in one beautifully designed coaching platform.
              Access it anywhere, anytime.
            </p>

            <ul className="space-y-4">
              {[
                "Daily workout delivery to your device",
                "Macro and calorie tracking built in",
                "Check-ins and progress milestones",
                "Direct messaging with your coach",
              ].map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold"
                    style={{ background: "linear-gradient(135deg, #22B8F0, #FF0A7A)" }}
                  >
                    ✓
                  </div>
                  <span className="text-gray-600">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Phone Mockups */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex items-end justify-center gap-4 h-[500px]"
          >
            {screens.map((screen) => (
              <motion.div
                key={screen.label}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: screen.y } : {}}
                transition={{ duration: 0.7, delay: screen.delay + 0.3 }}
                whileHover={{ y: screen.y - 8, transition: { duration: 0.2 } }}
                className="relative"
                style={{ transform: `rotate(${screen.rotate}deg) translateY(${screen.y}px)` }}
              >
                {/* Phone shell */}
                <div
                  className="relative w-36 h-72 sm:w-44 sm:h-80 rounded-[2.5rem] shadow-2xl overflow-hidden"
                  style={{
                    background: "linear-gradient(160deg, rgba(34,184,240,0.15) 0%, rgba(255,10,122,0.1) 100%)",
                    border: "2px solid rgba(34,184,240,0.3)",
                  }}
                >
                  {/* Status bar */}
                  <div className="absolute top-0 left-0 right-0 h-10 bg-[#123244]/60 flex items-center justify-center">
                    <div className="w-16 h-1.5 rounded-full bg-white/30" />
                  </div>
                  {/* Content placeholder */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center pt-10 px-4 gap-2">
                    <div className="h-2 rounded-full bg-white/20 w-full" />
                    <div className="h-2 rounded-full bg-white/15 w-3/4" />
                    <div className="h-16 rounded-xl bg-white/10 w-full mt-2" />
                    <div className="h-10 rounded-xl bg-white/10 w-full" />
                    <div className="h-10 rounded-xl bg-white/10 w-full" />
                    <p className="text-white/30 text-xs text-center mt-2">
                      App screens placeholder
                    </p>
                  </div>
                </div>

                {/* Label */}
                <div
                  className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-white text-xs font-bold shadow-md whitespace-nowrap"
                  style={{ background: "linear-gradient(90deg, #22B8F0, #FF0A7A)" }}
                >
                  {screen.label}
                </div>
              </motion.div>
            ))}

            {/* Background glow */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#22B8F0]/10 blur-3xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
