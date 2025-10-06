export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  slug: string;
  metaDescription?: string;
  relatedQuestions?: string[];
}

export const faqs: FAQ[] = [
  // Pricing & Cost FAQs
  {
    id: 'cost-factors',
    question: 'How much does professional Christmas light installation cost in Prescott?',
    answer: 'The cost of professional Christmas light installation varies based on home size, design complexity, and light type. Every property is unique, so we provide free custom estimates tailored to your specific property and vision. Contact us for a personalized quote.',
    category: 'pricing',
    slug: 'christmas-light-installation-cost-prescott',
    metaDescription: 'Learn about Christmas light installation costs in Prescott, AZ. Get pricing information and factors that affect installation prices.',
    relatedQuestions: ['price-per-foot', 'payment-options', 'estimate-process']
  },
  {
    id: 'price-per-foot',
    question: 'What is the price per foot for Christmas light installation?',
    answer: 'Our pricing is customized based on your specific project needs, including the type of lights, roofline complexity, and design requirements. We provide free detailed estimates that break down all costs for your specific property. Contact us for a personalized quote.',
    category: 'pricing',
    slug: 'christmas-light-price-per-foot',
    metaDescription: 'Understand Christmas light installation pricing per foot in Prescott. Compare costs for different light types and installation options.',
    relatedQuestions: ['cost-factors', 'led-vs-incandescent-cost']
  },
  {
    id: 'payment-options',
    question: 'What payment options do you accept?',
    answer: 'We accept multiple payment methods including cash, check, and all major credit cards. We offer flexible payment plans with 50% due at installation and the remainder upon completion. For commercial clients, we provide NET 30 invoicing options.',
    category: 'pricing',
    slug: 'christmas-light-installation-payment-options',
    metaDescription: 'Payment options for Christmas light installation in Prescott. Flexible payment plans and methods available.'
  },

  // Service & Process FAQs
  {
    id: 'installation-timeline',
    question: 'When should I schedule Christmas light installation?',
    answer: 'We recommend scheduling your Christmas light installation between early October and mid-November for the best availability and weather conditions. Early booking ensures you get your preferred installation date and allows time for any custom design elements. Many clients book as early as September to secure prime installation slots.',
    category: 'service',
    slug: 'when-to-schedule-christmas-light-installation',
    metaDescription: 'Best times to schedule Christmas light installation in Prescott. Book early for preferred dates and optimal weather conditions.',
    relatedQuestions: ['booking-process', 'weather-delays', 'peak-season']
  },
  {
    id: 'installation-duration',
    question: 'How long does Christmas light installation take?',
    answer: 'Most residential Christmas light installations are completed in 2-4 hours, depending on home size and design complexity. Larger homes or elaborate displays may take 4-6 hours. Commercial installations typically require 1-2 days. We work efficiently while ensuring every light is perfectly placed and secured.',
    category: 'service',
    slug: 'christmas-light-installation-duration',
    metaDescription: 'Learn how long Christmas light installation takes in Prescott. Timeline for residential and commercial properties.'
  },
  {
    id: 'removal-service',
    question: 'Do you remove the lights after the holidays?',
    answer: 'Yes! Our comprehensive service includes professional removal typically scheduled between January 1-31. We carefully remove all lights and hardware to prevent damage to your property. Removal is included in most packages.',
    category: 'service',
    slug: 'christmas-light-removal-service',
    metaDescription: 'Christmas light removal services in Prescott. Professional takedown included in most packages.'
  },
  {
    id: 'own-lights',
    question: 'Can you install Christmas lights that I already own?',
    answer: 'Yes, we can install customer-provided lights, though we recommend professional-grade LED lights for best results and longevity. We\'ll inspect your lights before installation to ensure they\'re safe and functional. Installation-only services are priced differently than our full-service packages.',
    category: 'service',
    slug: 'install-customer-owned-christmas-lights',
    metaDescription: 'Professional installation of your own Christmas lights in Prescott. Safety inspection and expert installation services.'
  },

  // Technical & Safety FAQs
  {
    id: 'led-vs-incandescent',
    question: 'Should I choose LED or incandescent Christmas lights?',
    answer: 'We strongly recommend LED lights for their energy efficiency (75% less energy), longer lifespan (50,000+ hours), cooler operation, and vibrant colors. While LEDs have a higher upfront cost, they save money long-term through reduced energy bills and replacement costs. They\'re also safer and more durable in Prescott\'s weather conditions.',
    category: 'technical',
    slug: 'led-vs-incandescent-christmas-lights',
    metaDescription: 'Compare LED and incandescent Christmas lights for Prescott installations. Energy efficiency, cost, and safety considerations.'
  },
  {
    id: 'power-requirements',
    question: 'Will Christmas lights overload my electrical system?',
    answer: 'Professional installation ensures your electrical system isn\'t overloaded. We calculate power loads, use multiple circuits when needed, and install timers and surge protectors. Modern LED lights use minimal power - a typical display uses less electricity than a space heater. We always prioritize electrical safety.',
    category: 'technical',
    slug: 'christmas-lights-electrical-safety',
    metaDescription: 'Electrical safety for Christmas light installations in Prescott. Professional load calculations and safety measures.'
  },
  {
    id: 'weather-resistance',
    question: 'Can Christmas lights withstand Prescott weather?',
    answer: 'Yes, we use commercial-grade lights specifically rated for outdoor use that withstand Prescott\'s temperature variations, wind, and occasional snow. Our installation methods secure lights properly to prevent weather damage. We use weatherproof connections and UV-resistant materials for long-lasting displays.',
    category: 'technical',
    slug: 'weather-resistant-christmas-lights-prescott',
    metaDescription: 'Weather-resistant Christmas lights for Prescott\'s climate. Professional installation for wind, snow, and temperature changes.'
  },

  // Design FAQs
  {
    id: 'design-options',
    question: 'What Christmas light design options are available?',
    answer: 'We offer unlimited design possibilities including classic roofline lighting, tree wrapping, pathway illumination, architectural accent lighting, animated displays, and custom color schemes. Popular styles include elegant white, traditional multicolor, winter wonderland themes, and modern programmable RGB displays.',
    category: 'design',
    slug: 'christmas-light-design-options',
    metaDescription: 'Explore Christmas light design options in Prescott. From classic to modern, create your perfect holiday display.'
  },
  {
    id: 'custom-designs',
    question: 'Can you create a custom Christmas light design for my home?',
    answer: 'Absolutely! We provide free custom design consultations where we assess your property, discuss your vision, and create a unique lighting plan. We consider your home\'s architecture, landscaping, and personal style to design a display that perfectly complements your property.',
    category: 'design',
    slug: 'custom-christmas-light-design',
    metaDescription: 'Custom Christmas light designs for Prescott homes. Free consultations and personalized holiday lighting plans.'
  },
  {
    id: 'color-options',
    question: 'What color options are available for Christmas lights?',
    answer: 'We offer extensive color options including warm white, cool white, multicolor, single colors (red, green, blue, gold), and color-changing RGB lights. Popular combinations include warm white with red accents, blue and white "winter" themes, and traditional multicolor. We can match any color scheme you envision.',
    category: 'design',
    slug: 'christmas-light-color-options',
    metaDescription: 'Christmas light color options for Prescott installations. Choose from traditional to modern color schemes.'
  },

  // Commercial FAQs
  {
    id: 'commercial-installation',
    question: 'Do you provide commercial Christmas light installation?',
    answer: 'Yes, we specialize in commercial Christmas light installations for businesses, HOAs, shopping centers, and municipal buildings throughout Yavapai County. We offer comprehensive commercial packages including design, installation, maintenance, and removal with flexible scheduling to minimize business disruption.',
    category: 'commercial',
    slug: 'commercial-christmas-light-installation',
    metaDescription: 'Commercial Christmas light installation in Prescott and Yavapai County. Professional holiday lighting for businesses.'
  },
  {
    id: 'commercial-maintenance',
    question: 'Do you offer maintenance for commercial Christmas light displays?',
    answer: 'Yes, our commercial packages include regular maintenance throughout the holiday season. We provide weekly inspections, immediate repair services, and 24/7 emergency support to ensure your display remains perfect. This includes replacing bulbs, fixing connections, and addressing any weather-related issues.',
    category: 'commercial',
    slug: 'commercial-christmas-light-maintenance',
    metaDescription: 'Commercial Christmas light maintenance in Prescott. Keep your business holiday display perfect all season.'
  },

  // Service Support FAQs
  {
    id: 'service-support',
    question: 'What kind of support do you provide during the season?',
    answer: 'We provide season-long support for our installations. If any lights fail or installation issues arise, we\'ll address them promptly. We use professional-grade LED lights known for their reliability and longevity.',
    category: 'support',
    slug: 'christmas-light-service-support',
    metaDescription: 'Christmas light service support in Prescott. Season-long assistance for installations.'
  },

  // Booking & Scheduling FAQs
  {
    id: 'booking-process',
    question: 'How do I book Christmas light installation services?',
    answer: 'Booking is easy! Simply call 928-235-2024 or fill out our online form for a free estimate. We\'ll schedule a consultation to discuss your vision, provide a detailed quote, and schedule installation at your convenience. Most estimates are provided within 24-48 hours.',
    category: 'booking',
    slug: 'how-to-book-christmas-light-installation',
    metaDescription: 'Book Christmas light installation in Prescott. Easy booking process with free estimates and flexible scheduling.'
  },
  {
    id: 'estimate-process',
    question: 'How do you provide estimates for Christmas light installation?',
    answer: 'We offer free, no-obligation estimates. We\'ll visit your property, measure the areas to be decorated, discuss design preferences, and provide a detailed written estimate. Virtual estimates are also available using photos and measurements you provide. Estimates typically include all costs: lights, installation, and removal.',
    category: 'booking',
    slug: 'christmas-light-installation-estimate-process',
    metaDescription: 'Get a free Christmas light installation estimate in Prescott. On-site or virtual estimates available.'
  },

  // Safety FAQs
  {
    id: 'installation-safety',
    question: 'Is professional Christmas light installation safer than DIY?',
    answer: 'Absolutely. Professional installation eliminates risks associated with ladder falls, electrical hazards, and improper installations. Our trained technicians use proper safety equipment and have experience working at heights. Statistics show that holiday decorating injuries send over 14,000 people to ERs annually - let us handle the risk.',
    category: 'safety',
    slug: 'professional-vs-diy-christmas-light-safety',
    metaDescription: 'Why professional Christmas light installation is safer than DIY in Prescott. Avoid holiday decorating injuries.'
  },
  {
    id: 'fire-safety',
    question: 'Are Christmas lights a fire hazard?',
    answer: 'When professionally installed with quality materials, Christmas lights pose minimal fire risk. We use quality lights, proper gauge extension cords, GFCI protection, and never overload circuits. LED lights generate minimal heat, further reducing fire risk. Our installations follow safety best practices.',
    category: 'safety',
    slug: 'christmas-light-fire-safety',
    metaDescription: 'Christmas light fire safety in Prescott. Professional installation reduces fire hazards with proper materials and techniques.'
  }
];

export function getFAQBySlug(slug: string): FAQ | undefined {
  return faqs.find(faq => faq.slug === slug);
}

export function getFAQsByCategory(category: string): FAQ[] {
  return faqs.filter(faq => faq.category === category);
}

export function getRelatedFAQs(id: string): FAQ[] {
  const faq = faqs.find(f => f.id === id);
  if (!faq || !faq.relatedQuestions) return [];
  return faq.relatedQuestions.map(relId => faqs.find(f => f.id === relId)).filter(Boolean) as FAQ[];
}