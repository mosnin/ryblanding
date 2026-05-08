import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Raise Your Bar | Premium Fitness Coaching for Women",
  description:
    "Glute focused training, custom nutrition, and confidence coaching for busy women ready to feel strong in real life.",
  icons: {
    icon: "https://irp.cdn-website.com/68b55009/site_favicon_16_1760010386974.ico",
  },
  openGraph: {
    title: "Raise Your Bar | Premium Fitness Coaching for Women",
    description:
      "Build glutes, get strong, and feel confident with a premium app-based coaching experience built for busy women.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <head>
        <link
          rel="icon"
          href="https://irp.cdn-website.com/68b55009/site_favicon_16_1760010386974.ico"
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
