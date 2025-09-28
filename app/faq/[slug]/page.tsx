import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { faqs, getFAQBySlug, getRelatedFAQs } from '@/data/faq';
import { SITE_CONFIG } from '@/lib/constants';
import { formatPhone } from '@/lib/utils';
import FAQItem from '@/components/ui/FAQItem';

export async function generateStaticParams() {
  return faqs.map((faq) => ({
    slug: faq.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const faq = getFAQBySlug(params.slug);

  if (!faq) {
    return {
      title: 'FAQ Not Found',
    };
  }

  return {
    title: `${faq.question} | Prescott Christmas Light Installation FAQ`,
    description: faq.metaDescription || `${faq.answer.substring(0, 155)}...`,
    openGraph: {
      title: faq.question,
      description: faq.metaDescription || faq.answer.substring(0, 155),
      type: 'article',
    },
  };
}

export default function FAQPage({ params }: { params: { slug: string } }) {
  const faq = getFAQBySlug(params.slug);

  if (!faq) {
    notFound();
  }

  const relatedFAQs = getRelatedFAQs(faq.id);
  const otherFAQs = faqs
    .filter(f => f.id !== faq.id && f.category === faq.category)
    .slice(0, 3);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: {
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: SITE_CONFIG.url,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'FAQ',
        item: `${SITE_CONFIG.url}/faq`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: faq.question,
        item: `${SITE_CONFIG.url}/faq/${faq.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 to-green-900 text-white py-16 mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-6 text-green-200">
              <ol className="flex items-center space-x-2 text-sm">
                <li>
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li>
                  <Link href="/faq" className="hover:text-white">
                    FAQ
                  </Link>
                </li>
                <li>/</li>
                <li className="text-white">{faq.category}</li>
              </ol>
            </nav>

            <h1 className="text-3xl md:text-4xl font-bold mb-6">{faq.question}</h1>
            <div className="flex items-center space-x-4 text-green-100">
              <span className="bg-green-700 px-3 py-1 rounded-full text-sm">
                {faq.category.charAt(0).toUpperCase() + faq.category.slice(1)}
              </span>
              <span>•</span>
              <span>Expert Answer</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Answer Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="bg-gray-50 p-8 rounded-lg mb-8">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Quick Answer</h2>
                <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                  {faq.answer}
                </p>
              </div>

              {/* Extended Content Based on Category */}
              {faq.category === 'pricing' && (
                <>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">Factors Affecting Price</h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>Size and height of your property</li>
                    <li>Complexity of the roofline and architecture</li>
                    <li>Type of lights selected (LED vs. incandescent)</li>
                    <li>Number of trees and landscaping features</li>
                    <li>Custom design elements and special effects</li>
                    <li>Accessibility and safety considerations</li>
                  </ul>

                  <div className="bg-green-50 p-6 rounded-lg my-8">
                    <h3 className="text-xl font-semibold mb-3 text-green-800">
                      Get Your Custom Quote
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Every property is unique. Get a free, no-obligation quote tailored to your home and vision.
                    </p>
                    <Link
                      href="/quote"
                      className="bg-green-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-800 transition-colors inline-block"
                    >
                      Request Free Quote →
                    </Link>
                  </div>
                </>
              )}

              {faq.category === 'service' && (
                <>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">Our Service Process</h2>
                  <ol className="list-decimal pl-6 space-y-3 text-gray-700">
                    <li>
                      <strong>Initial Consultation:</strong> We visit your property to understand your vision
                      and assess the installation requirements.
                    </li>
                    <li>
                      <strong>Custom Design:</strong> Our team creates a personalized lighting plan that
                      complements your property's architecture.
                    </li>
                    <li>
                      <strong>Professional Installation:</strong> Experienced installers safely and
                      efficiently bring your design to life.
                    </li>
                    <li>
                      <strong>Maintenance & Support:</strong> We provide ongoing support throughout
                      the holiday season.
                    </li>
                    <li>
                      <strong>Removal & Storage:</strong> After the holidays, we carefully remove
                      and store your lights until next year.
                    </li>
                  </ol>
                </>
              )}

              {faq.category === 'technical' && (
                <>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900">Technical Specifications</h2>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 text-blue-800">
                      Professional-Grade Equipment
                    </h3>
                    <p className="text-gray-700 mb-4">
                      We use only commercial-grade materials designed for outdoor use:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>UL-listed LED bulbs rated for outdoor use</li>
                      <li>Weather-resistant wiring and connections</li>
                      <li>Professional mounting hardware and clips</li>
                      <li>GFCI-protected power connections</li>
                      <li>Timer and control systems for automation</li>
                    </ul>
                  </div>
                </>
              )}
            </div>

            {/* Call to Action Box */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-bold mb-4">Have More Questions?</h3>
              <p className="text-lg mb-6">
                Our friendly team is here to help! Call us for immediate answers or to schedule your free consultation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block text-center"
                >
                  📞 {formatPhone(SITE_CONFIG.phone)}
                </a>
                <Link
                  href="/quote"
                  className="bg-red-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-900 transition-colors inline-block text-center"
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Questions */}
      {(relatedFAQs.length > 0 || otherFAQs.length > 0) && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Related Questions
              </h2>
              <div className="space-y-4">
                {relatedFAQs.length > 0 && relatedFAQs.map((relatedFAQ) => (
                  <FAQItem key={relatedFAQ.id} faq={relatedFAQ} />
                ))}
                {relatedFAQs.length === 0 && otherFAQs.map((otherFAQ) => (
                  <FAQItem key={otherFAQ.id} faq={otherFAQ} />
                ))}
              </div>
              <div className="text-center mt-8">
                <Link
                  href="/faq"
                  className="text-green-700 hover:text-green-800 font-semibold inline-flex items-center"
                >
                  View All FAQs →
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="py-16 bg-green-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-green-100">
            Don't let another holiday season pass without professional lighting.
            Book now for the best availability!
          </p>
          <Link
            href="/quote"
            className="bg-white text-green-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all inline-block"
          >
            Get Your Free Quote Today →
          </Link>
        </div>
      </section>
    </>
  );
}