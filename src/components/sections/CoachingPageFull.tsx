"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Dumbbell,
  UtensilsCrossed,
  MessageCircle,
  TrendingUp,
  Brain,
  RotateCcw,
  CheckCircle2,
  Clock,
  Baby,
  BarChart2,
  Target,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import { ShimmerButton } from "@/components/ui/ShimmerButton";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";

// ─── Data ─────────────────────────────────────────────────────────────────────

const APPLY_URL = "https://dustiesamson.com";

const whoItsFor = [
  {
    icon: Clock,
    title: "Busy women",
    description:
      "You have a full life — work, family, everything in between. You need a plan that actually fits.",
  },
  {
    icon: Baby,
    title: "Postpartum women",
    description:
      "Your body changed and you want support that meets you where you are — not where you used to be.",
  },
  {
    icon: BarChart2,
    title: "Women stuck after years in the gym",
    description:
      "You've been putting in the work but the results aren't matching your effort. Time for a real strategy.",
  },
  {
    icon: Target,
    title: "Women who want glute growth and body recomposition",
    description:
      "You have a specific vision for your body — and you want a coach who knows exactly how to get you there.",
  },
  {
    icon: ShieldCheck,
    title: "Women who need structure and accountability",
    description:
      "Motivation comes and goes. What you need is a system, a plan, and someone holding you to it.",
  },
];

const included = [
  {
    icon: Dumbbell,
    title: "Custom workout strategy",
    description:
      "A training program built from scratch around your goals, schedule, and available equipment — no templates, no guesswork.",
    color: "#22B8F0",
  },
  {
    icon: UtensilsCrossed,
    title: "Nutrition direction",
    description:
      "Practical macro and meal guidance tailored to your lifestyle. No extreme diets. Just a plan you can actually follow.",
    color: "#FF0A7A",
  },
  {
    icon: MessageCircle,
    title: "Weekly check-ins",
    description:
      "Structured weekly reviews to track how you're feeling, what's working, and what needs to change.",
    color: "#22B8F0",
  },
  {
    icon: TrendingUp,
    title: "Progress reviews",
    description:
      "Regular assessments of your photos, measurements, and performance so your program stays aligned with your results.",
    color: "#FF0A7A",
  },
  {
    icon: Brain,
    title: "Mindset and confidence coaching",
    description:
      "Physical transformation starts in your head. Dustie coaches the mental side of the journey alongside the physical.",
    color: "#22B8F0",
  },
  {
    icon: RotateCcw,
    title: "Adjustments based on results",
    description:
      "Nothing is set in stone. As your body adapts and your life shifts, your program shifts with you.",
    color: "#FF0A7A",
  },
];

const process = [
  {
    step: "Assess",
    number: "01",
    description:
      "We start by understanding you — your history, your goals, your schedule, your starting point. Nothing is assumed.",
    detail: "Intake form · Goal session · Baseline review",
  },
  {
    step: "Build",
    number: "02",
    description:
      "Dustie builds your custom workout and nutrition strategy from the ground up. Your plan, not a template.",
    detail: "Custom program · Macro targets · Weekly structure",
  },
  {
    step: "Execute",
    number: "03",
    description:
      "You train. You eat. You check in. Dustie is with you every step — answering questions, reviewing form, keeping momentum.",
    detail: "App access · Direct messaging · Form checks",
  },
  {
    step: "Adjust",
    number: "04",
    description:
      "Every few weeks, we review your results and update your program. Nothing stagnates. Everything evolves.",
    detail: "Weekly check-ins · Program updates · Troubleshooting",
  },
  {
    step: "Transform",
    number: "05",
    description:
      "The physical results come — but so does the confidence, the consistency, and the feeling of finally having a plan that works.",
    detail: "Visible results · Sustainable habits · Lasting confidence",
  },
];

// ─── Section: Hero ─────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section
      className="relative pt-36 pb-0 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ background: "#0B1720" }}
    >
      <div className="absolute top-16 right-0 w-96 h-96 rounded-full bg-[#FF0A7A]/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-[#22B8F0]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-end">

          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="pb-24"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm font-medium mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF0A7A] animate-pulse" />
              Limited spots available
            </span>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-7">
              Personal coaching for women who want{" "}
              <span
                style={{
                  background: "linear-gradient(135deg,#22B8F0 0%,#FF0A7A 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                deeper support.
              </span>
            </h1>

            <p className="text-xl text-white/65 leading-relaxed mb-10 max-w-xl">
              Work directly with Dustie for customized strategy, accountability,
              and guidance built around your body, schedule, and goals.
            </p>

            <div className="flex flex-wrap gap-4">
              <ShimmerButton size="lg">
                <a
                  href={APPLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Apply for Coaching <ArrowRight size={18} />
                </a>
              </ShimmerButton>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="#process"
                  className="inline-flex items-center gap-2 px-8 py-4 text-white border-2 border-white/25 rounded-full font-semibold hover:bg-white/10 transition-all"
                >
                  See how it works
                </Link>
              </motion.div>
            </div>

            {/* Social proof strip */}
            <div className="flex flex-wrap gap-x-8 gap-y-3 mt-12">
              {[
                "Custom built, not templated",
                "Direct coach access",
                "Postpartum safe",
              ].map((t) => (
                <span key={t} className="flex items-center gap-2 text-white/50 text-sm">
                  <CheckCircle2 size={14} className="text-[#22B8F0]" />
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: Coach image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="relative"
          >
            {/* Glow ring */}
            <div
              className="absolute -inset-4 rounded-t-3xl opacity-30 blur-2xl pointer-events-none"
              style={{ background: "linear-gradient(135deg,#22B8F0,#FF0A7A)" }}
            />
            <div
              role="img"
              aria-label="Coach image placeholder"
              className="relative rounded-t-3xl overflow-hidden h-[520px] lg:h-[600px] flex flex-col items-center justify-center"
              style={{
                background:
                  "linear-gradient(160deg,rgba(34,184,240,0.12) 0%,rgba(255,10,122,0.08) 100%)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              {/* Inner decoration */}
              <div className="absolute top-6 right-6 px-3 py-1.5 rounded-full text-xs font-bold text-white bg-white/10 border border-white/20">
                Dustie Samson
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <div
                  className="rounded-2xl px-5 py-4"
                  style={{
                    background: "rgba(18,50,68,0.7)",
                    backdropFilter: "blur(16px)",
                    border: "1px solid rgba(34,184,240,0.2)",
                  }}
                >
                  <p className="text-white/50 text-xs mb-1">Your coach</p>
                  <p className="text-white font-bold">Dustie Samson</p>
                  <p className="text-[#22B8F0] text-sm">Certified Fitness &amp; Nutrition Coach</p>
                </div>
              </div>
              <div className="text-center px-8">
                <div
                  className="w-24 h-24 rounded-full mx-auto mb-4 opacity-20"
                  style={{ background: "linear-gradient(135deg,#22B8F0,#FF0A7A)" }}
                />
                <p className="text-white/30 text-sm font-medium tracking-wide uppercase">
                  Coach image placeholder
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Section: Who It's For ─────────────────────────────────────────────────────

function WhoItsFor() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65 }}
          >
            <span
              className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-5"
              style={{
                background:
                  "linear-gradient(135deg,rgba(34,184,240,0.1),rgba(255,10,122,0.1))",
                color: "#FF0A7A",
                border: "1px solid rgba(255,10,122,0.2)",
              }}
            >
              Is this right for you?
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-[#123244] leading-tight mb-6">
              This coaching is{" "}
              <span
                style={{
                  background: "linear-gradient(135deg,#22B8F0 0%,#FF0A7A 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                built for you
              </span>{" "}
              if you&apos;re...
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              1:1 coaching isn&apos;t for everyone — and that&apos;s intentional. If any of
              these sound like you, you&apos;re exactly who Dustie coaches.
            </p>

            <ShimmerButton size="md">
              <a
                href={APPLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Apply for Coaching <ArrowRight size={16} />
              </a>
            </ShimmerButton>
          </motion.div>

          {/* Right: Cards */}
          <div className="space-y-4">
            {whoItsFor.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: 24 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="group flex items-start gap-5 p-5 rounded-2xl border border-gray-100 bg-white hover:shadow-lg hover:border-[#22B8F0]/20 transition-all duration-300"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                    style={{
                      background:
                        i % 2 === 0
                          ? "rgba(34,184,240,0.1)"
                          : "rgba(255,10,122,0.08)",
                    }}
                  >
                    <Icon
                      size={18}
                      style={{ color: i % 2 === 0 ? "#22B8F0" : "#FF0A7A" }}
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#123244] mb-1 text-base">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                  <ChevronRight
                    size={16}
                    className="ml-auto flex-shrink-0 text-gray-200 group-hover:text-[#22B8F0] transition-colors mt-1"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section: What's Included ──────────────────────────────────────────────────

function WhatsIncluded() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8"
      style={{
        background: "linear-gradient(135deg,#123244 0%,#1a4462 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-5 text-white/80 bg-white/10 border border-white/20">
            Everything inside your coaching
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            What&apos;s{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#22B8F0 0%,#FF0A7A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              included
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            Every element of your coaching is designed to move you forward — body, mindset, and habits.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {included.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="group rounded-2xl p-7 transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(12px)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background =
                    "rgba(255,255,255,0.1)";
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    item.color + "40";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background =
                    "rgba(255,255,255,0.06)";
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "rgba(255,255,255,0.1)";
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                  style={{ background: `${item.color}20` }}
                >
                  <Icon size={20} style={{ color: item.color }} />
                </div>
                <h3 className="font-bold text-white text-base mb-2">{item.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-14"
        >
          <ShimmerButton size="lg">
            <a
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              Apply for Coaching <ArrowRight size={18} />
            </a>
          </ShimmerButton>
          <p className="text-white/35 text-sm mt-4">
            Limited spots · Application reviewed within 48 hours
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section: Coaching Process ────────────────────────────────────────────────

function CoachingProcess() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="process"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-5"
            style={{
              background:
                "linear-gradient(135deg,rgba(34,184,240,0.1),rgba(255,10,122,0.1))",
              color: "#22B8F0",
              border: "1px solid rgba(34,184,240,0.3)",
            }}
          >
            Your transformation roadmap
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#123244] mb-4">
            The coaching{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#22B8F0 0%,#FF0A7A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              process
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            Five phases, one outcome: a stronger, more confident version of you.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#22B8F0]/40 via-[#FF0A7A]/30 to-transparent hidden sm:block" />

          <div className="space-y-8">
            {process.map((item, i) => {
              const isRight = i % 2 === 1;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: isRight ? 30 : -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className={`relative flex items-center gap-8 ${
                    isRight
                      ? "lg:flex-row-reverse"
                      : "lg:flex-row"
                  } flex-row`}
                >
                  {/* Card */}
                  <div
                    className={`flex-1 ${
                      isRight ? "lg:text-right" : ""
                    }`}
                  >
                    <div
                      className="group inline-block w-full lg:max-w-md rounded-2xl p-7 border border-gray-100 bg-white hover:shadow-xl transition-all duration-300"
                      style={{
                        marginLeft: isRight ? "auto" : undefined,
                        marginRight: isRight ? undefined : "auto",
                      }}
                    >
                      <div
                        className={`flex items-center gap-3 mb-4 ${
                          isRight ? "lg:flex-row-reverse" : ""
                        }`}
                      >
                        <span
                          className="text-3xl font-black"
                          style={{
                            background:
                              i % 2 === 0
                                ? "linear-gradient(135deg,#22B8F0,#FF0A7A)"
                                : "linear-gradient(135deg,#FF0A7A,#22B8F0)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                          }}
                        >
                          {item.number}
                        </span>
                        <h3 className="text-2xl font-black text-[#123244]">
                          {item.step}
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed mb-4">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.detail.split(" · ").map((d) => (
                          <span
                            key={d}
                            className="px-3 py-1 rounded-full text-xs font-medium"
                            style={{
                              background:
                                i % 2 === 0
                                  ? "rgba(34,184,240,0.08)"
                                  : "rgba(255,10,122,0.08)",
                              color: i % 2 === 0 ? "#22B8F0" : "#FF0A7A",
                            }}
                          >
                            {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Circle node on timeline */}
                  <div className="hidden sm:flex absolute left-8 lg:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full items-center justify-center z-10 shadow-lg"
                    style={{
                      background: "linear-gradient(135deg,#22B8F0,#FF0A7A)",
                    }}
                  >
                    <span className="text-white text-xs font-black">{i + 1}</span>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden lg:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Section: Application CTA ─────────────────────────────────────────────────

function ApplicationCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ background: "#0B1720" }}
    >
      {/* Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#22B8F0]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-[#FF0A7A]/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm font-medium mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF0A7A] animate-pulse" />
              Limited coaching spots
            </span>

            <h2 className="text-5xl sm:text-6xl font-black text-white mb-6 leading-tight">
              Ready for{" "}
              <span
                style={{
                  background: "linear-gradient(135deg,#22B8F0 0%,#FF0A7A 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                personal support?
              </span>
            </h2>
            <p className="text-xl text-white/60 leading-relaxed mb-8">
              Apply today and Dustie will review your application personally. If
              it&apos;s a great fit, you&apos;ll hear back within 48 hours to get started.
            </p>

            <ShimmerButton size="lg">
              <a
                href={APPLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Apply for Coaching <ArrowRight size={18} />
              </a>
            </ShimmerButton>

            <p className="text-white/35 text-sm mt-5">
              Application takes less than 5 minutes · No payment required to apply
            </p>
          </motion.div>

          {/* Right: image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="relative"
          >
            <div
              className="absolute -inset-3 rounded-3xl opacity-20 blur-2xl pointer-events-none"
              style={{ background: "linear-gradient(135deg,#22B8F0,#FF0A7A)" }}
            />
            <ImagePlaceholder
              label="Coaching application image placeholder"
              className="h-80 lg:h-[420px] relative"
              aspectRatio=""
            />

            {/* Glass stats */}
            <div
              className="absolute -bottom-5 -left-5 px-5 py-3 rounded-2xl shadow-xl"
              style={{
                background: "rgba(18,50,68,0.85)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(34,184,240,0.25)",
              }}
            >
              <p className="text-white/50 text-xs mb-0.5">Response time</p>
              <p className="text-white font-bold text-sm">Within 48 hours</p>
            </div>

            <div
              className="absolute -top-4 -right-4 px-4 py-2 rounded-xl shadow-lg"
              style={{ background: "linear-gradient(90deg,#22B8F0,#FF0A7A)" }}
            >
              <p className="text-white font-bold text-xs">Personalized ✦</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────

export function CoachingPageFull() {
  return (
    <>
      <Hero />
      <WhoItsFor />
      <WhatsIncluded />
      <CoachingProcess />
      <ApplicationCTA />
    </>
  );
}
