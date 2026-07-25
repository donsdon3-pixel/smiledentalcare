import { cn } from "@/utils/cn";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
};

export function SectionTitle({
  centered = false,
  className,
  description,
  eyebrow,
  title,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "mb-10 max-w-3xl",
        centered && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-sm font-bold uppercase tracking-wide text-clinic-blue-600">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-bold text-clinic-blue-900 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-clinic-gray-600">
          {description}
        </p>
      ) : null}
    </div>
  );
}
