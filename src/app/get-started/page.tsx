import type { Metadata } from "next";
import { GetStartedHero } from "@/components/sections/GetStartedHero";
import { Pricing } from "@/components/sections/Pricing";
import { WhatsIncluded } from "@/components/sections/WhatsIncluded";
import { CTASection } from "@/components/ui/CTASection";

export const metadata: Metadata = {
  title: "Get Started | Raise Your Bar",
  description: "Choose your plan and start your transformation today.",
};

export default function GetStartedPage() {
  return (
    <>
      <GetStartedHero />
      <div id="pricing">
        <Pricing />
      </div>
      <WhatsIncluded />
      <CTASection
        headline="Ready to raise your bar?"
        subtext="Start today and get instant access to everything you need."
        primaryCTA="Start Today"
        primaryHref="#pricing"
      />
    </>
  );
}
