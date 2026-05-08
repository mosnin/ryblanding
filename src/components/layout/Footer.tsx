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
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

const socialLinks = [
  { href: "#", label: "Instagram", icon: Share2 },
  { href: "#", label: "YouTube", icon: Video },
  { href: "/contact", label: "Email", icon: Mail },
];

export function Footer() {
  return (
    <footer className="bg-[#123244] text-white relative">
      {/* Gradient top border */}
      <div
        className="h-px w-full"
        style={{
          background: "linear-gradient(90deg, #22B8F0 0%, #FF0A7A 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/[0.08]">
          {/* Brand column */}
          <div className="lg:col-span-2 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                  src="https://lirp.cdn-website.com/68b55009/dms3rep/multi/opt/Icon-1-1920w.png"
                  alt="RYB Logo"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              <span className="font-bold text-xl tracking-tight">Raise Your Bar</span>
            </div>

            <p className="gradient-text font-semibold text-sm mb-3">
              Elevate every rep. Own every result.
            </p>

            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Premium fitness coaching for busy women. Build strength, grow
              glutes, and feel confident in your body.
            </p>

            {/* Social icons */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  className="p-2.5 bg-white/[0.07] rounded-xl hover:bg-white/[0.14] hover:scale-110 transition-all duration-150"
                  aria-label={label}
                >
                  <Icon size={17} className="text-white/80" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-xs uppercase tracking-widest mb-5 text-[#22B8F0]">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-white text-sm transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom micro-strip */}
        <div className="py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/35 text-xs">
          <span>© 2025 Raise Your Bar · Built for strong women everywhere.</span>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="hover:text-white/60 transition-colors duration-150"
            >
              Privacy
            </a>
            <span className="text-white/20">·</span>
            <a
              href="#"
              className="hover:text-white/60 transition-colors duration-150"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
