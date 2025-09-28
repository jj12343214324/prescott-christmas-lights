'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FAQ } from '@/data/faq';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItemProps {
  faq: FAQ;
  defaultOpen?: boolean;
}

export default function FAQItem({ faq, defaultOpen = false }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 text-left hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-inset rounded-xl"
        aria-expanded={isOpen}
      >
        <div className="flex justify-between items-start">
          <div className="flex gap-3 flex-1">
            <HelpCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <h3 className="text-lg font-semibold text-gray-900 pr-4 leading-relaxed">
              {faq.question}
            </h3>
          </div>
          <ChevronDown
            className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 mt-1 ${
              isOpen ? 'transform rotate-180' : ''
            }`}
          />
        </div>
      </button>

      {isOpen && (
        <div className="px-6 pb-5 pt-2 animate-fadeIn">
          <div className="pl-8">
            <p className="text-gray-700 leading-relaxed whitespace-pre-line text-base">
              {faq.answer}
            </p>

            {faq.slug && (
              <Link
                href={`/faq/${faq.slug}`}
                className="inline-flex items-center gap-1 mt-4 text-green-700 hover:text-green-800 font-medium text-sm group"
              >
                Read full answer
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}