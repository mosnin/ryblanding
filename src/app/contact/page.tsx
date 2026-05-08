import type { Metadata } from "next";
import { ContactPage } from "@/components/sections/ContactPage";

export const metadata: Metadata = {
  title: "Contact | Raise Your Bar",
  description: "Get in touch with the RYB team.",
};

export default function Contact() {
  return <ContactPage />;
}
