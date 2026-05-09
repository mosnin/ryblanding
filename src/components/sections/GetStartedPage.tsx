"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  Check,
  Dumbbell,
  UtensilsCrossed,
  TrendingUp,
  MessageCircle,
  Home,
  Star,
  ArrowRight,
  Zap,
  Quote,
} from "lucide-react";
import { ShimmerButton } from "@/components/ui/ShimmerButton";
import { FAQAccordion } from "@/components/ui/FAQAccordion";

// ─── Data ─────────────────────────────────────────────────────────────────────

const includedFeatures = [
  { icon: Dumbbell, label: "Targeted glute workouts" },
  { icon: UtensilsCrossed, label: "Balanced meal plans" },
  { icon: TrendingUp, label: "Built-in progress tracking" },
  { icon: MessageCircle, label: "Guidance from Dustie" },
  { icon: Home, label: "Home or gym workout options" },
  { icon: Star, label: "Beginner friendly progression" },
];

const steps = [
  {
    number: "01",
    title: "Choose your plan",
    description: "Select the monthly or annual plan that fits your budget and commitment level.",
  },
  {
    number: "02",
    title: "Complete your setup form",
    description: "Tell us about your goals, schedule, fitness level, and any special considerations.",
  },
  {
    number: "03",
    title: "Receive your custom plan",
    description: "Your personalized workout and nutrition plan lands in the app within 24 hours.",
  },
  {
    number: "04",
    title: "Track progress and keep improving",
    description: "Log workouts, check in weekly, and watch your results build week over week.",
  },
];

const testimonials = [
  {
    quote: "I finally stopped guessing and started seeing progress.",
    name: "Sarah M.",
    tag: "3 months in",
  },
  {
    quote: "The workouts fit my schedule and actually made me stronger.",
    name: "Jessica R.",
    tag: "5 months in",
  },
  {
    quote: "This helped me feel confident in my body again.",
    name: "Amanda K.",
    tag: "4 months in",
  },
];

const faqs = [
  {
    question: "Is this subscription based?",
    answer:
      "Yes. Both plans are recurring subscriptions — monthly or annual. You're charged automatically each billing cycle until you cancel. There are no hidden fees and everything is clearly shown at checkout.",
  },
  {
    question: "How do I cancel?",
    answer:
      "You can cancel anytime through your account settings or by emailing us at hello@raiseyourbar.com. Cancellations take effect at the end of your current billing period — you keep access until then.",
  },
  {
    question: "Can I pause my payment?",
    answer:
      "We don't currently offer a pause feature, but you can cancel and re-subscribe at any time. If you're going through something — postpartum, injury, life — reach out and we'll do our best to work with you.",
  },
  {
    question: "Are refunds available?",
    answer:
      "We offer a 7-day satisfaction guarantee. If you're not happy within your first 7 days, contact us for a full refund — no questions asked. After 7 days, refunds are not issued for partial billing periods.",
  },
];

// ─── Sub-components ────────────────────────────────────────────────────────────

function PlanCard({
  name,
  price,
  period,
  badge,
  badgeStyle,
  features,
  cta,
  popular,
  delay,
  inView,
}: {
  name: string;
  price: string;
  period: string;
  badge: string;
  badgeStyle: "primary" | "secondary";
  features: string[];
  cta: string;
  popular: boolean;
  delay: number;
  inView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className={`relative flex flex-col rounded-3xl overflow-hidden ${
        popular
          ? "shadow-2xl shadow-pink-500/25 ring-2 ring-[#FF0A7A]/30"
          : "shadow-xl border border-gray-100"
      }`}
    >
      {/* Top accent bar */}
      {popular && (
        <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{ background: "#25AEEB" }}
        />
      )}

      <div className={`flex flex-col flex-1 p-8 ${popular ? "bg-[#123244]" : "bg-white"}`}>
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <h3 className={`text-2xl font-black ${popular ? "text-white" : "text-[#123244]"}`}>
            {name}
          </h3>
          <span
            className="px-3 py-1 rounded-full text-xs font-bold"
            style={
              badgeStyle === "primary"
                ? { background: "#25AEEB", color: "#fff" }
                : {
                    background: "rgba(34,184,240,0.12)",
                    color: "#22B8F0",
                    border: "1px solid rgba(34,184,240,0.3)",
                  }
            }
          >
            {badge}
          </span>
        </div>

        {/* Price */}
        <div className="mb-8">
          <div className="flex items-end gap-1">
            <span className={`text-6xl font-black leading-none ${popular ? "text-white" : "text-[#123244]"}`}>
              {price}
            </span>
            <span className={`text-lg mb-1 ${popular ? "text-white/50" : "text-gray-400"}`}>
              {period}
            </span>
          </div>
          {popular && (
            <p className="text-[#22B8F0] text-sm font-medium mt-2">
              Save $79.89 vs monthly billing
            </p>
          )}
          {!popular && (
            <p className="text-gray-400 text-sm mt-2">Flexible. Cancel anytime.</p>
          )}
        </div>

        {/* Features */}
        <ul className="space-y-3.5 mb-8 flex-1">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-3">
              <div
                className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  background: popular ? "rgba(34,184,240,0.2)" : "rgba(255,10,122,0.1)",
                }}
              >
                <Check size={11} style={{ color: popular ? "#22B8F0" : "#FF0A7A" }} />
              </div>
              <span className={`text-sm leading-snug ${popular ? "text-white/80" : "text-gray-600"}`}>
                {f}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        {popular ? (
          <ShimmerButton size="lg" className="w-full justify-center">
            <Link href="/get-started">{cta}</Link>
          </ShimmerButton>
        ) : (
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Link
              href="/get-started"
              className="flex items-center justify-center gap-2 w-full py-4 rounded-full border-2 border-[#22B8F0] text-[#22B8F0] font-semibold hover:bg-[#22B8F0] hover:text-white transition-all duration-300 text-base"
            >
              {cta} <ArrowRight size={16} />
            </Link>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

export function GetStartedPage() {
  const pricingRef = useRef(null);
  const includedRef = useRef(null);
  const stepsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const faqRef = useRef(null);

  const pricingInView = useInView(pricingRef, { once: true, margin: "-80px" });
  const includedInView = useInView(includedRef, { once: true, margin: "-80px" });
  const stepsInView = useInView(stepsRef, { once: true, margin: "-80px" });
  const testimonialsInView = useInView(testimonialsRef, { once: true, margin: "-80px" });
  const faqInView = useInView(faqRef, { once: true, margin: "-80px" });

  const planFeatures = [
    "Custom glute focused workouts",
    "Personalized meal plans",
    "Exercise video library",
    "Progress tracking",
    "Habit tracker",
    "Community support",
    "Home or gym options",
    "Guidance from Dustie",
  ];

  return (
    <>
      {/* ── 1. Hero ────────────────────────────────────────────────────────── */}
      <section
        className="relative pt-36 pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ background: "#0B1720" }}
      >
        {/* Orbs */}
        <div className="absolute top-16 left-1/4 w-80 h-80 rounded-full bg-[#22B8F0]/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full bg-[#FF0A7A]/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm font-medium mb-8"
          >
            <Zap size={14} className="text-[#22B8F0]" />
            No contracts · Cancel anytime · Instant access
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6"
          >
            Choose the plan that{" "}
            <span style={{ color: "#25AEEB" }}>
              fits your goals.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/65 leading-relaxed max-w-2xl mx-auto mb-10"
          >
            Get custom workouts, nutrition guidance, and progress support inside
            one simple coaching experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-6 text-white/50 text-sm"
          >
            {["2,000+ women", "Glute focused", "Postpartum safe", "Home or gym"].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22B8F0]" />
                {t}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 80" fill="none">
            <path
              d="M0 80L1440 80L1440 40C1440 40 1080 0 720 0C360 0 0 40 0 40L0 80Z"
              fill="#F5F7FA"
            />
          </svg>
        </div>
      </section>

      {/* ── 2. Pricing Cards ──────────────────────────────────────────────── */}
      <section
        id="pricing"
        ref={pricingRef}
        className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F7FA]"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={pricingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl sm:text-5xl font-black text-[#123244] mb-3">
              Simple,{" "}
              <span style={{ color: "#25AEEB" }}>
                transparent pricing
              </span>
            </h2>
            <p className="text-gray-500 text-lg">
              Everything included in every plan. No hidden fees.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <PlanCard
              name="Annual Plan"
              price="$399.99"
              period="/year"
              badge="Best Value"
              badgeStyle="primary"
              features={planFeatures}
              cta="Start Annual Plan"
              popular={true}
              delay={0}
              inView={pricingInView}
            />
            <PlanCard
              name="Monthly Plan"
              price="$39.99"
              period="/month"
              badge="Flexible Option"
              badgeStyle="secondary"
              features={planFeatures}
              cta="Start Monthly Plan"
              popular={false}
              delay={0.15}
              inView={pricingInView}
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={pricingInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="text-center text-gray-400 text-sm mt-6"
          >
            Recurring subscription · Cancel anytime · 7-day satisfaction guarantee
          </motion.p>
        </div>
      </section>

      {/* ── 3. What's Included ───────────────────────────────────────────── */}
      <section
        ref={includedRef}
        className="py-24 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={includedInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <span
              className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
              style={{
                background: "rgba(37,174,235,0.08)",
                color: "#FF0A7A",
                border: "1px solid rgba(255,10,122,0.2)",
              }}
            >
              Every plan includes
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-[#123244] mb-3">
              What&apos;s{" "}
              <span style={{ color: "#25AEEB" }}>
                included
              </span>
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              One membership. Everything you need to build strength, improve nutrition,
              and show up consistently.
            </p>
          </motion.div>

          {/* Feature panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={includedInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-3xl overflow-hidden border border-gray-100 shadow-lg"
          >
            <div
              className="px-8 py-5 flex items-center gap-3"
              style={{
                background: "#102B3A",
              }}
            >
              <div className="w-2 h-2 rounded-full bg-[#22B8F0]" />
              <span className="text-white font-semibold text-sm tracking-wide">
                INCLUDED IN BOTH PLANS
              </span>
            </div>

            <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
              {/* Left column */}
              <div>
                {includedFeatures.slice(0, 3).map((feature, i) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={feature.label}
                      initial={{ opacity: 0, x: -16 }}
                      animate={includedInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                      className={`flex items-center gap-4 px-8 py-5 group hover:bg-[#EAF8FF] transition-colors ${
                        i < 2 ? "border-b border-gray-100" : ""
                      }`}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                        style={{ background: "rgba(34,184,240,0.1)" }}
                      >
                        <Icon size={18} className="text-[#22B8F0]" />
                      </div>
                      <div>
                        <p className="font-semibold text-[#123244] text-sm">
                          {feature.label}
                        </p>
                      </div>
                      <div className="ml-auto w-5 h-5 rounded-full flex items-center justify-center bg-[#22B8F0]/10">
                        <Check size={11} className="text-[#22B8F0]" />
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Right column */}
              <div>
                {includedFeatures.slice(3).map((feature, i) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={feature.label}
                      initial={{ opacity: 0, x: 16 }}
                      animate={includedInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                      className={`flex items-center gap-4 px-8 py-5 group hover:bg-[#fff0f7] transition-colors ${
                        i < 2 ? "border-b border-gray-100" : ""
                      }`}
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                        style={{ background: "rgba(255,10,122,0.08)" }}
                      >
                        <Icon size={18} className="text-[#FF0A7A]" />
                      </div>
                      <div>
                        <p className="font-semibold text-[#123244] text-sm">
                          {feature.label}
                        </p>
                      </div>
                      <div className="ml-auto w-5 h-5 rounded-full flex items-center justify-center bg-[#FF0A7A]/10">
                        <Check size={11} className="text-[#FF0A7A]" />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 4. How It Works ──────────────────────────────────────────────── */}
      <section
        ref={stepsRef}
        className="py-24 px-4 sm:px-6 lg:px-8"
        style={{
          background: "#F5F7FA",
        }}
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={stepsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span
              className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
              style={{
                background: "rgba(37,174,235,0.08)",
                color: "#22B8F0",
                border: "1px solid rgba(34,184,240,0.3)",
              }}
            >
              Simple setup
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-[#123244] mb-3">
              How it{" "}
              <span style={{ color: "#25AEEB" }}>
                works
              </span>
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              From sign-up to your first workout in less than 24 hours.
            </p>
          </motion.div>

          {/* Steps */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={stepsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative group"
              >
                {/* Connector line (desktop) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(100%-8px)] w-full h-px bg-[#25AEEB]/20 z-0" />
                )}

                <div className="relative z-10 bg-white rounded-2xl p-6 shadow-sm border border-white hover:shadow-lg transition-all duration-300 h-full">
                  {/* Step number bubble */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 font-black text-lg group-hover:scale-105 transition-transform"
                    style={{
                      background:
                        i % 2 === 0
                          ? "linear-gradient(135deg,rgba(34,184,240,0.15),rgba(34,184,240,0.05))"
                          : "linear-gradient(135deg,rgba(255,10,122,0.12),rgba(255,10,122,0.04))",
                      color: i % 2 === 0 ? "#22B8F0" : "#FF0A7A",
                    }}
                  >
                    {step.number}
                  </div>

                  <h3 className="font-bold text-[#123244] mb-2 text-base leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={stepsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="text-center mt-14"
          >
            <ShimmerButton size="lg">
              <Link href="#pricing" className="flex items-center gap-2">
                Pick your plan <ArrowRight size={18} />
              </Link>
            </ShimmerButton>
          </motion.div>
        </div>
      </section>

      {/* ── 5. Testimonials ──────────────────────────────────────────────── */}
      <section
        ref={testimonialsRef}
        className="py-24 px-4 sm:px-6 lg:px-8 bg-white"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl sm:text-5xl font-black text-[#123244] mb-3">
              Women who{" "}
              <span
                style={{
                  background: "linear-gradient(135deg,#22B8F0 0%,#FF0A7A 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                raised their bar
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -4 }}
                className="group p-8 rounded-3xl bg-[#F5F7FA] border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                {/* Quote icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                  style={{
                    background: "linear-gradient(135deg,#22B8F0,#FF0A7A)",
                  }}
                >
                  <Quote size={16} className="text-white" />
                </div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, s) => (
                    <Star
                      key={s}
                      size={14}
                      fill="#FF0A7A"
                      className="text-[#FF0A7A]"
                    />
                  ))}
                </div>

                <p className="text-[#123244] text-lg font-medium leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full"
                    style={{
                      background:
                        "linear-gradient(135deg,#22B8F0,#FF0A7A)",
                      opacity: 0.35,
                    }}
                  />
                  <div>
                    <p className="font-semibold text-[#123244] text-sm">
                      {t.name}
                    </p>
                    <p className="text-gray-400 text-xs">{t.tag}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. FAQ ───────────────────────────────────────────────────────── */}
      <section
        ref={faqRef}
        className="py-24 px-4 sm:px-6 lg:px-8"
        style={{
          background: "linear-gradient(135deg,#EAF8FF 0%,#fff0f7 100%)",
        }}
      >
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <span
              className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
              style={{
                background:
                  "linear-gradient(135deg,rgba(34,184,240,0.1),rgba(255,10,122,0.1))",
                color: "#22B8F0",
                border: "1px solid rgba(34,184,240,0.3)",
              }}
            >
              Billing & subscriptions
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-[#123244] mb-3">
              Before you{" "}
              <span
                style={{
                  background: "linear-gradient(135deg,#22B8F0 0%,#FF0A7A 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                commit
              </span>
            </h2>
            <p className="text-gray-500 text-lg">
              Everything you need to know about how billing works.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <FAQAccordion items={faqs} />
          </motion.div>
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <section
        className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{ background: "#0B1720" }}
      >
        <div className="absolute top-0 left-1/4 w-80 h-80 rounded-full bg-[#22B8F0]/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-[#FF0A7A]/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-white/50 text-sm font-medium tracking-widest uppercase mb-4">
              Your transformation starts today
            </p>
            <h2 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight">
              Ready to{" "}
              <span
                style={{
                  background: "linear-gradient(135deg,#22B8F0 0%,#FF0A7A 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                raise your bar?
              </span>
            </h2>
            <p className="text-white/60 text-lg mb-10">
              Join thousands of women building real strength and real confidence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <ShimmerButton size="lg">
                <Link href="#pricing" className="flex items-center gap-2">
                  Start Today <ArrowRight size={18} />
                </Link>
              </ShimmerButton>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/faqs"
                  className="inline-flex items-center gap-2 px-8 py-4 text-white border-2 border-white/30 rounded-full font-semibold hover:bg-white/10 transition-all"
                >
                  More Questions?
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
