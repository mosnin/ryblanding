import type { Metadata } from "next";
import { CoachingHero } from "@/components/sections/CoachingHero";
import { CoachingDetails } from "@/components/sections/CoachingDetails";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "1:1 Coaching | Raise Your Bar",
  description:
    "Personalized 1:1 coaching with custom workouts, nutrition, and direct coach access.",
};

export default function CoachingPage() {
  return (
    <>
      <CoachingHero />
      <CoachingDetails />
      <Testimonials />
      <CTASection
        headline="Ready to raise your bar?"
        subtext="Apply for 1:1 coaching today. Limited spots available."
        primaryCTA="Apply Now"
        primaryHref="/get-started"
        secondaryCTA="View Plans"
        secondaryHref="/get-started#pricing"
      />
    </>
  );
}
