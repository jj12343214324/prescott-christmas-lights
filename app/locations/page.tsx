import { Metadata } from 'next';
import Link from 'next/link';
import { locations } from '@/data/locations';
import { SITE_CONFIG } from '@/lib/constants';
import { formatPhone } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Service Areas | Christmas Light Installation in Yavapai County',
  description: 'Professional Christmas light installation throughout Yavapai County including Prescott, Prescott Valley, Sedona, Cottonwood, and 35+ communities. Free estimates!',
  keywords: 'Christmas lights Yavapai County, Prescott, Prescott Valley, Sedona, Cottonwood, Chino Valley, service areas',
};

export default function LocationsPage() {
  const majorCities = locations.filter(l => l.population && l.population > 10000);
  const towns = locations.filter(l => l.population && l.population <= 10000 && l.population > 1000);
  const neighborhoods = locations.filter(l => !l.population || l.population <= 1000);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 to-green-900 text-white py-20 mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Christmas Light Installation Service Areas
            </h1>
            <p className="text-xl text-green-100 mb-8">
              Proudly serving all of Yavapai County with professional holiday lighting services.
              From Prescott to Sedona, we bring Christmas magic to your neighborhood!
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

      {/* Coverage Map Info */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Full Coverage Across Yavapai County
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-green-700">40+</div>
                <p className="text-gray-600">Communities Served</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-700">8,000+</div>
                <p className="text-gray-600">Square Miles Coverage</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-700">Same Day</div>
                <p className="text-gray-600">Quote Response</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Major Cities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Major Cities We Serve
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {majorCities.map((location) => (
                <Link
                  key={location.slug}
                  href={`/locations/${location.slug}`}
                  className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-green-600 hover:shadow-lg transition-all group"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-700">
                    {location.name}
                  </h3>
                  <p className="text-gray-600 mb-3 line-clamp-2">{location.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">
                      Pop. {location.population?.toLocaleString()}
                    </span>
                    {location.zipCode && (
                      <span className="text-gray-500">ZIP: {location.zipCode}</span>
                    )}
                  </div>
                  <span className="text-green-600 font-medium mt-3 inline-block">
                    View Services →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Towns & Communities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Towns & Communities
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {towns.map((location) => (
                <Link
                  key={location.slug}
                  href={`/locations/${location.slug}`}
                  className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center hover:bg-green-50"
                >
                  <h3 className="font-semibold text-gray-900">{location.name}</h3>
                  {location.population && (
                    <p className="text-sm text-gray-500 mt-1">
                      Pop. {location.population.toLocaleString()}
                    </p>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods & Subdivisions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Neighborhoods & Subdivisions
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {neighborhoods.map((location) => (
                <Link
                  key={location.slug}
                  href={`/locations/${location.slug}`}
                  className="bg-gray-50 p-3 rounded-lg hover:bg-green-50 transition-colors"
                >
                  <p className="text-sm font-medium text-gray-800">{location.name}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Promise */}
      <section className="py-16 bg-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Our Service Area Promise
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">No Travel Fees</h3>
                <p className="text-green-100">
                  We never charge extra for travel within Yavapai County.
                  Same great pricing whether you're in downtown Prescott or rural Yarnell.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Local Expertise</h3>
                <p className="text-green-100">
                  Our installers know every neighborhood, HOA requirement,
                  and local weather pattern to ensure perfect installations.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Quick Response</h3>
                <p className="text-green-100">
                  With teams strategically located throughout the county,
                  we provide fast service to all communities.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Year-Round Service</h3>
                <p className="text-green-100">
                  We're here when you need us, offering installation, maintenance,
                  and removal services throughout the season.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Not Listed CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Don't See Your Area Listed?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We serve all of Yavapai County and may service surrounding areas.
              Contact us to confirm coverage for your location!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition-all inline-block"
              >
                📞 Call {formatPhone(SITE_CONFIG.phone)}
              </a>
              <Link
                href="/quote"
                className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all inline-block"
              >
                Request Quote Online
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Professional Christmas Lights for Every Community
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            No matter where you are in Yavapai County, we're ready to transform
            your property into a holiday wonderland!
          </p>
          <Link
            href="/quote"
            className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all inline-block"
          >
            Get Your Free Quote Today →
          </Link>
        </div>
      </section>
    </>
  );
}