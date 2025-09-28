'use client';

import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants';
import { formatPhone } from '@/lib/utils';
import { Phone, Star, ArrowRight } from 'lucide-react';
import '../../app/snow.css';

const snowflakes = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  left: (i * 7) % 100,
  size: 14 + (i % 3) * 4,
  delay: (i * 0.4) % 20,
  duration: 12 + (i % 10)
}));

export default function AnimatedHero() {
  const phoneNumber = formatPhone(SITE_CONFIG.phone);

  return (
    <section className="relative bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 py-16 md:py-20 overflow-hidden min-h-[calc(100vh-120px)] md:min-h-[calc(100vh-140px)]">
      {/* Snow effect */}
      <div className="absolute inset-0 opacity-40 overflow-hidden">
        {snowflakes.map((flake) => (
          <div
            key={flake.id}
            className="snow"
            data-left={`${flake.left}%`}
            data-size={`${flake.size}px`}
            data-delay={`${flake.delay}s`}
            data-duration={`${flake.duration}s`}
            style={{
              position: 'absolute',
              top: '-120px',
              left: `${flake.left}%`,
              fontSize: `${flake.size}px`,
              animationDelay: `${flake.delay}s`,
              animationDuration: `${flake.duration}s`
            }}
          >
            ❄
          </div>
        ))}
      </div>

      {/* String lights decoration with blinking effect */}
      <div className="absolute top-0 left-0 right-0 h-40 overflow-hidden">
        <svg viewBox="0 0 1200 120" className="w-full h-full">
          {/* Main wire with realistic droop */}
          <path
            d="M -20 20 Q 100 65, 200 45 T 400 50 Q 500 70, 600 45 T 800 50 Q 900 68, 1000 45 T 1220 50"
            stroke="#2a2a2a"
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M -20 20 Q 100 65, 200 45 T 400 50 Q 500 70, 600 45 T 800 50 Q 900 68, 1000 45 T 1220 50"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1.5"
            fill="none"
          />

          {/* Light bulbs with glow effect */}
          <defs>
            <radialGradient id="redGlow">
              <stop offset="0%" stopColor="#ff6b6b" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="#ef4444" stopOpacity="0"/>
            </radialGradient>
            <radialGradient id="greenGlow">
              <stop offset="0%" stopColor="#51cf66" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="#22c55e" stopOpacity="0"/>
            </radialGradient>
            <radialGradient id="yellowGlow">
              <stop offset="0%" stopColor="#ffd43b" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="#fab005" stopOpacity="0"/>
            </radialGradient>
          </defs>

          {/* Glow effects behind bulbs */}
          <circle cx="30" cy="32" r="20" fill="url(#redGlow)" className="light-blink-red" />
          <circle cx="90" cy="52" r="20" fill="url(#greenGlow)" className="light-blink-green" />
          <circle cx="150" cy="60" r="20" fill="url(#yellowGlow)" className="light-blink-red" />
          <circle cx="210" cy="47" r="20" fill="url(#redGlow)" className="light-blink-green" />
          <circle cx="270" cy="40" r="20" fill="url(#greenGlow)" className="light-blink-red" />
          <circle cx="330" cy="48" r="20" fill="url(#yellowGlow)" className="light-blink-green" />
          <circle cx="390" cy="52" r="20" fill="url(#redGlow)" className="light-blink-red" />
          <circle cx="450" cy="58" r="20" fill="url(#greenGlow)" className="light-blink-green" />
          <circle cx="510" cy="62" r="20" fill="url(#yellowGlow)" className="light-blink-red" />
          <circle cx="570" cy="52" r="20" fill="url(#redGlow)" className="light-blink-green" />
          <circle cx="630" cy="45" r="20" fill="url(#greenGlow)" className="light-blink-red" />
          <circle cx="690" cy="42" r="20" fill="url(#yellowGlow)" className="light-blink-green" />
          <circle cx="750" cy="48" r="20" fill="url(#redGlow)" className="light-blink-red" />
          <circle cx="810" cy="52" r="20" fill="url(#greenGlow)" className="light-blink-green" />
          <circle cx="870" cy="60" r="20" fill="url(#yellowGlow)" className="light-blink-red" />
          <circle cx="930" cy="58" r="20" fill="url(#redGlow)" className="light-blink-green" />
          <circle cx="990" cy="50" r="20" fill="url(#greenGlow)" className="light-blink-red" />
          <circle cx="1050" cy="45" r="20" fill="url(#yellowGlow)" className="light-blink-green" />
          <circle cx="1110" cy="42" r="20" fill="url(#redGlow)" className="light-blink-red" />
          <circle cx="1170" cy="48" r="20" fill="url(#greenGlow)" className="light-blink-green" />

          {/* Actual light bulbs */}
          <ellipse cx="30" cy="32" rx="6" ry="8" fill="#ef4444" className="light-blink-red" transform="rotate(15 30 32)" />
          <ellipse cx="90" cy="52" rx="6" ry="8" fill="#22c55e" className="light-blink-green" transform="rotate(-10 90 52)" />
          <ellipse cx="150" cy="60" rx="6" ry="8" fill="#fab005" className="light-blink-red" transform="rotate(20 150 60)" />
          <ellipse cx="210" cy="47" rx="6" ry="8" fill="#ef4444" className="light-blink-green" transform="rotate(-15 210 47)" />
          <ellipse cx="270" cy="40" rx="6" ry="8" fill="#22c55e" className="light-blink-red" transform="rotate(10 270 40)" />
          <ellipse cx="330" cy="48" rx="6" ry="8" fill="#fab005" className="light-blink-green" transform="rotate(-20 330 48)" />
          <ellipse cx="390" cy="52" rx="6" ry="8" fill="#ef4444" className="light-blink-red" transform="rotate(15 390 52)" />
          <ellipse cx="450" cy="58" rx="6" ry="8" fill="#22c55e" className="light-blink-green" transform="rotate(-10 450 58)" />
          <ellipse cx="510" cy="62" rx="6" ry="8" fill="#fab005" className="light-blink-red" transform="rotate(20 510 62)" />
          <ellipse cx="570" cy="52" rx="6" ry="8" fill="#ef4444" className="light-blink-green" transform="rotate(-15 570 52)" />
          <ellipse cx="630" cy="45" rx="6" ry="8" fill="#22c55e" className="light-blink-red" transform="rotate(10 630 45)" />
          <ellipse cx="690" cy="42" rx="6" ry="8" fill="#fab005" className="light-blink-green" transform="rotate(-20 690 42)" />
          <ellipse cx="750" cy="48" rx="6" ry="8" fill="#ef4444" className="light-blink-red" transform="rotate(15 750 48)" />
          <ellipse cx="810" cy="52" rx="6" ry="8" fill="#22c55e" className="light-blink-green" transform="rotate(-10 810 52)" />
          <ellipse cx="870" cy="60" rx="6" ry="8" fill="#fab005" className="light-blink-red" transform="rotate(20 870 60)" />
          <ellipse cx="930" cy="58" rx="6" ry="8" fill="#ef4444" className="light-blink-green" transform="rotate(-15 930 58)" />
          <ellipse cx="990" cy="50" rx="6" ry="8" fill="#22c55e" className="light-blink-red" transform="rotate(10 990 50)" />
          <ellipse cx="1050" cy="45" rx="6" ry="8" fill="#fab005" className="light-blink-green" transform="rotate(-20 1050 45)" />
          <ellipse cx="1110" cy="42" rx="6" ry="8" fill="#ef4444" className="light-blink-red" transform="rotate(15 1110 42)" />
          <ellipse cx="1170" cy="48" rx="6" ry="8" fill="#22c55e" className="light-blink-green" transform="rotate(-10 1170 48)" />

          {/* Light caps/connectors */}
          {[30, 90, 150, 210, 270, 330, 390, 450, 510, 570, 630, 690, 750, 810, 870, 930, 990, 1050, 1110, 1170].map((x, i) => {
            const y = [32, 52, 60, 47, 40, 48, 52, 58, 62, 52, 45, 42, 48, 52, 60, 58, 50, 45, 42, 48][i];
            return (
              <rect
                key={i}
                x={x - 3}
                y={y - 11}
                width="6"
                height="4"
                fill="#444"
                transform={`rotate(${i % 2 === 0 ? 15 : -15} ${x} ${y})`}
              />
            );
          })}
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10 flex items-center min-h-[calc(100vh-200px)] md:min-h-[calc(100vh-220px)]">
        <div className="max-w-4xl mx-auto text-center w-full">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur px-4 sm:px-5 py-2 sm:py-2.5 rounded-full mb-4 sm:mb-6 shadow-lg">
            <Star className="text-red-600 fill-red-600 w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-gray-900 font-semibold text-sm sm:text-base">5.0 Stars • 100+ Happy Families</span>
            <span className="hidden sm:inline text-gray-900 font-semibold text-base">• Prescott Locals</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Professional Christmas
            <span className="block text-red-500 mt-2">
              Light Installation
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto px-4 sm:px-0">
            Transform your home into a winter wonderland!
            <span className="block mt-2 text-lg sm:text-xl text-gray-300">Installation • Maintenance • Removal</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center mb-4 sm:mb-6 px-4 sm:px-0">
            <Link
              href="/quote"
              className="group inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-lg shadow-xl transition-all transform hover:scale-105"
            >
              Get Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white font-bold px-6 py-3 rounded-lg shadow-xl transition-all transform hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              {phoneNumber}
            </a>
          </div>

          {/* Simple trust points */}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 sm:gap-8 text-gray-300 text-sm sm:text-base">
            <span className="flex items-center gap-1 sm:gap-2">
              <span className="text-green-500">✓</span>
              <span>Free Estimates</span>
            </span>
            <span className="flex items-center gap-1 sm:gap-2">
              <span className="text-green-500">✓</span>
              <span className="hidden sm:inline">Professional Installation</span>
              <span className="sm:hidden">Professional</span>
            </span>
            <span className="flex items-center gap-1 sm:gap-2">
              <span className="text-green-500">✓</span>
              <span className="hidden sm:inline">Maintenance Included</span>
              <span className="sm:hidden">Maintenance</span>
            </span>
            <span className="flex items-center gap-1 sm:gap-2">
              <span className="text-green-500">✓</span>
              <span className="hidden sm:inline">Local Team</span>
              <span className="sm:hidden">Local</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}