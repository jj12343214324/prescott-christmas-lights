import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { services, getServiceBySlug } from '@/data/services';
import { locations } from '@/data/locations';
import { SITE_CONFIG } from '@/lib/constants';
import { formatPhone, generateStructuredData } from '@/lib/utils';
import QuoteForm from '@/components/forms/QuoteForm';

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.name} | Prescott Christmas Light Installation`,
    description: `${service.description.substring(0, 155)}... Call ${SITE_CONFIG.phone} for free estimate!`,
    keywords: `${service.name}, Christmas lights, holiday lighting, Prescott, Prescott Valley, professional installation`,
    openGraph: {
      title: service.name,
      description: service.description,
      images: ['/og-image.jpg'],
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);

  if (!service) {
    notFound();
  }

  const structuredData = generateStructuredData(service, `/services/${service.slug}`);

  const relatedServices = services.filter(s => s.id !== service.id).slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredData }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 to-green-900 text-white py-20 mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {service.popular && (
              <span className="inline-block bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                MOST POPULAR SERVICE
              </span>
            )}
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.name}</h1>
            <p className="text-xl text-green-100 mb-8">{service.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#quote"
                className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all inline-block"
              >
                Get Free Quote
              </a>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="bg-white text-green-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all inline-block"
              >
                Call {formatPhone(SITE_CONFIG.phone)}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      {service.image && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">What's Included</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <svg className="w-6 h-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose This Service</h2>
            <div className="space-y-4">
              {service.benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center">
                    <div className="bg-green-100 rounded-full p-2 mr-4">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="text-lg text-gray-700">{benefit}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {service.name} Available Throughout Yavapai County
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We provide this service to all communities in our service area
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {locations.slice(0, 12).map((location) => (
                <Link
                  key={location.slug}
                  href={`/locations/${location.slug}`}
                  className="bg-gray-50 p-3 rounded-lg hover:bg-green-50 transition-colors text-center"
                >
                  <p className="font-medium text-gray-900">{location.name}</p>
                </Link>
              ))}
            </div>
            <Link
              href="/locations"
              className="inline-block mt-6 text-green-700 hover:text-green-800 font-semibold"
            >
              View All Service Areas →
            </Link>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Other Services You May Like</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedServices.map((relatedService) => (
                <Link
                  key={relatedService.id}
                  href={`/services/${relatedService.slug}`}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{relatedService.name}</h3>
                  <p className="text-gray-600 text-sm line-clamp-3">{relatedService.description}</p>
                  <span className="text-green-600 font-medium text-sm mt-3 inline-block">Learn More →</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-16 bg-green-800 text-white" id="quote">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Get Your Free {service.name} Quote
              </h2>
              <p className="text-xl text-green-100">
                Fill out the form below or call <a href={`tel:${SITE_CONFIG.phone}`} className="underline hover:text-white">{formatPhone(SITE_CONFIG.phone)}</a>
              </p>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Don't wait! Our schedule fills up fast during the holiday season.
          </p>
          <a
            href={`tel:${SITE_CONFIG.phone}`}
            className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all inline-block"
          >
            📞 Call Now: {formatPhone(SITE_CONFIG.phone)}
          </a>
        </div>
      </section>
    </>
  );
}