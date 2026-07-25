export type FAQCategory = "Appointments" | "General" | "Payments" | "Treatments";

export type FAQItem = {
  id: string;
  category: FAQCategory;
  question: string;
  answer: string;
};

export const faqCategories: FAQCategory[] = [
  "General",
  "Treatments",
  "Appointments",
  "Payments",
];

export const faqItems: FAQItem[] = [
  {
    id: "new-patients",
    category: "General",
    question: "Do you accept new patients?",
    answer:
      "Yes. New patient visits include a comprehensive exam, digital records when needed, and a clear care plan before treatment begins.",
  },
  {
    id: "visit-frequency",
    category: "General",
    question: "How often should I visit the dentist?",
    answer:
      "Most patients benefit from a dental visit every six months. Your dentist may recommend a different schedule based on gum health, medical history, or treatment needs.",
  },
  {
    id: "anxious-patients",
    category: "General",
    question: "Can you help if I feel anxious about dental treatment?",
    answer:
      "Yes. We use clear explanations, gentle pacing, and comfort-focused care to help patients feel more relaxed during visits.",
  },
  {
    id: "cleaning-pain",
    category: "Treatments",
    question: "Is professional dental cleaning painful?",
    answer:
      "Dental cleanings are usually comfortable. If your gums are sensitive, our team adjusts the technique and pace to protect your comfort.",
  },
  {
    id: "root-canal",
    category: "Treatments",
    question: "Does root canal treatment hurt?",
    answer:
      "Modern root canal treatment is performed with local anesthesia and is designed to relieve pain caused by infection inside the tooth.",
  },
  {
    id: "whitening",
    category: "Treatments",
    question: "Is teeth whitening safe for sensitive teeth?",
    answer:
      "Often, yes. We check enamel, gum health, and sensitivity first, then recommend a whitening option that fits your comfort needs.",
  },
  {
    id: "same-day",
    category: "Appointments",
    question: "Do you offer same-day appointments?",
    answer:
      "Same-day appointments may be available for urgent concerns such as pain, swelling, broken teeth, or lost restorations.",
  },
  {
    id: "booking",
    category: "Appointments",
    question: "How do I book an appointment?",
    answer:
      "You can call the clinic, email our team, or submit the appointment form. We will follow up to confirm availability.",
  },
  {
    id: "insurance",
    category: "Payments",
    question: "Do you accept dental insurance?",
    answer:
      "Our team can help review insurance details and provide documentation for eligible dental benefits.",
  },
  {
    id: "costs",
    category: "Payments",
    question: "Will I know the treatment cost before starting?",
    answer:
      "Yes. We explain recommended treatment, expected fees, and available options before care begins.",
  },
];
