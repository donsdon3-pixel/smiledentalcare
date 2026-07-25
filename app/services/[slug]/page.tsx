import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ServiceDetailPage } from "@/components/services/ServiceDetailPage";
import {
  serviceDetails,
  serviceDetailSlugs,
  type ServiceDetailSlug,
} from "@/data/service-details";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return serviceDetailSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {};
  }

  const url = `/services/${service.slug}`;

  return {
    title: {
      absolute: service.metaTitle,
    },
    description: service.metaDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url,
      siteName: "SmileCare Dental Clinic",
      type: "website",
      images: [
        {
          url: service.image,
          width: 1400,
          height: 900,
          alt: service.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: [service.image],
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetailPage service={service} />;
}

function getService(slug: string) {
  if (serviceDetailSlugs.includes(slug as ServiceDetailSlug)) {
    return serviceDetails[slug as ServiceDetailSlug];
  }

  return null;
}
