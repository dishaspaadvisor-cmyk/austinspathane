import { BUSINESS_INFO, SPA_IMAGES } from './businessInfo';
import { FAQItem } from './faqs';

export interface LocalLandmark {
  name: string;
  proximityNote: string;
}

export interface LocationPageData {
  slug: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  areaLabel: string;
  heroImage: string;
  heroImageAlt: string;
  introduction: string;
  localContext: string[];
  landmarks: LocalLandmark[];
  directionsList: string[];
  nearbyAreasServed: string[];
  featuredServiceSlugs: string[];
  faqs: FAQItem[];
}

export const LOCATION_PAGES: LocationPageData[] = [
  {
    slug: 'thane',
    title: 'Austin Spa Thane',
    h1: 'Austin Spa Thane – Professional Wellness & Massage Centre',
    metaTitle: 'Austin Spa Thane – Best Spa & Massage Centre in Thane',
    metaDescription:
      'Visit Austin Spa Thane at Dev Milan CHS Ltd., near Tip Top Plaza & Teen Hath Naka Flyover, LBS Marg, Thane West. Thai, Deep Tissue, Swedish & Couple Suites.',
    areaLabel: 'Thane City Hub',
    heroImage: SPA_IMAGES.heroReception,
    heroImageAlt: 'Bright botanical reception lounge at Austin Spa Thane near Teen Hath Naka',
    introduction:
      'Finding a clean, calm, and strictly professional massage centre in Thane often means navigating crowded highways or noisy commercial complexes. Austin Spa Thane brings a bright botanical wellness sanctuary right to L.B.S. Marg near Teen Hath Naka Flyover—offering men, women, and couples reliable therapeutic bodywork without leaving the city.',
    localContext: [
      'Positioned at the central junction connecting Thane West residential neighbourhoods, Wagle Estate offices, and the Eastern Express Highway, our single verified Thane branch welcomes guests arriving from across Thane East, Thane West, and neighbouring Mulund.',
      'Unlike rushed walk-in parlours, every appointment at Austin Spa Thane begins with a calm consultation in our sunlit reception lounge. Whether you are seeking dry Traditional Thai stretching after a gym session, slow Deep Tissue care for laptop posture, or an unhurried Aromatherapy ritual, each private room is prepared fresh between guests.',
    ],
    landmarks: [
      { name: 'Tip Top Plaza', proximityNote: 'Immediate landmark neighbour off L.B.S. Marg' },
      { name: 'Teen Hath Naka Flyover', proximityNote: 'Just off the main flyover junction on L.B.S. Marg' },
      { name: 'Eastern Express Highway (EEH)', proximityNote: 'Quick 2–3 minute turn-off toward Thane West' },
      { name: 'Thane Railway Station (West)', proximityNote: 'Short auto or cab ride via Gokhale Road / L.B.S. Marg' },
    ],
    directionsList: [
      'From Mumbai / Mulund via Eastern Express Highway: Exit toward Teen Hath Naka Flyover, take the service turn toward L.B.S. Marg / Tip Top Plaza, and look for Dev Milan CHS Ltd. (1st Floor, Commercial Premises 102-A & 103-A).',
      'From Ghodbunder Road / Majiwada / Kapurbawdi: Head south down the Eastern Express Highway toward Teen Hath Naka and merge onto L.B.S. Marg near Tip Top Plaza.',
      'From Thane Railway Station (West): Take a direct auto-rickshaw via Naupada / Hariniwas Circle toward Tip Top Plaza on L.B.S. Marg.',
    ],
    nearbyAreasServed: [
      'Teen Hath Naka',
      'Thane West',
      'Naupada',
      'Panch Pakhadi',
      'Charai',
      'Kopri',
      'Tembhi Naka',
      'Wagle Estate',
      'Majiwada',
      'Kapurbawdi',
      'Manpada',
      'Vartak Nagar',
    ],
    featuredServiceSlugs: [
      'thai-massage-thane',
      'deep-tissue-massage-thane',
      'swedish-massage-thane',
      'balinese-massage-thane',
      'aromatherapy-massage-thane',
      'four-hand-couples-signature-thane',
    ],
    faqs: [
      {
        question: 'Does Austin Spa have multiple physical branches inside Thane?',
        answer:
          'No. Austin Spa Thane operates its verified branch at Commercial Premises 102-A & 103-A, 1st Floor, Dev Milan CHS Ltd., Near Tip Top Plaza, L.B.S. Marg, Teen Hath Naka, Thane West (400602). This location serves guests visiting from all surrounding Thane neighbourhoods.',
      },
      {
        question: 'What are the daily opening hours at Austin Spa Thane?',
        answer: `${BUSINESS_INFO.openingHours.summary}. We recommend calling +91 91528 44124 before arriving late in the evening or on public holidays.`,
      },
      {
        question: 'Are couple and solo rooms both available at this branch?',
        answer:
          'Yes. We maintain private single treatment suites for men and women as well as a spacious private couple sanctuary and Jacuzzi-equipped suite slots.',
      },
    ],
  },
  {
    slug: 'thane-west',
    title: 'Austin Spa Thane West',
    h1: 'Best Spa in Thane West – L.B.S. Marg Therapeutic & Relaxation Suites',
    metaTitle: 'Spa in Thane West – Austin Spa | LBS Marg Massage Centre',
    metaDescription:
      'Looking for a professional spa in Thane West? Visit Austin Spa on LBS Marg near Tip Top Plaza for Deep Tissue, Thai, Swedish, Balinese & Couples Massage.',
    areaLabel: 'Thane West & LBS Marg',
    heroImage: SPA_IMAGES.oilRitual,
    heroImageAlt: 'Serene botanical massage suite at Austin Spa Thane West on LBS Marg',
    introduction:
      'Thane West blends bustling corporate hubs, heritage residential lanes, and busy shopping corridors from Wagle Estate and Vartak Nagar down to Korum and Viviana Mall. Austin Spa Thane West sits along L.B.S. Marg—making it effortless to step away from highway traffic into quiet, restorative spa care.',
    localContext: [
      'Many residents searching for a spa in Thane West want two clear assurances: legitimate professional standards and genuinely clean, quiet rooms. Our 1st-floor facility inside Dev Milan CHS Ltd. prioritizes calm acoustics, fresh cotton bedding per guest, and attentive consultation before every treatment.',
      'Guests living around Panch Pakhadi, Vartak Nagar, Majiwada, Kapurbawdi, and Manpada regularly stop in after gym workouts, long workdays, or weekend errands along L.B.S. Marg and Pokharan Road.',
    ],
    landmarks: [
      { name: 'L.B.S. Marg Commercial Belt', proximityNote: 'Situated directly along L.B.S. Marg near Tip Top Plaza' },
      { name: 'Korum Mall & Cadbury Junction', proximityNote: 'Approx. 5–10 minutes via Eastern Express Highway / Pokharan corridor' },
      { name: 'Wagle Estate IT & Industrial Park', proximityNote: 'Quick 5-minute commute down to Teen Hath Naka' },
      { name: 'Vartak Nagar & Pokharan Road 1', proximityNote: 'Accessible via Nitin Company & Panch Pakhadi stretch' },
    ],
    directionsList: [
      'From Vartak Nagar / Pokharan Road 1: Travel south past Nitin Company Junction toward Cadbury / Teen Hath Naka service road onto L.B.S. Marg.',
      'From Wagle Estate / Road No. 22: Head east toward Teen Hath Naka junction and turn toward Tip Top Plaza at Dev Milan CHS Ltd.',
      'From Majiwada / Kapurbawdi / Manpada: Take the Eastern Express Highway straight south to Teen Hath Naka exit.',
    ],
    nearbyAreasServed: [
      'Panch Pakhadi',
      'Wagle Estate',
      'Vartak Nagar',
      'Majiwada',
      'Kapurbawdi',
      'Manpada',
      'Louis Wadi',
      'Nitin Company',
    ],
    featuredServiceSlugs: [
      'deep-tissue-massage-thane',
      'relaxing-back-massage-thane',
      'full-body-oil-massage-thane',
      'four-hand-massage-thane',
      'full-body-massage-body-scrub-thane',
      'foot-reflexology-thane',
    ],
    faqs: [
      {
        question: 'Is Austin Spa Thane West suitable for men seeking professional muscle recovery?',
        answer:
          'Yes. Working men and athletes from Thane West frequently visit for Deep Muscle Recovery Therapy, Traditional Thai Massage, and Serenity Back Relaxation in a strictly professional environment.',
      },
      {
        question: 'Can I book a same-day evening slot after office hours in Wagle Estate?',
        answer:
          'Yes, subject to slot availability. Calling +91 91528 44124 mid-afternoon helps reserve your preferred evening hour.',
      },
      {
        question: 'Do you offer scrub or Jacuzzi upgrades in Thane West?',
        answer:
          'Yes, full-body exfoliation scrubs and private Jacuzzi-paired packages are available by prior reservation.',
      },
    ],
  },
  {
    slug: 'teen-hath-naka-thane',
    title: 'Spa Near Teen Hath Naka',
    h1: 'Spa Near Teen Hath Naka & Tip Top Plaza, Thane West',
    metaTitle: 'Spa Near Teen Hath Naka & Tip Top Plaza | Austin Spa Thane',
    metaDescription:
      'Austin Spa is steps away from Tip Top Plaza and Teen Hath Naka Flyover on LBS Marg, Thane West. Book calming Thai, Swedish, Deep Tissue & Reflexology sessions.',
    areaLabel: 'Teen Hath Naka & Tip Top Plaza',
    heroImage: SPA_IMAGES.coupleSanctuary,
    heroImageAlt: 'Calm private couple and solo treatment sanctuary near Teen Hath Naka Flyover',
    introduction:
      'Teen Hath Naka is the unmistakable gateway connecting Mulund, Mumbai, and central Thane. Just steps from Tip Top Plaza inside Dev Milan CHS Ltd., Austin Spa gives commuters, hotel visitors, and local residents an immediate haven of botanical quiet right beside Thane’s busiest flyover.',
    localContext: [
      'If you are staying near Tip Top Plaza for a wedding celebration, attending conferences in Teen Hath Naka, or simply tired after navigating peak-hour traffic on the Eastern Express Highway, our 1st-floor sanctuary turns a stressful junction into an effortless wellness pause.',
      'Guests attending family events nearby often book express Head & Scalp Relaxation, Sole Harmony Reflexology, or full-body Scrub & Massage rituals to refresh before or after celebrations.',
    ],
    landmarks: [
      { name: 'Tip Top Plaza Banquet & Hotel', proximityNote: 'Walking distance — adjacent landmark on L.B.S. Marg' },
      { name: 'Teen Hath Naka Flyover', proximityNote: 'Located right off the flyover service lane' },
      { name: 'Hariniwas Circle', proximityNote: '2–3 minutes inward toward Naupada' },
      { name: 'Mulund Check Naka', proximityNote: 'Approx. 5 minutes north along L.B.S. Marg' },
    ],
    directionsList: [
      'Walking from Tip Top Plaza: Step out onto L.B.S. Marg toward Dev Milan CHS Ltd.; Austin Spa is on the 1st Floor (Commercial Premises 102-A & 103-A).',
      'Coming off Teen Hath Naka Flyover: Take the L.B.S. Marg slip lane alongside Tip Top Plaza.',
      'Arriving from Mulund Check Naka: Follow L.B.S. Marg northward straight to Teen Hath Naka junction.',
    ],
    nearbyAreasServed: [
      'Teen Hath Naka',
      'Tip Top Plaza Vicinity',
      'Louis Wadi',
      'Hariniwas Circle',
      'Mulund Border',
      'Kopri',
    ],
    featuredServiceSlugs: [
      'foot-reflexology-thane',
      'head-scalp-massage-thane',
      'relaxing-back-massage-thane',
      'four-hand-couples-jacuzzi-thane',
      'thai-massage-body-scrub-thane',
      'heritage-womens-signature-therapy-thane',
    ],
    faqs: [
      {
        question: 'How close is Austin Spa to Tip Top Plaza?',
        answer:
          'We are located right next to Tip Top Plaza at Commercial Premises 102-A & 103-A, 1st Floor, Dev Milan CHS Ltd. on L.B.S. Marg.',
      },
      {
        question: 'Do you offer quick 30–45 minute tired-feet or back sessions for wedding guests nearby?',
        answer:
          'Yes—Sole Harmony Reflexology, Head & Scalp Massage, and Serenity Back Relaxation are popular express choices for guests staying or attending events around Teen Hath Naka.',
      },
      {
        question: 'How can I confirm directions before reaching Dev Milan CHS Ltd.?',
        answer:
          'Simply call +91 91528 44124 or open our verified Google Maps link on the Contact page for live turn-by-turn navigation.',
      },
    ],
  },
  {
    slug: 'naupada-thane',
    title: 'Spa Near Naupada & Thane Station',
    h1: 'Massage Centre Serving Naupada, Thane Station & Panch Pakhadi',
    metaTitle: 'Spa Near Naupada & Thane Railway Station | Austin Spa Thane',
    metaDescription:
      'Minutes from Naupada, Thane Railway Station, Charai, Kopri & Panch Pakhadi. Visit Austin Spa near Teen Hath Naka for relaxing oil, Thai & reflexology care.',
    areaLabel: 'Naupada, Thane Station & Central Thane',
    heroImage: SPA_IMAGES.reflexologyLounge,
    heroImageAlt: 'Relaxing foot reflexology and wellness lounge serving Naupada and Thane Station guests',
    introduction:
      'Residents of Naupada, Tembhi Naka, Charai, Kopri, and commuters stepping off Central Railway trains at Thane Station frequently search for a calm, dependable spa just outside the station congestion. Located a quick auto ride down L.B.S. Marg near Teen Hath Naka, Austin Spa welcomes central Thane guests daily.',
    localContext: [
      'Walking through crowded market lanes around Gokhale Road and Station Road can make parking or acoustic quiet hard to find. By locating slightly west along L.B.S. Marg at Dev Milan CHS Ltd., Austin Spa gives Naupada, Charai, and Kopri guests peaceful 1st-floor privacy without sacrificing quick 5–10 minute travel access.',
      'Commuters finishing train journeys from CSMT, Dadar, or Kalyan often book Sole Harmony Reflexology, Full Body Dry Relaxation Massage, or Classic Swedish Massage to unwind before heading home.',
    ],
    landmarks: [
      { name: 'Thane Railway Station (West)', proximityNote: 'Approx. 5–8 minutes via Gokhale Road & Hariniwas Circle' },
      { name: 'Gokhale Road & Naupada Market', proximityNote: 'Quick ride west toward Teen Hath Naka / Tip Top Plaza' },
      { name: 'Panch Pakhadi & Tembhi Naka', proximityNote: '5 minutes via Almeida Road / L.B.S. Marg' },
      { name: 'Charai & Kopri Bridge', proximityNote: 'Easy cross-station access via Eastern Express Highway or Station Road' },
    ],
    directionsList: [
      'From Thane Railway Station (West): Exit toward Gokhale Road / Gaodevi Mandir and take a quick auto-rickshaw toward Hariniwas Circle and Tip Top Plaza on L.B.S. Marg.',
      'From Naupada / Ram Maruti Road: Head toward Hariniwas Circle and merge onto L.B.S. Marg toward Teen Hath Naka Flyover.',
      'From Kopri (Thane East): Cross the Kopri bridge or station flyover onto L.B.S. Marg / Teen Hath Naka service road.',
    ],
    nearbyAreasServed: [
      'Naupada',
      'Thane Railway Station',
      'Panch Pakhadi',
      'Charai',
      'Tembhi Naka',
      'Kopri (Thane East)',
      'Gokhale Road',
    ],
    featuredServiceSlugs: [
      'foot-reflexology-thane',
      'full-body-dry-massage-thane',
      'swedish-massage-thane',
      'thai-massage-thane',
      'lomi-lomi-massage-thane',
      'head-scalp-massage-thane',
    ],
    faqs: [
      {
        question: 'How long does it take to reach Austin Spa from Thane Railway Station?',
        answer:
          'Depending on evening traffic along Gokhale Road and Hariniwas Circle, an auto-rickshaw or cab typically reaches Dev Milan CHS Ltd. near Tip Top Plaza in 5 to 10 minutes.',
      },
      {
        question: 'Can train commuters book an oil-free massage before heading home to Naupada or Kopri?',
        answer:
          'Yes! Both Traditional Thai Massage and Full Body Dry Relaxation Massage are completely oil-free, with fresh loose cotton attire provided.',
      },
      {
        question: 'Is Austin Spa located inside Naupada itself?',
        answer:
          'Our verified physical branch is located at Dev Milan CHS Ltd. near Tip Top Plaza on L.B.S. Marg, Teen Hath Naka—immediately neighbouring Naupada and easily reached from Thane Station.',
      },
    ],
  },
];

export function getLocationBySlug(slug: string): LocationPageData | undefined {
  return LOCATION_PAGES.find((loc) => loc.slug === slug);
}
