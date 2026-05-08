"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { SectionReveal } from "@/components/ui/SectionReveal";
import { ArrowRight, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Do I need a gym to follow the program?",
    answer:
      "No gym required. Every program includes both gym and home versions so you can train wherever you are. Home workouts use minimal equipment — dumbbells, resistance bands, and bodyweight exercises.",
  },
  {
    question: "Is the program safe for postpartum moms?",
    answer:
      "Yes. RYB includes postpartum-safe progressions designed to rebuild core stability, address diastasis recti, and gradually reintroduce loading. Always consult your doctor before starting any postpartum exercise program.",
  },
  {
    question: "How long are the workouts?",
    answer:
      "Most workouts are 20–40 minutes. We designed every session to be efficient and effective — no fluff, just focused work that fits into a busy schedule.",
  },
  {
    question: "Will I have direct access to a coach?",
    answer:
      "With the 1:1 Coaching plan, yes. You'll have direct messaging access to your coach for check-ins, form reviews, and adjustments. App-based plans include community support and coach-led Q&A sessions.",
  },
  {
    question: "What does the meal plan include?",
    answer:
      "Your personalized meal plan includes macro targets, recipe suggestions, grocery lists, and flexible options for eating out. It's built around your goals, dietary preferences, and lifestyle — not a generic cookie-cutter diet.",
  },
];

export function FAQPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();

  return (
    <section
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-b border-gray-100"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={reduce ? {} : { opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {/* FAQ badge */}
          <span
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{
              background: "linear-gradient(135deg, rgba(34,184,240,0.1), rgba(255,10,122,0.1))",
              color: "#22B8F0",
              border: "1px solid rgba(34,184,240,0.3)",
            }}
          >
            <HelpCircle size={13} />
            FAQ
          </span>

          <h2 className="text-4xl sm:text-5xl font-black text-[#123244] mb-4">
            Frequently Asked{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #22B8F0 0%, #FF0A7A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Questions
            </span>
          </h2>
        </motion.div>

        <SectionReveal delay={0.2}>
          <FAQAccordion items={faqs} />
        </SectionReveal>

        <motion.div
          initial={reduce ? {} : { opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-10"
        >
          <Link
            href="/faqs"
            className="group inline-flex items-center gap-2 text-[#22B8F0] font-semibold transition-colors duration-200 hover:text-[#FF0A7A]"
          >
            View all FAQs{" "}
            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
