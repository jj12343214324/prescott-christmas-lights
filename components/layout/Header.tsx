'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG } from '@/lib/constants';
import { formatPhone } from '@/lib/utils';
import { Phone } from 'lucide-react';
import MobileMenu from '../layout/MobileMenu';
import { useState, useEffect } from 'react';

export default function Header() {
  const phoneNumber = formatPhone(SITE_CONFIG.phone);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white relative" style={{overflow: 'visible !important'}}>
      {/* Top bar */}
      <div className="bg-gradient-to-r from-red-700 via-red-600 to-red-800 text-white py-2">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm gap-1 sm:gap-0">
          <span className="font-medium">Book Now & Save 20%!</span>
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="flex items-center gap-1 sm:gap-2 font-bold hover:text-green-200 transition-colors"
          >
            <Phone size={14} className="sm:w-4 sm:h-4" />
            {phoneNumber}
          </a>
        </div>
      </div>

      {/* Main navigation - Updated */}
      <nav className="container mx-auto px-4 relative overflow-visible">
        <div className={`flex justify-between items-center transition-all duration-300 h-[130px] sm:h-[130px] ${isScrolled ? 'max-sm:!h-[80px]' : ''}`}>
          {/* Logo - positioned absolutely */}
          <Link href="/" className="absolute left-4 top-0 z-30">
            <div className="bg-white rounded-full p-1.5 sm:p-2">
              <Image
                src="/images/logo.png"
                alt="Prescott Christmas Light Installation"
                width={140}
                height={140}
                className={`rounded-full w-[140px] h-[140px] sm:w-[140px] sm:h-[140px] transition-all duration-300 ${
                  isScrolled ? 'max-sm:!w-[100px] max-sm:!h-[100px]' : ''
                }`}
                priority
              />
            </div>
          </Link>

          {/* Spacer for logo */}
          <div className="w-[156px]"></div>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center gap-6 relative z-20">
            <Link
              href="/services"
              className="text-gray-700 hover:text-green-700 font-medium transition-colors relative z-20 pointer-events-auto"
            >
              Residential
            </Link>
            <Link
              href="/commercial"
              className="text-gray-700 hover:text-green-700 font-medium transition-colors relative z-20 pointer-events-auto"
            >
              Commercial
            </Link>
            <Link
              href="/locations"
              className="text-gray-700 hover:text-green-700 font-medium transition-colors relative z-20 pointer-events-auto"
            >
              Service Areas
            </Link>
            <Link
              href="/faq"
              className="text-gray-700 hover:text-green-700 font-medium transition-colors relative z-20 pointer-events-auto"
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
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-full font-bold transition-all transform hover:scale-105 relative z-20 pointer-events-auto"
            >
              Get Free Quote
            </Link>
          </div>

          {/* Mobile phone and menu */}
          <div className="flex items-center gap-4 lg:hidden">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="p-2 text-green-700 hover:text-green-800 transition-colors"
              aria-label="Call us"
            >
              <Phone size={24} />
            </a>
            <MobileMenu />
          </div>
        </div>
      </nav>
    </header>
  );
}