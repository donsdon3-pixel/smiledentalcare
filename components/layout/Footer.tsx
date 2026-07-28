import Link from "next/link";
import { FaPhone, FaEnvelope, FaMapPin } from "react-icons/fa6";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-clinic-gray-200 bg-clinic-gray-900 text-white">
      <Container className="py-12 sm:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="font-display text-lg font-bold">SmileCare</h3>
            <p className="mt-2 text-sm text-clinic-gray-300">
              Premium dental care with a patient-first approach.
            </p>
          </div>

          <div>
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="#why-choose-us" className="hover:text-clinic-blue-300">
                  Why Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-clinic-blue-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#appointment" className="hover:text-clinic-blue-300">
                  Book Now
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <FaPhone className="h-4 w-4" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-clinic-blue-300">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="h-4 w-4" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-clinic-blue-300">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <FaMapPin className="mt-1 h-4 w-4 flex-shrink-0" />
                <span>{siteConfig.address.streetAddress}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Hours</h4>
            <ul className="mt-3 space-y-1 text-sm text-clinic-gray-300">
              <li>Mon - Fri: 8:00 AM - 6:00 PM</li>
              <li>Saturday: 9:00 AM - 4:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-clinic-gray-800 pt-8 text-center text-sm text-clinic-gray-400">
          <p>
            &copy; {new Date().getFullYear()} SmileCare Dental Clinic. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
