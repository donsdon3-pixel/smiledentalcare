"use client";

import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa6";

type TestimonialProps = {
  name: string;
  treatment: string;
  quote: string;
};

export function Testimonial({ name, quote, treatment }: TestimonialProps) {
  return (
    <motion.figure
      className="h-full rounded-lg border border-clinic-gray-200 bg-white p-6 shadow-soft"
      initial={{ opacity: 0, y: 18 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <FaQuoteLeft aria-hidden="true" className="h-6 w-6 text-clinic-blue-500" />
      <div className="mt-5 flex gap-1 text-clinic-blue-500" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }).map((_, index) => (
          <FaStar key={index} aria-hidden="true" className="h-4 w-4" />
        ))}
      </div>
      <blockquote className="mt-4 text-sm leading-7 text-clinic-gray-700">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-6">
        <p className="font-semibold text-clinic-blue-900">{name}</p>
        <p className="text-sm text-clinic-gray-500">{treatment}</p>
      </figcaption>
    </motion.figure>
  );
}
