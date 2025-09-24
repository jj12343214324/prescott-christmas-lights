import { Metadata } from 'next';
import { SITE_CONFIG } from '@/lib/constants';
import { formatPhone } from '@/lib/utils';
import QuoteForm from '@/components/forms/QuoteForm';
import { Phone, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Get Free Quote | Christmas Light Installation Prescott',
  description: 'Get a free, no-obligation quote for professional Christmas light installation in Prescott and Yavapai County. Custom designs, competitive pricing.',
  keywords: 'free quote, Christmas light installation quote, estimate, pricing, Prescott',
};

export default function QuotePage() {
  return (
    <>
      {/* Simple Quote Form - No scrolling, immediate form */}
      <section className="min-h-screen pt-24 pb-12 bg-gradient-to-br from-[#0d6936] to-[#0a5429]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            {/* Call Now Banner */}
            <div className="bg-[#dc2027] text-white rounded-lg p-4 mb-6 text-center shadow-xl">
              <p className="font-bold text-lg mb-2">We're Open! Call Now for Instant Quote</p>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="text-2xl font-bold flex items-center justify-center gap-2 hover:underline"
              >
                <Phone size={24} />
                {formatPhone(SITE_CONFIG.phone)}
              </a>
            </div>

            {/* Simple heading */}
            <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
              Get Your Free Quote in 30 Seconds
            </h1>

            {/* The form */}
            <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8">
              <QuoteForm />
            </div>

            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center text-white">
                <CheckCircle className="mx-auto mb-2" size={24} />
                <p className="text-sm">No Obligation</p>
              </div>
              <div className="text-center text-white">
                <CheckCircle className="mx-auto mb-2" size={24} />
                <p className="text-sm">Free Estimates</p>
              </div>
              <div className="text-center text-white">
                <CheckCircle className="mx-auto mb-2" size={24} />
                <p className="text-sm">Same Day Response</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}