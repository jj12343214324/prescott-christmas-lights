'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FAQ } from '@/data/faq';

interface FAQItemProps {
  faq: FAQ;
  defaultOpen?: boolean;
}

export default function FAQItem({ faq, defaultOpen = false }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-inset"
        aria-expanded={isOpen}
      >
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-900 pr-4">
            {faq.question}
          </h3>
          <svg
            className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
              isOpen ? 'transform rotate-180' : ''
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {isOpen && (
        <div className="px-6 py-4 bg-gray-50">
          <p className="text-gray-700 whitespace-pre-line">{faq.answer}</p>

          {faq.slug && (
            <Link
              href={`/faq/${faq.slug}`}
              className="inline-flex items-center mt-4 text-green-700 hover:text-green-800 font-medium text-sm"
            >
              Read full answer →
            </Link>
          )}
        </div>
      )}
    </div>
  );
}