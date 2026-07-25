import type { Metadata } from "next";
import Link from "next/link";
import {
  FaArrowRight,
  FaBolt,
  FaChildReaching,
  FaRegFaceSmileBeam,
  FaShieldHeart,
  FaTeethOpen,
  FaTooth,
  FaWandMagicSparkles,
} from "react-icons/fa6";

import { MotionReveal } from "@/components/motion/MotionReveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { serviceDetailSlugs } from "@/data/service-details";
import { servicePageItems, type ServicePageIcon } from "@/data/services";
import { createBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Dental Services",
  description:
    "Explore SmileCare Dental Clinic services including dental cleaning, root canal treatment, teeth whitening, implants, emergency care, pediatric dentistry, and orthodontics.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Dental Services | SmileCare Dental Clinic",
    description:
      "Professional preventive, cosmetic, restorative, emergency, pediatric, and orthodontic dental services.",
    url: "/services",
    siteName: "SmileCare Dental Clinic",
    type: "website",
    images: [
      {
        url: "/images/hero-clinic.svg",
        width: 1400,
        height: 1100,
        alt: "SmileCare Dental Clinic services overview illustration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Services | SmileCare Dental Clinic",
    description:
      "Explore modern dental services designed for comfort, precision, and long-term oral health.",
    images: ["/images/hero-clinic.svg"],
  },
};

const serviceIcons = {
  cleaning: FaTooth,
  emergency: FaBolt,
  implant: FaShieldHeart,
  orthodontics: FaTeethOpen,
  pediatric: FaChildReaching,
  "root-canal": FaRegFaceSmileBeam,
  whitening: FaWandMagicSparkles,
} satisfies Record<ServicePageIcon, typeof FaTooth>;

const publishedServiceSlugs = new Set<string>(serviceDetailSlugs);

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={createBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
      <section className="bg-gradient-to-b from-clinic-blue-50 to-white">
        <Container className="py-16 lg:py-20">
          <MotionReveal className="max-w-4xl">
            <p className="mb-4 inline-flex items-center gap-2 rounded-md border border-clinic-blue-100 bg-white px-3 py-2 text-sm font-semibold text-clinic-blue-700 shadow-soft">
              <FaShieldHeart aria-hidden="true" className="h-4 w-4" />
              Dental services
            </p>
            <h1 className="font-display text-5xl font-bold leading-tight text-clinic-blue-900 sm:text-6xl">
              Complete dental care for every smile.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-clinic-gray-700">
              From routine prevention to urgent appointments and smile
              restoration, SmileCare offers thoughtful treatment options under
              one modern clinical team.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/#appointment">Book Appointment</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/about">
                  Meet Our Dentists
                  <FaArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </MotionReveal>
        </Container>
      </section>

      <Section>
        <Container>
          <SectionTitle
            eyebrow="Services overview"
            title="Focused care, clear recommendations, comfortable visits."
            description="Each service begins with a careful assessment and a practical explanation of your options, so you can make confident decisions about your oral health."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {servicePageItems.map((service, index) => {
              const Icon = serviceIcons[service.icon];
              const hasServicePage = publishedServiceSlugs.has(service.slug);
              const href = hasServicePage
                ? `/services/${service.slug}`
                : "/#appointment";
              const ctaLabel = hasServicePage ? "View Service" : "Book Consultation";

              return (
                <MotionReveal
                  key={service.slug}
                  delay={index * 0.05}
                  className="group flex h-full flex-col rounded-lg border border-clinic-gray-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-clinic-blue-200"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-md bg-clinic-blue-50 text-clinic-blue-600 transition group-hover:bg-clinic-blue-600 group-hover:text-white">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-clinic-blue-900">
                    {hasServicePage ? (
                      <Link
                        href={href}
                        className="transition hover:text-clinic-blue-600"
                        aria-label={`Learn more about ${service.title}`}
                      >
                        {service.title}
                      </Link>
                    ) : (
                      service.title
                    )}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-clinic-gray-600">
                    {service.description}
                  </p>
                  <Link
                    href={href}
                    className="mt-6 inline-flex h-11 items-center justify-center gap-2 rounded-md bg-clinic-blue-600 px-4 text-sm font-semibold text-white transition hover:bg-clinic-blue-700"
                    aria-label={
                      hasServicePage
                        ? `View ${service.title} service details`
                        : `Book a consultation for ${service.title}`
                    }
                  >
                    {ctaLabel}
                    <FaArrowRight aria-hidden="true" className="h-4 w-4" />
                  </Link>
                </MotionReveal>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section muted>
        <Container>
          <MotionReveal className="grid gap-6 rounded-lg bg-clinic-blue-900 p-8 text-white shadow-soft md:grid-cols-[1fr_auto] md:items-center sm:p-10">
            <div>
              <h2 className="font-display text-3xl font-bold">
                Not sure which service you need?
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-clinic-blue-100">
                Start with a consultation. We will assess your smile, explain
                your options, and recommend the most appropriate next step.
              </p>
            </div>
            <Button asChild size="lg" variant="secondary">
              <Link href="/#appointment">Request Appointment</Link>
            </Button>
          </MotionReveal>
        </Container>
      </Section>
    </>
  );
}
