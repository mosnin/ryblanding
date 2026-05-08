"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ShimmerButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export function ShimmerButton({
  children,
  className,
  onClick,
  variant = "primary",
  size = "md",
}: ShimmerButtonProps) {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const base =
    "relative inline-flex items-center justify-center font-semibold rounded-full overflow-hidden transition-all duration-300 cursor-pointer select-none";

  if (variant === "primary") {
    return (
      <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={cn(
          base,
          sizeClasses[size],
          "text-white shadow-lg shadow-pink-500/30",
          className
        )}
        style={{
          background: "linear-gradient(90deg, #22B8F0, #FF0A7A, #22B8F0)",
          backgroundSize: "200% auto",
          animation: "shimmer 3s linear infinite",
        }}
      >
        <span className="relative z-10">{children}</span>
      </motion.button>
    );
  }

  if (variant === "secondary") {
    return (
      <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={cn(
          base,
          sizeClasses[size],
          "bg-white text-[#123244] border-2 border-white/20 hover:bg-[#EAF8FF] shadow-md",
          className
        )}
      >
        {children}
      </motion.button>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={cn(
        base,
        sizeClasses[size],
        "bg-transparent text-[#22B8F0] border-2 border-[#22B8F0] hover:bg-[#22B8F0] hover:text-white",
        className
      )}
    >
      {children}
    </motion.button>
  );
}
