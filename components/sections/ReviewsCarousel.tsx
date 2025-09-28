'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { reviews } from '@/data/reviews';
import { Star, Quote, CheckCircle, Sparkles, ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';

export default function ReviewsCarousel() {
  const [showAll, setShowAll] = useState(false);
  const displayedReviews = showAll ? reviews : reviews.slice(0, 6);

  return (
    <section className="py-8 sm:py-16 bg-gradient-to-b from-white to-green-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full mb-4">
            <CheckCircle className="w-5 h-5" />
            <span className="font-semibold">100% Real Google Reviews</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-2 sm:mb-4">
            Prescott Families <span className="text-green-600">Love</span> Our Service
          </h2>

          <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Join hundreds of happy customers who trust us with their holiday magic
          </p>

          {/* Overall rating */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 mt-4 sm:mt-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900">5.0</span>
            <span className="text-lg text-gray-600">({reviews.length}+ Reviews)</span>
          </div>
        </motion.div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {displayedReviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-4 sm:p-6 relative hover:shadow-xl transition-shadow"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-green-100" />

              {/* Reviewer info */}
              <div className="mb-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-gray-900">{review.name}</h3>
                  {review.isLocalGuide && (
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-semibold">
                      Local Guide
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  {review.reviewCount && (
                    <span className="text-xs text-gray-500">
                      {review.reviewCount} reviews
                    </span>
                  )}
                </div>
                <p className="text-xs text-gray-500 mt-1">{review.date}</p>
              </div>

              {/* Review text */}
              <p className="text-sm text-gray-700 leading-relaxed line-clamp-4">
                "{review.text}"
              </p>

              {/* Google branding */}
              <div className="flex items-center gap-2 mt-4 pt-4 border-t">
                <svg width="50" height="16" viewBox="0 0 74 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g>
                    <path d="M9.24 8.19v2.46h5.88c-.18 1.38-.64 2.39-1.34 3.1-.86.86-2.2 1.8-4.54 1.8-3.62 0-6.45-2.92-6.45-6.54s2.83-6.54 6.45-6.54c1.95 0 3.38.77 4.43 1.76L15.4 2.5C13.94 1.08 11.98 0 9.24 0 4.28 0 .11 4.04.11 9s4.17 9 9.13 9c2.68 0 4.7-.88 6.28-2.52 1.62-1.62 2.13-3.91 2.13-5.75 0-.57-.04-1.1-.13-1.54H9.24z" fill="#4285F4"/>
                    <path d="M25 6.19c-3.21 0-5.83 2.44-5.83 5.81 0 3.34 2.62 5.81 5.83 5.81s5.83-2.46 5.83-5.81c0-3.37-2.62-5.81-5.83-5.81zm0 9.33c-1.76 0-3.28-1.45-3.28-3.52 0-2.09 1.52-3.52 3.28-3.52s3.28 1.43 3.28 3.52c0 2.07-1.52 3.52-3.28 3.52z" fill="#EA4335"/>
                    <path d="M53.58 7.49h-.09c-.57-.68-1.67-1.3-3.06-1.3C47.53 6.19 45 8.72 45 12c0 3.26 2.53 5.81 5.43 5.81 1.39 0 2.49-.62 3.06-1.32h.09v.81c0 2.22-1.19 3.41-3.1 3.41-1.56 0-2.53-1.12-2.93-2.07l-2.22.92c.64 1.54 2.33 3.43 5.15 3.43 2.99 0 5.52-1.76 5.52-6.05V6.49h-2.42v1zm-2.93 8.03c-1.76 0-3.1-1.5-3.1-3.52 0-2.05 1.34-3.52 3.1-3.52 1.74 0 3.1 1.5 3.1 3.54.01 2.03-1.36 3.5-3.1 3.5z" fill="#FBBC05"/>
                    <path d="M38 6.19c-3.21 0-5.83 2.44-5.83 5.81 0 3.34 2.62 5.81 5.83 5.81s5.83-2.46 5.83-5.81c0-3.37-2.62-5.81-5.83-5.81zm0 9.33c-1.76 0-3.28-1.45-3.28-3.52 0-2.09 1.52-3.52 3.28-3.52s3.28 1.43 3.28 3.52c0 2.07-1.52 3.52-3.28 3.52z" fill="#0F9D58"/>
                    <path d="M58 .24h2.51v17.57H58z" fill="#EA4335"/>
                    <path d="M68.26 15.52c-1.3 0-2.22-.59-2.82-1.76l7.77-3.21-.26-.66c-.48-1.3-1.96-3.7-4.97-3.7-2.99 0-5.48 2.35-5.48 5.81 0 3.26 2.46 5.81 5.76 5.81 2.66 0 4.2-1.63 4.84-2.57l-1.98-1.32c-.66.96-1.56 1.6-2.86 1.6zm-.18-7.15c1.03 0 1.91.53 2.2 1.28l-5.25 2.17c0-2.44 1.73-3.45 3.05-3.45z" fill="#4285F4"/>
                  </g>
                </svg>
                <span className="text-xs text-gray-500">Verified</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More/Less Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold"
          >
            {showAll ? (
              <>
                Show Less Reviews
                <ChevronUp className="w-5 h-5" />
              </>
            ) : (
              <>
                Show All {reviews.length} Reviews
                <ChevronDown className="w-5 h-5" />
              </>
            )}
          </button>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-8 sm:mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xl font-bold text-gray-900 mb-4">
            Want to be our next 5-star review?
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href="/quote"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold px-8 py-4 rounded-full shadow-xl transition-all"
            >
              <Sparkles className="w-5 h-5" />
              Get Your Free Quote Today
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}