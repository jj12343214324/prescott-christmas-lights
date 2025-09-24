import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants';
import { formatPhone, getCurrentYear } from '@/lib/utils';
import { locations } from '@/data/locations';

export default function Footer() {
  const popularLocations = locations.slice(0, 8);
  const currentYear = getCurrentYear();

  return (
    <footer className="bg-gray-900 text-gray-300">

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">
                Prescott Christmas Light Installation
              </h3>
              <p className="text-gray-400 mb-4">
                Professional holiday lighting services throughout Prescott, Prescott Valley, and Yavapai County.
              </p>
              <div className="space-y-2">
                <p className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Professional Service
                </p>
                <p className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  Free Estimates
                </p>
                <p className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  100% Satisfaction
                </p>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Our Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/services/residential-christmas-light-installation" className="hover:text-white transition-colors">
                    Residential Installation
                  </Link>
                </li>
                <li>
                  <Link href="/services/commercial-christmas-light-installation" className="hover:text-white transition-colors">
                    Commercial Installation
                  </Link>
                </li>
                <li>
                  <Link href="/services/christmas-light-design-consultation" className="hover:text-white transition-colors">
                    Custom Design
                  </Link>
                </li>
                <li>
                  <Link href="/services/christmas-light-removal" className="hover:text-white transition-colors">
                    Removal Service
                  </Link>
                </li>
                <li>
                  <Link href="/services/tree-wrapping-christmas-lights" className="hover:text-white transition-colors">
                    Tree Lighting
                  </Link>
                </li>
                <li>
                  <Link href="/services/permanent-christmas-lighting" className="hover:text-white transition-colors">
                    Permanent Lighting
                  </Link>
                </li>
              </ul>
            </div>

            {/* Service Areas */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Service Areas</h3>
              <ul className="space-y-2">
                {popularLocations.map((location) => (
                  <li key={location.slug}>
                    <Link
                      href={`/locations/${location.slug}`}
                      className="hover:text-white transition-colors"
                    >
                      {location.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/locations" className="text-green-400 hover:text-green-300 transition-colors">
                    View All Areas →
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-500 text-sm mb-1">Phone</p>
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="text-white font-semibold hover:text-green-400 transition-colors"
                  >
                    {formatPhone(SITE_CONFIG.phone)}
                  </a>
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1">Service Area</p>
                  <p className="text-white">Yavapai County, AZ</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm mb-1">Business Hours</p>
                  <p className="text-white">Mon-Fri: 8AM-6PM</p>
                  <p className="text-white">Sat: 9AM-5PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-500 mb-4 md:mb-0">
              © {currentYear} {SITE_CONFIG.name}. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap.xml" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}