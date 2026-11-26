export type AvailabilityStatus = 'approved' | 'pending_verification' | 'unavailable';

export type ServiceCategory =
  | 'Therapeutic & Muscle Care'
  | 'Traditional Dry & Stretching'
  | 'Aromatic Oil & Relaxation'
  | 'Four-Hand & Couples Suites'
  | 'Scrubs & Jacuzzi Rituals'
  | 'Targeted Express Care';

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface SpaService {
  id: string;
  order: number;
  slug: string;
  brandName: string;
  searchableTitle: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  category: ServiceCategory;
  availabilityStatus: AvailabilityStatus;
  popular?: boolean;
  heroImage: string;
  heroImageAlt: string;
  shortSummary: string;
  introduction: string;
  detailedDescription: string;
  whatIsIt: string;
  backgroundOrigin: string;
  techniques: string[];
  sessionSteps: string[];
  whatToExpect: string;
  suitablePreferences: string[];
  potentialBenefits: string[];
  limitations: string;
  precautions: string[];
  preparation: string[];
  aftercare: string[];
  hygieneAndPrivacy: string;
  availableFacilities: string[];
  durationNote: string;
  faqs: ServiceFAQ[];
  relatedSlugs: string[];
}
