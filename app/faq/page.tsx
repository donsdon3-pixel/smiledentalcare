import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCircleQuestion } from "react-icons/fa6";

import { FAQExplorer } from "@/components/faq/FAQExplorer";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { JsonLd } from "@/components/seo/JsonLd";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { faqCategories, faqItems } from "@/data/faqs";
import { createBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Dental FAQs",
  description:
    "Find answers to common SmileCare Dental Clinic questions about appointments, treatments, payments, cleanings, root canals, whitening, and patient care.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "Dental FAQs | SmileCare Dental Clinic",
    description:
      "Answers to common patient questions about SmileCare appointments, treatments, payments, and dental care.",
    url: "/faq",
    siteName: "SmileCare Dental Clinic",
    type: "website",
    images: [
      {
        url: "/images/hero-clinic.svg",
        width: 1400,
        height: 1100,
        alt: "SmileCare Dental Clinic patient care illustration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental FAQs | SmileCare Dental Clinic",
    description:
      "Search common dental clinic questions and learn what to expect before your SmileCare visit.",
    images: ["/images/hero-clinic.svg"],
  },
};

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={faqSchema} />
      <JsonLd
        data={createBreadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "FAQ", path: "/faq" },
        ])}
      />
      <section className="bg-gradient-to-b from-clinic-blue-50 to-white">
        <Container className="grid gap-12 py-16 lg:grid-cols-[0.9fr_1fr] lg:items-center lg:py-20">
          <MotionReveal>
            <p className="mb-4 inline-flex items-center gap-2 rounded-md border border-clinic-blue-100 bg-white px-3 py-2 text-sm font-semibold text-clinic-blue-700 shadow-soft">
              <FaCircleQuestion aria-hidden="true" className="h-4 w-4" />
              Patient questions
            </p>
            <h1 className="font-display text-5xl font-bold leading-tight text-clinic-blue-900 sm:text-6xl">
              Frequently asked dental questions.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-clinic-gray-700">
              Search helpful answers about appointments, treatments, payments,
              and what to expect when you visit SmileCare Dental Clinic.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/#appointment">Book Appointment</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">
                  Contact Our Team
                  <FaArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.1}>
            <div className="relative aspect-[14/9] overflow-hidden rounded-lg border border-clinic-blue-100 bg-white shadow-soft">
              <Image
                src="/images/hero-clinic.svg"
                alt="SmileCare Dental Clinic patient care illustration"
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
        <Container>
          <SectionTitle
            eyebrow="FAQ"
            title="Search by topic or browse by category."
            description="Use the filters to quickly find the information most relevant to your upcoming dental visit."
          />
          <FAQExplorer faqs={faqItems} categories={faqCategories} />
        </Container>
      </Section>

      <Section muted>
        <Container>
          <MotionReveal className="grid gap-6 rounded-lg bg-clinic-blue-900 p-8 text-white shadow-soft sm:p-10 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="font-display text-3xl font-bold">
                Still have a question?
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-clinic-blue-100">
                Our care team can help you understand services, appointment
                timing, and what to bring to your first visit.
              </p>
            </div>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Ask SmileCare</Link>
            </Button>
          </MotionReveal>
        </Container>
      </Section>
    </>
  );
}
