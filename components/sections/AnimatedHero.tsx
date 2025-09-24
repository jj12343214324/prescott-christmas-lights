'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants';
import { formatPhone } from '@/lib/utils';
import { Phone, Star, ArrowRight, Sparkles, Clock, Shield, Award } from 'lucide-react';

export default function AnimatedHero() {
  const phoneNumber = formatPhone(SITE_CONFIG.phone);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden" style={{ background: '#0f172a' }}>
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(34, 197, 94, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(239, 68, 68, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(34, 197, 94, 0.3) 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Snow effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-70"
            initial={{
              x: 0,
              y: -10
            }}
            animate={{
              y: 1000
            }}
            transition={{
              duration: (i % 5) * 2 + 10,
              repeat: Infinity,
              delay: (i % 10) * 1,
              ease: 'linear'
            }}
            style={{
              left: `${(i * 2) % 100}%`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10 py-8">
        <motion.div
          className="max-w-5xl mx-auto text-center"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          {/* Trust badge */}
          <motion.div
            className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full mb-8 shadow-2xl"
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
          >
            <Star className="text-yellow-500 fill-yellow-500" size={20} />
            <span className="text-gray-900 font-bold">5.0 Stars • 100+ Happy Families • Local Prescott Team</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 drop-shadow-2xl"
            variants={fadeInUp}
          >
            Transform Your Home Into A
            <motion.span
              className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-yellow-400 to-red-400 mt-2 drop-shadow-2xl"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: '200% 200%' }}
            >
              Christmas Wonderland
            </motion.span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto drop-shadow-lg"
            variants={fadeInUp}
          >
            Professional installation, stunning designs, zero hassle.
            <span className="block mt-2 text-yellow-400 font-bold text-2xl">
              Book now and save 20% - Limited spots available!
            </span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            variants={fadeInUp}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/quote"
                className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold text-lg px-8 py-5 rounded-full shadow-2xl transition-all"
              >
                <Sparkles className="w-5 h-5" />
                Get Your Free Quote Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-white text-black font-black text-lg px-8 py-5 rounded-full shadow-2xl hover:bg-yellow-50 transition-all"
              >
                <Phone className="w-5 h-5 animate-pulse" />
                {phoneNumber} - Call Now!
              </a>
            </motion.div>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
            variants={fadeInUp}
          >
            {[
              { icon: Clock, text: 'Same Day Quote', color: 'text-yellow-400' },
              { icon: Shield, text: '100% Satisfaction', color: 'text-blue-400' },
              { icon: Award, text: 'Local Experts', color: 'text-green-400' },
              { icon: Sparkles, text: 'Premium LED Lights', color: 'text-red-400' }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-black/60 backdrop-blur-md rounded-xl p-4 border border-white/30"
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(0,0,0,0.8)' }}
              >
                <item.icon className={`${item.color} mx-auto mb-2`} size={28} />
                <p className="text-white font-bold">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Urgency message */}
          <motion.div
            className="mt-12 inline-flex items-center gap-2 text-yellow-300 font-bold text-lg"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Clock className="w-5 h-5" />
            Only 11 Installation Spots Left for December!
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}