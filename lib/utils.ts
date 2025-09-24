import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPhone(phone: string): string {
  // Remove all non-digits
  const cleaned = phone.replace(/\D/g, '');

  // Format as (XXX) XXX-XXXX
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  }

  // Return original if not 10 digits
  return phone;
}

export function getDaysUntilChristmas(): number {
  const today = new Date();
  const currentYear = today.getFullYear();
  let christmas = new Date(currentYear, 11, 25); // December 25th

  // If Christmas has passed this year, use next year's Christmas
  if (today > christmas) {
    christmas = new Date(currentYear + 1, 11, 25);
  }

  const diffTime = christmas.getTime() - today.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  return diffDays;
}

export function getCurrentYear(): number {
  return new Date().getFullYear();
}

export function generateLocationSchema(location: any, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `Christmas Light Installation ${location.name}`,
    description: `Professional Christmas light installation services in ${location.name}, ${location.county}. Custom designs, free estimates, and full-service holiday lighting.`,
    url: url,
    telephone: '928-235-2024',
    address: {
      '@type': 'PostalAddress',
      addressLocality: location.name,
      addressRegion: 'AZ',
      postalCode: location.zipCode,
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: location.latitude || '',
      longitude: location.longitude || ''
    },
    areaServed: {
      '@type': 'City',
      name: location.name
    },
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '18:00'
    }
  };
}

export function generateStructuredData(service: any, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: url,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Prescott Christmas Light Installation',
      telephone: '928-235-2024',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Prescott',
        addressRegion: 'AZ',
        addressCountry: 'US'
      }
    },
    areaServed: {
      '@type': 'State',
      name: 'Arizona'
    },
    serviceType: 'Christmas Light Installation',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      priceRange: '$$'
    }
  };
}
