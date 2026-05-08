import type { Metadata } from "next";
import { GetStartedPage } from "@/components/sections/GetStartedPage";

export const metadata: Metadata = {
  title: "Get Started | Raise Your Bar",
  description:
    "Choose your plan and start building strength with custom workouts, nutrition, and coaching support.",
};

export default function Page() {
  return <GetStartedPage />;
}
