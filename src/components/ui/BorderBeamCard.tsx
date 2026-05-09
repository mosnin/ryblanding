"use client";

import { cn } from "@/lib/utils";
import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface BorderBeamCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function BorderBeamCard({ children, className, delay = 0 }: BorderBeamCardProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={cn(
        "relative rounded-2xl p-[1.5px] overflow-hidden group",
        className
      )}
      style={{
        background: "#25AEEB",
      }}
    >
      <div className="rounded-2xl bg-white h-full w-full relative overflow-hidden">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: "rgba(37,174,235,0.05)"
          }}
        />
        {children}
      </div>
    </motion.div>
  );
}
