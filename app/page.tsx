import { Metadata } from 'next';
import AnimatedHero from '@/components/sections/AnimatedHero';
import ReviewsCarousel from '@/components/sections/ReviewsCarousel';
import ServicesShowcase from '@/components/sections/ServicesShowcase';
import FloatingCTA from '@/components/ui/FloatingCTA';
import QuoteForm from '@/components/forms/QuoteForm';
import { locations } from '@/data/locations';
import { faqs } from '@/data/faq';
import { SITE_CONFIG } from '@/lib/constants';
import { formatPhone } from '@/lib/utils';
import { MapPin, Phone, Clock, Star, Shield, Award, Sparkles, ChevronRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Professional Christmas Light Installation | Prescott & Prescott Valley',
  description: 'Transform your home with professional Christmas light installation in Prescott, Prescott Valley, and Yavapai County. Free estimates, custom designs, full service. Call 928-235-2024!',
  keywords: 'Christmas light installation, Prescott, Prescott Valley, Yavapai County, holiday lighting, professional installation, LED lights',
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <AnimatedHero />

      {/* Trust Badges Section */}
      <section className="py-12" style={{ backgroundColor: '#1a1a1a' }}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Star, text: '5-Star Reviews', subtext: '100+ Happy Families' },
              { icon: Award, text: 'Local Experts', subtext: 'Prescott Natives' },
              { icon: Clock, text: 'Fast Service', subtext: '48-Hour Install' },
              { icon: Shield, text: '100% Satisfaction', subtext: 'Guaranteed' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <item.icon className="w-12 h-12 mx-auto text-green-400 mb-2" />
                <h3 className="font-bold text-white">{item.text}</h3>
                <p className="text-sm text-gray-300">{item.subtext}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewsCarousel />

      {/* Services Section */}
      <ServicesShowcase />

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              How It <span className="text-green-600">Works</span>
            </h2>
            <p className="text-xl text-gray-600">Simple 3-step process to holiday perfection</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: '1',
                title: 'Free Quote',
                description: 'Get a custom quote within 24 hours. No hidden fees, no surprises.',
                icon: '📋'
              },
              {
                step: '2',
                title: 'Professional Install',
                description: 'Our expert team installs your lights quickly and safely.',
                icon: '🎄'
              },
              {
                step: '3',
                title: 'Enjoy & Relax',
                description: 'Sit back and enjoy the compliments. We handle maintenance too!',
                icon: '✨'
              }
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white border-2 border-gray-200 rounded-2xl shadow-xl p-8 text-center hover:shadow-2xl transition-shadow">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                {index < 2 && (
                  <ChevronRight className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-gray-400 w-8 h-8" />
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-lg px-8 py-4 rounded-full shadow-xl transition-all transform hover:scale-105"
            >
              Start Your Holiday Transformation
              <Sparkles className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Serving All of <span className="text-red-600">Yavapai County</span>
            </h2>
            <p className="text-xl text-gray-600">Professional installation in your neighborhood</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
            {locations.slice(0, 8).map((location) => (
              <Link
                key={location.slug}
                href={`/locations/${location.slug}`}
                className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-green-50 transition-colors group"
              >
                <MapPin className="w-4 h-4 text-green-600 group-hover:scale-110 transition-transform" />
                <span className="font-medium text-gray-700 group-hover:text-green-700">{location.name}</span>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/locations"
              className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-bold"
            >
              View All Service Areas
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Urgency Banner */}
      <section className="py-12 bg-gradient-to-r from-red-700 via-red-600 to-red-800">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Clock className="w-8 h-8 text-yellow-300 animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Limited Spots Available!
            </h2>
            <Clock className="w-8 h-8 text-yellow-300 animate-pulse" />
          </div>

          <p className="text-xl text-white/90 mb-8">
            December is filling up fast - Only 12 installation spots left!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-black font-bold text-lg px-8 py-4 rounded-full hover:bg-yellow-300 transition-colors shadow-xl"
            >
              <Sparkles className="w-5 h-5" />
              Reserve Your Spot Now
            </Link>

            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
            >
              <Phone className="w-5 h-5" />
              {formatPhone(SITE_CONFIG.phone)}
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Common <span className="text-green-600">Questions</span>
            </h2>
            <p className="text-xl text-gray-600">Everything you need to know</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.slice(0, 5).map((faq) => (
              <div key={faq.id} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-bold"
            >
              View All FAQs
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA / Quote Form */}
      <section className="py-20" style={{ backgroundColor: '#0f172a' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Get Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300">Free Quote</span> in 60 Seconds
              </h2>
              <p className="text-xl text-gray-300">No obligation, no pressure, just holiday magic!</p>
            </div>

            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      {/* Floating CTA */}
      <FloatingCTA />
    </>
  );
}