import { Metadata } from 'next';
import AnimatedHero from '@/components/sections/AnimatedHero';
import PhotoShowcase from '@/components/sections/PhotoShowcase';
import ReviewsCarousel from '@/components/sections/ReviewsCarousel';
import ServicesShowcase from '@/components/sections/ServicesShowcase';
import FloatingCTA from '@/components/ui/FloatingCTA';
import QuoteForm from '@/components/forms/QuoteForm';
import { locations } from '@/data/locations';
import { faqs } from '@/data/faq';
import { SITE_CONFIG } from '@/lib/constants';
import { formatPhone } from '@/lib/utils';
import { MapPin, Phone, Clock, Star, Shield, Award, Sparkles, ChevronRight, CheckCircle, ArrowRight } from 'lucide-react';
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

      {/* Photo Showcase Section */}
      <PhotoShowcase />

      {/* Trust Badges Section */}
      <section className="py-4 sm:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Star, text: '5-Star Reviews', subtext: '100+ Happy Families', color: 'text-yellow-500' },
              { icon: Award, text: 'Local Experts', subtext: 'Prescott Natives', color: 'text-red-600' },
              { icon: Clock, text: 'Fast Service', subtext: '48-Hour Install', color: 'text-green-600' },
              { icon: Shield, text: 'Professional Service', subtext: 'Quality Work', color: 'text-green-600' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-xl p-4 hover:shadow-md transition-shadow">
                  <item.icon className={`w-10 h-10 mx-auto ${item.color} mb-2`} />
                  <h3 className="font-bold text-gray-900 text-sm">{item.text}</h3>
                  <p className="text-xs text-gray-600">{item.subtext}</p>
                </div>
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
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
              <Sparkles className="w-5 h-5" />
              <span className="font-semibold">Simple Process</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              From Quote to Holiday Magic in 3 Steps
            </h2>
            <p className="text-lg text-gray-600">No hassle, no stress, just beautiful lights</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Get Your Free Quote',
                description: 'Quick online form or call us. We\'ll provide a detailed quote within 24 hours.',
                detail: 'No surprises',
                Icon: Phone,
                color: 'from-red-500 to-red-600'
              },
              {
                title: 'We Install Everything',
                description: 'Our professional team handles the entire installation. Usually within 48 hours!',
                detail: 'Professional team',
                Icon: Sparkles,
                color: 'from-green-500 to-green-600'
              },
              {
                title: 'Enjoy The Season',
                description: 'Sit back and enjoy the compliments. We\'ll even come back to take them down!',
                detail: 'Maintenance included',
                Icon: Star,
                color: 'from-red-500 to-red-600'
              }
            ].map((item, index) => (
              <div key={index} className="relative group">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8">

                  {/* Icon */}
                  <div className="flex justify-center mb-4">
                    <div
                      className="p-4 rounded-xl"
                      style={{
                        background: item.color === 'from-red-500 to-red-600'
                          ? 'linear-gradient(to bottom right, rgb(239, 68, 68), rgb(220, 38, 38))'
                          : 'linear-gradient(to bottom right, rgb(34, 197, 94), rgb(22, 163, 74))'
                      }}
                    >
                      <item.Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-3">{item.description}</p>

                  {/* Detail badge */}
                  <div className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                    <CheckCircle className="w-4 h-4" />
                    {item.detail}
                  </div>
                </div>

                {/* Arrow between steps */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-gray-300 z-10">
                    <ChevronRight className="w-8 h-8" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Ready to make your home the brightest on the block?</p>
            <Link
              href="/quote"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-4 rounded-full shadow-xl transition-all transform hover:scale-105"
            >
              Get Started Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Serving All of Yavapai County
            </h2>
            <p className="text-lg text-gray-600">Professional installation in your neighborhood</p>
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
              className="inline-flex items-center gap-2 text-green-700 hover:text-green-800 font-bold"
            >
              View All Service Areas
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Urgency Banner */}
      <section className="py-12 bg-red-700">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <Clock className="w-8 h-8 text-white animate-pulse" />
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Limited Spots Available!
            </h2>
            <Clock className="w-8 h-8 text-white animate-pulse" />
          </div>

          <p className="text-lg text-white/90 mb-8">
            December is filling up fast - Book your installation today!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 bg-white text-red-700 font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Sparkles className="w-5 h-5" />
              Reserve Your Spot Now
            </Link>

            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center justify-center gap-2 bg-green-700 text-white font-bold px-8 py-4 rounded-lg hover:bg-green-800 transition-colors"
            >
              <Phone className="w-5 h-5" />
              {formatPhone(SITE_CONFIG.phone)}
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Questions
            </h2>
            <p className="text-lg text-gray-600">Everything you need to know</p>
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
              className="inline-flex items-center gap-2 text-green-700 hover:text-green-800 font-bold"
            >
              View All FAQs
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA / Quote Form */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Get Your Free Quote in 60 Seconds
              </h2>
              <p className="text-lg text-gray-300">No obligation, no pressure, just holiday magic!</p>
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