export type ServicePageIcon =
  | "cleaning"
  | "emergency"
  | "implant"
  | "orthodontics"
  | "pediatric"
  | "root-canal"
  | "whitening";

export type ServicePageItem = {
  title: string;
  slug: string;
  description: string;
  icon: ServicePageIcon;
};

export const servicePageItems: ServicePageItem[] = [
  {
    title: "Dental Cleaning",
    slug: "dental-cleaning",
    description:
      "Professional cleanings, plaque removal, polishing, and preventive guidance for healthier gums and teeth.",
    icon: "cleaning",
  },
  {
    title: "Root Canal Treatment",
    slug: "root-canal-treatment",
    description:
      "Precise endodontic care designed to relieve pain, treat infection, and preserve your natural tooth.",
    icon: "root-canal",
  },
  {
    title: "Teeth Whitening",
    slug: "teeth-whitening",
    description:
      "Safe, dentist-guided whitening options for a brighter smile with enamel and sensitivity in mind.",
    icon: "whitening",
  },
  {
    title: "Dental Implants",
    slug: "dental-implants",
    description:
      "Durable tooth replacement planning and restoration for confident chewing, speaking, and smiling.",
    icon: "implant",
  },
  {
    title: "Emergency Dental Care",
    slug: "emergency-dental-care",
    description:
      "Prompt care for tooth pain, swelling, broken teeth, lost fillings, and urgent dental concerns.",
    icon: "emergency",
  },
  {
    title: "Pediatric Dentistry",
    slug: "pediatric-dentistry",
    description:
      "Friendly dental visits for children with prevention, education, and gentle age-appropriate care.",
    icon: "pediatric",
  },
  {
    title: "Orthodontics",
    slug: "orthodontics",
    description:
      "Alignment consultations and treatment planning for straighter teeth and balanced bite function.",
    icon: "orthodontics",
  },
];
