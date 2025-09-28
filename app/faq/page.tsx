import { Metadata } from 'next';
import Link from 'next/link';
import { faqs, getFAQsByCategory } from '@/data/faq';
import { SITE_CONFIG } from '@/lib/constants';
import { formatPhone } from '@/lib/utils';
import FAQItem from '@/components/ui/FAQItem';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Christmas Light Installation',
  description: 'Get answers to common questions about Christmas light installation, pricing, services, and more. Professional holiday lighting in Prescott and Yavapai County.',
  keywords: 'Christmas lights FAQ, holiday lighting questions, installation cost, service questions, Prescott',
};

export default function FAQPage() {
  const categories = [
    { id: 'pricing', name: 'Pricing & Cost', icon: '💰' },
    { id: 'service', name: 'Services & Process', icon: '🎄' },
    { id: 'technical', name: 'Technical & Safety', icon: '⚡' },
    { id: 'design', name: 'Design Options', icon: '🎨' },
    { id: 'booking', name: 'Booking & Scheduling', icon: '📅' },
    { id: 'support', name: 'Service Support', icon: '✅' },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 to-green-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-green-100 mb-8">
              Everything you need to know about our Christmas light installation services
              in Prescott and Yavapai County.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all inline-block"
              >
                Get Free Quote
              </Link>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="bg-white text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all inline-block"
              >
                📞 {formatPhone(SITE_CONFIG.phone)}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Browse by Category
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {categories.map((category) => {
                const categoryFAQs = getFAQsByCategory(category.id);
                return (
                  <a
                    key={category.id}
                    href={`#${category.id}`}
                    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all hover:scale-105 text-center group"
                  >
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{category.icon}</div>
                    <h3 className="font-semibold text-gray-900 text-lg">{category.name}</h3>
                    <p className="text-sm text-gray-600 mt-2">
                      {categoryFAQs.length} questions
                    </p>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Main FAQ Content */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {categories.map((category) => {
              const categoryFAQs = getFAQsByCategory(category.id);
              if (categoryFAQs.length === 0) return null;

              return (
                <div key={category.id} id={category.id} className="mb-20 scroll-mt-24">
                  <div className="flex items-center mb-10 pb-4 border-b-2 border-green-100">
                    <span className="text-4xl mr-4 bg-green-100 p-3 rounded-xl">{category.icon}</span>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">
                        {category.name}
                      </h2>
                      <p className="text-gray-600 mt-1">{categoryFAQs.length} common questions</p>
                    </div>
                  </div>
                  <div className="space-y-5">
                    {categoryFAQs.map((faq) => (
                      <FAQItem key={faq.id} faq={faq} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We're here to help! Our team is ready to answer any questions
              and provide you with a free, personalized quote.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl mb-3">📞</div>
                <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                <p className="text-gray-600 mb-3">Quick answers over the phone</p>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="text-green-700 font-semibold hover:text-green-800"
                >
                  {formatPhone(SITE_CONFIG.phone)}
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl mb-3">💬</div>
                <h3 className="font-semibold text-lg mb-2">Get a Quote</h3>
                <p className="text-gray-600 mb-3">Free, no-obligation estimate</p>
                <Link
                  href="/quote"
                  className="text-green-700 font-semibold hover:text-green-800"
                >
                  Request Quote →
                </Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-3xl mb-3">📍</div>
                <h3 className="font-semibold text-lg mb-2">Service Areas</h3>
                <p className="text-gray-600 mb-3">All of Yavapai County</p>
                <Link
                  href="/locations"
                  className="text-green-700 font-semibold hover:text-green-800"
                >
                  View Locations →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Light Up Your Holidays?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't wait! Our schedule fills up fast. Book your professional
            Christmas light installation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all inline-block"
            >
              📞 Call {formatPhone(SITE_CONFIG.phone)}
            </a>
            <Link
              href="/quote"
              className="bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-800 transition-all inline-block"
            >
              Get Free Quote Online
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}