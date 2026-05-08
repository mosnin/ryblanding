"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export function FAQAccordion({ items, className }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={cn("space-y-3", className)} role="list">
      {items.map((item, i) => (
        <div
          key={i}
          role="listitem"
          className="rounded-2xl overflow-hidden border border-gray-100 bg-white hover:shadow-md transition-shadow duration-200"
        >
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
            aria-controls={`faq-answer-${i}`}
            className="w-full flex items-center justify-between p-6 text-left"
          >
            <span className="font-semibold text-[#123244] pr-4">{item.question}</span>
            <motion.div
              animate={{ rotate: openIndex === i ? 180 : 0 }}
              transition={{ duration: 0.2 }}
              className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
              style={{
                background: openIndex === i
                  ? "linear-gradient(135deg, #22B8F0, #FF0A7A)"
                  : "rgba(34,184,240,0.1)"
              }}
            >
              <ChevronDown
                size={16}
                className={openIndex === i ? "text-white" : "text-[#22B8F0]"}
              />
            </motion.div>
          </button>

          <AnimatePresence>
            {openIndex === i && (
              <motion.div
                id={`faq-answer-${i}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="px-6 pb-6">
                  <div className="h-px bg-gray-100 mb-4" />
                  <p className="text-gray-500 leading-relaxed">{item.answer}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
