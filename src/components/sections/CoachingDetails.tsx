"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageCircle, Calendar, Dumbbell, UtensilsCrossed, Camera, TrendingUp } from "lucide-react";

const details = [
  {
    icon: Dumbbell,
    title: "Fully custom programming",
    description:
      "Every workout is built specifically for you — your goals, your schedule, your equipment. No templates.",
    color: "#22B8F0",
  },
  {
    icon: UtensilsCrossed,
    title: "Personalized nutrition plan",
    description:
      "Macros, meal timing, and food flexibility tailored to your body and lifestyle.",
    color: "#FF0A7A",
  },
  {
    icon: MessageCircle,
    title: "Direct coach messaging",
    description:
      "Ask questions, get form checks, and receive encouragement whenever you need it.",
    color: "#22B8F0",
  },
  {
    icon: Calendar,
    title: "Weekly check-ins",
    description:
      "Structured weekly reviews to assess progress, adjust your program, and keep momentum.",
    color: "#FF0A7A",
  },
  {
    icon: Camera,
    title: "Progress photo tracking",
    description:
      "Visual progress logging built into the app to help you see and celebrate your results.",
    color: "#22B8F0",
  },
  {
    icon: TrendingUp,
    title: "Monthly program updates",
    description:
      "Your program evolves with you — updated every 4 weeks to keep challenging and progressing.",
    color: "#FF0A7A",
  },
];

export function CoachingDetails() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} id="details" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-[#123244] mb-4">
            What&apos;s{" "}
            <span style={{ color: "#25AEEB" }}>
              Included
            </span>
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Everything you need to see consistent, measurable progress.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {details.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-300 group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ background: `${item.color}15` }}
                >
                  <Icon size={20} style={{ color: item.color }} />
                </div>
                <h3 className="font-bold text-[#123244] mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
