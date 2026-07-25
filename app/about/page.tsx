import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaCheck,
  FaMicroscope,
  FaShieldHeart,
} from "react-icons/fa6";

import { AnimatedCounter } from "@/components/home/AnimatedCounter";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import {
  aboutStats,
  clinicValues,
  technologyFeatures,
  trustReasons,
} from "@/data/about";
import { doctors } from "@/data/home";
import { createBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About SmileCare Dental Clinic",
  description:
    "Learn about SmileCare Dental Clinic, our dentists, mission, values, modern dental technology, and patient-first approach.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About SmileCare Dental Clinic",
    description:
      "Meet the SmileCare team and discover our modern, trustworthy approach to family and cosmetic dentistry.",
    url: "/about",
    siteName: "SmileCare Dental Clinic",
    type: "website",
    images: [
      {
        url: "/images/about-clinic.svg",
        width: 1400,
        height: 900,
        alt: "Modern SmileCare Dental Clinic reception and treatment planning area",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About SmileCare Dental Clinic",
    description:
      "A modern dental clinic focused on gentle care, clear communication, and long-term oral health.",
    images: ["/images/about-clinic.svg"],
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={createBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
      <section className="bg-gradient-to-b from-clinic-blue-50 to-white">
        <Container className="grid gap-12 py-16 lg:grid-cols-[0.9fr_1fr] lg:items-center lg:py-20">
          <MotionReveal>
            <p className="mb-4 inline-flex items-center gap-2 rounded-md border border-clinic-blue-100 bg-white px-3 py-2 text-sm font-semibold text-clinic-blue-700 shadow-soft">
              <FaShieldHeart aria-hidden="true" className="h-4 w-4" />
              About SmileCare
            </p>
            <h1 className="font-display text-5xl font-bold leading-tight text-clinic-blue-900 sm:text-6xl">
              A modern dental clinic built around trust.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-clinic-gray-700">
              SmileCare Dental Clinic brings together experienced dentists,
              advanced diagnostics, and a calm patient experience for families
              who want confident, long-lasting oral health.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/#appointment">Book Appointment</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/services">
                  View Services
                  <FaArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.1}>
            <div className="relative aspect-[14/9] overflow-hidden rounded-lg border border-clinic-blue-100 bg-white shadow-soft">
              <Image
                src="/images/about-clinic.svg"
                alt="Modern SmileCare Dental Clinic reception and treatment planning area"
                fill
                priority
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
            </div>
          </MotionReveal>
        </Container>
      </section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1fr] lg:items-start">
          <MotionReveal>
            <SectionTitle
              eyebrow="Clinic story"
              title="Care that feels personal from the first conversation."
              description="SmileCare was founded to make high-quality dentistry easier to understand, easier to schedule, and easier to trust. Our team supports preventive, cosmetic, restorative, and family care with a focus on long-term health."
            />
          </MotionReveal>
          <div className="grid gap-5 sm:grid-cols-2">
            <MissionCard
              title="Mission"
              description="To provide precise, gentle dental care with clear guidance and a patient experience that respects every individual."
            />
            <MissionCard
              title="Vision"
              description="To be the trusted dental home for families seeking modern care, natural results, and lifelong oral wellness."
            />
          </div>
        </Container>
      </Section>

      <Section muted>
        <Container>
          <SectionTitle
            eyebrow="Core values"
            title="The principles behind every appointment."
            description="Our values shape how we communicate, plan treatment, and care for patients before, during, and after each visit."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {clinicValues.map((value, index) => (
              <MotionReveal
                key={value.title}
                delay={index * 0.06}
                className="rounded-lg border border-clinic-gray-200 bg-white p-6 shadow-soft"
              >
                <span className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-md bg-clinic-blue-50 text-sm font-bold text-clinic-blue-700">
                  {index + 1}
                </span>
                <h3 className="font-display text-xl font-bold text-clinic-blue-900">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-clinic-gray-600">
                  {value.description}
                </p>
              </MotionReveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section id="dentists">
        <Container>
          <SectionTitle
            eyebrow="Meet our dentists"
            title="Experienced care from a focused clinical team."
            description="Our dentists combine specialty knowledge with a calm, practical approach to treatment planning."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {doctors.map((doctor, index) => (
              <MotionReveal
                key={doctor.name}
                delay={index * 0.08}
                className="overflow-hidden rounded-lg border border-clinic-gray-200 bg-white shadow-soft"
              >
                <div className="relative aspect-[13/16] bg-clinic-blue-50">
                  <Image
                    src={doctor.image}
                    alt={`${doctor.name}, ${doctor.role}`}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-bold text-clinic-blue-900">
                    {doctor.name}
                  </h3>
                  <p className="mt-1 text-sm text-clinic-gray-600">
                    {doctor.role}
                  </p>
                </div>
              </MotionReveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section muted>
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <MotionReveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-clinic-gray-200 bg-white shadow-soft">
              <Image
                src="/images/dental-technology.svg"
                alt="Digital dental technology and diagnostic equipment"
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
            </div>
          </MotionReveal>
          <MotionReveal delay={0.08}>
            <SectionTitle
              eyebrow="Modern equipment"
              title="Technology that supports precise, comfortable care."
              description="Our equipment helps patients see what we see, understand treatment options, and receive efficient care with confidence."
            />
            <ul className="grid gap-3">
              {technologyFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-3 text-sm font-medium text-clinic-gray-700"
                >
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-clinic-blue-100 text-clinic-blue-700">
                    <FaCheck aria-hidden="true" className="h-3 w-3" />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </MotionReveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle
            eyebrow="Why patients trust us"
            title="A dependable dental home for every stage of care."
            description="Patients choose SmileCare for consistent communication, respectful recommendations, and care that balances comfort with clinical quality."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {trustReasons.map((reason, index) => (
              <MotionReveal
                key={reason}
                delay={index * 0.04}
                className="flex items-center gap-3 rounded-lg border border-clinic-gray-200 bg-white p-5 shadow-soft"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-clinic-blue-50 text-clinic-blue-600">
                  <FaCheck aria-hidden="true" />
                </span>
                <h3 className="text-base font-semibold text-clinic-blue-900">
                  {reason}
                </h3>
              </MotionReveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section muted>
        <Container>
          <dl className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {aboutStats.map((stat) => (
              <AnimatedCounter key={stat.label} {...stat} />
            ))}
          </dl>
        </Container>
      </Section>

      <Section>
        <Container>
          <MotionReveal className="grid gap-6 rounded-lg bg-clinic-blue-900 p-8 text-white shadow-soft md:grid-cols-[1fr_auto] md:items-center sm:p-10">
            <div>
              <p className="mb-3 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-clinic-blue-100">
                <FaMicroscope aria-hidden="true" />
                Personalized dental care
              </p>
              <h2 className="font-display text-3xl font-bold">
                Meet the team behind your next healthier smile.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-clinic-blue-100">
                Book a consultation and leave with clear answers, thoughtful
                guidance, and a care plan that fits your goals.
              </p>
            </div>
            <Button asChild size="lg" variant="secondary">
              <Link href="/#appointment">Schedule a Visit</Link>
            </Button>
          </MotionReveal>
        </Container>
      </Section>
    </>
  );
}

type MissionCardProps = {
  title: string;
  description: string;
};

function MissionCard({ description, title }: MissionCardProps) {
  return (
    <MotionReveal className="rounded-lg border border-clinic-gray-200 bg-white p-6 shadow-soft">
      <h3 className="font-display text-2xl font-bold text-clinic-blue-900">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-clinic-gray-600">
        {description}
      </p>
    </MotionReveal>
  );
}
