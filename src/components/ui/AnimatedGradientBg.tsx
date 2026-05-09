"use client";

import { cn } from "@/lib/utils";

interface AnimatedGradientBgProps {
  className?: string;
  children?: React.ReactNode;
}

export function AnimatedGradientBg({ className, children }: AnimatedGradientBgProps) {
  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{ background: "#0B1720" }}
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-cyan-400/20 blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-pink-500/20 blur-3xl translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-cyan-300/10 blur-2xl -translate-x-1/2 -translate-y-1/2" />
      </div>
      {children}
    </div>
  );
}
