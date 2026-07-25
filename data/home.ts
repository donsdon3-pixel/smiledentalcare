export type ReasonIcon = "shield" | "sparkles" | "stethoscope";
export type ServiceIcon = "doctor" | "shield" | "sparkles" | "tooth";

type Reason = {
  title: string;
  description: string;
  icon: ReasonIcon;
};

type Service = {
  title: string;
  description: string;
  icon: ServiceIcon;
};

export const reasons: Reason[] = [
  {
    title: "Patient-first care",
    description:
      "Every visit starts with clear communication, gentle techniques, and treatment plans that respect your comfort.",
    icon: "shield",
  },
  {
    title: "Advanced diagnostics",
    description:
      "Digital imaging and careful examinations help our team plan precise, minimally invasive dental care.",
    icon: "stethoscope",
  },
  {
    title: "Calm clinic experience",
    description:
      "Bright treatment rooms, thoughtful scheduling, and friendly support keep appointments relaxed and efficient.",
    icon: "sparkles",
  },
];

export const services: Service[] = [
  {
    title: "Preventive Dentistry",
    description:
      "Routine exams, cleanings, fluoride care, and gum health checks to protect your smile year-round.",
    icon: "tooth",
  },
  {
    title: "Cosmetic Smile Design",
    description:
      "Whitening, veneers, bonding, and aesthetic planning for a confident, natural-looking smile.",
    icon: "sparkles",
  },
  {
    title: "Restorative Care",
    description:
      "Tooth-colored fillings, crowns, bridges, and implant restorations built for comfort and durability.",
    icon: "shield",
  },
  {
    title: "Family Dental Visits",
    description:
      "Compassionate care for children, adults, and seniors with appointments designed around busy families.",
    icon: "doctor",
  },
];

export const doctors = [
  {
    name: "Dr. Anika Rao",
    role: "Lead Cosmetic Dentist",
    image: "/images/doctor-anika.svg",
  },
  {
    name: "Dr. Michael Chen",
    role: "Restorative Dentistry Specialist",
    image: "/images/doctor-michael.svg",
  },
  {
    name: "Dr. Sophia Patel",
    role: "Family Dental Care",
    image: "/images/doctor-sophia.svg",
  },
];

export const stats = [
  { label: "Happy patients", value: 12000, suffix: "+" },
  { label: "Years of care", value: 18, suffix: "+" },
  { label: "Smile makeovers", value: 3200, suffix: "+" },
  { label: "Patient rating", value: 98, suffix: "%" },
];

export const testimonials = [
  {
    name: "Maya Williams",
    treatment: "Cosmetic whitening",
    quote:
      "The SmileCare team explained every step and made the entire visit feel easy. My results look bright but still natural.",
  },
  {
    name: "Daniel Brooks",
    treatment: "Crown restoration",
    quote:
      "I came in nervous and left relieved. The appointment was calm, precise, and much more comfortable than I expected.",
  },
  {
    name: "Priya Nair",
    treatment: "Family dental visit",
    quote:
      "Our whole family goes here now. The doctors are patient with kids and practical with treatment recommendations.",
  },
];

export const faqs = [
  {
    question: "Do you accept new patients?",
    answer:
      "Yes. New patient visits include a comprehensive exam, digital records, and a clear care plan.",
  },
  {
    question: "Can I book an emergency appointment?",
    answer:
      "Same-day emergency slots are available when possible for pain, swelling, broken teeth, or urgent concerns.",
  },
  {
    question: "Is cosmetic dentistry suitable for sensitive teeth?",
    answer:
      "Often, yes. We evaluate sensitivity first and recommend options that protect enamel and comfort.",
  },
];

export const ctaHighlights = [
  "Same-week appointments",
  "Transparent care plans",
  "Gentle treatment options",
];

export const heroActions = {
  primary: {
    label: "Book Appointment",
    href: "#appointment",
  },
  secondary: {
    label: "Explore Services",
    href: "#services",
  },
};
