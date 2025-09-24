import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants';
import { formatPhone } from '@/lib/utils';
import { Phone, CheckCircle, Star } from 'lucide-react';

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden min-h-[80vh] flex items-center"
      style={{
        background: 'linear-gradient(135deg, #0d6936 0%, #0a5429 100%)'
      }}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white py-20 md:py-32">

          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Star className="text-yellow-400 fill-yellow-400" size={20} />
            <span className="text-sm font-medium">Prescott's #1 Christmas Light Installation Service</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Professional Christmas Light Installation in{' '}
            <span className="text-[#ffd700]">Prescott</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Transform your home into a winter wonderland. We handle everything from design to takedown.
            <span className="block mt-2 text-lg">Call now - We're open!</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-8 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all"
            >
              Get Free Quote Now
            </Link>

            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center justify-center gap-2 bg-white text-green-700 border-2 border-white hover:bg-white/90 font-bold text-lg px-8 py-4 rounded-full shadow-2xl"
            >
              <Phone size={20} />
              {formatPhone(SITE_CONFIG.phone)}
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <CheckCircle className="text-white mx-auto mb-2" size={24} />
              <div className="text-white font-semibold">Free Estimates</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <CheckCircle className="text-white mx-auto mb-2" size={24} />
              <div className="text-white font-semibold">Professional Service</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <CheckCircle className="text-white mx-auto mb-2" size={24} />
              <div className="text-white font-semibold">Quality Installation</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}