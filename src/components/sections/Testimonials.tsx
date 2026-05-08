"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TestimonialCard } from "@/components/ui/TestimonialCard";

const testimonials = [
  {
    quote: "I finally stopped guessing and started seeing progress.",
    name: "Sarah M.",
    handle: "@sarahlifts",
    months: "3 months in",
  },
  {
    quote: "The workouts fit my schedule and actually made me stronger.",
    name: "Jessica R.",
    handle: "@jessfit",
    months: "5 months in",
  },
  {
    quote: "This helped me feel confident in my body again.",
    name: "Amanda K.",
    handle: "@amandastrong",
    months: "4 months in",
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{
              background: "linear-gradient(135deg, rgba(34,184,240,0.1), rgba(255,10,122,0.1))",
              color: "#22B8F0",
              border: "1px solid rgba(34,184,240,0.3)"
            }}
          >
            What Members Say
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#123244]">
            Real{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #22B8F0 0%, #FF0A7A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Results
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} delay={i * 0.15} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
