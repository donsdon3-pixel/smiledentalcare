import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  muted?: boolean;
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, muted, ...props }, ref) => (
    <section
      ref={ref}
      className={cn(
        "py-12 sm:py-16 lg:py-20",
        muted && "bg-clinic-gray-50",
        className
      )}
      {...props}
    />
  )
);

Section.displayName = "Section";

export { Section };
