"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

type MotionRevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
};

export function MotionReveal({
  children,
  delay = 0,
  className,
  ...props
}: MotionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
