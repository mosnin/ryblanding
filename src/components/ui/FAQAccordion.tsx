"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export function FAQAccordion({ items, className }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const reduce = useReducedMotion();

  return (
    <div className={cn("space-y-2.5", className)} role="list">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            role="listitem"
            className={cn(
              "rounded-2xl overflow-hidden border transition-all duration-200",
              isOpen
                ? "border-[#22B8F0]/30 shadow-md shadow-cyan-500/5 bg-white"
                : "border-gray-100 bg-white hover:border-gray-200 hover:shadow-sm"
            )}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${i}`}
              id={`faq-trigger-${i}`}
              className="w-full flex items-center justify-between p-6 text-left gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22B8F0] focus-visible:ring-inset rounded-2xl"
            >
              <span className={cn(
                "font-semibold pr-4 leading-snug transition-colors duration-150",
                isOpen ? "text-[#123244]" : "text-[#123244]"
              )}>
                {item.question}
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: reduce ? 0 : 0.25, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  "flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200",
                  isOpen
                    ? "text-white"
                    : "text-[#22B8F0]"
                )}
                style={{
                  background: isOpen
                    ? "linear-gradient(135deg,#22B8F0,#FF0A7A)"
                    : "rgba(34,184,240,0.1)",
                }}
              >
                <ChevronDown size={15} />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${i}`}
                  key="content"
                  initial={reduce ? {} : { height: 0, opacity: 0 }}
                  animate={reduce ? {} : { height: "auto", opacity: 1 }}
                  exit={reduce ? {} : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  style={{ overflow: "hidden" }}
                >
                  <div className="px-6 pb-6">
                    <div className="h-px bg-gradient-to-r from-[#22B8F0]/20 to-[#FF0A7A]/20 mb-4" />
                    <p className="text-gray-500 leading-relaxed text-[15px]">{item.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
