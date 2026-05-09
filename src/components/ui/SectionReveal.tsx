"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";

interface SectionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "scale" | "none";
  distance?: number;
  once?: boolean;
}

export function SectionReveal({
  children,
  className,
  delay = 0,
  duration = 0.65,
  direction = "up",
  distance = 32,
  once = true,
}: SectionRevealProps) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once, margin: "-72px" });

  const hidden = {
    up:    { opacity: 0, y: distance },
    down:  { opacity: 0, y: -distance },
    left:  { opacity: 0, x: -distance },
    right: { opacity: 0, x: distance },
    scale: { opacity: 0, scale: 0.93 },
    none:  { opacity: 0 },
  }[direction];

  const visible = { opacity: 1, y: 0, x: 0, scale: 1 };

  return (
    <motion.div
      ref={ref}
      initial={reduce ? {} : hidden}
      animate={reduce ? {} : (inView ? visible : hidden)}
      transition={{
        duration: reduce ? 0 : duration,
        delay: reduce ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

// Stagger container — wraps children with staggered reveal
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  direction?: "up" | "left" | "scale" | "none";
}

export function StaggerContainer({
  children,
  className,
  stagger = 0.08,
  delay = 0,
  direction = "up",
}: StaggerContainerProps) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: "-72px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduce ? 0 : stagger,
        delayChildren: reduce ? 0 : delay,
      },
    },
  };

  const itemVariants = {
    up:    { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } },
    left:  { hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } },
    scale: { hidden: { opacity: 0, scale: 0.92 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } },
    none:  { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.5 } } },
  }[direction];

  void itemVariants;

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}

export { StaggerContainer as default };

// Named item export for use inside StaggerContainer
export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      variants={reduce ? {} : {
        hidden: { opacity: 0, y: 28 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
