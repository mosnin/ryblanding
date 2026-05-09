"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Smartphone } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/ui/SectionReveal";

const screens = [
  {
    label: "Workouts",
    delay: 0,
    rotate: -6,
    y: 0,
    accentColor: "#22B8F0",
    rows: ["Today's Workout", "Glute Focus · 45 min", "Upper Body · 30 min"],
    progress: 68,
  },
  {
    label: "Nutrition",
    delay: 0.15,
    rotate: 0,
    y: -20,
    accentColor: "#FF0A7A",
    rows: ["Daily Macros", "Protein 142g / 150g", "Calories 1820 / 2000"],
    progress: 91,
    center: true,
  },
  {
    label: "Progress",
    delay: 0.3,
    rotate: 6,
    y: 0,
    accentColor: "#22B8F0",
    rows: ["Week 8 Check-in", "Weight −4.2 lbs", "Strength +12%"],
    progress: 52,
  },
];

const bullets = [
  "Daily workout delivery to your device",
  "Macro and calorie tracking built in",
  "Check-ins and progress milestones",
  "Direct messaging with your coach",
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
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Badge with phone icon */}
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-6"
              style={{
                background: "rgba(37,174,235,0.08)",
                color: "#FF0A7A",
                border: "1px solid rgba(37,174,235,0.2)"
              }}
            >
              <Smartphone size={14} />
              The App Experience
            </span>

            <h2 className="text-4xl sm:text-5xl font-black text-[#123244] leading-tight mb-6">
              Everything in one{" "}
              <span
                style={{ color: "#25AEEB" }}
              >
                simple coaching hub.
              </span>
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-8">
              Your workouts, nutrition, progress photos, habit tracking, and
              community — all in one beautifully designed coaching platform.
              Access it anywhere, anytime.
            </p>

            <StaggerContainer
              className="space-y-4"
              stagger={0.1}
              delay={0.3}
              direction="left"
            >
              {bullets.map((item) => (
                <StaggerItem key={item}>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold"
                      style={{ background: "#25AEEB" }}
                    >
                      ✓
                    </div>
                    <span className="text-gray-600">{item}</span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </motion.div>

          {/* Phone Mockups */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-end justify-center gap-4 h-[500px]"
          >
            {screens.map((screen) => (
              <motion.div
                key={screen.label}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: screen.y } : {}}
                transition={{ duration: 0.7, delay: screen.delay + 0.3, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="relative"
                style={{ rotate: `${screen.rotate}deg` }}
              >
                {/* Phone shell */}
                <div
                  className={`relative rounded-[2.5rem] shadow-2xl overflow-hidden ${
                    screen.center
                      ? "w-44 sm:w-52 h-80 sm:h-96"
                      : "w-36 h-72 sm:w-44 sm:h-80"
                  }`}
                  style={{
                    background: "#102B3A",
                    border: `2px solid ${screen.accentColor}40`,
                  }}
                >
                  {/* Header bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-10 flex items-center justify-between px-4"
                    style={{ background: `${screen.accentColor}18` }}
                  >
                    <div className="w-10 h-1.5 rounded-full bg-white/20" />
                    <div className="w-3 h-3 rounded-full" style={{ background: screen.accentColor, opacity: 0.7 }} />
                  </div>

                  {/* Content rows */}
                  <div className="absolute inset-0 flex flex-col pt-14 px-4 gap-2.5">
                    {/* Title row */}
                    <div className="h-2.5 rounded-full w-4/5" style={{ background: "rgba(255,255,255,0.5)" }} />

                    {/* Data rows */}
                    {screen.rows.slice(1).map((row, ri) => (
                      <div key={ri} className="flex items-center gap-2">
                        <div
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ background: screen.accentColor, opacity: 0.8 }}
                        />
                        <div
                          className="h-2 rounded-full flex-1"
                          style={{ background: "rgba(255,255,255,0.2)", maxWidth: ri === 0 ? "80%" : "65%" }}
                        />
                      </div>
                    ))}

                    {/* Card block */}
                    <div
                      className="rounded-xl mt-2 flex-1 max-h-20 p-3"
                      style={{ background: `${screen.accentColor}18` }}
                    >
                      <div className="h-2 rounded-full w-3/5 mb-2" style={{ background: "rgba(255,255,255,0.3)" }} />
                      <div className="h-2 rounded-full w-4/5" style={{ background: "rgba(255,255,255,0.15)" }} />
                    </div>

                    {/* Progress bar */}
                    <div className="mt-auto mb-4">
                      <div className="flex justify-between mb-1">
                        <div className="h-1.5 rounded-full w-16" style={{ background: "rgba(255,255,255,0.2)" }} />
                        <div className="h-1.5 rounded-full w-8" style={{ background: `${screen.accentColor}60` }} />
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${screen.progress}%`,
                            background: screen.accentColor,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Label pill with gradient */}
                <div
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-white text-xs font-bold shadow-md whitespace-nowrap"
                  style={{ background: "#25AEEB" }}
                >
                  {screen.label}
                </div>
              </motion.div>
            ))}

          </motion.div>
        </div>
      </div>
    </section>
  );
}
