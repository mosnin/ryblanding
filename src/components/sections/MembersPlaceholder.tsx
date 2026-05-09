"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Lock, Dumbbell, UtensilsCrossed, TrendingUp, Users, CheckSquare } from "lucide-react";
import { ShimmerButton } from "@/components/ui/ShimmerButton";

const memberFeatures = [
  { icon: Dumbbell, label: "Today's Workout" },
  { icon: UtensilsCrossed, label: "Meal Plan" },
  { icon: TrendingUp, label: "Progress Tracker" },
  { icon: Users, label: "Community" },
  { icon: CheckSquare, label: "Habit Tracker" },
];

export function MembersPlaceholder() {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ background: "#0B1720" }}
    >
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-[#22B8F0]/15 blur-3xl" />
      <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-[#FF0A7A]/10 blur-3xl" />

      <div className="relative z-10 max-w-2xl mx-auto text-center py-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8"
            style={{ background: "#25AEEB" }}
          >
            <Lock size={36} className="text-white" />
          </div>

          <span className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-6 text-white/80 bg-white/10 border border-white/20">
            Members Only
          </span>

          <h1 className="text-5xl sm:text-6xl font-black text-white mb-6">
            Your{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #22B8F0 0%, #FF0A7A 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Coaching Hub
            </span>
          </h1>

          <p className="text-xl text-white/60 mb-8">
            Your workouts, nutrition, progress tracking, and community are all
            here. Coming soon — or log in if you&apos;re already a member.
          </p>

          {/* Feature preview cards */}
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-10">
            {memberFeatures.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.label}
                  className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/10 border border-white/15"
                >
                  <Icon size={20} className="text-[#22B8F0]" />
                  <span className="text-white/60 text-xs text-center">{f.label}</span>
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <ShimmerButton size="lg">
              <Link href="/get-started">Get Access</Link>
            </ShimmerButton>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <button className="px-8 py-4 text-white border-2 border-white/30 rounded-full font-semibold hover:bg-white/10 transition-all">
                Log In
              </button>
            </motion.div>
          </div>

          <p className="mt-8 text-white/30 text-sm">
            Members Area — Full launch coming soon ✦
          </p>
        </motion.div>
      </div>
    </section>
  );
}
