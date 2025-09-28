'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, X, MessageCircle, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { formatPhone } from '@/lib/utils';

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const phoneNumber = formatPhone(SITE_CONFIG.phone);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Main floating button */}
          <motion.div
            className="fixed bottom-6 right-6 z-50"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          >
            {!isExpanded ? (
              <motion.button
                onClick={() => setIsExpanded(true)}
                className="bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full p-4 shadow-2xl hover:shadow-3xl transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="relative">
                  <MessageCircle className="w-8 h-8" />
                  <motion.div
                    className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </motion.button>
            ) : (
              <motion.div
                className="bg-white rounded-2xl shadow-2xl overflow-hidden w-80"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-green-600 to-green-700 p-4 text-white relative">
                  <button
                    onClick={() => setIsExpanded(false)}
                    className="absolute top-3 right-3 p-1.5 hover:bg-white/20 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="flex items-center gap-2 mb-2">
                    <Sparkles className="w-6 h-6 text-yellow-300" />
                    <h3 className="font-bold text-lg text-white">Ready for Holiday Magic?</h3>
                  </div>

                  <p className="text-sm text-green-50">
                    Get your FREE quote in 2 minutes!
                  </p>
                </div>

                {/* Content */}
                <div className="p-4 space-y-3 bg-gradient-to-b from-white to-gray-50">
                  <motion.a
                    href="/quote"
                    className="block w-full bg-gradient-to-r from-red-600 to-red-700 text-white text-center py-3 rounded-lg font-bold hover:from-red-700 hover:to-red-800 transition-all shadow-md hover:shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Instant Quote →
                  </motion.a>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-3 bg-gradient-to-b from-white to-gray-50 text-gray-500 font-medium">or call now</span>
                    </div>
                  </div>

                  <motion.a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="flex items-center justify-center gap-2 w-full bg-white border-2 border-green-600 text-green-700 py-3 rounded-lg font-bold hover:bg-green-50 transition-colors shadow-sm"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Phone className="w-5 h-5" />
                    Call {phoneNumber}
                  </motion.a>

                  <div className="flex items-center justify-center gap-2 text-xs text-gray-600 bg-yellow-50 rounded-lg py-2">
                    <span className="text-yellow-600">⚡</span>
                    <span>Average response time: 2 minutes</span>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Pulsing ring animation for main button */}
          {!isExpanded && (
            <motion.div
              className="fixed bottom-6 right-6 pointer-events-none z-40"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
            >
              <motion.div
                className="w-20 h-20 rounded-full border-2 border-green-400/40"
                animate={{ scale: [1, 1.8, 1.8], opacity: [0.6, 0, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeOut' }}
              />
            </motion.div>
          )}
        </>
      )}
    </AnimatePresence>
  );
}