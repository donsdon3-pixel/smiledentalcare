import Image from "next/image";
import Link from "next/link";
import {
  FaArrowRight,
  FaCheck,
  FaClipboardCheck,
  FaHeartPulse,
  FaHouseMedical,
  FaLightbulb,
} from "react-icons/fa6";

import { MotionReveal } from "@/components/motion/MotionReveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import type { ServiceDetail } from "@/data/service-details";
import { serviceDetails } from "@/data/service-details";
import { createBreadcrumbSchema } from "@/lib/schema";

type ServiceDetailPageProps = {
  service: ServiceDetail;
};

export function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  return (
    <>
      <JsonLd
        data={createBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${service.slug}` },
        ])}
      />
      <section className="bg-gradient-to-b from-clinic-blue-50 to-white">
        <Container className="grid gap-12 py-10 lg:grid-cols-[0.92fr_1fr] lg:items-center lg:py-16">
          <MotionReveal>
            <Breadcrumb current={service.title} />
            <p className="mt-8 inline-flex items-center gap-2 rounded-md border border-clinic-blue-100 bg-white px-3 py-2 text-sm font-semibold text-clinic-blue-700 shadow-soft">
              <FaHouseMedical aria-hidden="true" className="h-4 w-4" />
              {service.heroLabel}
            </p>
            <h1 className="mt-4 font-display text-5xl font-bold leading-tight text-clinic-blue-900 sm:text-6xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-clinic-gray-700">
              {service.heroDescription}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/#appointment">Book Appointment</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/services">
                  All Services
                  <FaArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.1}>
            <div className="relative aspect-[14/9] overflow-hidden rounded-lg border border-clinic-blue-100 bg-white shadow-soft">
              <Image
                src={service.image}
                alt={service.imageAlt}
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
              eyebrow="Service overview"
              title={`What is ${service.title.toLowerCase()}?`}
              description={service.overview}
            />
          </MotionReveal>
          <InfoList
            title="Benefits"
            icon={FaHeartPulse}
            items={service.benefits}
          />
        </Container>
      </Section>

      <Section muted>
        <Container>
          <SectionTitle
            eyebrow="When to schedule"
            title="Signs you may need this treatment."
            description="A timely dental visit can prevent small symptoms from becoming more complex concerns."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {service.signs.map((sign, index) => (
              <MotionReveal
                key={sign}
                delay={index * 0.04}
                className="flex items-center gap-3 rounded-lg border border-clinic-gray-200 bg-white p-5 shadow-soft"
              >
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-clinic-blue-50 text-clinic-blue-600">
                  <FaCheck aria-hidden="true" />
                </span>
                <h3 className="text-base font-semibold text-clinic-blue-900">
                  {sign}
                </h3>
              </MotionReveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle
            eyebrow="Treatment process"
            title="Step-by-step procedure."
            description="Your dentist will confirm the exact steps for your needs, comfort, and clinical findings."
          />
          <ol className="grid gap-5 md:grid-cols-2">
            {service.procedure.map((step, index) => (
              <MotionReveal
                key={step.title}
                delay={index * 0.05}
                className="rounded-lg border border-clinic-gray-200 bg-white p-6 shadow-soft"
              >
                <span className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-md bg-clinic-blue-600 text-sm font-bold text-white">
                  {index + 1}
                </span>
                <h3 className="font-display text-xl font-bold text-clinic-blue-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-clinic-gray-600">
                  {step.description}
                </p>
              </MotionReveal>
            ))}
          </ol>
        </Container>
      </Section>

      <Section muted>
        <Container className="grid gap-10 lg:grid-cols-3">
          <InfoList
            title="Why choose SmileCare"
            icon={FaClipboardCheck}
            items={service.whyChoose}
          />
          <InfoList
            title="Technology used"
            icon={FaLightbulb}
            items={service.technology}
          />
          <InfoList
            title="Recovery and aftercare"
            icon={FaHeartPulse}
            items={service.aftercare}
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionTitle
            eyebrow="FAQs"
            title={`Questions about ${service.title.toLowerCase()}.`}
            description="Here are answers to common questions patients ask before booking this service."
          />
          <div className="grid gap-4">
            {service.faqs.map((faq, index) => (
              <MotionReveal
                key={faq.question}
                delay={index * 0.04}
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

      <Section muted>
        <Container>
          <SectionTitle
            eyebrow="Related services"
            title="Explore care that supports your treatment plan."
            description="These services are often discussed alongside this treatment during comprehensive care planning."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {service.relatedServices.map((slug, index) => {
              const related = serviceDetails[slug];

              return (
                <MotionReveal
                  key={slug}
                  delay={index * 0.06}
                  className="rounded-lg border border-clinic-gray-200 bg-white p-6 shadow-soft"
                >
                  <h3 className="font-display text-xl font-bold text-clinic-blue-900">
                    {related.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-clinic-gray-600">
                    {related.heroDescription}
                  </p>
                  <Link
                    href={`/services/${related.slug}`}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-clinic-blue-700 transition hover:text-clinic-blue-900"
                  >
                    Learn more
                    <FaArrowRight aria-hidden="true" className="h-4 w-4" />
                  </Link>
                </MotionReveal>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <MotionReveal className="grid gap-6 rounded-lg bg-clinic-blue-900 p-8 text-white shadow-soft sm:p-10 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="font-display text-3xl font-bold">
                Ready to talk with a SmileCare dentist?
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-clinic-blue-100">
                Schedule a visit and receive clear recommendations based on your
                smile, symptoms, and long-term oral health goals.
              </p>
            </div>
            <Button asChild size="lg" variant="secondary">
              <Link href="/#appointment">Book Appointment</Link>
            </Button>
          </MotionReveal>
        </Container>
      </Section>
    </>
  );
}

type InfoListProps = {
  title: string;
  items: string[];
  icon: typeof FaCheck;
};

function InfoList({ icon: Icon, items, title }: InfoListProps) {
  return (
    <MotionReveal className="rounded-lg border border-clinic-gray-200 bg-white p-6 shadow-soft">
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-md bg-clinic-blue-50 text-clinic-blue-600">
        <Icon aria-hidden="true" className="h-5 w-5" />
      </div>
      <h2 className="font-display text-2xl font-bold text-clinic-blue-900">
        {title}
      </h2>
      <ul className="mt-5 grid gap-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex gap-3 text-sm leading-7 text-clinic-gray-700"
          >
            <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-clinic-blue-100 text-clinic-blue-700">
              <FaCheck aria-hidden="true" className="h-3 w-3" />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </MotionReveal>
  );
}

function Breadcrumb({ current }: { current: string }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-sm font-medium text-clinic-gray-600">
        <li>
          <Link href="/" className="transition hover:text-clinic-blue-700">
            Home
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li>
          <Link href="/services" className="transition hover:text-clinic-blue-700">
            Services
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li aria-current="page" className="text-clinic-blue-900">
          {current}
        </li>
      </ol>
    </nav>
  );
}
