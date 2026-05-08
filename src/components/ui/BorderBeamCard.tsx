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
        background: "linear-gradient(135deg, #22B8F0 0%, #FF0A7A 50%, #22B8F0 100%)",
      }}
    >
      <div className="rounded-2xl bg-white h-full w-full relative overflow-hidden">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: "linear-gradient(135deg, rgba(34,184,240,0.05) 0%, rgba(255,10,122,0.05) 100%)"
          }}
        />
        {children}
      </div>
    </motion.div>
  );
}
