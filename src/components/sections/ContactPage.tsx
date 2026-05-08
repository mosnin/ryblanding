"use client";

import { motion } from "framer-motion";
import { Mail, Share2, MessageCircle } from "lucide-react";

const contactOptions = [
  {
    icon: Mail,
    title: "Email Us",
    description: "For general questions, billing, and program inquiries.",
    cta: "hello@raiseyourbar.com",
    href: "mailto:hello@raiseyourbar.com",
    color: "#22B8F0",
  },
  {
    icon: Share2,
    title: "Instagram",
    description: "Follow for daily tips, motivation, and behind-the-scenes.",
    cta: "@raiseyourbar",
    href: "#",
    color: "#FF0A7A",
  },
  {
    icon: MessageCircle,
    title: "App Support",
    description: "Existing members can reach out via the in-app chat.",
    cta: "Open App",
    href: "/members",
    color: "#22B8F0",
  },
];

export function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{
          background: "linear-gradient(-45deg, #0a2233, #123244, #1a4462, #0d2d42)",
          backgroundSize: "400% 400%",
          animation: "gradient-x 12s ease infinite",
        }}
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
              We&apos;re Here to Help
            </span>
            <h1 className="text-5xl sm:text-6xl font-black text-white mb-6">
              Get in{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #22B8F0 0%, #FF0A7A 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Touch
              </span>
            </h1>
            <p className="text-xl text-white/60">
              Have a question? We typically respond within 24 hours.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none">
            <path d="M0 60L1440 60L1440 30C1080 0 360 0 0 30L0 60Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {contactOptions.map((opt, i) => {
              const Icon = opt.icon;
              return (
                <motion.a
                  key={opt.title}
                  href={opt.href}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="group block p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform"
                    style={{ background: `${opt.color}15` }}
                  >
                    <Icon size={24} style={{ color: opt.color }} />
                  </div>
                  <h3 className="font-bold text-[#123244] text-lg mb-2">{opt.title}</h3>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed">{opt.description}</p>
                  <span
                    className="text-sm font-semibold"
                    style={{ color: opt.color }}
                  >
                    {opt.cta} →
                  </span>
                </motion.a>
              );
            })}
          </div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-black text-[#123244] text-center mb-8">
              Send a Message
            </h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-[#123244] mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="Jane"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#22B8F0] focus:ring-2 focus:ring-[#22B8F0]/20 transition-all text-[#123244]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#123244] mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Smith"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#22B8F0] focus:ring-2 focus:ring-[#22B8F0]/20 transition-all text-[#123244]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#123244] mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="jane@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#22B8F0] focus:ring-2 focus:ring-[#22B8F0]/20 transition-all text-[#123244]"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#123244] mb-2">
                  Subject
                </label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#22B8F0] focus:ring-2 focus:ring-[#22B8F0]/20 transition-all text-[#123244] bg-white">
                  <option>General Question</option>
                  <option>Program Inquiry</option>
                  <option>1:1 Coaching</option>
                  <option>Billing Support</option>
                  <option>Technical Support</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#123244] mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us how we can help..."
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#22B8F0] focus:ring-2 focus:ring-[#22B8F0]/20 transition-all resize-none text-[#123244]"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 text-white font-semibold rounded-full shimmer-btn text-lg"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}
