import Link from "next/link";
import Image from "next/image";
import { Share2, Video, Mail } from "lucide-react";

const footerLinks = {
  Programs: [
    { label: "1:1 Coaching", href: "/coaching" },
    { label: "Get Started", href: "/get-started" },
    { label: "Members Area", href: "/members" },
  ],
  Company: [
    { label: "About", href: "/" },
    { label: "FAQs", href: "/faqs" },
    { label: "Contact", href: "/contact" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#123244] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-10 h-10">
                <Image
                  src="https://lirp.cdn-website.com/68b55009/dms3rep/multi/opt/Icon-1-1920w.png"
                  alt="RYB Logo"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              <span className="font-bold text-xl">Raise Your Bar</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Premium fitness coaching for busy women. Build strength, grow
              glutes, and feel confident in your body.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="p-2.5 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Share2 size={18} />
              </a>
              <a
                href="#"
                className="p-2.5 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                aria-label="YouTube"
              >
                <Video size={18} />
              </a>
              <a
                href="/contact"
                className="p-2.5 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-sm mb-4 text-[#22B8F0]">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/40 text-sm">
          <span>© {new Date().getFullYear()} Raise Your Bar. All rights reserved.</span>
          <span className="gradient-text font-medium">
            Built for strong women everywhere.
          </span>
        </div>
      </div>
    </footer>
  );
}
