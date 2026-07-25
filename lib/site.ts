export const siteConfig = {
  name: "SmileCare Dental Clinic",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.trim() ||
    "https://smilecare-dental-clinic.vercel.app",
  description:
    "Premium family, cosmetic, restorative, and emergency dental care in a modern patient-first clinic.",
  phone: "+15552488820",
  email: "hello@smilecare.example",
  address: {
    streetAddress: "210 Wellness Avenue, Suite 400",
    addressLocality: "Downtown",
    addressRegion: "CA",
    postalCode: "90001",
    addressCountry: "US",
  },
} as const;
