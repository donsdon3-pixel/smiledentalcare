import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/utils/cn";

type SectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  muted?: boolean;
};

export function Section({
  children,
  className,
  muted = false,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "py-16 sm:py-20 lg:py-24",
        muted && "bg-clinic-gray-50",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
