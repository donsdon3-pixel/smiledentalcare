import Link from "next/link";
import { FaTooth } from "react-icons/fa6";

import { Container } from "@/components/ui/Container";
import { navigationItems } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="border-t border-clinic-gray-200 bg-clinic-gray-50">
      <Container className="flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-clinic-blue-600 text-white">
            <FaTooth aria-hidden="true" />
          </span>
          <div>
            <p className="font-display font-bold text-clinic-blue-900">
              SmileCare Dental Clinic
            </p>
            <p className="text-sm text-clinic-gray-600">
              Modern dental care foundation.
            </p>
          </div>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-clinic-gray-700">
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
      </Container>
    </footer>
  );
}
