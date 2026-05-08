import { Hero } from "@/components/sections/Hero";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { WhatsIncluded } from "@/components/sections/WhatsIncluded";
import { AppExperience } from "@/components/sections/AppExperience";
import { TransformationGallery } from "@/components/sections/TransformationGallery";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQPreview } from "@/components/sections/FAQPreview";
import { CTASection } from "@/components/ui/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <WhatsIncluded />
      <AppExperience />
      <TransformationGallery />
      <Pricing />
      <Testimonials />
      <FAQPreview />
      <CTASection
        headline="Ready to raise your bar?"
        subtext="Join thousands of women building strength, confidence, and real results. Your transformation starts today."
        primaryCTA="Start Today"
        primaryHref="/get-started"
        secondaryCTA="View Plans"
        secondaryHref="/get-started#pricing"
      />
    </>
  );
}
