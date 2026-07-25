"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type AnimatedCounterProps = {
  label: string;
  value: number;
  suffix?: string;
};

export function AnimatedCounter({
  label,
  suffix = "",
  value,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 28,
    stiffness: 90,
  });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });
  }, [springValue]);

  return (
    <motion.div
      ref={ref}
      className="rounded-lg border border-clinic-blue-100 bg-white p-5 shadow-soft"
      initial={{ opacity: 0, y: 16 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <dt className="font-display text-3xl font-bold text-clinic-blue-900 sm:text-4xl">
        {displayValue.toLocaleString()}
        {suffix}
      </dt>
      <dd className="mt-2 text-sm font-medium text-clinic-gray-600">{label}</dd>
    </motion.div>
  );
}
