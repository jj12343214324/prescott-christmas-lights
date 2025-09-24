import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { locations, getLocationBySlug } from '@/data/locations';
import { services } from '@/data/services';
import { SITE_CONFIG } from '@/lib/constants';
import { formatPhone, generateLocationSchema } from '@/lib/utils';
import QuoteForm from '@/components/forms/QuoteForm';

export async function generateStaticParams() {
  return locations.map((location) => ({
    slug: location.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const location = getLocationBySlug(params.slug);

  if (!location) {
    return {
      title: 'Location Not Found',
    };
  }

  const title = `Christmas Light Installation ${location.name}, AZ | Professional Holiday Lighting`;
  const description = `Professional Christmas light installation in ${location.name}, ${location.county} County. Free estimates, custom designs, full service including removal. Call ${SITE_CONFIG.phone}!`;

  return {
    title,
    description,
    keywords: `Christmas lights ${location.name}, holiday lighting ${location.name}, Christmas light installation ${location.name} AZ, ${location.zipCode ? `${location.zipCode} Christmas lights` : ''}`,
    openGraph: {
      title,
      description,
      images: ['/og-image.jpg'],
    },
    alternates: {
      canonical: `${SITE_CONFIG.url}/locations/${location.slug}`,
    },
  };
}

export default function LocationPage({ params }: { params: { slug: string } }) {
  const location = getLocationBySlug(params.slug);

  if (!location) {
    notFound();
  }

  const nearbyLocations = locations
    .filter(l => l.slug !== location.slug && l.county === location.county)
    .slice(0, 8);

  const structuredData = generateLocationSchema(location.name, 'Christmas Light Installation');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 to-green-900 text-white py-20 mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Christmas Light Installation in {location.name}, AZ
            </h1>
            <p className="text-xl text-green-100 mb-8">
              {location.description}. Professional holiday lighting services with free estimates.
            </p>
            {location.population && (
              <p className="text-lg text-green-200 mb-8">
                Serving {location.population.toLocaleString()} residents in {location.name}
              </p>
            )}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/quote"
                className="bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-all inline-block"
              >
                Get Free Quote in {location.name}
              </Link>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="bg-white text-green-800 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all inline-block"
              >
                📞 {formatPhone(SITE_CONFIG.phone)}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Local Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Why {location.name} Residents Choose Us
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl mb-3 text-green-700">Local Knowledge</h3>
                <p className="text-gray-700">
                  We know {location.name} neighborhoods, architectural styles, and HOA requirements.
                  Our designs complement your home and community perfectly.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl mb-3 text-green-700">Fast Response</h3>
                <p className="text-gray-700">
                  Based locally in {location.county} County, we provide quick service to {location.name}
                  with same-week installations available during the season.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl mb-3 text-green-700">Weather Ready</h3>
                <p className="text-gray-700">
                  Our installations are designed for {location.name}'s specific weather conditions,
                  ensuring your lights stay beautiful all season long.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-xl mb-3 text-green-700">Community Trust</h3>
                <p className="text-gray-700">
                  Trusted by hundreds of families in {location.name} and surrounding areas.
                  Check our reviews from your neighbors!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services in Location */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Christmas Light Services Available in {location.name}
            </h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Complete holiday lighting solutions for {location.name} homes and businesses
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {services.slice(0, 6).map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{service.description}</p>
                  <div className="flex items-center justify-between">
                    {service.price && (
                      <span className="text-green-700 font-semibold">{service.price}</span>
                    )}
                    <span className="text-green-600 font-medium">Learn More →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      {location.neighborhoods && location.neighborhoods.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Serving All {location.name} Neighborhoods
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {location.neighborhoods.map((neighborhood) => (
                  <div
                    key={neighborhood}
                    className="bg-gray-50 p-4 rounded-lg text-center"
                  >
                    <p className="font-medium text-gray-800">{neighborhood}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Local Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Professional Christmas Light Installation for {location.name} Homes
            </h2>
            <p className="text-gray-700 mb-6">
              When it comes to Christmas light installation in {location.name}, we're the trusted local experts.
              Our team has been serving {location.county} County for over 10 years, bringing holiday magic to
              thousands of homes just like yours.
            </p>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Custom Designs for {location.name} Properties
            </h3>
            <p className="text-gray-700 mb-6">
              Every home in {location.name} is unique, and your Christmas light display should be too.
              We create custom lighting designs that enhance your property's best features while staying
              within your budget. Whether you prefer classic white lights or colorful displays,
              we'll bring your vision to life.
            </p>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Safe & Efficient Installation Process
            </h3>
            <p className="text-gray-700 mb-6">
              Our professional installers are trained in the latest safety protocols.
              We use commercial-grade LED lights and secure mounting systems designed to withstand
              {location.name}'s weather conditions. Most installations are completed in just a few hours,
              minimizing disruption to your daily routine.
            </p>
            {location.zipCode && (
              <>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  Serving ZIP Code {location.zipCode}
                </h3>
                <p className="text-gray-700 mb-6">
                  Residents in the {location.zipCode} area trust us for reliable, professional Christmas
                  light installation. We offer free estimates, flexible scheduling, and competitive pricing
                  tailored to {location.name} homeowners.
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Nearby Locations */}
      {nearbyLocations.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Also Serving Nearby Communities
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {nearbyLocations.map((nearby) => (
                  <Link
                    key={nearby.slug}
                    href={`/locations/${nearby.slug}`}
                    className="bg-gray-50 p-4 rounded-lg text-center hover:bg-green-50 transition-colors"
                  >
                    <p className="font-medium text-gray-800">{nearby.name}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Quote Form Section */}
      <section className="py-16 bg-green-800 text-white" id="quote">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">
                Get Your Free {location.name} Quote Today
              </h2>
              <p className="text-xl text-green-100">
                Professional Christmas light installation starting at $599.
                Fill out the form or call {formatPhone(SITE_CONFIG.phone)}!
              </p>
            </div>
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* Local CTA */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Be the Best Decorated Home in {location.name}?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers in {location.name}.
            Book early for the best availability and pricing!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all inline-block"
            >
              📞 Call Now: {formatPhone(SITE_CONFIG.phone)}
            </a>
            <Link
              href="/quote"
              className="bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-800 transition-all inline-block"
            >
              Get Online Quote →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}