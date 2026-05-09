"use client";

import { motion } from "framer-motion";
import { FAQAccordion } from "@/components/ui/FAQAccordion";
import { CTASection } from "@/components/ui/CTASection";

const faqCategories = [
  {
    category: "The Program",
    faqs: [
      {
        question: "Do I need a gym to follow the program?",
        answer:
          "No gym required. Every program includes both gym and home versions so you can train wherever you are. Home workouts use minimal equipment — dumbbells, resistance bands, and bodyweight exercises.",
      },
      {
        question: "How long are the workouts?",
        answer:
          "Most workouts are 20–40 minutes. We designed every session to be efficient and effective — no fluff, just focused work that fits into a busy schedule.",
      },
      {
        question: "How many days per week do I train?",
        answer:
          "Programs are available in 3, 4, or 5 day formats. Your coach will recommend the best frequency based on your schedule and goals.",
      },
      {
        question: "Can I modify workouts if I have an injury?",
        answer:
          "Yes. Each exercise includes modification options, and your coach can adjust your program around any limitations or injuries.",
      },
    ],
  },
  {
    category: "Postpartum & Special Considerations",
    faqs: [
      {
        question: "Is the program safe for postpartum moms?",
        answer:
          "Yes. RYB includes postpartum-safe progressions designed to rebuild core stability, address diastasis recti, and gradually reintroduce loading. Always consult your doctor before starting any postpartum exercise program.",
      },
      {
        question: "When can I start postpartum?",
        answer:
          "We recommend waiting for your 6-week postpartum clearance from your doctor or midwife before starting. After clearance, our postpartum track begins gently and progresses at your pace.",
      },
      {
        question: "Can I train while pregnant?",
        answer:
          "We do not currently offer prenatal programming. Please consult your OB or midwife for guidance during pregnancy.",
      },
    ],
  },
  {
    category: "Nutrition",
    faqs: [
      {
        question: "What does the meal plan include?",
        answer:
          "Your personalized meal plan includes macro targets, recipe suggestions, grocery lists, and flexible options for eating out. It's built around your goals, dietary preferences, and lifestyle.",
      },
      {
        question: "Do I have to track calories?",
        answer:
          "Tracking is recommended but not mandatory. Your coach will work with you on an approach that feels sustainable — whether that's detailed macro tracking or intuitive eating guidelines.",
      },
      {
        question: "Can the nutrition plan accommodate dietary restrictions?",
        answer:
          "Yes. We accommodate vegetarian, vegan, gluten-free, dairy-free, and other dietary preferences. Let your coach know during onboarding.",
      },
    ],
  },
  {
    category: "Coaching & Support",
    faqs: [
      {
        question: "Will I have direct access to a coach?",
        answer:
          "With the 1:1 Coaching plan, yes. You'll have direct messaging access to your coach for check-ins, form reviews, and adjustments. App-based plans include community support and coach-led Q&A sessions.",
      },
      {
        question: "How do check-ins work?",
        answer:
          "Weekly check-ins happen through the app. You'll fill out a short form covering your workouts, nutrition, energy levels, and any challenges. Your coach reviews these and responds within 24 hours.",
      },
      {
        question: "What if I fall off track?",
        answer:
          "Life happens. Your coach is here to help you get back on track — not judge you. Progress isn't linear, and the program is designed to be flexible and supportive.",
      },
    ],
  },
  {
    category: "Billing & Plans",
    faqs: [
      {
        question: "Can I cancel at any time?",
        answer:
          "Yes. All plans are subscription-based and can be cancelled at any time. There are no long-term contracts or cancellation fees.",
      },
      {
        question: "What's the difference between monthly and annual plans?",
        answer:
          "Both plans include exactly the same features. The annual plan ($399.99/year) saves you $79.89 compared to paying monthly ($39.99/month × 12).",
      },
      {
        question: "Is there a free trial?",
        answer:
          "We don't offer a free trial, but we do offer a satisfaction guarantee. If you're not happy within your first 7 days, contact us for a full refund.",
      },
    ],
  },
];

export function FAQsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ background: "#0B1720" }}
      >
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-[#22B8F0]/15 blur-3xl" />
        <div className="absolute bottom-0 right-10 w-64 h-64 rounded-full bg-[#FF0A7A]/10 blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6 text-white/80 bg-white/10 border border-white/20">
              We&apos;ve Got Answers
            </span>
            <h1 className="text-5xl sm:text-6xl font-black text-white mb-6">
              Frequently Asked{" "}
              <span style={{ color: "#25AEEB" }}>
                Questions
              </span>
            </h1>
            <p className="text-xl text-white/60">
              Everything you need to know about RYB coaching.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none">
            <path d="M0 60L1440 60L1440 30C1080 0 360 0 0 30L0 60Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-16">
          {faqCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
            >
              <h2
                className="text-2xl font-bold mb-6 pb-3 border-b-2"
                style={{
                  color: "#123244",
                  borderColor: "#25AEEB",
                }}
              >
                {cat.category}
              </h2>
              <FAQAccordion items={cat.faqs} />
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection
        headline="Still"
        highlightText="have more questions?"
        subtext="Reach out and we'll get back to you within 24 hours."
        primaryCTA="Contact Us"
        primaryHref="/contact"
        secondaryCTA="Start Today"
        secondaryHref="/get-started"
      />
    </>
  );
}
