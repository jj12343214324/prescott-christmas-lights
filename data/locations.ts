export interface Location {
  slug: string;
  name: string;
  county: string;
  description: string;
  population?: number;
  zipCode?: string;
  neighborhoods?: string[];
}

export const locations: Location[] = [
  // Major Cities
  {
    slug: 'prescott',
    name: 'Prescott',
    county: 'Yavapai',
    description: 'The county seat of Yavapai County, known for its historic downtown and Victorian homes',
    population: 45827,
    zipCode: '86301',
    neighborhoods: ['Downtown', 'Forest Trails', 'Thumb Butte', 'Hassayampa Village', 'Williamson Valley']
  },
  {
    slug: 'prescott-valley',
    name: 'Prescott Valley',
    county: 'Yavapai',
    description: 'The largest city in Yavapai County, offering modern amenities and family-friendly neighborhoods',
    population: 52097,
    zipCode: '86314',
    neighborhoods: ['Viewpoint', 'Granville', 'Pronghorn Ranch', 'Quailwood', 'Jasper Lakes', 'Spring Valley']
  },
  {
    slug: 'sedona',
    name: 'Sedona',
    county: 'Yavapai',
    description: 'Famous for its red rocks and upscale communities',
    population: 10031,
    zipCode: '86336',
    neighborhoods: ['Uptown', 'West Sedona', 'Village of Oak Creek', 'Chapel Area']
  },
  {
    slug: 'cottonwood',
    name: 'Cottonwood',
    county: 'Yavapai',
    description: 'A commercial hub in Verde Valley with historic Old Town',
    population: 12029,
    zipCode: '86326',
    neighborhoods: ['Old Town', 'Verde Village', 'Clemenceau']
  },
  {
    slug: 'chino-valley',
    name: 'Chino Valley',
    county: 'Yavapai',
    description: 'Rural community north of Prescott with spacious properties',
    population: 13020,
    zipCode: '86323',
    neighborhoods: ['Town Center', 'Williamson Valley Ranch']
  },
  {
    slug: 'camp-verde',
    name: 'Camp Verde',
    county: 'Yavapai',
    description: 'Historic town along the Verde River',
    population: 11146,
    zipCode: '86322',
    neighborhoods: ['Downtown', 'Clear Creek', 'Montezuma Castle']
  },
  {
    slug: 'jerome',
    name: 'Jerome',
    county: 'Yavapai',
    description: 'Historic mining town turned arts community on Cleopatra Hill',
    population: 444,
    zipCode: '86331'
  },
  {
    slug: 'clarkdale',
    name: 'Clarkdale',
    county: 'Yavapai',
    description: 'Arizona\'s first master-planned community',
    population: 4234,
    zipCode: '86324'
  },
  {
    slug: 'dewey-humboldt',
    name: 'Dewey-Humboldt',
    county: 'Yavapai',
    description: 'Twin towns merged into one community',
    population: 4081,
    zipCode: '86327'
  },

  // Prescott Neighborhoods & Communities
  {
    slug: 'stoneridge-prescott',
    name: 'StoneRidge',
    county: 'Yavapai',
    description: 'Master-planned golf community in the Bradshaw Mountains foothills',
    zipCode: '86301'
  },
  {
    slug: 'talking-rock-prescott',
    name: 'Talking Rock',
    county: 'Yavapai',
    description: 'Exclusive golf community with luxury homes',
    zipCode: '86303'
  },
  {
    slug: 'forest-trails-prescott',
    name: 'Forest Trails',
    county: 'Yavapai',
    description: 'Established neighborhood near Prescott National Forest',
    zipCode: '86303'
  },
  {
    slug: 'yavapai-hills-prescott',
    name: 'Yavapai Hills',
    county: 'Yavapai',
    description: 'Residential community with scenic views',
    zipCode: '86301'
  },
  {
    slug: 'lynx-creek-prescott',
    name: 'Lynx Creek',
    county: 'Yavapai',
    description: 'Quiet community near Lynx Lake',
    zipCode: '86303'
  },
  {
    slug: 'groom-creek-prescott',
    name: 'Groom Creek',
    county: 'Yavapai',
    description: 'Mountain community south of Prescott',
    zipCode: '86303'
  },
  {
    slug: 'williamson-valley-prescott',
    name: 'Williamson Valley',
    county: 'Yavapai',
    description: 'Rural area with ranch properties northwest of Prescott',
    zipCode: '86305'
  },
  {
    slug: 'diamond-valley-prescott',
    name: 'Diamond Valley',
    county: 'Yavapai',
    description: 'Growing area between Prescott and Prescott Valley',
    zipCode: '86301'
  },
  {
    slug: 'hassayampa-prescott',
    name: 'Hassayampa',
    county: 'Yavapai',
    description: 'Golf community with custom homes',
    zipCode: '86301'
  },

  // Prescott Valley Neighborhoods
  {
    slug: 'viewpoint-prescott-valley',
    name: 'Viewpoint',
    county: 'Yavapai',
    description: 'Popular neighborhood with mountain views',
    zipCode: '86314'
  },
  {
    slug: 'granville-prescott-valley',
    name: 'Granville',
    county: 'Yavapai',
    description: 'Family-friendly community with parks and trails',
    zipCode: '86314'
  },
  {
    slug: 'pronghorn-ranch-prescott-valley',
    name: 'Pronghorn Ranch',
    county: 'Yavapai',
    description: 'Large HOA community with amenities',
    zipCode: '86315'
  },
  {
    slug: 'quailwood-prescott-valley',
    name: 'Quailwood',
    county: 'Yavapai',
    description: 'Established neighborhood with mature landscaping',
    zipCode: '86314'
  },
  {
    slug: 'jasper-lakes-prescott-valley',
    name: 'Jasper Lakes',
    county: 'Yavapai',
    description: 'Community with top-rated schools',
    zipCode: '86315'
  },
  {
    slug: 'spring-valley-prescott-valley',
    name: 'Spring Valley',
    county: 'Yavapai',
    description: 'Growing area with new construction',
    zipCode: '86314'
  },
  {
    slug: 'cordes-lakes',
    name: 'Cordes Lakes',
    county: 'Yavapai',
    description: 'Community along Interstate 17',
    zipCode: '86333'
  },

  // Other Communities
  {
    slug: 'paulden',
    name: 'Paulden',
    county: 'Yavapai',
    description: 'Rural community north of Chino Valley',
    zipCode: '86334'
  },
  {
    slug: 'mayer',
    name: 'Mayer',
    county: 'Yavapai',
    description: 'Small town along Highway 69',
    zipCode: '86333'
  },
  {
    slug: 'congress',
    name: 'Congress',
    county: 'Yavapai',
    description: 'Historic mining community',
    zipCode: '85332'
  },
  {
    slug: 'yarnell',
    name: 'Yarnell',
    county: 'Yavapai',
    description: 'Mountain town known for artistic community',
    zipCode: '85362'
  },
  {
    slug: 'wickenburg',
    name: 'Wickenburg',
    county: 'Yavapai',
    description: 'Western heritage town (northern portion)',
    zipCode: '85390'
  },
  {
    slug: 'bagdad',
    name: 'Bagdad',
    county: 'Yavapai',
    description: 'Mining company town',
    zipCode: '86321'
  },
  {
    slug: 'black-canyon-city',
    name: 'Black Canyon City',
    county: 'Yavapai',
    description: 'Gateway community along I-17',
    zipCode: '85324'
  },
  {
    slug: 'cornville',
    name: 'Cornville',
    county: 'Yavapai',
    description: 'Rural community in Verde Valley',
    zipCode: '86325'
  },
  {
    slug: 'lake-montezuma',
    name: 'Lake Montezuma',
    county: 'Yavapai',
    description: 'Family-friendly community near Beaver Creek',
    zipCode: '86335'
  },
  {
    slug: 'rimrock',
    name: 'Rimrock',
    county: 'Yavapai',
    description: 'Small community near Montezuma Well',
    zipCode: '86335'
  },
  {
    slug: 'verde-village',
    name: 'Verde Village',
    county: 'Yavapai',
    description: 'Residential area adjacent to Cottonwood',
    zipCode: '86326'
  },
  {
    slug: 'bridgeport',
    name: 'Bridgeport',
    county: 'Yavapai',
    description: 'Community near Cottonwood',
    zipCode: '86326'
  }
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find(loc => loc.slug === slug);
}

export function getLocationsByCounty(county: string): Location[] {
  return locations.filter(loc => loc.county === county);
}