export interface CompetitorEntry {
  name: string;
  areaFocus: string;
  positioning: string;
  observedStrengths: string;
  observedGaps: string;
  austinDifferentiation: string;
}

export interface KeywordMappingRow {
  keyword: string;
  cluster: 'Primary' | 'Service' | 'Local' | 'Men-Focused' | 'Informational';
  intent: 'Transactional / Local' | 'Commercial Investigation' | 'Informational';
  primaryUrl: string;
  secondaryKeywords: string;
  contentType: string;
  priority: 'P1' | 'P2' | 'P3';
  researchSource: string;
  verifiedSearchVolume: string;
}

export interface VerificationItem {
  field: string;
  currentValue: string;
  status: 'Verified Publicly' | 'Needs Owner Confirmation';
  notes: string;
}

export const COMPETITOR_REPORT: CompetitorEntry[] = [
  {
    name: 'Supreme Spa & Salon',
    areaFocus: 'Kapurbawdi / Ghodbunder Road, Thane West',
    positioning: 'Multi-service salon + spa positioning with steam and Jacuzzi amenities.',
    observedStrengths: 'Strong aggregator presence (Justdial/Magicpin) and broad Ghodbunder Road visibility.',
    observedGaps: 'Often relies on templated service descriptions and generic pricing blurbs with limited educational depth.',
    austinDifferentiation:
      'Austin Spa pairs clean Teen Hath Naka access with 900+ word educational treatment guides and bright botanical UX.',
  },
  {
    name: 'Feel Spa & Salon',
    areaFocus: 'Khopat Road / Cadbury Junction, Thane West',
    positioning: 'Budget-to-mid wellness menu featuring massage, hammam, and Jacuzzi offers.',
    observedStrengths: 'Clear starting-price hooks and broad directory citations across Thane West.',
    observedGaps: 'Visual presentation and cluttered promo copy can erode premium trust for family and couple clientele.',
    austinDifferentiation:
      'Editorial Fresh Botanical Luxury identity, strict non-Ayurvedic/legitimate positioning, and hygienic suite clarity.',
  },
  {
    name: 'Amo Thai Spa',
    areaFocus: 'Near Teen Hath Naka / Central Thane West',
    positioning: 'Thai-themed massage centre near major transit nodes.',
    observedStrengths: 'Direct proximity to Teen Hath Naka search demand and Thai-specific keyword alignment.',
    observedGaps: 'Sparse standalone website architecture and thin service-by-service informational content.',
    austinDifferentiation:
      'Dedicated landmark page (/locations/teen-hath-naka-thane/) plus 24 distinct service URLs with structured Schema.',
  },
  {
    name: 'Arianna Spa',
    areaFocus: 'Thane West',
    positioning: 'Family wellness and body massage centre.',
    observedStrengths: 'Straightforward family-friendly framing.',
    observedGaps: 'Limited depth on precautions, aftercare, and modality comparisons (Thai vs Balinese, Swedish vs Deep Tissue).',
    austinDifferentiation:
      '17 comprehensive Indian-English educational guides answering real pre-visit customer concerns.',
  },
  {
    name: 'White N Bright Spa & Salon',
    areaFocus: 'Pokharan Road No. 2, Thane West',
    positioning: 'Established award-highlighted luxury spa & salon near Viviana Mall corridor.',
    observedStrengths: 'Strong brand trust, clean service photography, and private steam/shower suite messaging.',
    observedGaps: 'Concentrated toward Pokharan Road 2 rather than the L.B.S. Marg / Thane Station / Teen Hath Naka gateway.',
    austinDifferentiation:
      'Captures high-intent southern Thane West, Naupada, and Teen Hath Naka commuters with equal hygiene transparency.',
  },
  {
    name: 'Arth Thai Spa',
    areaFocus: 'Kasarvadavali / Ghodbunder Road, Thane West',
    positioning: 'Larger multi-room luxury Thai & Jacuzzi wellness centre.',
    observedStrengths: 'Dedicated Thai and Jacuzzi room focus with clean interior positioning.',
    observedGaps: 'Farther north on Ghodbunder Road (~25–35 min from Thane Station / Teen Hath Naka).',
    austinDifferentiation:
      'Ideal central alternative for Teen Hath Naka, Naupada, Wagle Estate, and Thane Station visitors.',
  },
  {
    name: 'Lush Thai Spa & Amora Spa',
    areaFocus: 'Teen Hath Naka / Panch Pakhdi / Naupada',
    positioning: 'Local competitors targeting exact Teen Hath Naka & Naupada wellness intent.',
    observedStrengths: 'Strong local SERP presence on map packs and local landing pages.',
    observedGaps: 'Frequent copy duplication across service pages and weak internal linking between guides and booking.',
    austinDifferentiation:
      'Zero duplicate paragraphs, strict canonical hygiene, Breadcrumb/DaySpa/Service/Article schema, and fast mobile booking.',
  },
];

export const KEYWORD_MAPPING_MATRIX: KeywordMappingRow[] = [
  {
    keyword: 'Spa in Thane / Best Spa in Thane',
    cluster: 'Primary',
    intent: 'Transactional / Local',
    primaryUrl: '/',
    secondaryKeywords: 'Massage spa in Thane, body massage in Thane, full body massage in Thane',
    contentType: 'Homepage',
    priority: 'P1',
    researchSource: 'Google Organic SERP & Local Pack Analysis (Nov 2026); search volume unverified (estimated high local opportunity)',
    verifiedSearchVolume: 'Unverified — pending Google Keyword Planner export',
  },
  {
    keyword: 'Spa in Thane West / Massage Centre in Thane West',
    cluster: 'Primary',
    intent: 'Transactional / Local',
    primaryUrl: '/locations/thane-west/',
    secondaryKeywords: 'Massage centre near LBS Marg, spa near Korum Mall',
    contentType: 'Location Hub Page',
    priority: 'P1',
    researchSource: 'Google Organic SERP & Local Suggestions',
    verifiedSearchVolume: 'Unverified — pending Google Keyword Planner export',
  },
  {
    keyword: 'Spa Near Teen Hath Naka / Massage Near Tip Top Plaza',
    cluster: 'Local',
    intent: 'Transactional / Local',
    primaryUrl: '/locations/teen-hath-naka-thane/',
    secondaryKeywords: 'Spa near Teen Hath Naka flyover, Austin Spa Teen Hath Naka',
    contentType: 'Hyper-Local Landmark Page',
    priority: 'P1',
    researchSource: 'Competitor SERP & Map Pack Audit',
    verifiedSearchVolume: 'Unverified — pending Google Keyword Planner export',
  },
  {
    keyword: 'Spa in Naupada Thane / Massage Near Thane Station',
    cluster: 'Local',
    intent: 'Transactional / Local',
    primaryUrl: '/locations/naupada-thane/',
    secondaryKeywords: 'Spa near Panch Pakhadi, massage near Charai & Kopri',
    contentType: 'Local Transit Guide',
    priority: 'P1',
    researchSource: 'Google Related Searches & Local Directory Audit',
    verifiedSearchVolume: 'Unverified — pending Google Keyword Planner export',
  },
  {
    keyword: 'Thai Massage in Thane',
    cluster: 'Service',
    intent: 'Commercial Investigation',
    primaryUrl: '/services/thai-massage-thane/',
    secondaryKeywords: 'Dry Thai massage in Thane, Thai stretching Thane West',
    contentType: 'Service Detail Page',
    priority: 'P1',
    researchSource: 'Competitor Menu & SERP Audit',
    verifiedSearchVolume: 'Unverified — pending Google Keyword Planner export',
  },
  {
    keyword: 'Deep Tissue Massage in Thane',
    cluster: 'Service',
    intent: 'Commercial Investigation',
    primaryUrl: '/services/deep-tissue-massage-thane/',
    secondaryKeywords: 'Deep muscle recovery Thane, deep tissue massage for men',
    contentType: 'Service Detail Page',
    priority: 'P1',
    researchSource: 'Competitor Menu & SERP Audit',
    verifiedSearchVolume: 'Unverified — pending Google Keyword Planner export',
  },
  {
    keyword: 'Swedish Massage in Thane',
    cluster: 'Service',
    intent: 'Commercial Investigation',
    primaryUrl: '/services/swedish-massage-thane/',
    secondaryKeywords: 'Classic relaxation massage Thane West',
    contentType: 'Service Detail Page',
    priority: 'P1',
    researchSource: 'Competitor Menu & SERP Audit',
    verifiedSearchVolume: 'Unverified — pending Google Keyword Planner export',
  },
  {
    keyword: 'Balinese Massage in Thane',
    cluster: 'Service',
    intent: 'Commercial Investigation',
    primaryUrl: '/services/balinese-massage-thane/',
    secondaryKeywords: 'Balinese harmony ritual Thane West',
    contentType: 'Service Detail Page',
    priority: 'P1',
    researchSource: 'Competitor Menu & SERP Audit',
    verifiedSearchVolume: 'Unverified — pending Google Keyword Planner export',
  },
  {
    keyword: 'Aromatherapy Massage in Thane',
    cluster: 'Service',
    intent: 'Commercial Investigation',
    primaryUrl: '/services/aromatherapy-massage-thane/',
    secondaryKeywords: 'French aromatherapy massage Thane West',
    contentType: 'Service Detail Page',
    priority: 'P1',
    researchSource: 'Competitor Menu & SERP Audit',
    verifiedSearchVolume: 'Unverified — pending Google Keyword Planner export',
  },
  {
    keyword: 'Four-Hand & Couples Massage in Thane',
    cluster: 'Service',
    intent: 'Commercial Investigation',
    primaryUrl: '/services/four-hand-couples-signature-thane/',
    secondaryKeywords: 'Four hand massage Thane, couples spa Jacuzzi Thane',
    contentType: 'Service Detail Pages (Cluster)',
    priority: 'P1',
    researchSource: 'Austin Spa Verified Listing & Competitor Comparison',
    verifiedSearchVolume: 'Unverified — pending Google Keyword Planner export',
  },
  {
    keyword: 'Foot Massage / Foot Reflexology in Thane',
    cluster: 'Service',
    intent: 'Commercial Investigation',
    primaryUrl: '/services/foot-reflexology-thane/',
    secondaryKeywords: 'Sole harmony reflexology, tired feet massage near Thane Station',
    contentType: 'Service Detail Page',
    priority: 'P2',
    researchSource: 'Google Local Search Suggestions',
    verifiedSearchVolume: 'Unverified — pending Google Keyword Planner export',
  },
  {
    keyword: 'Spa for Men in Thane / Professional Massage for Men',
    cluster: 'Men-Focused',
    intent: 'Informational',
    primaryUrl: '/journal/massage-for-working-professionals-thane/',
    secondaryKeywords: 'Full body massage for men, deep tissue for men, relaxation massage for men',
    contentType: 'Educational Guide + Service Links',
    priority: 'P1',
    researchSource: 'Indian Urban Search Intent Analysis',
    verifiedSearchVolume: 'Unverified — pending Google Keyword Planner export',
  },
  {
    keyword: 'Thai vs Balinese Massage / Deep Tissue vs Swedish',
    cluster: 'Informational',
    intent: 'Informational',
    primaryUrl: '/journal/thai-vs-balinese-massage/',
    secondaryKeywords: 'What is Thai massage, Deep Tissue explained, Swedish explained',
    contentType: 'Journal Comparison Guides',
    priority: 'P2',
    researchSource: 'Google People Also Ask & Related Searches',
    verifiedSearchVolume: 'Unverified — pending Google Keyword Planner export',
  },
  {
    keyword: 'What to Expect During a Spa Visit / Spa Hygiene',
    cluster: 'Informational',
    intent: 'Informational',
    primaryUrl: '/journal/what-to-expect-during-your-first-spa-visit/',
    secondaryKeywords: 'How to choose a professional spa in Thane, spa hygiene standards',
    contentType: 'Educational Trust Guides',
    priority: 'P2',
    researchSource: 'Customer Review Concern Audit',
    verifiedSearchVolume: 'Unverified — pending Google Keyword Planner export',
  },
];

export const BUSINESS_VERIFICATION_CHECKLIST: VerificationItem[] = [
  {
    field: 'Brand Name & Domains',
    currentValue: 'Austin Spa Thane (austinspathane.in / austinspa.co.in)',
    status: 'Verified Publicly',
    notes: 'Matches project brief and live search index.',
  },
  {
    field: 'Primary Physical Address',
    currentValue:
      'Commercial Premises 102-A & 103-A, 1st Floor, Dev Milan CHS Ltd., Near Tip Top Plaza, L.B.S. Marg, Teen Hath Naka Flyover, Thane West, Maharashtra 400602',
    status: 'Verified Publicly',
    notes: 'Confirmed across project brief and Justdial/SpaAdvisor public citations.',
  },
  {
    field: 'Primary Phone & Email',
    currentValue: '+91 91528 44124 · austinspa.thane@gmail.com',
    status: 'Verified Publicly',
    notes: 'Note: Secondary directories also list +91 96061 81706 — confirm with owner whether to add as secondary line.',
  },
  {
    field: 'Daily Operating Hours',
    currentValue: '10:00 AM – 11:00 PM (Mon–Sun)',
    status: 'Needs Owner Confirmation',
    notes: 'Publicly listed on SpaAdvisor/Justdial; verify last appointment cut-off and holiday hours with branch manager.',
  },
  {
    field: '24-Treatment Availability & Session Durations',
    currentValue: 'All 24 core modalities mapped in centralized catalog without fabricated pricing',
    status: 'Needs Owner Confirmation',
    notes: 'Exact 45/60/90/120-minute slot durations, Jacuzzi suite maintenance hours, and tariff cards require owner approval before publishing.',
  },
  {
    field: 'Branch & Suite Photography',
    currentValue: 'Illustrative botanical spa previews clearly labeled on Gallery & pages',
    status: 'Needs Owner Confirmation',
    notes: 'Replace illustrative visuals with authentic photographs of reception, massage rooms, and Jacuzzi once supplied by owner.',
  },
  {
    field: 'Verified Customer Reviews & Therapist Credentials',
    currentValue: 'Omitted intentionally (zero fabricated testimonials or certifications)',
    status: 'Needs Owner Confirmation',
    notes: 'Only add named Google reviews or verified credentials after documented owner approval.',
  },
];
