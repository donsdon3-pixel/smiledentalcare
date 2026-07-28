export type ServiceDetailSlug =
  | "dental-cleaning"
  | "dental-implants"
  | "root-canal-treatment"
  | "teeth-whitening";

type TreatmentStep = {
  title: string;
  description: string;
};

type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceDetail = {
  slug: ServiceDetailSlug;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroLabel: string;
  heroDescription: string;
  image: string;
  imageAlt: string;
  overview: string;
  benefits: string[];
  signs: string[];
  procedure: TreatmentStep[];
  whyChoose: string[];
  technology: string[];
  aftercare: string[];
  faqs: ServiceFaq[];
  relatedServices: ServiceDetailSlug[];
};

export const serviceDetails: Record<ServiceDetailSlug, ServiceDetail> = {
  "dental-cleaning": {
    slug: "dental-cleaning",
    title: "Dental Cleaning",
    metaTitle: "Dental Cleaning | SmileCare Dental Clinic",
    metaDescription:
      "Book professional dental cleaning at SmileCare Dental Clinic for plaque removal, gum health checks, polishing, and preventive oral care.",
    heroLabel: "Preventive dentistry",
    heroDescription:
      "Professional dental cleanings help protect your teeth, support gum health, and keep your smile feeling fresh between daily brushing and flossing.",
    image: "/images/service-dental-cleaning.svg",
    imageAlt: "Dental hygienist preparing professional cleaning instruments",
    overview:
      "A dental cleaning removes plaque, tartar, and surface stains that regular brushing cannot fully reach. At SmileCare, cleanings are paired with a careful gum assessment and practical prevention guidance.",
    benefits: [
      "Removes hardened tartar and plaque buildup",
      "Supports healthier gums and fresher breath",
      "Helps detect cavities and gum concerns early",
      "Polishes enamel for a cleaner, brighter feel",
    ],
    signs: [
      "Bleeding gums when brushing or flossing",
      "Persistent bad breath",
      "Visible tartar near the gumline",
      "It has been more than six months since your last cleaning",
    ],
    procedure: [
      {
        title: "Oral health assessment",
        description:
          "We examine your teeth, gums, bite, and any changes since your last visit.",
      },
      {
        title: "Scaling and plaque removal",
        description:
          "Special instruments remove plaque and tartar from tooth surfaces and around the gumline.",
      },
      {
        title: "Polishing",
        description:
          "Your teeth are gently polished to smooth enamel and reduce surface staining.",
      },
      {
        title: "Prevention guidance",
        description:
          "We review home care, flossing habits, sensitivity, and timing for your next visit.",
      },
    ],
    whyChoose: [
      "Gentle hygienists who explain each step",
      "Clear gum health screening at every cleaning",
      "Modern tools for efficient, comfortable care",
      "Personalized prevention advice for your routine",
    ],
    technology: [
      "Ultrasonic scaling equipment",
      "Digital X-rays when clinically needed",
      "Intraoral cameras for patient education",
      "Modern sterilization workflow",
    ],
    aftercare: [
      "Brush twice daily with fluoride toothpaste",
      "Floss or use interdental cleaners every day",
      "Avoid staining drinks immediately after polishing when possible",
      "Return for routine cleanings every six months or as recommended",
    ],
    faqs: [
      {
        question: "How often should I schedule a dental cleaning?",
        answer:
          "Most patients benefit from a cleaning every six months, though gum health or medical factors may require a different schedule.",
      },
      {
        question: "Will a cleaning hurt?",
        answer:
          "Cleanings are usually comfortable. If your gums are inflamed or sensitive, we adjust the pace and technique.",
      },
      {
        question: "Does cleaning whiten teeth?",
        answer:
          "A cleaning removes surface stains and can make teeth look fresher, but it is different from professional whitening.",
      },
      {
        question: "Can children get dental cleanings?",
        answer:
          "Yes. Children benefit from preventive cleanings, home-care coaching, and early monitoring.",
      },
      {
        question: "Do I need X-rays at every cleaning?",
        answer:
          "Not always. We recommend digital X-rays based on your dental history, symptoms, and clinical needs.",
      },
    ],
    relatedServices: ["teeth-whitening", "root-canal-treatment"],
  },
  "root-canal-treatment": {
    slug: "root-canal-treatment",
    title: "Root Canal Treatment",
    metaTitle: "Root Canal Treatment | SmileCare Dental Clinic",
    metaDescription:
      "Relieve tooth pain and save your natural tooth with precise root canal treatment at SmileCare Dental Clinic.",
    heroLabel: "Restorative dentistry",
    heroDescription:
      "Root canal treatment removes infected tissue inside a tooth, relieves pain, and helps preserve your natural smile.",
    image: "/images/service-root-canal.svg",
    imageAlt: "Dental root canal treatment illustration with tooth and instruments",
    overview:
      "A root canal is recommended when infection or inflammation reaches the inner pulp of a tooth. SmileCare focuses on accurate diagnosis, careful treatment, and restoring tooth strength after infection is removed.",
    benefits: [
      "Relieves persistent tooth pain and pressure",
      "Helps save the natural tooth",
      "Treats infection before it spreads",
      "Restores chewing comfort with final restoration planning",
    ],
    signs: [
      "Severe toothache or throbbing pain",
      "Sensitivity that lingers after hot or cold foods",
      "Swelling near the gum or jaw",
      "A darkened tooth or deep cavity",
    ],
    procedure: [
      {
        title: "Diagnosis and imaging",
        description:
          "Digital imaging helps locate infection and assess the tooth structure.",
      },
      {
        title: "Comfort preparation",
        description:
          "The tooth is numbed, isolated, and prepared for precise treatment.",
      },
      {
        title: "Canal cleaning",
        description:
          "Infected tissue is removed and the canals are cleaned and shaped.",
      },
      {
        title: "Sealing and restoration",
        description:
          "The canals are sealed, then the tooth is restored with a filling or crown plan.",
      },
    ],
    whyChoose: [
      "Careful diagnosis before treatment begins",
      "Comfort-focused numbing and pacing",
      "Digital imaging for precise canal assessment",
      "Clear restoration planning after treatment",
    ],
    technology: [
      "Digital radiography",
      "Electronic apex location",
      "Rotary endodontic instruments",
      "High-magnification clinical assessment",
    ],
    aftercare: [
      "Avoid chewing hard foods on the treated tooth until restored",
      "Take medication only as directed by your dentist",
      "Call the clinic if swelling or severe pain persists",
      "Complete the recommended crown or final restoration",
    ],
    faqs: [
      {
        question: "Is root canal treatment painful?",
        answer:
          "Modern root canal care is performed with local anesthesia and is designed to relieve pain caused by infection.",
      },
      {
        question: "How long does a root canal take?",
        answer:
          "Many cases are completed in one to two visits, depending on infection level and tooth complexity.",
      },
      {
        question: "Will I need a crown afterward?",
        answer:
          "Back teeth often need a crown after root canal treatment to protect the remaining structure.",
      },
      {
        question: "Can antibiotics replace a root canal?",
        answer:
          "Antibiotics may reduce symptoms temporarily, but they usually do not remove infection inside the tooth.",
      },
    ],
    relatedServices: ["dental-cleaning", "dental-implants"],
  },
  "teeth-whitening": {
    slug: "teeth-whitening",
    title: "Teeth Whitening",
    metaTitle: "Teeth Whitening | SmileCare Dental Clinic",
    metaDescription:
      "Brighten your smile safely with professional teeth whitening options at SmileCare Dental Clinic.",
    heroLabel: "Cosmetic dentistry",
    heroDescription:
      "Professional teeth whitening helps lift stains safely and create a brighter smile with guidance from your dental team.",
    image: "/images/service-teeth-whitening.svg",
    imageAlt: "Bright smile and professional teeth whitening shade guide",
    overview:
      "Teeth whitening lightens discoloration from coffee, tea, aging, and everyday staining. SmileCare evaluates your enamel and sensitivity first, then recommends a whitening option suited to your goals.",
    benefits: [
      "Brightens natural tooth enamel",
      "Improves smile confidence before events or photos",
      "Dentist-guided care for safer results",
      "Customized recommendations for sensitive teeth",
    ],
    signs: [
      "Yellow or dull-looking teeth",
      "Stains from coffee, tea, wine, or tobacco",
      "Uneven brightness across your smile",
      "You want a cosmetic refresh before a special event",
    ],
    procedure: [
      {
        title: "Smile assessment",
        description:
          "We check enamel, gum health, restorations, and sensitivity before whitening.",
      },
      {
        title: "Shade planning",
        description:
          "Your current shade and desired result are reviewed with realistic expectations.",
      },
      {
        title: "Whitening treatment",
        description:
          "A professional whitening plan is completed in-office or with dentist-guided take-home care.",
      },
      {
        title: "Maintenance advice",
        description:
          "We share tips to reduce new stains and maintain your brighter smile.",
      },
    ],
    whyChoose: [
      "Whitening plans guided by dental evaluation",
      "Sensitivity-conscious recommendations",
      "Natural-looking cosmetic goals",
      "Clear guidance for long-term maintenance",
    ],
    technology: [
      "Professional shade assessment",
      "Protective gum isolation when needed",
      "Dentist-selected whitening systems",
      "Intraoral evaluation before cosmetic treatment",
    ],
    aftercare: [
      "Avoid dark staining foods and drinks for the first 24 to 48 hours",
      "Use a straw for coffee or tea when practical",
      "Brush gently with sensitivity toothpaste if recommended",
      "Schedule touch-ups based on your dentist's advice",
    ],
    faqs: [
      {
        question: "Is professional whitening safe?",
        answer:
          "Yes, when planned by a dental professional who checks enamel, gum health, restorations, and sensitivity.",
      },
      {
        question: "How long do whitening results last?",
        answer:
          "Results vary with diet and habits, but many patients maintain brightness with good care and periodic touch-ups.",
      },
      {
        question: "Will whitening work on crowns or fillings?",
        answer:
          "Whitening only changes natural tooth enamel. Crowns, veneers, and fillings do not whiten the same way.",
      },
      {
        question: "Can whitening cause sensitivity?",
        answer:
          "Temporary sensitivity can occur. We recommend options and aftercare based on your comfort needs.",
      },
      {
        question: "How white can my teeth get?",
        answer:
          "Your result depends on enamel, stain type, and starting shade. We set realistic goals before treatment.",
      },
    ],
    relatedServices: ["dental-cleaning", "dental-implants"],
  },
  "dental-implants": {
    slug: "dental-implants",
    title: "Dental Implants",
    metaTitle: "Dental Implants | SmileCare Dental Clinic",
    metaDescription:
      "Explore dental implant restoration planning at SmileCare Dental Clinic for durable tooth replacement and confident smiles.",
    heroLabel: "Implant restoration",
    heroDescription:
      "Dental implants help replace missing teeth with stable, natural-looking restorations designed for everyday confidence.",
    image: "/images/service-dental-implants.svg",
    imageAlt: "Dental implant restoration illustration showing a restored tooth",
    overview:
      "Dental implants replace missing tooth roots and support crowns, bridges, or dentures. SmileCare coordinates careful planning, restoration design, and long-term maintenance for confident function.",
    benefits: [
      "Replaces missing teeth with stable support",
      "Helps preserve chewing comfort and smile aesthetics",
      "Does not rely on neighboring teeth for support",
      "Can support single-tooth or multi-tooth restoration plans",
    ],
    signs: [
      "One or more missing teeth",
      "Difficulty chewing because of gaps",
      "Loose or uncomfortable removable dentures",
      "You want a fixed replacement option",
    ],
    procedure: [
      {
        title: "Consultation and records",
        description:
          "We review oral health, bone support, medical history, and restoration goals.",
      },
      {
        title: "Implant planning",
        description:
          "Digital imaging and measurements help plan implant position and restoration design.",
      },
      {
        title: "Healing phase",
        description:
          "After placement by the surgical provider, the implant integrates with the bone over time.",
      },
      {
        title: "Final restoration",
        description:
          "A custom crown, bridge, or denture attachment is designed for comfort and appearance.",
      },
    ],
    whyChoose: [
      "Comprehensive restoration-focused planning",
      "Coordination with trusted surgical partners when needed",
      "Natural-looking crown and bridge design",
      "Long-term maintenance guidance after restoration",
    ],
    technology: [
      "Digital implant assessment",
      "Intraoral scanning when appropriate",
      "Custom restoration design",
      "Digital X-rays for follow-up evaluation",
    ],
    aftercare: [
      "Follow all post-surgical instructions from your provider",
      "Keep the implant area clean with recommended tools",
      "Avoid smoking to support healing and long-term success",
      "Attend maintenance visits to monitor bite and gum health",
    ],
    faqs: [
      {
        question: "Are dental implants permanent?",
        answer:
          "Implants are designed as a long-term tooth replacement option, but they require healthy gums, good hygiene, and regular maintenance.",
      },
      {
        question: "How long does implant treatment take?",
        answer:
          "Timing varies by healing needs, bone support, and restoration type. Some plans take several months from consultation to final tooth.",
      },
      {
        question: "Can everyone get dental implants?",
        answer:
          "Eligibility depends on gum health, bone support, medical history, and treatment goals. We assess these factors during consultation.",
      },
      {
        question: "Do implants look natural?",
        answer:
          "Implant restorations are designed to match surrounding teeth in shape, shade, and bite function.",
      },
      {
        question: "How do I care for dental implants?",
        answer:
          "Brush, clean between teeth, attend maintenance visits, and follow any specific hygiene instructions from your dentist.",
      },
    ],
    relatedServices: ["dental-cleaning", "root-canal-treatment"],
  },
};

export const serviceDetailSlugs = Object.keys(
  serviceDetails,
) as ServiceDetailSlug[];
