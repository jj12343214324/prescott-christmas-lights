export interface Service {
  id: string;
  name: string;
  slug: string;
  description: string;
  features: string[];
  benefits: string[];
  price?: string;
  image?: string;
  popular?: boolean;
}

export const services: Service[] = [
  {
    id: 'residential',
    name: 'Residential Christmas Light Installation',
    slug: 'residential-christmas-light-installation',
    description: 'Transform your home into a winter wonderland with our professional residential Christmas light installation service. We handle everything from design to takedown, ensuring your home shines bright throughout the holiday season.',
    features: [
      'Custom design consultation',
      'Professional-grade LED lights',
      'Complete installation on rooflines, trees, and landscaping',
      'Timer and control system setup',
      'Mid-season maintenance check',
      'Professional removal after holidays',
      'Professional removal after holidays'
    ],
    benefits: [
      'Save time and avoid ladder injuries',
      'Professional, polished appearance',
      'Energy-efficient LED technology',
      'Increased home value and curb appeal',
      'Stress-free holiday decorating',
      'Professional service throughout'
    ],
    price: 'Starting at $599',
    popular: true
  },
  {
    id: 'commercial',
    name: 'Commercial Christmas Light Installation',
    slug: 'commercial-christmas-light-installation',
    description: 'Attract customers and create a festive atmosphere with our commercial Christmas light installation services. Perfect for retail stores, office buildings, restaurants, and shopping centers throughout Prescott and Prescott Valley.',
    features: [
      'Large-scale design and planning',
      'Commercial-grade LED lighting systems',
      'Building facade and roofline illumination',
      'Parking lot and landscape lighting',
      'Grand lighting displays and features',
      'Weekly maintenance visits',
      '24/7 emergency repair service',
      'Professional removal service'
    ],
    benefits: [
      'Increase foot traffic and sales',
      'Enhanced brand visibility',
      'Create memorable customer experiences',
      'Professional installation reduces risks',
      'Consistent, professional appearance',
      'Tax-deductible business expense'
    ],
    price: 'Custom quotes available'
  },
  {
    id: 'design-consultation',
    name: 'Custom Design & Consultation',
    slug: 'christmas-light-design-consultation',
    description: 'Work with our design experts to create a unique Christmas light display that perfectly complements your property. We consider architecture, landscaping, and your personal style to design a one-of-a-kind holiday showcase.',
    features: [
      'On-site property assessment',
      '3D design visualization',
      'Color scheme planning',
      'Architectural accent lighting',
      'Landscape and tree lighting design',
      'Animation and special effects options',
      'Energy consumption planning',
      'Written design proposal and quote'
    ],
    benefits: [
      'Personalized, unique display',
      'Maximize visual impact',
      'Coordinate with existing decor',
      'Stay within budget',
      'Professional expertise and ideas',
      'Avoid common design mistakes'
    ],
    price: 'Free with installation'
  },
  {
    id: 'installation-only',
    name: 'Installation Only Service',
    slug: 'christmas-light-installation-only',
    description: 'Already have lights but need professional installation? Our expert team will safely and beautifully install your Christmas lights, ensuring they look perfect and function properly throughout the season.',
    features: [
      'Professional installation of customer-provided lights',
      'Safety inspection of all lights and cords',
      'Secure mounting and attachment',
      'Timer installation and programming',
      'Circuit load balancing',
      'Basic troubleshooting and bulb replacement',
      'Removal service available separately'
    ],
    benefits: [
      'Use lights you already own',
      'Professional results',
      'Avoid safety hazards',
      'Save time and effort',
      'Proper electrical connections',
      'Peace of mind'
    ],
    price: 'Starting at $399'
  },
  {
    id: 'removal',
    name: 'Removal Service',
    slug: 'christmas-light-removal',
    description: 'Let us handle the post-holiday cleanup! We carefully remove all lights and hardware, ensuring no damage to your property.',
    features: [
      'Scheduled removal January 1-31',
      'Careful light removal and coiling',
      'Inspection and minor repairs',
      'Safe ladder work',
      'Clean-up of installation hardware',
      'Proper disposal of damaged lights'
    ],
    benefits: [
      'No ladder work in cold weather',
      'Professional service',
      'Safe removal process',
      'Property protection',
      'Time-saving convenience'
    ],
    price: 'Included in full service'
  },
  {
    id: 'maintenance',
    name: 'Maintenance & Repair Service',
    slug: 'christmas-light-maintenance-repair',
    description: 'Keep your display looking perfect all season long with our maintenance service. We provide regular checks and immediate repairs to ensure your lights shine bright from Thanksgiving through New Year\'s.',
    features: [
      'Weekly or bi-weekly inspections',
      'Bulb and fuse replacement',
      'Connection troubleshooting',
      'Timer adjustments',
      'Storm damage assessment and repair',
      'Electrical issue diagnosis',
      'Service on our installations'
    ],
    benefits: [
      'Display always looks perfect',
      'Immediate problem resolution',
      'Prevent electrical issues',
      'Maximize light lifespan',
      'Peace of mind',
      'Professional support all season'
    ],
    price: 'Starting at $99/month'
  },
  {
    id: 'tree-lighting',
    name: 'Tree Wrapping & Lighting',
    slug: 'tree-wrapping-christmas-lights',
    description: 'Bring your landscape to life with professional tree lighting. We expertly wrap trunks and branches to create stunning illuminated trees that serve as focal points for your holiday display.',
    features: [
      'Professional trunk wrapping technique',
      'Branch and canopy lighting',
      'Mini lights or C9 bulbs options',
      'Deciduous and evergreen tree lighting',
      'Palm tree specialty wrapping',
      'Ground stake and uplighting options',
      'Color options: white, multicolor, or custom',
      'Coordination with overall display design'
    ],
    benefits: [
      'Dramatic landscape transformation',
      'Year-round lighting option available',
      'Increases property visibility',
      'Creates depth and dimension',
      'Highlights landscape features',
      'Professional, even coverage'
    ],
    price: 'Starting at $199/tree',
    popular: true
  },
  {
    id: 'permanent-lighting',
    name: 'Permanent Holiday Lighting',
    slug: 'permanent-christmas-lighting',
    description: 'Invest in a permanent lighting solution that\'s ready for every holiday. Our discrete, professional-grade permanent lights can be programmed for any occasion and controlled from your smartphone.',
    features: [
      'Discrete channel track system',
      'Color-changing LED technology',
      'Smartphone app control',
      'Programmable for any holiday',
      'Architectural color washing',
      'Energy-efficient operation',
      'Professional installation',
      'Quality materials used',
      'Annual maintenance available'
    ],
    benefits: [
      'One-time installation',
      'Year-round accent lighting',
      'Multiple holiday options',
      'Increased property value',
      'No annual installation fees',
      'Modern smart home integration'
    ],
    price: 'Custom quotes available'
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug);
}

export function getPopularServices(): Service[] {
  return services.filter(service => service.popular);
}