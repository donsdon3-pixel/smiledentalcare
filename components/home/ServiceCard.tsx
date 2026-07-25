"use client";

import { motion } from "framer-motion";
import {
  FaShieldHeart,
  FaTooth,
  FaUserDoctor,
  FaWandMagicSparkles,
} from "react-icons/fa6";

import type { ServiceIcon } from "@/data/home";

const icons = {
  doctor: FaUserDoctor,
  shield: FaShieldHeart,
  sparkles: FaWandMagicSparkles,
  tooth: FaTooth,
};

type ServiceCardProps = {
  title: string;
  description: string;
  icon: ServiceIcon;
};

export function ServiceCard({ description, icon, title }: ServiceCardProps) {
  const Icon = icons[icon];

  return (
    <motion.article
      className="group h-full rounded-lg border border-clinic-gray-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-clinic-blue-200"
      initial={{ opacity: 0, y: 20 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-md bg-clinic-blue-50 text-clinic-blue-600 transition group-hover:bg-clinic-blue-600 group-hover:text-white">
        <Icon aria-hidden="true" className="h-5 w-5" />
      </div>
      <h3 className="font-display text-xl font-bold text-clinic-blue-900">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-clinic-gray-600">
        {description}
      </p>
    </motion.article>
  );
}
