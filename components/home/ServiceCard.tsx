import { MotionReveal } from "@/components/motion/MotionReveal";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: string;
}

export function ServiceCard({
  title,
  description,
  icon,
}: ServiceCardProps) {
  return (
    <MotionReveal className="rounded-lg border border-clinic-gray-200 bg-white p-6 shadow-soft transition hover:shadow-lg">
      {icon && (
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-md bg-clinic-blue-50 text-clinic-blue-600 text-xl">
          {icon}
        </div>
      )}
      <h3 className="font-display text-lg font-bold text-clinic-blue-900">
        {title}
      </h3>
      <p className="mt-2 text-sm text-clinic-gray-600">{description}</p>
    </MotionReveal>
  );
}
