import { SPA_IMAGES } from './businessInfo';

export type GalleryCategory =
  | 'All'
  | 'Spa Interior'
  | 'Reception'
  | 'Massage Rooms'
  | 'Treatment Areas'
  | 'Relaxation Ambience'
  | 'Facilities'
  | 'Jacuzzi';

export interface GalleryItem {
  id: string;
  title: string;
  category: Exclude<GalleryCategory, 'All'>;
  image: string;
  aspect: '16:9' | '4:3';
  alt: string;
  caption: string;
  sourceDisclosure: 'Illustrative Preview';
}

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  'All',
  'Spa Interior',
  'Reception',
  'Massage Rooms',
  'Treatment Areas',
  'Relaxation Ambience',
  'Facilities',
  'Jacuzzi',
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-reception-lounge',
    title: 'Sunlit Botanical Reception & Guest Lounge',
    category: 'Reception',
    image: SPA_IMAGES.heroReception,
    aspect: '16:9',
    alt: 'Bright botanical spa reception lounge with warm travertine desk, teak wood accents, and indoor palms',
    caption:
      'Welcoming guest arrival zone designed around warm cream travertine, soft linen seating, and indoor greenery for calm pre-session check-in.',
    sourceDisclosure: 'Illustrative Preview',
  },
  {
    id: 'gal-oil-therapy-suite',
    title: 'Aromatic Oil & Swedish Therapy Suite',
    category: 'Massage Rooms',
    image: SPA_IMAGES.oilRitual,
    aspect: '4:3',
    alt: 'Massage suite with cream cotton linens, amber essential oil glass bottles, eucalyptus sprigs, and daylight drapes',
    caption:
      'Private single-guest therapy room prepared with fresh laundered organic cotton linens, botanical oils, and diffused natural light.',
    sourceDisclosure: 'Illustrative Preview',
  },
  {
    id: 'gal-thai-mat-room',
    title: 'Dedicated Dry Thai Stretching Suite',
    category: 'Treatment Areas',
    image: SPA_IMAGES.thaiSuite,
    aspect: '4:3',
    alt: 'Private Thai massage room with wide cushioned floor mat, sage woven textiles, teak wall slats, and ceramic aroma diffuser',
    caption:
      'Floor-level cushioned therapy mat setup tailored for assisted stretching, acupressure, and dry traditional Thai bodywork.',
    sourceDisclosure: 'Illustrative Preview',
  },
  {
    id: 'gal-couple-sanctuary',
    title: 'Private Couple & Four-Hand Suite',
    category: 'Spa Interior',
    image: SPA_IMAGES.coupleSanctuary,
    aspect: '16:9',
    alt: 'Spacious dual-bed couple massage room with matching cream linen tables, botanical sage throws, and travertine walls',
    caption:
      'Dual-table sanctuary arranged for synchronized couples rituals and side-by-side relaxation sessions with quiet acoustic privacy.',
    sourceDisclosure: 'Illustrative Preview',
  },
  {
    id: 'gal-jacuzzi-hydrotherapy',
    title: 'Warm Travertine Jacuzzi Suite',
    category: 'Jacuzzi',
    image: SPA_IMAGES.hydroJacuzzi,
    aspect: '4:3',
    alt: 'Private spa hydrotherapy jacuzzi suite crafted in travertine stone and cedar wood with folded sage towels',
    caption:
      'Private hydrotherapy soaking suite paired with warm stone finishes and fresh sage cotton bath linens (subject to suite slot availability).',
    sourceDisclosure: 'Illustrative Preview',
  },
  {
    id: 'gal-reflexology-corner',
    title: 'Foot Reflexology & Scalp Care Lounge',
    category: 'Relaxation Ambience',
    image: SPA_IMAGES.reflexologyLounge,
    aspect: '4:3',
    alt: 'Calm foot reflexology lounge chair with warm wooden foot soak basin, rolled sage towels, and herbal tea service',
    caption:
      'Seated relaxation corner dedicated to targeted sole reflexology, warm water foot soaks, and unhurried post-session rest.',
    sourceDisclosure: 'Illustrative Preview',
  },
  {
    id: 'gal-sanitation-linens',
    title: 'Fresh Linen & Treatment Preparation',
    category: 'Facilities',
    image: SPA_IMAGES.oilRitual,
    aspect: '4:3',
    alt: 'Clean spa linen towels and sealed essential oil glass bottles arranged on a teak preparation tray',
    caption:
      'Single-use hygiene preparation and fresh-per-guest linen turnover maintained between every appointment.',
    sourceDisclosure: 'Illustrative Preview',
  },
  {
    id: 'gal-botanical-corridor',
    title: 'Calm Botanical Sanctuary Atmosphere',
    category: 'Spa Interior',
    image: SPA_IMAGES.heroReception,
    aspect: '16:9',
    alt: 'Quiet sunlit wellness sanctuary hallway framed in timber beams and indoor foliage',
    caption:
      'Unhurried transition from the bustle of L.B.S. Marg and Teen Hath Naka into a quiet, light-filled interior.',
    sourceDisclosure: 'Illustrative Preview',
  },
];
