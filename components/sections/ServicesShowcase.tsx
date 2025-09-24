'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Home, Building, TreePine, Sparkles, Clock, DollarSign, Shield, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Rooflines',
    description: 'Transform your home into the most festive on the block',
    features: ['Custom designs', 'Premium LED lights', 'Timer setup'],
    color: 'from-green-600 to-green-700'
  },
  {
    icon: TreePine,
    title: 'Full Property Design & Decoration',
    description: 'Complete transformation of your entire property',
    features: ['Rooflines & accents', 'Trees & landscaping', 'Custom displays'],
    color: 'from-red-600 to-red-700',
    popular: true
  },
  {
    icon: Building,
    title: 'Businesses & Apartment Buildings',
    description: 'Professional displays for commercial properties',
    features: ['Large-scale projects', 'Custom branding', 'Maintenance included'],
    color: 'from-blue-600 to-indigo-700'
  }
];

export default function ServicesShowcase() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-5 h-5" />
            <span className="font-semibold">Services Tailored to You</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
            Choose Your Perfect <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">Holiday Package</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional installation with zero hassle. We handle everything!
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="relative"
            >
              {service.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-1 rounded-full text-sm font-bold z-10 shadow-lg">
                  MOST POPULAR
                </div>
              )}

              <div className={`h-full bg-white rounded-2xl shadow-xl border-2 ${service.popular ? 'border-red-400' : 'border-gray-200'} overflow-hidden`}>
                {/* Header */}
                <div className={`bg-gradient-to-r ${service.color} p-6 text-white`}>
                  <service.icon className="w-12 h-12 mb-4 text-white" />
                  <h3 className="text-2xl font-bold mb-2 text-white">{service.title}</h3>
                  <p className="text-white/90">{service.description}</p>
                </div>

                {/* Content */}
                <div className={`p-6 ${
                  service.title === 'Businesses & Apartment Buildings'
                    ? 'bg-gradient-to-b from-blue-50 to-indigo-50'
                    : service.title === 'Full Property Design & Decoration'
                    ? 'bg-gradient-to-b from-red-50 to-pink-50'
                    : 'bg-gradient-to-b from-green-50 to-emerald-50'
                }`}>
                  <div className="mb-6">
                    <p className="text-lg font-semibold text-gray-700">Professional installation included</p>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                          <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      href="/quote"
                      className={`block text-center py-3 rounded-lg font-bold transition-all ${
                        service.popular
                          ? 'bg-gradient-to-r from-red-600 to-red-700 text-white hover:from-red-700 hover:to-red-800'
                          : 'bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800'
                      }`}
                    >
                      Get Started
                      <ArrowRight className="inline-block ml-2 w-4 h-4" />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom features */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {[
            { icon: Clock, text: 'Install within 48 hours' },
            { icon: DollarSign, text: 'Transparent pricing' },
            { icon: Shield, text: 'Professional service' }
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-3 justify-center">
              <item.icon className="w-8 h-8 text-green-600" />
              <span className="font-semibold text-gray-700">{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}