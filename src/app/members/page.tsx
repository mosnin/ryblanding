import type { Metadata } from "next";
import { MembersPlaceholder } from "@/components/sections/MembersPlaceholder";

export const metadata: Metadata = {
  title: "Members Area | Raise Your Bar",
  description: "Access your workouts, nutrition, and progress tracking.",
};

export default function MembersPage() {
  return <MembersPlaceholder />;
}
