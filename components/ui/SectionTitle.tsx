import { cn } from "@/utils/cn";

interface SectionTitleProps {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  className,
}: SectionTitleProps) {
  return (
    <div className={cn("mb-10 max-w-3xl", className)}>
      <p className="mb-3 text-sm font-bold uppercase tracking-wide text-clinic-blue-600">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-bold text-clinic-blue-900 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-clinic-gray-600">
        {description}
      </p>
    </div>
  );
}
