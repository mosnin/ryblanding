"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { ShimmerButton } from "@/components/ui/ShimmerButton";

const features = [
  "Custom glute focused workouts",
  "Personalized meal plans",
  "Exercise video library",
  "Progress tracking",
  "Habit tracker",
  "Community support",
  "Home or gym options",
  "Confidence coaching",
];

const plans = [
  {
    name: "Monthly",
    price: "$39.99",
    period: "/month",
    billing: "Recurring monthly subscription",
    cta: "Start Monthly",
    popular: false,
    color: "#22B8F0",
  },
  {
    name: "Annual",
    price: "$399.99",
    period: "/year",
    billing: "Recurring annual subscription",
    savings: "Save $79.89",
    cta: "Start Annual",
    popular: true,
    color: "#FF0A7A",
  },
];

export function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
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
              color: "#FF0A7A",
              border: "1px solid rgba(255,10,122,0.2)"
            }}
          >
            Simple Pricing
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#123244] mb-4">
            Choose Your{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #22B8F0 0%, #FF0A7A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Plan
            </span>
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Everything included in every plan. Cancel anytime.
          </p>
        </motion.div>

        {/* Plans */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -4 }}
              className={`relative rounded-3xl overflow-hidden ${plan.popular ? "shadow-2xl shadow-pink-500/20" : "shadow-lg"}`}
            >
              {plan.popular && (
                <div
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ background: "linear-gradient(90deg, #22B8F0, #FF0A7A)" }}
                />
              )}

              <div className={`p-8 h-full ${plan.popular ? "bg-[#123244]" : "bg-white"}`}>
                {/* Plan header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className={`text-xl font-bold mb-1 ${plan.popular ? "text-white" : "text-[#123244]"}`}>
                      {plan.name}
                    </h3>
                    <p className={`text-sm ${plan.popular ? "text-white/60" : "text-gray-400"}`}>
                      {plan.billing}
                    </p>
                  </div>
                  {plan.popular && (
                    <span
                      className="px-3 py-1 rounded-full text-xs font-bold text-white"
                      style={{ background: "linear-gradient(90deg, #22B8F0, #FF0A7A)" }}
                    >
                      Best Value
                    </span>
                  )}
                </div>

                {/* Price */}
                <div className="mb-2">
                  <span className={`text-5xl font-black ${plan.popular ? "text-white" : "text-[#123244]"}`}>
                    {plan.price}
                  </span>
                  <span className={`text-lg ${plan.popular ? "text-white/60" : "text-gray-400"}`}>
                    {plan.period}
                  </span>
                </div>
                {plan.savings && (
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-6"
                    style={{
                      background: "rgba(34,184,240,0.2)",
                      color: "#22B8F0"
                    }}
                  >
                    {plan.savings} vs monthly
                  </span>
                )}

                {/* Features */}
                <ul className="space-y-3 mt-6 mb-8">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: plan.popular ? "rgba(34,184,240,0.2)" : "rgba(255,10,122,0.1)" }}
                      >
                        <Check size={11} style={{ color: plan.popular ? "#22B8F0" : "#FF0A7A" }} />
                      </div>
                      <span className={`text-sm ${plan.popular ? "text-white/80" : "text-gray-600"}`}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                {plan.popular ? (
                  <ShimmerButton size="lg" className="w-full justify-center">
                    <Link href="/get-started">{plan.cta}</Link>
                  </ShimmerButton>
                ) : (
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href="/get-started"
                      className="block w-full text-center px-6 py-4 rounded-full border-2 border-[#22B8F0] text-[#22B8F0] font-semibold hover:bg-[#22B8F0] hover:text-white transition-all duration-300"
                    >
                      {plan.cta}
                    </Link>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-gray-400 text-sm mt-8"
        >
          Cancel anytime. No contracts. Instant access.
        </motion.p>
      </div>
    </section>
  );
}
