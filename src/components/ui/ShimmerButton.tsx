"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ShimmerButtonProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
  id?: string;
  "aria-label"?: string;
}

export function ShimmerButton({
  children, className, variant = "primary", size = "md",
  disabled, onClick, type = "button", id, "aria-label": ariaLabel,
}: ShimmerButtonProps) {
  const sizes = { sm: "px-5 py-2.5 text-sm", md: "px-7 py-3 text-sm", lg: "px-9 py-4 text-base" };

  const base = cn(
    "relative inline-flex items-center justify-center font-semibold rounded-full cursor-pointer select-none",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25AEEB] focus-visible:ring-offset-2",
    disabled && "opacity-50 pointer-events-none",
    sizes[size],
  );

  const sharedProps = { disabled, "aria-disabled": disabled, onClick, type, id, "aria-label": ariaLabel } as const;

  if (variant === "primary") {
    return (
      <button {...sharedProps} className={cn(base, "btn-primary", className)}>
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </button>
    );
  }
  if (variant === "secondary") {
    return (
      <button {...sharedProps} className={cn(base, "bg-white text-[#102B3A] border border-gray-200 hover:border-[#25AEEB]/40 hover:bg-[#EEF8FC] shadow-sm transition-all duration-150", className)}>
        <span className="flex items-center gap-2">{children}</span>
      </button>
    );
  }
  return (
    <button {...sharedProps} className={cn(base, "bg-transparent text-[#25AEEB] border-2 border-[#25AEEB] hover:bg-[#25AEEB] hover:text-white transition-colors duration-150", className)}>
      <span className="flex items-center gap-2">{children}</span>
    </button>
  );
}
