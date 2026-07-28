import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaCalendarCheck,
  FaCheck,
  FaClock,
  FaLocationDot,
  FaPhone,
  FaShieldHeart,
  FaStethoscope,
  FaWandMagicSparkles,
} from "react-icons/fa6";

import { AnimatedCounter } from "@/components/home/AnimatedCounter";
import { ServiceCard } from "@/components/home/ServiceCard";
import { Testimonial } from "@/components/home/Testimonial";
import { AppointmentForm } from "@/components/contact/AppointmentForm";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import {
  ctaHighlights,
  doctors,
  faqs,
  heroActions,
  reasons,
  services,
  stats,
  testimonials,
} from "@/data/home";
import type { ReasonIcon } from "@/types/home";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "SmileCare Dental Clinic",
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SmileCare Dental Clinic",
    description: siteConfig.description,
    url: "/",
    siteName: "SmileCare Dental Clinic",
    type: "website",
    images: [
      {
        url: "/images/hero-clinic.svg",
        width: 1400,
        height: 1100,
        alt: "SmileCare Dental Clinic modern dental care illustration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SmileCare Dental Clinic",
    description: siteConfig.description,
    images: ["/images/hero-clinic.svg"],
  },
};

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-clinic-blue-50 to-white">
        <Container className="grid min-h-[calc(100vh-5rem)] items-center gap-12 py-16 lg:grid-cols-[1fr_0.92fr] lg:py-20">
          <MotionReveal>
            <p className="mb-4 inline-flex items-center gap-2 rounded-md border border-clinic-blue-100 bg-white px-3 py-2 text-sm font-semibold text-clinic-blue-700 shadow-soft">
              <FaCheck aria-hidden="true" className="h-4 w-4" />
              Trusted dental care for confident smiles
            </p>
            <h1 className="max-w-3xl font-display text-5xl font-bold leading-tight text-clinic-blue-900 sm:text-6xl lg:text-7xl">
              SmileCare Dental Clinic
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-clinic-gray-700">
              Premium family, cosmetic, and restorative dentistry delivered with
              gentle care, modern diagnostics, and a calm clinic experience.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href={heroActions.primary.href}>
                  <FaCalendarCheck aria-hidden="true" />
                  {heroActions.primary.label}
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href={heroActions.secondary.href}>
                  {heroActions.secondary.label}
                  <FaArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
            <ul className="mt-8 grid gap-3 text-sm font-medium text-clinic-gray-700 sm:grid-cols-3">
              {ctaHighlights.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-clinic-blue-100 text-clinic-blue-700">
                    <FaCheck aria-hidden="true" className="h-3 w-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </MotionReveal>

          <MotionReveal delay={0.12} className="relative">
            <div className="relative aspect-[14/11] overflow-hidden rounded-lg border border-clinic-blue-100 bg-white shadow-soft">
              <Image
                src="/images/hero-clinic.svg"
                alt="Bright modern dental clinic illustration"
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-5 left-5 right-5 grid gap-3 rounded-lg border border-white/70 bg-white/[0.92] p-4 shadow-soft backdrop-blur sm:grid-cols-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-clinic-gray-500">
                  Call
                </p>
                <p className="mt-1 font-bold text-clinic-blue-900">
                  (555) 248-8820
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-clinic-gray-500">
                  Hours
                </p>
                <p className="mt-1 font-bold text-clinic-blue-900">
                  Mon-Sat
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-clinic-gray-500">
                  Location
                </p>
                <p className="mt-1 font-bold text-clinic-blue-900">
                  Downtown
                </p>
              </div>
            </div>
          </MotionReveal>
        </Container>
      </section>

      <Section className="py-10 sm:py-12">
        <Container>
          <MotionReveal className="grid gap-5 rounded-lg bg-clinic-blue-900 p-6 text-white shadow-soft md:grid-cols-[1fr_auto] md:items-center md:p-8">
            <div>
              <h2 className="font-display text-2xl font-bold">
                Need dental care this week?
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-clinic-blue-100">
                Schedule a consultation with our care team and receive a clear,
                personalized plan before treatment begins.
              </p>
            </div>
            <Button asChild variant="secondary" size="lg">
              <Link href="#appointment">Reserve a Visit</Link>
            </Button>
          </MotionReveal>
        </Container>
      </Section>

      <Section id="why-choose-us" muted>
        <Container>
          <SectionHeading
            eyebrow="Why choose us"
            title="Designed for comfort, precision, and long-term oral health."
            description="SmileCare combines clinical expertise with a thoughtful patient experience, from your first call through follow-up care."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {reasons.map((reason, index) => {
              const Icon = reasonIcons[reason.icon];

              return (
                <MotionReveal
                  key={reason.title}
                  delay={index * 0.08}
                  className="rounded-lg border border-clinic-gray-200 bg-white p-6 shadow-soft"
                >
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-md bg-clinic-blue-50 text-clinic-blue-600">
                    <Icon aria-hidden="true" className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-clinic-blue-900">
                    {reason.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-clinic-gray-600">
                    {reason.description}
                  </p>
                </MotionReveal>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section id="services">
        <Container>
          <SectionHeading
            eyebrow="Featured services"
            title="Comprehensive dental care in one calm, modern clinic."
            description="From prevention to smile design, each service is planned around function, aesthetics, and patient comfort."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </Container>
      </Section>

      <Section id="doctors" muted>
        <Container>
          <SectionHeading
            eyebrow="Meet doctors"
            title="Experienced clinicians with a gentle approach."
            description="Our dentists bring focused expertise across preventive, cosmetic, restorative, and family dental care."
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

      <Section>
        <Container>
          <dl className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <AnimatedCounter key={stat.label} {...stat} />
            ))}
          </dl>
        </Container>
      </Section>

      <Section id="testimonials" muted>
        <Container>
          <SectionHeading
            eyebrow="Testimonials"
            title="Patients notice the difference."
            description="Realistic care, clear answers, and gentle treatment help patients feel confident at every visit."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Testimonial key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </Container>
      </Section>

      <Section id="appointment">
        <Container className="grid gap-10 lg:grid-cols-[0.85fr_1fr] lg:items-start">
          <MotionReveal>
            <SectionHeading
              eyebrow="Appointment"
              title="Plan your next visit with a friendly care coordinator."
              description="Share your preferred time and treatment interest. Our team will follow up to confirm availability."
            />
            <div className="grid gap-4 text-sm text-clinic-gray-700">
              <ContactLine icon={FaPhone} text="(555) 248-8820" />
              <ContactLine icon={FaClock} text="Monday to Saturday, 8:00 AM - 6:00 PM" />
              <ContactLine
                icon={FaLocationDot}
                text="210 Wellness Avenue, Suite 400, Downtown"
              />
            </div>
          </MotionReveal>

          <MotionReveal
            delay={0.08}
            className="rounded-lg border border-clinic-gray-200 bg-white p-6 shadow-soft"
          >
            <AppointmentForm />
          </MotionReveal>
        </Container>
      </Section>

      <Section muted>
        <Container className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <MotionReveal>
            <SectionHeading
              eyebrow="Visit us"
              title="A convenient clinic location with easy appointment access."
              description="Find SmileCare Dental Clinic in the downtown wellness district, close to parking, transit, and family-friendly amenities."
            />
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
                210 Wellness Avenue, Suite 400
              </p>
            </div>
          </MotionReveal>
        </Container>
      </Section>

      <Section id="faq">
        <Container>
          <SectionHeading
            eyebrow="FAQ"
            title="Helpful answers before your visit."
            description="A quick preview of the questions patients ask most often."
          />
          <div className="grid gap-4">
            {faqs.map((faq, index) => (
              <MotionReveal
                key={faq.question}
                delay={index * 0.06}
                className="rounded-lg border border-clinic-gray-200 bg-white p-5 shadow-soft"
              >
                <h3 className="font-display text-lg font-bold text-clinic-blue-900">
                  {faq.question}
                </h3>
                <p className="mt-2 text-sm leading-7 text-clinic-gray-600">
                  {faq.answer}
                </p>
              </MotionReveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <MotionReveal className="rounded-lg bg-clinic-blue-600 p-8 text-white shadow-soft sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-8">
            <div>
              <h2 className="font-display text-3xl font-bold">
                Ready for a healthier smile?
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-clinic-blue-50">
                Start with a consultation and leave with a confident plan for
                your dental health.
              </p>
            </div>
            <Button asChild variant="secondary" size="lg" className="mt-6 lg:mt-0">
              <Link href="#appointment">Book Your Visit</Link>
            </Button>
          </MotionReveal>
        </Container>
      </Section>
    </>
  );
}

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

const reasonIcons = {
  shield: FaShieldHeart,
  sparkles: FaWandMagicSparkles,
  stethoscope: FaStethoscope,
} satisfies Record<ReasonIcon, typeof FaShieldHeart>;

function SectionHeading({ description, eyebrow, title }: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="mb-3 text-sm font-bold uppercase tracking-wide text-clinic-blue-600">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-bold text-clinic-blue-900 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-clinic-gray-600">
        {description}
      </p>
    </div>
  );
}

type ContactLineProps = {
  icon: typeof FaPhone;
  text: string;
};

function ContactLine({ icon: Icon, text }: ContactLineProps) {
  return (
    <p className="flex items-center gap-3">
      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-clinic-blue-50 text-clinic-blue-600">
        <Icon aria-hidden="true" />
      </span>
      {text}
    </p>
  );
}
