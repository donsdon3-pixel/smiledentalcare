import {
  forwardRef,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type Ref,
} from "react";
import { cn } from "@/utils/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center gap-2 rounded-md font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary:
        "bg-clinic-blue-600 text-white hover:bg-clinic-blue-700 shadow-soft",
      secondary:
        "bg-white text-clinic-blue-600 border border-clinic-blue-200 hover:bg-clinic-blue-50",
    };

    const sizes = {
      sm: "h-9 px-3 text-sm",
      md: "h-10 px-4 text-sm",
      lg: "h-11 px-5 text-base",
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    if (asChild) {
      return (
        <a
          ref={ref as Ref<HTMLAnchorElement>}
          className={classes}
          {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
        />
      );
    }

    return <button ref={ref} className={classes} {...props} />;
  }
);

Button.displayName = "Button";

export { Button };
