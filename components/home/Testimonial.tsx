import { FaStar } from "react-icons/fa6";
import { MotionReveal } from "@/components/motion/MotionReveal";

interface TestimonialProps {
  name: string;
  role: string;
  message: string;
  rating: number;
}

export function Testimonial({
  name,
  role,
  message,
  rating,
}: TestimonialProps) {
  return (
    <MotionReveal className="rounded-lg border border-clinic-gray-200 bg-white p-6 shadow-soft">
      <div className="mb-4 flex gap-1">
        {Array.from({ length: rating }).map((_, i) => (
          <FaStar key={i} className="h-4 w-4 text-yellow-400" />
        ))}
      </div>
      <p className="text-sm text-clinic-gray-700 leading-6">"{message}"</p>
      <div className="mt-4 border-t border-clinic-gray-200 pt-4">
        <p className="font-semibold text-clinic-blue-900">{name}</p>
        <p className="text-sm text-clinic-gray-600">{role}</p>
      </div>
    </MotionReveal>
  );
}
