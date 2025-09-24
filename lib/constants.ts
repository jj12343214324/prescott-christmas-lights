export const SITE_CONFIG = {
  name: 'Prescott Christmas Light Installation',
  url: 'https://prescottchristmaslightinstallation.com',
  description: 'Professional Christmas light installation in Prescott, Prescott Valley, and Yavapai County. Free estimates, custom designs, and full service including removal.',
  phone: '928-235-2024',
  email: 'info@prescottchristmaslightinstallation.com',
  address: {
    street: '',
    city: 'Prescott',
    state: 'AZ',
    zip: '86301',
    county: 'Yavapai'
  },
  hours: {
    monday: '8:00 AM - 6:00 PM',
    tuesday: '8:00 AM - 6:00 PM',
    wednesday: '8:00 AM - 6:00 PM',
    thursday: '8:00 AM - 6:00 PM',
    friday: '8:00 AM - 6:00 PM',
    saturday: '9:00 AM - 5:00 PM',
    sunday: 'Closed'
  },
  social: {
    facebook: '',
    instagram: '',
    google: ''
  }
};

export const SEO_DEFAULTS = {
  titleTemplate: '%s | Prescott Christmas Light Installation',
  defaultTitle: 'Prescott Christmas Light Installation | Professional Holiday Lighting',
  description: SITE_CONFIG.description,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.url,
    site_name: SITE_CONFIG.name,
    images: [
      {
        url: `${SITE_CONFIG.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Prescott Christmas Light Installation'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [`${SITE_CONFIG.url}/og-image.jpg`]
  }
};

export const SCHEMA_ORG = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.state,
      postalCode: SITE_CONFIG.address.zip,
      addressCountry: 'US'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 34.5400,
      longitude: -112.4685
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '17:00'
      }
    ],
    priceRange: '$$',
    image: `${SITE_CONFIG.url}/logo.png`,
    description: SITE_CONFIG.description,
    areaServed: [
      {
        '@type': 'City',
        name: 'Prescott',
        '@id': 'https://en.wikipedia.org/wiki/Prescott,_Arizona'
      },
      {
        '@type': 'City',
        name: 'Prescott Valley',
        '@id': 'https://en.wikipedia.org/wiki/Prescott_Valley,_Arizona'
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Yavapai County'
      }
    ],
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 34.5400,
        longitude: -112.4685
      },
      geoRadius: '50'
    }
  }
};