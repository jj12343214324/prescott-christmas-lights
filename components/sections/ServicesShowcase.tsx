'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Home, Building, TreePine, Star, ArrowRight, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Rooflines',
    description: 'Transform your home with brilliant roofline displays',
    image: '/images/Roof line at night nice house christmas lighting.png',
    features: ['Custom C9 LED lights', 'Professional clips & hardware', 'Timer installation'],
    popular: false
  },
  {
    icon: TreePine,
    title: 'Full Property Design',
    description: 'Complete holiday transformation inside and out',
    image: '/images/property design lighting landscaping lighting.jpeg',
    features: ['Rooflines & peaks', 'Trees & bushes', 'Pathway & accent lighting'],
    popular: true
  },
  {
    icon: Building,
    title: 'Commercial',
    description: 'Make your business shine this holiday season',
    image: '/images/commercial christmas light installers.PNG',
    features: ['Storefronts', 'Office buildings', 'Shopping centers'],
    popular: false
  }
];

export default function ServicesShowcase() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold">Professional Installation</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Perfect Holiday Package
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From simple rooflines to complete property transformations
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold z-10 shadow-lg">
                  MOST POPULAR
                </div>
              )}

              <div className={`h-full bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all ${
                service.popular ? 'ring-2 ring-red-600' : ''
              }`}>
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href="/quote"
                    className={`block text-center py-3 rounded-lg font-bold transition-all ${
                      service.popular
                        ? 'bg-red-600 text-white hover:bg-red-700'
                        : 'bg-green-600 text-white hover:bg-green-700'
                    }`}
                  >
                    Get Free Quote
                    <ArrowRight className="inline-block ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}