"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  label: string;
  value: number;
  suffix: string;
}

export function AnimatedCounter({
  label,
  value,
  suffix,
}: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
    >
      <div className="font-display text-4xl font-bold text-clinic-blue-600 sm:text-5xl">
        {isInView ? (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {value.toLocaleString()}{suffix}
          </motion.span>
        ) : (
          `0${suffix}`
        )}
      </div>
      <p className="mt-2 text-sm font-semibold text-clinic-gray-600">{label}</p>
    </motion.div>
  );
}
