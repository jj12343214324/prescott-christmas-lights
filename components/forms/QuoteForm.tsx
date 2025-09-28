'use client';

import { useState, FormEvent } from 'react';
import { Phone, CheckCircle } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import { formatPhone } from '@/lib/utils';

export default function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      address: formData.get('address'),
      city: formData.get('city'),
      service: formData.get('service'),
      message: formData.get('message'),
      preferredContact: formData.get('preferredContact'),
      timeline: formData.get('timeline'),
    };

    try {
      const response = await fetch('/api/send-quote', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error('Failed to submit quote request');
      }
    } catch (err) {
      setError('Sorry, there was an error submitting your request. Please call us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <CheckCircle className="text-green-600 mx-auto mb-4" size={64} />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
        <p className="text-gray-700 mb-6">
          We'll contact you within 30 minutes with your free quote!
        </p>
        <p className="text-lg font-semibold text-green-700">
          Or call us now for immediate service:
        </p>
        <a
          href={`tel:${SITE_CONFIG.phone}`}
          className="inline-flex items-center gap-2 text-2xl font-bold text-red-600 mt-2 hover:underline"
        >
          <Phone size={24} />
          {formatPhone(SITE_CONFIG.phone)}
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Super simple 4 field form */}
      <div className="space-y-4">
        {/* Name */}
        <input
          type="text"
          name="name"
          required
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0d6936] focus:border-[#0d6936] text-lg text-gray-900 bg-white placeholder:text-gray-500"
          placeholder="Your Name *"
        />

        {/* Phone */}
        <input
          type="tel"
          name="phone"
          required
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0d6936] focus:border-[#0d6936] text-lg text-gray-900 bg-white placeholder:text-gray-500"
          placeholder="Phone Number *"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          required
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0d6936] focus:border-[#0d6936] text-lg text-gray-900 bg-white placeholder:text-gray-500"
          placeholder="Email *"
        />

        {/* Address */}
        <input
          type="text"
          name="address"
          required
          className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0d6936] focus:border-[#0d6936] text-lg text-gray-900 bg-white placeholder:text-gray-500"
          placeholder="Property Address *"
        />

        {/* Hidden fields for defaults */}
        <input type="hidden" name="city" value="Prescott" />
        <input type="hidden" name="service" value="Christmas Light Installation" />
        <input type="hidden" name="preferredContact" value="phone" />
        <input type="hidden" name="timeline" value="asap" />
        <input type="hidden" name="message" value="" />
      </div>

      {error && (
        <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#dc2027] hover:bg-[#b91c22] text-white py-4 px-6 rounded-lg font-bold text-xl transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed mt-6 shadow-lg"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <span className="loading mr-2"></span>
            Getting Your Quote...
          </span>
        ) : (
          'Get Free Quote Now →'
        )}
      </button>

      {/* Or Call */}
      <div className="text-center mt-8 py-6 bg-gray-50 rounded-lg">
        <p className="text-gray-600 mb-3 text-lg">Or call us right now:</p>
        <a
          href={`tel:${SITE_CONFIG.phone}`}
          className="inline-flex items-center gap-2 text-3xl font-bold text-green-700 hover:text-green-800 transition-colors"
        >
          <Phone size={32} />
          {formatPhone(SITE_CONFIG.phone)}
        </a>
        <p className="text-base text-green-600 font-semibold mt-3">
          <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></span>
          We're Open!
        </p>
      </div>
    </form>
  );
}