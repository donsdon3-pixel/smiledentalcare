export type ServicePageIcon =
  | "cleaning"
  | "emergency"
  | "implant"
  | "orthodontics"
  | "pediatric"
  | "root-canal"
  | "whitening";

export const servicePageItems = [
  {
    slug: "cleaning",
    title: "Dental Cleaning",
    description:
      "Professional cleanings and preventive care to maintain a healthy smile.",
    icon: "cleaning" as const,
  },
  {
    slug: "root-canal",
    title: "Root Canal Treatment",
    description:
      "Comfortable endodontic care to save and restore your natural tooth.",
    icon: "root-canal" as const,
  },
  {
    slug: "whitening",
    title: "Teeth Whitening",
    description: "Safe, professional whitening for a brighter, more confident smile.",
    icon: "whitening" as const,
  },
  {
    slug: "implant",
    title: "Dental Implants",
    description:
      "Permanent tooth replacement with a natural look and comfortable fit.",
    icon: "implant" as const,
  },
  {
    slug: "emergency",
    title: "Emergency Care",
    description: "Same-day appointments for urgent dental pain and injuries.",
    icon: "emergency" as const,
  },
  {
    slug: "pediatric",
    title: "Pediatric Dentistry",
    description:
      "Gentle, child-friendly dental care and preventive guidance for young smiles.",
    icon: "pediatric" as const,
  },
  {
    slug: "orthodontics",
    title: "Orthodontics",
    description: "Traditional braces and modern clear aligner options for smile alignment.",
    icon: "orthodontics" as const,
  },
] as const;
