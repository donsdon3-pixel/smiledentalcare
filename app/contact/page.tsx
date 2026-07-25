import type { Metadata } from "next";
import Link from "next/link";
import {
  FaClock,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaLocationDot,
  FaPhone,
  FaPhoneVolume,
  FaXTwitter,
} from "react-icons/fa6";

import { AppointmentForm } from "@/components/contact/AppointmentForm";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { contactInfo } from "@/data/contact";
import { createBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact SmileCare Dental Clinic",
  description:
    "Contact SmileCare Dental Clinic to book an appointment, call for emergency dental care, get directions, or ask our team a question.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact SmileCare Dental Clinic",
    description:
      "Find SmileCare Dental Clinic phone, email, address, working hours, emergency contact, and appointment booking form.",
    url: "/contact",
    siteName: "SmileCare Dental Clinic",
    type: "website",
    images: [
      {
        url: "/images/about-clinic.svg",
        width: 1400,
        height: 900,
        alt: "SmileCare Dental Clinic contact and appointment booking page",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact SmileCare Dental Clinic",
    description:
      "Book a dental appointment or contact the SmileCare team for directions, hours, and emergency care.",
    images: ["/images/about-clinic.svg"],
  },
};

const socialIcons = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  linkedin: FaLinkedinIn,
  x: FaXTwitter,
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={createBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <section className="bg-gradient-to-b from-clinic-blue-50 to-white">
        <Container className="py-16 lg:py-20">
          <MotionReveal className="max-w-4xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-md border border-clinic-blue-100 bg-white px-3 py-2 text-sm font-semibold text-clinic-blue-700 shadow-soft">
              <FaPhone aria-hidden="true" className="h-4 w-4" />
              Contact SmileCare
            </p>
            <h1 className="font-display text-5xl font-bold leading-tight text-clinic-blue-900 sm:text-6xl">
              Book a visit or speak with our dental team.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-clinic-gray-700">
              Reach SmileCare Dental Clinic for appointment scheduling,
              directions, emergency dental guidance, and general care questions.
            </p>
          </MotionReveal>
        </Container>
      </section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-[0.86fr_1fr] lg:items-start">
          <MotionReveal>
            <SectionTitle
              eyebrow="Clinic information"
              title="Everything you need to reach us."
              description="Our team is ready to help you schedule care, understand next steps, and find the clinic easily."
            />
            <div className="grid gap-4">
              <ContactCard
                icon={FaLocationDot}
                title="Address"
                href={contactInfo.address.href}
                label={contactInfo.address.label}
              />
              <ContactCard
                icon={FaPhone}
                title="Phone"
                href={contactInfo.phone.href}
                label={contactInfo.phone.label}
              />
              <ContactCard
                icon={FaEnvelope}
                title="Email"
                href={contactInfo.email.href}
                label={contactInfo.email.label}
              />
              <ContactCard
                icon={FaPhoneVolume}
                title="Emergency Contact"
                href={contactInfo.emergency.href}
                label={contactInfo.emergency.label}
              />
            </div>

            <div className="mt-6 rounded-lg border border-clinic-gray-200 bg-white p-6 shadow-soft">
              <div className="mb-4 flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-clinic-blue-50 text-clinic-blue-600">
                  <FaClock aria-hidden="true" />
                </span>
                <h2 className="font-display text-xl font-bold text-clinic-blue-900">
                  Working Hours
                </h2>
              </div>
              <ul className="grid gap-2 text-sm text-clinic-gray-700">
                {contactInfo.hours.map((hour) => (
                  <li key={hour}>{hour}</li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex gap-3" aria-label="Social media links">
              {contactInfo.socials.map((social) => {
                const Icon = socialIcons[social.icon];

                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    aria-label={`Visit SmileCare on ${social.label}`}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-clinic-gray-200 bg-white text-clinic-blue-700 shadow-soft transition hover:border-clinic-blue-200 hover:bg-clinic-blue-50"
                  >
                    <Icon aria-hidden="true" />
                  </Link>
                );
              })}
            </div>
          </MotionReveal>

          <MotionReveal
            delay={0.08}
            className="rounded-lg border border-clinic-gray-200 bg-white p-6 shadow-soft"
          >
            <h2 className="font-display text-2xl font-bold text-clinic-blue-900">
              Request an appointment
            </h2>
            <p className="mt-3 text-sm leading-7 text-clinic-gray-600">
              Submit your preferred date and service. We will contact you to
              confirm the final appointment time.
            </p>
            <div className="mt-6">
              <AppointmentForm />
            </div>
          </MotionReveal>
        </Container>
      </Section>

      <Section muted>
        <Container className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <MotionReveal>
            <SectionTitle
              eyebrow="Map"
              title="Find us in the downtown wellness district."
              description="Use the address link for directions, parking options, and current travel time before your visit."
            />
            <Link
              href={contactInfo.address.href}
              className="inline-flex items-center gap-2 text-sm font-bold text-clinic-blue-700 transition hover:text-clinic-blue-900"
            >
              Open directions
              <FaLocationDot aria-hidden="true" />
            </Link>
          </MotionReveal>
          <MotionReveal
            delay={0.08}
            className="flex aspect-[16/9] min-h-72 items-center justify-center rounded-lg border border-clinic-gray-200 bg-white shadow-soft"
          >
            <div className="text-center">
              <FaLocationDot
                aria-hidden="true"
                className="mx-auto h-10 w-10 text-clinic-blue-600"
              />
              <p className="mt-4 font-display text-xl font-bold text-clinic-blue-900">
                Google Maps Placeholder
              </p>
              <p className="mt-2 text-sm text-clinic-gray-600">
                {contactInfo.address.label}
              </p>
            </div>
          </MotionReveal>
        </Container>
      </Section>
    </>
  );
}

type ContactCardProps = {
  icon: typeof FaPhone;
  title: string;
  href: string;
  label: string;
};

function ContactCard({ href, icon: Icon, label, title }: ContactCardProps) {
  return (
    <Link
      href={href}
      className="flex gap-4 rounded-lg border border-clinic-gray-200 bg-white p-5 shadow-soft transition hover:border-clinic-blue-200 hover:bg-clinic-blue-50"
    >
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-clinic-blue-50 text-clinic-blue-600">
        <Icon aria-hidden="true" />
      </span>
      <span>
        <span className="block text-sm font-semibold text-clinic-gray-500">
          {title}
        </span>
        <span className="mt-1 block font-display text-lg font-bold text-clinic-blue-900">
          {label}
        </span>
      </span>
    </Link>
  );
}
