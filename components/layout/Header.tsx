import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG } from '@/lib/constants';
import { formatPhone } from '@/lib/utils';
import { Phone } from 'lucide-react';
import MobileMenu from '../layout/MobileMenu';

export default function Header() {
  const phoneNumber = formatPhone(SITE_CONFIG.phone);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top bar */}
      <div className="bg-gradient-to-r from-red-700 via-red-600 to-red-800 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <span className="font-medium">🎄 Holiday Special: Book Now & Save 20%!</span>
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="flex items-center gap-2 font-bold hover:text-green-200 transition-colors"
          >
            <Phone size={16} />
            {phoneNumber}
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center h-32">
          {/* Logo */}
          <Link href="/" className="flex items-center py-2">
            <Image
              src="/images/logo.png"
              alt="Prescott Christmas Light Installation"
              width={120}
              height={120}
              className="object-contain rounded-full"
              priority
            />
          </Link>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center gap-6">
            <Link
              href="/services"
              className="text-gray-700 hover:text-green-700 font-medium transition-colors"
            >
              Services
            </Link>
            <Link
              href="/locations"
              className="text-gray-700 hover:text-green-700 font-medium transition-colors"
            >
              Service Areas
            </Link>
            <Link
              href="/faq"
              className="text-gray-700 hover:text-green-700 font-medium transition-colors"
            >
              FAQ
            </Link>

            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="flex items-center gap-2 text-green-700 font-bold hover:text-green-800 transition-colors"
            >
              <Phone size={20} />
              <span className="hidden xl:inline">{phoneNumber}</span>
            </a>

            <Link
              href="/quote"
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get Free Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}