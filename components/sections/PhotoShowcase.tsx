'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';

export default function PhotoShowcase() {
  return (
    <section className="relative py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left side - Content */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Transforming Prescott Homes Into
              <span className="text-red-600 block mt-2">Holiday Masterpieces</span>
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              With over 100 homes illuminated throughout Prescott and Prescott Valley,
              we've become the trusted name in professional Christmas light installation.
              Our attention to detail and commitment to perfection shows in every display we create.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Custom Design for Every Home</h3>
                  <p className="text-gray-600">We work with your home's unique architecture to create the perfect display</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Premium LED Lights</h3>
                  <p className="text-gray-600">Energy-efficient, bright, and long-lasting commercial-grade lights</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Complete Service Package</h3>
                  <p className="text-gray-600">Installation, maintenance, and removal - we handle everything</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-lg transition-colors"
              >
                View Our Services
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-bold px-6 py-3 rounded-lg transition-colors"
              >
                Get Free Quote
              </Link>
            </div>
          </div>

          {/* Right side - Photo Grid */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-2 gap-4">
              {/* Large featured image */}
              <div className="col-span-2 relative h-64 rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/Roof line at night nice house christmas lighting.png"
                  alt="Beautiful Christmas lights on roofline"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Roofline Lighting</p>
                  <p className="text-sm opacity-90">Prescott Valley</p>
                </div>
              </div>

              {/* Smaller images */}
              <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/chino christmas lights after.jpeg"
                  alt="Christmas light installation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white">
                  <p className="text-sm font-semibold">Full Property</p>
                </div>
              </div>

              <div className="relative h-48 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/Roof line at night nice house christmas lighting jasper.png"
                  alt="Professional Christmas lighting"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-3 text-white">
                  <p className="text-sm font-semibold">Custom Design</p>
                </div>
              </div>

              {/* Review badge overlay */}
              <div className="col-span-2 bg-green-600 rounded-lg p-4 text-white shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-white" />
                      ))}
                    </div>
                    <p className="font-bold text-lg">100% Satisfaction</p>
                    <p className="text-sm opacity-90">From over 100 happy families</p>
                  </div>
                  <div className="text-right">
                    <p className="text-3xl font-bold">5.0</p>
                    <p className="text-xs opacity-90">Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}