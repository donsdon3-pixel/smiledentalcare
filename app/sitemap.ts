import type { MetadataRoute } from "next";

import { serviceDetailSlugs } from "@/data/service-details";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes = ["", "/about", "/services", "/faq", "/contact"];
  const serviceRoutes = serviceDetailSlugs.map((slug) => `/services/${slug}`);

  return [...routes, ...serviceRoutes].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
