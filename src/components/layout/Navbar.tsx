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
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false); // eslint-disable-line react-hooks/set-state-in-effect
  }, [pathname]);

  const headerInitial = shouldReduceMotion ? { y: 0, opacity: 1 } : { y: -80, opacity: 0 };
  const headerAnimate = { y: 0, opacity: 1 };
  const headerTransition = shouldReduceMotion
    ? { duration: 0 }
    : ({ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } as const);

  return (
    <>
      <motion.header
        initial={headerInitial}
        animate={headerAnimate}
        transition={headerTransition}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[#123244]/96 backdrop-blur-2xl border-b border-white/[0.08] [box-shadow:0_8px_32px_rgba(18,50,68,0.4)]"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-[4.5rem]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-9 h-9 lg:w-10 lg:h-10 flex-shrink-0">
                {/* White logo for scrolled/visible state */}
                <Image
                  src="https://lirp.cdn-website.com/68b55009/dms3rep/multi/opt/Icon-1-1920w.png"
                  alt="RYB Logo"
                  fill
                  className="object-contain"
                  unoptimized
                  priority
                />
              </div>
              <motion.span
                initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6, delay: 0.3 }}
                className="text-white font-bold text-lg lg:text-xl tracking-tight hidden sm:block"
              >
                Raise Your Bar
              </motion.span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-0.5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200 group",
                      isActive
                        ? "text-white"
                        : "text-white/70 hover:text-white hover:bg-white/[0.07]"
                    )}
                  >
                    {link.label}
                    {/* Underline slide indicator */}
                    <span
                      className={cn(
                        "absolute bottom-0.5 left-4 right-4 h-[2px] rounded-full bg-gradient-to-r from-[#22B8F0] to-[#FF0A7A] origin-left transition-transform duration-200",
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      )}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/get-started"
                className="px-4 py-2 text-white/70 hover:text-white text-sm font-medium transition-colors duration-150"
              >
                View Plans
              </Link>
              <motion.div
                whileHover={shouldReduceMotion ? {} : { scale: 1.03 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.97 }}
              >
                <Link
                  href="/get-started"
                  className="px-5 py-2.5 text-sm font-semibold text-white rounded-full shadow-lg shadow-pink-500/30 shimmer-btn"
                >
                  Start Today
                </Link>
              </motion.div>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-white rounded-lg hover:bg-white/10 transition-colors"
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
                    <X size={24} />
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
                    <Menu size={24} />
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
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.25 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer panel */}
            <motion.div
              className="absolute right-0 top-0 bottom-0 w-72 bg-[#0e2535] shadow-2xl flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : { type: "spring", stiffness: 320, damping: 32, mass: 0.9 }
              }
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="relative w-8 h-8">
                    <Image
                      src="https://lirp.cdn-website.com/68b55009/dms3rep/multi/opt/Icon-1-1920w.png"
                      alt="RYB Logo"
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                  <span className="text-white font-bold tracking-tight">RYB</span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-white/60 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex flex-col px-4 py-4 gap-0.5 flex-1 overflow-y-auto">
                {navLinks.map((link, i) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={shouldReduceMotion ? {} : { opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={
                        shouldReduceMotion
                          ? { duration: 0 }
                          : { delay: i * 0.04 + 0.08, duration: 0.22, ease: "easeOut" }
                      }
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={cn(
                          "flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-150",
                          isActive
                            ? "text-white bg-white/10"
                            : "text-white/70 hover:text-white hover:bg-white/[0.07]"
                        )}
                      >
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#22B8F0] mr-2.5 flex-shrink-0" />
                        )}
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Footer CTAs */}
              <motion.div
                className="p-5 border-t border-white/10 flex flex-col gap-3"
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={
                  shouldReduceMotion
                    ? { duration: 0 }
                    : { delay: navLinks.length * 0.04 + 0.1, duration: 0.22 }
                }
              >
                <Link
                  href="/get-started"
                  onClick={() => setMobileOpen(false)}
                  className="w-full text-center px-5 py-3 text-white/80 border border-white/20 rounded-full text-sm font-medium hover:bg-white/10 transition-colors duration-150"
                >
                  View Plans
                </Link>
                <Link
                  href="/get-started"
                  onClick={() => setMobileOpen(false)}
                  className="w-full text-center px-5 py-3 text-white text-sm font-semibold rounded-full shimmer-btn"
                >
                  Start Today
                </Link>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
