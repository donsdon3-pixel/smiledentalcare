import Image from "next/image";
import Link from "next/link";
import { FaCalendarCheck } from "react-icons/fa6";

import { Container } from "@/components/ui/Container";
import { navigationItems } from "@/data/navigation";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-clinic-gray-200 bg-white/90 backdrop-blur">
      <Container className="flex h-20 items-center justify-between gap-6">
        <Link
          href="/"
          aria-label="SmileCare Dental Clinic home"
          className="flex items-center gap-3"
        >
          <Image
            src="/images/logo-placeholder.svg"
            alt=""
            width={44}
            height={44}
            priority
          />
          <span className="font-display text-lg font-bold text-clinic-blue-900">
            SmileCare
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden md:block">
          <ul className="flex items-center gap-7 text-sm font-medium text-clinic-gray-700">
            {navigationItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition hover:text-clinic-blue-600"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href="/contact"
          className="inline-flex h-11 items-center justify-center gap-2 rounded-md bg-clinic-blue-600 px-4 text-sm font-semibold text-white shadow-soft transition hover:bg-clinic-blue-700"
        >
          <FaCalendarCheck aria-hidden="true" />
          <span className="hidden sm:inline">Book Visit</span>
        </Link>
      </Container>
    </header>
  );
}
