export interface Keyword {
  term: string;
  volume?: number;
  difficulty?: string;
  intent: 'informational' | 'commercial' | 'transactional' | 'navigational';
  category: string;
}

export const keywords: Keyword[] = [
  // Primary Keywords
  {
    term: 'christmas light installation',
    volume: 14800,
    difficulty: 'medium',
    intent: 'commercial',
    category: 'primary'
  },
  {
    term: 'christmas light installation near me',
    volume: 9900,
    difficulty: 'low',
    intent: 'transactional',
    category: 'primary'
  },
  {
    term: 'christmas light installers',
    volume: 6600,
    difficulty: 'medium',
    intent: 'commercial',
    category: 'primary'
  },
  {
    term: 'holiday light installation',
    volume: 4400,
    difficulty: 'medium',
    intent: 'commercial',
    category: 'primary'
  },

  // Local Keywords
  {
    term: 'christmas light installation prescott az',
    volume: 320,
    difficulty: 'low',
    intent: 'transactional',
    category: 'local'
  },
  {
    term: 'christmas light installation prescott valley',
    volume: 210,
    difficulty: 'low',
    intent: 'transactional',
    category: 'local'
  },
  {
    term: 'holiday lighting prescott',
    volume: 170,
    difficulty: 'low',
    intent: 'commercial',
    category: 'local'
  },
  {
    term: 'christmas lights yavapai county',
    volume: 140,
    difficulty: 'low',
    intent: 'commercial',
    category: 'local'
  },

  // Service-Specific Keywords
  {
    term: 'residential christmas light installation',
    volume: 2900,
    difficulty: 'low',
    intent: 'commercial',
    category: 'service'
  },
  {
    term: 'commercial christmas light installation',
    volume: 2400,
    difficulty: 'medium',
    intent: 'commercial',
    category: 'service'
  },
  {
    term: 'christmas light removal service',
    volume: 1900,
    difficulty: 'low',
    intent: 'commercial',
    category: 'service'
  },

  // Cost/Price Keywords
  {
    term: 'christmas light installation cost',
    volume: 5400,
    difficulty: 'low',
    intent: 'informational',
    category: 'cost'
  },
  {
    term: 'christmas light installation price',
    volume: 3600,
    difficulty: 'low',
    intent: 'informational',
    category: 'cost'
  },
  {
    term: 'how much does christmas light installation cost',
    volume: 1300,
    difficulty: 'low',
    intent: 'informational',
    category: 'cost'
  },
  {
    term: 'christmas light installation estimate',
    volume: 720,
    difficulty: 'low',
    intent: 'transactional',
    category: 'cost'
  },

  // Design Keywords
  {
    term: 'christmas light design ideas',
    volume: 8100,
    difficulty: 'low',
    intent: 'informational',
    category: 'design'
  },
  {
    term: 'outdoor christmas light ideas',
    volume: 14800,
    difficulty: 'low',
    intent: 'informational',
    category: 'design'
  },
  {
    term: 'professional christmas light display',
    volume: 1900,
    difficulty: 'low',
    intent: 'commercial',
    category: 'design'
  },
  {
    term: 'custom christmas light design',
    volume: 590,
    difficulty: 'low',
    intent: 'commercial',
    category: 'design'
  },

  // Type-Specific Keywords
  {
    term: 'led christmas light installation',
    volume: 1600,
    difficulty: 'low',
    intent: 'commercial',
    category: 'type'
  },
  {
    term: 'roof christmas lights installation',
    volume: 2400,
    difficulty: 'low',
    intent: 'commercial',
    category: 'type'
  },
  {
    term: 'tree christmas light installation',
    volume: 1900,
    difficulty: 'low',
    intent: 'commercial',
    category: 'type'
  },
  {
    term: 'permanent christmas light installation',
    volume: 2900,
    difficulty: 'medium',
    intent: 'commercial',
    category: 'type'
  },

  // Question Keywords
  {
    term: 'how to hire christmas light installer',
    volume: 390,
    difficulty: 'low',
    intent: 'informational',
    category: 'question'
  },
  {
    term: 'when to install christmas lights',
    volume: 1000,
    difficulty: 'low',
    intent: 'informational',
    category: 'question'
  },
  {
    term: 'why hire professional christmas light installers',
    volume: 320,
    difficulty: 'low',
    intent: 'informational',
    category: 'question'
  },
  {
    term: 'what to look for christmas light installation company',
    volume: 170,
    difficulty: 'low',
    intent: 'informational',
    category: 'question'
  },

  // Seasonal Keywords
  {
    term: 'christmas 2024 light installation',
    volume: 480,
    difficulty: 'low',
    intent: 'commercial',
    category: 'seasonal'
  },
  {
    term: 'black friday christmas light installation deals',
    volume: 260,
    difficulty: 'low',
    intent: 'transactional',
    category: 'seasonal'
  },
  {
    term: 'early bird christmas light installation',
    volume: 210,
    difficulty: 'low',
    intent: 'commercial',
    category: 'seasonal'
  },
  {
    term: 'last minute christmas light installation',
    volume: 320,
    difficulty: 'low',
    intent: 'transactional',
    category: 'seasonal'
  },

  // Long-tail Keywords
  {
    term: 'best christmas light installation company near me',
    volume: 590,
    difficulty: 'low',
    intent: 'transactional',
    category: 'long-tail'
  },
  {
    term: 'professional christmas light installation and removal',
    volume: 480,
    difficulty: 'low',
    intent: 'commercial',
    category: 'long-tail'
  },
  {
    term: 'affordable christmas light installation services',
    volume: 720,
    difficulty: 'low',
    intent: 'commercial',
    category: 'long-tail'
  },
  {
    term: 'christmas light installation for businesses',
    volume: 390,
    difficulty: 'low',
    intent: 'commercial',
    category: 'long-tail'
  }
];

export function getKeywordsByCategory(category: string): Keyword[] {
  return keywords.filter(kw => kw.category === category);
}

export function getKeywordsByIntent(intent: string): Keyword[] {
  return keywords.filter(kw => kw.intent === intent);
}