import { forwardRef, type HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

const Card = forwardRef<HTMLDivElement, CardProps>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("rounded-lg border border-clinic-gray-200 bg-white p-6 shadow-soft", className)}
    {...props}
  />
));

Card.displayName = "Card";

export { Card };
