"use client";

import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import {
  cloneElement,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from "react";

import { cn } from "@/utils/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = HTMLMotionProps<"button"> & {
  asChild?: boolean;
  children: ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
};

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-clinic-blue-600 text-white shadow-soft hover:bg-clinic-blue-700",
  secondary:
    "border border-clinic-gray-200 bg-white text-clinic-blue-900 hover:border-clinic-blue-200 hover:bg-clinic-blue-50",
  ghost: "text-clinic-blue-700 hover:bg-clinic-blue-50",
};

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

export function Button({
  asChild = false,
  children,
  className,
  size = "md",
  variant = "primary",
  ...props
}: ButtonProps) {
  const buttonClassName = cn(
    "inline-flex items-center justify-center gap-2 rounded-md font-semibold transition disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className,
  );

  if (asChild && isValidElement(children)) {
    const child = children as ReactElement<{ className?: string }>;

    return cloneElement(child, {
      className: cn(buttonClassName, child.props.className),
      ...props,
    });
  }

  return (
    <motion.button
      className={buttonClassName}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </motion.button>
  );
}
