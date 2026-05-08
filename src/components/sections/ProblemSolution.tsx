"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Clock, Heart } from "lucide-react";

const cards = [
  {
    icon: Target,
    title: "Strong Glutes, Stronger You",
    description:
      "Targeted workouts designed to build shape, strength, and confidence. Every session is intentional, every rep has a purpose.",
    color: "#22B8F0",
    gradient: "from-[#22B8F0]/10 to-[#22B8F0]/5",
  },
  {
    icon: Clock,
    title: "Time Smart Training",
    description:
      "Efficient sessions that fit into your life without wasting hours in the gym. 20–40 minutes is all you need to see real results.",
    color: "#FF0A7A",
    gradient: "from-[#FF0A7A]/10 to-[#FF0A7A]/5",
  },
  {
    icon: Heart,
    title: "Postpartum and Beyond",
    description:
      "Supportive training that meets you where your body is today. Safe, effective, and designed to help you come back stronger.",
    color: "#22B8F0",
    gradient: "from-[#22B8F0]/10 to-[#FF0A7A]/5",
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
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{
              background: "linear-gradient(135deg, rgba(34,184,240,0.1), rgba(255,10,122,0.1))",
              color: "#FF0A7A",
              border: "1px solid rgba(255,10,122,0.2)"
            }}
          >
            Why RYB Works
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#123244] leading-tight">
            Built for real women{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #22B8F0 0%, #FF0A7A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              with real schedules.
            </span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative rounded-3xl p-8 border border-gray-100 bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Gradient bg on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl`} />

                <div className="relative z-10">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                    style={{ background: `${card.color}15` }}
                  >
                    <Icon size={24} style={{ color: card.color }} />
                  </div>

                  <h3 className="text-xl font-bold text-[#123244] mb-3">{card.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{card.description}</p>

                  <div className="mt-6 flex items-center gap-2">
                    <div className="h-px flex-1 bg-gray-100" />
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: card.color }}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
