export const contactInfo = {
  address: {
    label: "210 Wellness Avenue, Suite 400, Downtown",
    href: "https://maps.google.com/?q=210%20Wellness%20Avenue%20Suite%20400%20Downtown",
  },
  phone: {
    label: "(555) 248-8820",
    href: "tel:+15552488820",
  },
  emergency: {
    label: "(555) 248-8899",
    href: "tel:+15552488899",
  },
  email: {
    label: "hello@smilecare.example",
    href: "mailto:hello@smilecare.example",
  },
  hours: [
    "Monday - Friday: 8:00 AM - 6:00 PM",
    "Saturday: 9:00 AM - 2:00 PM",
    "Sunday: Closed",
  ],
  socials: [
    {
      label: "Facebook",
      href: "https://facebook.com",
      icon: "facebook",
    },
    {
      label: "Instagram",
      href: "https://instagram.com",
      icon: "instagram",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com",
      icon: "linkedin",
    },
    {
      label: "X",
      href: "https://x.com",
      icon: "x",
    },
  ],
} as const;
