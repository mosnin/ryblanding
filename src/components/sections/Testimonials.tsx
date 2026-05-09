"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star } from "lucide-react";
import { StaggerContainer, StaggerItem } from "@/components/ui/SectionReveal";

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

function getInitial(name: string) {
  return name.charAt(0).toUpperCase();
}

function TestimonialCard({
  quote,
  name,
  handle,
  months,
}: {
  quote: string;
  name: string;
  handle: string;
  months: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="relative rounded-3xl p-8 bg-white border border-gray-100 hover:shadow-xl transition-all duration-300 group"
    >
      {/* Quote icon with gradient bg */}
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center mb-6"
        style={{ background: "#25AEEB" }}
      >
        <Quote size={18} className="text-white" />
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} fill="#FF0A7A" stroke="none" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-[#123244] text-lg font-medium leading-relaxed mb-6">
        &ldquo;{quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        {/* Avatar with gradient + initial */}
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm font-bold"
          style={{ background: "#25AEEB" }}
        >
          {getInitial(name)}
        </div>
        <div>
          <p className="font-semibold text-[#123244] text-sm">{name}</p>
          <p className="text-gray-400 text-xs">{handle} · {months}</p>
        </div>
      </div>
    </motion.div>
  );
}

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
              background: "rgba(37,174,235,0.08)",
              color: "#25AEEB",
              border: "1px solid rgba(37,174,235,0.2)"
            }}
          >
            What Members Say
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#123244]">
            Real{" "}
            <span style={{ color: "#25AEEB" }}>
              Results
            </span>
          </h2>
        </motion.div>

        <StaggerContainer
          className="grid md:grid-cols-3 gap-8"
          stagger={0.15}
          direction="up"
        >
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <TestimonialCard {...t} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
