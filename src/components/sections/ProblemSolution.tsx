"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Clock, Heart } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/ui/SectionReveal";

const cards = [
  {
    icon: Target,
    title: "Strong Glutes, Stronger You",
    description:
      "Targeted workouts designed to build shape, strength, and confidence. Every session is intentional, every rep has a purpose.",
    color: "#22B8F0",
    accent: "rgba(34,184,240,0.6)",
  },
  {
    icon: Clock,
    title: "Time Smart Training",
    description:
      "Efficient sessions that fit into your life without wasting hours in the gym. 20–40 minutes is all you need to see real results.",
    color: "#FF0A7A",
    accent: "rgba(255,10,122,0.6)",
  },
  {
    icon: Heart,
    title: "Postpartum and Beyond",
    description:
      "Supportive training that meets you where your body is today. Safe, effective, and designed to help you come back stronger.",
    color: "#22B8F0",
    accent: "rgba(34,184,240,0.6)",
  },
];

export function ProblemSolution() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Pill badge with dot indicator */}
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{
              background: "rgba(37,174,235,0.08)",
              color: "#25AEEB",
              border: "1px solid rgba(37,174,235,0.2)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: "#25AEEB" }}
            />
            Why RYB Works
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#123244] leading-tight">
            Built for real women{" "}
            <span style={{ color: "#25AEEB" }}>
              with real schedules.
            </span>
          </h2>
        </motion.div>

        {/* Cards with stagger */}
        <StaggerContainer
          className="grid md:grid-cols-3 gap-8"
          stagger={0.12}
          delay={0}
          direction="up"
        >
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <StaggerItem key={card.title}>
                <motion.div
                  whileHover={{
                    y: -8,
                    boxShadow: "0 24px 48px rgba(18,50,68,0.1)",
                    transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
                  }}
                  className="group relative rounded-3xl p-8 border border-gray-100/80 bg-white shadow-md transition-colors duration-300 overflow-hidden h-full"
                >
                  {/* Top accent stripe — fades in on hover */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px] rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: card.color,
                    }}
                  />

                  <div className="relative z-10">
                    {/* Icon container — larger, ring on hover */}
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:ring-1 group-hover:ring-offset-2"
                      style={{
                        background: `${card.color}18`,
                        // ring color via CSS custom property trick
                        ["--tw-ring-color" as string]: card.accent,
                      }}
                    >
                      <Icon size={26} style={{ color: card.color }} />
                    </div>

                    <h3 className="text-xl font-bold text-[#123244] mb-3">{card.title}</h3>
                    <p className="text-gray-500/90 text-[15px] leading-[1.65]">{card.description}</p>

                    <div className="mt-6 flex items-center gap-2">
                      <div className="h-px flex-1 bg-gray-100" />
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ background: card.color }}
                      />
                    </div>
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
