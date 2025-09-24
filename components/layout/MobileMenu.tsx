'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { formatPhone } from '@/lib/utils';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const phoneNumber = formatPhone(SITE_CONFIG.phone);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-700 hover:text-green-700 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile menu overlay with smooth animation */}
      {isVisible && (
        <div
          className={`fixed inset-0 top-[168px] z-40 bg-white transition-all duration-300 ease-in-out transform overflow-hidden ${
            isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
          }`}
        >
          <nav className="container mx-auto px-4 py-6">
            <div className="flex flex-col gap-4">
              <Link
                href="/services"
                className="text-lg font-medium text-gray-700 hover:text-green-700 py-2 border-b"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/locations"
                className="text-lg font-medium text-gray-700 hover:text-green-700 py-2 border-b"
                onClick={() => setIsOpen(false)}
              >
                Service Areas
              </Link>
              <Link
                href="/faq"
                className="text-lg font-medium text-gray-700 hover:text-green-700 py-2 border-b"
                onClick={() => setIsOpen(false)}
              >
                FAQ
              </Link>

              <div className="mt-6 space-y-4">
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-center justify-center gap-2 bg-green-700 text-white py-4 rounded-lg font-bold text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone size={20} />
                  Call {phoneNumber}
                </a>

                <Link
                  href="/quote"
                  className="block text-center bg-red-600 text-white py-4 rounded-lg font-bold text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}