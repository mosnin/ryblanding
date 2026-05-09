"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Dumbbell, UtensilsCrossed, Play, TrendingUp,
  CheckSquare, Users, Home, Star
} from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/ui/SectionReveal";

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
      style={{ background: "#F8FAFB" }}
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
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{
              background: "rgba(37,174,235,0.08)",
              color: "#123244",
              border: "1px solid rgba(37,174,235,0.2)"
            }}
          >
            <span
              className="w-2 h-2 rounded-full inline-block flex-shrink-0"
              style={{ background: "#25AEEB" }}
            />
            Everything You Need
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#123244] mb-4">
            What&apos;s{" "}
            <span style={{ color: "#25AEEB" }}>
              Included
            </span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            One membership, everything you need to transform your body and mindset.
          </p>
        </motion.div>

        {/* Feature grid */}
        <StaggerContainer
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5"
          stagger={0.07}
          direction="scale"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <StaggerItem key={feature.label}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="group flex flex-col items-center text-center p-7 rounded-2xl bg-white border border-white shadow-sm hover:shadow-lg ring-1 ring-transparent transition-all duration-300"
                  style={
                    {
                      "--ring-color": `${feature.color}33`,
                    } as React.CSSProperties
                  }
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                    style={{ background: `${feature.color}15` }}
                  >
                    <Icon size={22} style={{ color: feature.color }} />
                  </div>
                  <span className="text-sm font-semibold text-[#123244] leading-snug">
                    {feature.label}
                  </span>

                  {/* Checkmark bottom indicator */}
                  <div
                    className="mt-3 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ background: `${feature.color}20` }}
                  >
                    <span style={{ color: feature.color }} className="text-xs font-bold">✓</span>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
