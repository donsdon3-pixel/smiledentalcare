import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/utils/cn";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-clinic-gray-200 bg-white p-6 shadow-soft",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
