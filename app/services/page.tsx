import { Metadata } from 'next';
import Link from 'next/link';
import { services } from '@/data/services';
import { SITE_CONFIG } from '@/lib/constants';
import { formatPhone } from '@/lib/utils';
import ServiceCard from '@/components/ui/ServiceCard';

export const metadata: Metadata = {
  title: 'Christmas Light Installation Services | Prescott & Prescott Valley',
  description: 'Professional Christmas light installation services in Prescott and Yavapai County. Residential, commercial, design, installation, and removal. Free estimates!',
  keywords: 'Christmas light services, holiday lighting, installation, removal, design, Prescott, Prescott Valley',
};

export default function ServicesPage() {
  const residentialServices = services.filter(s =>
    ['residential', 'tree-lighting', 'installation-only'].includes(s.id)
  );
  const commercialServices = services.filter(s =>
    ['commercial', 'permanent-lighting'].includes(s.id)
  );
  const supportServices = services.filter(s =>
    ['design-consultation', 'maintenance'].includes(s.id)
  );

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-800 to-green-900 text-white py-20 mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Professional Christmas Light Services
            </h1>
            <p className="text-xl text-green-100 mb-8">
              From design to takedown, we handle every aspect of your holiday lighting needs.
              Serving Prescott, Prescott Valley, and all of Yavapai County.
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

      {/* All-In-One Solution */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Your Complete Holiday Lighting Solution
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-3xl mb-2">🎨</div>
                <p className="font-semibold">Custom Design</p>
              </div>
              <div>
                <div className="text-3xl mb-2">🎄</div>
                <p className="font-semibold">Professional Install</p>
              </div>
              <div>
                <div className="text-3xl mb-2">🔧</div>
                <p className="font-semibold">Season Maintenance</p>
              </div>
              <div>
                <div className="text-3xl mb-2">📦</div>
                <p className="font-semibold">Removal Service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Residential Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Residential Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transform your home into a holiday masterpiece with our professional residential services
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {residentialServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Commercial Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Attract customers and create memorable experiences with professional commercial lighting
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {commercialServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Support Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Support Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete support from initial design through post-season removal
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {supportServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-green-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Why Choose Prescott Christmas Light Installation?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <div className="bg-white/20 rounded-full p-3 mr-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Professional Service</h3>
                  <p className="text-green-100">Experienced technicians committed to quality workmanship</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-white/20 rounded-full p-3 mr-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">10+ Years Experience</h3>
                  <p className="text-green-100">Trusted by hundreds of families throughout Yavapai County</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-white/20 rounded-full p-3 mr-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Quality Materials</h3>
                  <p className="text-green-100">Professional-grade LED lights for lasting performance</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-white/20 rounded-full p-3 mr-4">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-xl mb-2">Free Estimates</h3>
                  <p className="text-green-100">No-obligation quotes with transparent, upfront pricing</p>
                </div>
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
            Choose your service and get started with a free estimate today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-all inline-block"
            >
              Get Free Quote
            </Link>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="bg-green-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-800 transition-all inline-block"
            >
              📞 {formatPhone(SITE_CONFIG.phone)}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}