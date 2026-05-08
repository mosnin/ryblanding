import type { Metadata } from "next";
import { CoachingPageFull } from "@/components/sections/CoachingPageFull";

export const metadata: Metadata = {
  title: "1:1 Coaching | Raise Your Bar",
  description:
    "Work directly with Dustie for personalized workout strategy, nutrition direction, and accountability built around your body and schedule.",
};

export default function CoachingPage() {
  return <CoachingPageFull />;
}
