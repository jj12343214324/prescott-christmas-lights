import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { SITE_CONFIG } from '@/lib/constants';
import { formatPhone } from '@/lib/utils';
import {
  CheckCircle,
  Building,
  Sparkles,
  Clock,
  Phone,
  Store,
  Star
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Commercial Christmas Light Installation | Prescott Business Lighting',
  description: 'Professional commercial Christmas light installation for businesses in Prescott. Retail stores, offices, restaurants. Make your business shine this holiday season.',
  keywords: 'commercial Christmas lights, business holiday lighting, retail Christmas decorations, office building lights, Prescott commercial lighting',
};

export default function CommercialPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-gray-900 py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Commercial Christmas Lighting
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Make your business the brightest spot in Prescott this holiday season.
            Professional installation for offices, retail, restaurants, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors"
            >
              Get Commercial Quote →
            </Link>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call: {formatPhone(SITE_CONFIG.phone)}
            </a>
          </div>
        </div>
      </section>

      {/* Business Types */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
            We Light Up Every Type of Business
          </h2>
          <p className="text-lg sm:text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            From small shops to large office complexes, we have the expertise to make your business shine.
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <Store className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Retail Stores</h3>
              <p className="text-gray-600 mb-4">
                Attract holiday shoppers with eye-catching displays that increase foot traffic and sales.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Storefront displays</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Window outlines</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Roofline lighting</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <Building className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Office Buildings</h3>
              <p className="text-gray-600 mb-4">
                Create a festive atmosphere for employees and impress clients with professional displays.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Entrance decorations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Lobby displays</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Exterior lighting</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <Sparkles className="w-12 h-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Restaurants & Hotels</h3>
              <p className="text-gray-600 mb-4">
                Set the perfect holiday ambiance that keeps customers coming back all season long.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Patio lighting</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Tree wrapping</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                  <span>Entrance features</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Commercial */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
              Why Businesses Choose Professional Installation
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">The DIY Nightmare</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✕</span>
                    <span className="text-gray-600">Employees on ladders = liability risk</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✕</span>
                    <span className="text-gray-600">Unprofessional appearance hurts your image</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✕</span>
                    <span className="text-gray-600">Takes staff away from their real jobs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✕</span>
                    <span className="text-gray-600">Lights failing during busy season</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✕</span>
                    <span className="text-gray-600">Storage and maintenance headaches</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-lg p-8 shadow-lg border-2 border-green-500">
                <h3 className="text-xl font-bold text-gray-900 mb-6">The Professional Solution</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span className="text-gray-600">Expert installation by trained professionals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span className="text-gray-600">Consistent, impressive appearance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span className="text-gray-600">Staff focuses on serving customers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span className="text-gray-600">Maintenance included throughout season</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span className="text-gray-600">Complete removal and storage service</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
            Commercial Service Features
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="text-center">
              <Clock className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600 text-sm">
                Installation before/after hours or weekends to avoid disruption
              </p>
            </div>

            <div className="text-center">
              <Building className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Custom Designs</h3>
              <p className="text-gray-600 text-sm">
                Lighting that complements your building and brand
              </p>
            </div>

            <div className="text-center">
              <Sparkles className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Season-Long Support</h3>
              <p className="text-gray-600 text-sm">
                We'll fix any issues quickly to keep you shining
              </p>
            </div>

            <div className="text-center">
              <Star className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Professional Grade</h3>
              <p className="text-gray-600 text-sm">
                Commercial LED lights designed for businesses
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-green-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Make Your Business Unforgettable This Holiday Season
          </h2>
          <p className="text-lg sm:text-xl text-white mb-8 max-w-3xl mx-auto">
            Stand out from your competition with professional Christmas lighting that draws customers in and creates lasting impressions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="bg-white text-red-700 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Get Your Free Commercial Quote →
            </Link>
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="bg-green-900 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-950 transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Now: {formatPhone(SITE_CONFIG.phone)}
            </a>
          </div>

          <p className="text-white/90 mt-6 text-sm">
            Book now for the best selection of installation dates.
          </p>
        </div>
      </section>
    </div>
  );
}