import type { ReasonIcon } from "@/types/home";

export const heroActions = {
  primary: { label: "Book Appointment", href: "#appointment" },
  secondary: { label: "Learn More", href: "#why-choose-us" },
} as const;

export const ctaHighlights = [
  "Same-day emergency care",
  "Gentle, modern approach",
  "Family-friendly clinic",
] as const;

export const reasons: Array<{
  title: string;
  description: string;
  icon: ReasonIcon;
  image: string;
}> = [ 
  {
    title: "Your Comfort First",
    description:
      "We prioritize a relaxed, anxiety-free experience with state-of-the-art technology and a calming environment.",
    icon: "shield", 
    image: "/images/dental-checkup-tirupati-andhra-pradesh.webp" ,
  },
  {
    title: "Advanced Diagnostics",
    description:
      "Digital imaging, intraoral cameras, and evidence-based treatment planning ensure precision care.",
    icon: "sparkles", 
    image: "/images/dental-implants-smile-makeover-tirupati-andhra-pradesh.webp",
  },
  {
    title: "Expert Team",
    description:
      "Our dentists bring advanced training in all major specialties, from prevention to cosmetics and implants.",
    icon: "stethoscope", 
    image: "/images/teeth-cleaning-scaling-tirupati-andhra-pradesh.webp",
  },
];

export const services = [
  {
    title: "General Dentistry",
    description: "Cleanings, exams, fillings, and preventive care.",
    icon: "tooth",
  },
  {
    title: "Cosmetic Dentistry",
    description: "Whitening, veneers, bonding, and smile design.",
    icon: "sparkle",
  },
  {
    title: "Restorative Care",
    description: "Crowns, bridges, implants, and emergency repairs.",
    icon: "wrench",
  },
  {
    title: "Orthodontics",
    description: "Traditional braces and clear aligner options.",
    icon: "align",
  },
] as const;

export const doctors = [
  {
    name: "Dr. sarala naidu",
    role: "DDS, Cosmetic & Family Dentistry",
     image: "/images/sarala.png",
  },
  {
    name: "Dr. Anika reddy",
    role: "DMD, Restorative Dentistry",
     image: "/images/anika.png",
  },
  {
    name: "Dr. Bhavana chowdary",
    role: "DDS, Preventive Care Specialist",
     image: "/images/bhavana.png",
  },
] as const;

export const stats = [
  { label: "Happy Patients", value: 2800, suffix: "+" },
  { label: "Years Experience", value: 45, suffix: "" },
  { label: "5-Star Reviews", value: 480, suffix: "" },
  { label: "Procedures Completed", value: 15000, suffix: "+" },
] as const;

export const testimonials = [
  {
    name: "Anika",
    role: "Patient",
    message:
      "Dr. Sarah made my root canal experience painless. The team's attention to detail and calming presence made all the difference.",
    rating: 5,
  },
  {
    name: "Sarala",
    role: "Patient",
    message:
      "Finally found a dental clinic that treats you like family. My kids actually look forward to their appointments now.",
    rating: 5,
  },
  {
    name: "Bhavana",
    role: "Patient",
    message:
      "The cosmetic work transformed my smile. Professional, thorough, and they explained everything clearly.",
    rating: 5,
  },
] as const;

export const faqs = [
  {
    question: "How often should I visit the dentist?",
    answer:
      "We recommend bi-annual check-ups and cleanings for most patients. However, some conditions may require more frequent visits. We'll create a personalized schedule during your consultation.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "Yes, we work with most insurance plans and offer flexible payment options. We also have relationships with financing partners for larger procedures.",
  },
  {
    question: "What is your policy on emergency appointments?",
    answer:
      "We reserve same-day slots for emergencies. Call us immediately at (555) 248-8820, and we'll fit you in as soon as possible.",
  },
  {
    question: "Are your facilities modern and clean?",
    answer:
      "Absolutely. Our clinic features modern digital equipment, strict sterilization protocols, and a calming, contemporary design.",
  },
  {
    question: "Do you treat dental anxiety?",
    answer:
      "Yes. We offer a calm environment, explain procedures clearly, and can discuss sedation options for anxious patients.",
  },
  {
    question: "How long does a typical first visit take?",
    answer:
      "Plan for 60–90 minutes. We conduct a thorough examination, take any necessary imaging, and discuss a personalized care plan.",
  },
] as const;
