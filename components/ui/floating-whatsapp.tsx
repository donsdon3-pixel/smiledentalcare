import { FaWhatsapp } from "react-icons/fa6";
import { siteConfig } from "@/lib/site";

const whatsappNumber = siteConfig.phone.replace(/\D/g, "");

export function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${whatsappNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-8 right-8 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-2xl text-white shadow-lg transition hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
    >
      <FaWhatsapp />
    </a>
  );
}
