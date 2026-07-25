import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { JsonLd } from "@/components/seo/JsonLd";
import "@/app/globals.css";
import { createGlobalSchema } from "@/lib/schema";
import { siteConfig } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "SmileCare Dental Clinic",
    template: "%s | SmileCare Dental Clinic",
  },
  description: siteConfig.description,
  applicationName: "SmileCare Dental Clinic",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
  },
  openGraph: {
    title: "SmileCare Dental Clinic",
    description: siteConfig.description,
    url: "/",
    siteName: "SmileCare Dental Clinic",
    type: "website",
    locale: "en_US",
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0898dc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body>
        <JsonLd data={createGlobalSchema()} />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
