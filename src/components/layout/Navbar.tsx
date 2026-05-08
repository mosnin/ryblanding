"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-[#123244]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl"
            : "bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-10 h-10">
                <Image
                  src="https://lirp.cdn-website.com/68b55009/dms3rep/multi/opt/Icon-1-1920w.png"
                  alt="RYB Logo"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              <span className="text-white font-bold text-xl tracking-tight hidden sm:block">
                Raise Your Bar
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-white/80 hover:text-white text-sm font-medium rounded-lg hover:bg-white/10 transition-all duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTAs */}
            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/get-started"
                className="px-4 py-2 text-white/80 hover:text-white text-sm font-medium transition-colors"
              >
                View Plans
              </Link>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
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
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="absolute right-0 top-0 bottom-0 w-72 bg-[#123244] shadow-2xl flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex items-center justify-between p-6 border-b border-white/10">
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
                  <span className="text-white font-bold">RYB</span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 text-white/70 hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="flex flex-col p-6 gap-1 flex-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-4 py-3 text-white/80 hover:text-white font-medium rounded-xl hover:bg-white/10 transition-all"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="p-6 border-t border-white/10 flex flex-col gap-3">
                <Link
                  href="/get-started"
                  onClick={() => setMobileOpen(false)}
                  className="w-full text-center px-5 py-3 text-white/80 border border-white/20 rounded-full text-sm font-medium hover:bg-white/10 transition-colors"
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
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
