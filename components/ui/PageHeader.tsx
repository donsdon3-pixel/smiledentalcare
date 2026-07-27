import { cn } from "@/utils/cn";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
}

export function PageHeader({
  eyebrow,
  title,
  description,
  className,
}: PageHeaderProps) {
  return (
    <div className={cn("mb-12", className)}>
      <p className="mb-3 text-sm font-bold uppercase tracking-wide text-clinic-blue-600">
        {eyebrow}
      </p>
      <h1 className="font-display text-4xl font-bold text-clinic-blue-900 sm:text-5xl">
        {title}
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-8 text-clinic-gray-600">
        {description}
      </p>
    </div>
  );
}
