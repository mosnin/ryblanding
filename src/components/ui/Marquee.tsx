"use client";

import { cn } from "@/lib/utils";
import { useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  reverse?: boolean;
  pauseOnHover?: boolean;
  speed?: "slow" | "normal" | "fast";
  className?: string;
}

export function Marquee({
  children,
  reverse = false,
  pauseOnHover = true,
  speed = "normal",
  className,
}: MarqueeProps) {
  const reduce = useReducedMotion();

  const durations = { slow: "40s", normal: "28s", fast: "18s" };

  if (reduce) {
    return (
      <div className={cn("flex gap-4 overflow-hidden", className)}>
        {children}
      </div>
    );
  }

  return (
    <div
      className={cn("group flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]", className)}
    >
      <div
        className={cn(
          "marquee-track",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
          reverse ? "animate-marquee-rev" : "animate-marquee"
        )}
        style={{ animationDuration: durations[speed] }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
