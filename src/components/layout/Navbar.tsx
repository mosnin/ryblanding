"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "1:1 Coaching", href: "/coaching" },
  { label: "Get Started", href: "/get-started" },
  { label: "FAQs", href: "/faqs" },
  { label: "Members", href: "/members" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    setMobileOpen(false); // eslint-disable-line react-hooks/set-state-in-effect
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={shouldReduceMotion ? { y: 0, opacity: 1 } : { y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        className="fixed top-0 left-0 right-0 z-50 bg-[#102B3A] border-b border-white/[0.07]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-8 h-8 flex-shrink-0">
                <Image
                  src="https://lirp.cdn-website.com/68b55009/dms3rep/multi/opt/Icon-1-1920w.png"
                  alt="RYB Logo"
                  fill
                  className="object-contain"
                  unoptimized
                  priority
                />
              </div>
              <span className="text-white font-semibold text-base tracking-tight hidden sm:block">
                Raise Your Bar
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "px-4 py-2 text-sm font-medium rounded-md transition-colors duration-150",
                      isActive
                        ? "text-white"
                        : "text-white/55 hover:text-white hover:bg-white/[0.06]"
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <span className="block mt-0.5 h-[2px] w-full rounded-full bg-[#25AEEB]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/get-started"
                className="text-white/55 hover:text-white text-sm font-medium transition-colors duration-150"
              >
                View Plans
              </Link>
              <Link
                href="/get-started"
                className="btn-primary px-5 py-2 text-sm font-semibold rounded-full"
              >
                Start Today
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-white rounded-md hover:bg-white/10 transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span
                    key="close"
                    initial={shouldReduceMotion ? {} : { rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={shouldReduceMotion ? {} : { rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="block"
                  >
                    <X size={22} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={shouldReduceMotion ? {} : { rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={shouldReduceMotion ? {} : { rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="block"
                  >
                    <Menu size={22} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.2 }}
              className="absolute inset-0 bg-black/50"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="absolute right-0 top-0 bottom-0 w-72 bg-[#102B3A] border-l border-white/[0.07] flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : { type: "spring", stiffness: 320, damping: 32, mass: 0.9 }
              }
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.07]">
                <span className="text-white font-semibold">Raise Your Bar</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-white/50 hover:text-white rounded-md hover:bg-white/10 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>

              <nav className="flex flex-col px-4 py-4 gap-0.5 flex-1 overflow-y-auto">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={shouldReduceMotion ? {} : { opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={
                        shouldReduceMotion
                          ? { duration: 0 }
                          : { delay: i * 0.04 + 0.06, duration: 0.2, ease: "easeOut" }
                      }
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          "flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md transition-colors duration-150",
                          isActive
                            ? "text-white bg-white/10"
                            : "text-white/55 hover:text-white hover:bg-white/[0.06]"
                        )}
                      >
                        {isActive && (
                          <span className="w-1 h-4 rounded-full bg-[#25AEEB] flex-shrink-0" />
                        )}
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="p-4 border-t border-white/[0.07] flex flex-col gap-3">
                <Link
                  href="/get-started"
                  onClick={() => setMobileOpen(false)}
                  className="w-full text-center px-5 py-3 text-white/70 border border-white/15 rounded-full text-sm font-medium hover:bg-white/[0.06] transition-colors duration-150"
                >
                  View Plans
                </Link>
                <Link
                  href="/get-started"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary w-full text-center px-5 py-3 text-sm font-semibold rounded-full"
                >
                  Start Today
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
