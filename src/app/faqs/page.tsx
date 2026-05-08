import type { Metadata } from "next";
import { FAQsPage } from "@/components/sections/FAQsPage";

export const metadata: Metadata = {
  title: "FAQs | Raise Your Bar",
  description: "Answers to the most common questions about RYB coaching programs.",
};

export default function FAQPage() {
  return <FAQsPage />;
}
