"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

export function GlassCard({ children, className, dark = false }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl p-6",
        dark ? "glass-navy text-white" : "glass bg-white/60",
        className
      )}
    >
      {children}
    </div>
  );
}
