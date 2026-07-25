import { Container } from "@/components/ui/Container";
import { cn } from "@/utils/cn";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export function PageHeader({
  centered = false,
  description,
  eyebrow,
  title,
}: PageHeaderProps) {
  return (
    <Container
      className={cn(
        "mb-10 max-w-4xl",
        centered && "text-center",
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-sm font-bold uppercase tracking-wide text-clinic-blue-600">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="font-display text-4xl font-bold text-clinic-blue-900 sm:text-5xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-8 text-clinic-gray-600 sm:text-lg">
          {description}
        </p>
      ) : null}
    </Container>
  );
}
