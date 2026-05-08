"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Dumbbell, UtensilsCrossed, Play, TrendingUp,
  CheckSquare, Users, Home, Star
} from "lucide-react";

const features = [
  { icon: Dumbbell, label: "Custom glute focused workouts", color: "#22B8F0" },
  { icon: UtensilsCrossed, label: "Personalized meal plans", color: "#FF0A7A" },
  { icon: Play, label: "Exercise video library", color: "#22B8F0" },
  { icon: TrendingUp, label: "Progress tracking", color: "#FF0A7A" },
  { icon: CheckSquare, label: "Habit tracker", color: "#22B8F0" },
  { icon: Users, label: "Community support", color: "#FF0A7A" },
  { icon: Home, label: "Flexible home or gym options", color: "#22B8F0" },
  { icon: Star, label: "Confidence coaching", color: "#FF0A7A" },
];

export function WhatsIncluded() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8"
      style={{ background: "linear-gradient(135deg, #EAF8FF 0%, #fff0f7 100%)" }}
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
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{
              background: "linear-gradient(135deg, rgba(34,184,240,0.15), rgba(255,10,122,0.15))",
              color: "#123244",
              border: "1px solid rgba(34,184,240,0.3)"
            }}
          >
            Everything You Need
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#123244] mb-4">
            What&apos;s{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #22B8F0 0%, #FF0A7A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Included
            </span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            One membership, everything you need to transform your body and mindset.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-white shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: `${feature.color}15` }}
                >
                  <Icon size={22} style={{ color: feature.color }} />
                </div>
                <span className="text-sm font-semibold text-[#123244] leading-snug">
                  {feature.label}
                </span>

                {/* Check indicator */}
                <div className="mt-3 w-5 h-5 rounded-full flex items-center justify-center"
                  style={{ background: `${feature.color}20` }}>
                  <span style={{ color: feature.color }} className="text-xs">✓</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
