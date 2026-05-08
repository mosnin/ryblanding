"use client";

import { motion, useReducedMotion } from "framer-motion";
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
  children,
  className,
  variant = "primary",
  size = "md",
  disabled,
  onClick,
  type = "button",
  id,
  "aria-label": ariaLabel,
}: ShimmerButtonProps) {
  const reduce = useReducedMotion();

  const sizes = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3 text-sm",
    lg: "px-9 py-4 text-base",
  };

  const base = cn(
    "relative inline-flex items-center justify-center font-semibold rounded-full",
    "transition-all duration-200 cursor-pointer select-none",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22B8F0] focus-visible:ring-offset-2",
    disabled && "opacity-50 pointer-events-none",
    sizes[size],
  );

  const sharedProps = {
    disabled,
    "aria-disabled": disabled,
    onClick,
    type,
    id,
    "aria-label": ariaLabel,
  } as const;

  if (variant === "primary") {
    return (
      <motion.button
        whileHover={reduce ? {} : { scale: 1.03, y: -1 }}
        whileTap={reduce ? {} : { scale: 0.97 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        {...sharedProps}
        className={cn(base, "text-white shimmer-btn shadow-lg shadow-pink-500/20", className)}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </motion.button>
    );
  }

  if (variant === "secondary") {
    return (
      <motion.button
        whileHover={reduce ? {} : { scale: 1.03, y: -1 }}
        whileTap={reduce ? {} : { scale: 0.97 }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        {...sharedProps}
        className={cn(
          base,
          "bg-white text-[#123244] border border-gray-200 hover:border-[#22B8F0]/40 hover:bg-[#EAF8FF] shadow-sm",
          className
        )}
      >
        <span className="flex items-center gap-2">{children}</span>
      </motion.button>
    );
  }

  return (
    <motion.button
      whileHover={reduce ? {} : { scale: 1.03, y: -1 }}
      whileTap={reduce ? {} : { scale: 0.97 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      {...sharedProps}
      className={cn(
        base,
        "bg-transparent text-[#22B8F0] border-2 border-[#22B8F0] hover:bg-[#22B8F0] hover:text-white",
        className
      )}
    >
      <span className="flex items-center gap-2">{children}</span>
    </motion.button>
  );
}
