import { BUSINESS_INFO, SPA_IMAGES } from './businessInfo';

export interface FirstVisitOfferConfig {
  isActive: boolean;
  delayMs: number;
  sessionStorageKey: string;
  badgeText: string;
  headingLine1: string;
  headingLine2: string;
  cardLabel: string;
  originalPrice: string;
  offerPrice: string;
  priceSubLabel: string;
  priceApprovalNote: string;
  description: string;
  supportingText: string;
  disclaimer: string;
  imageSrc: string;
  imageAlt: string;
  phoneDisplay: string;
  phoneHref: string;
  whatsappNumber: string;
  whatsappPrefillMessage: string;
}

/**
 * Centralized promotional offer configuration for Austin Spa Thane.
 * NOTE: Example pricing values (₹4,999 / ₹1,999) are configurable placeholders
 * pending final owner tariff approval. Toggle `isActive` or adjust values here.
 */
export const FIRST_VISIT_OFFER_DATA: FirstVisitOfferConfig = {
  isActive: true,
  delayMs: 15000,
  sessionStorageKey: 'austin_spa_first_visit_offer_seen_v1',
  badgeText: 'First Visit Offer',
  headingLine1: 'Get Up To',
  headingLine2: '25% Discount',
  cardLabel: 'Special Price',
  originalPrice: '₹4,999',
  offerPrice: '₹1,999',
  priceSubLabel: 'Starting From',
  priceApprovalNote: 'Indicative starter tariff placeholder — confirm applicable session pricing on call.',
  description:
    'Enjoy a relaxing spa experience at Austin Spa Thane with our exclusive first-visit offer.',
  supportingText:
    'Call or WhatsApp us to check the available offer and massage timings.',
  disclaimer:
    'Offer availability may vary. Please confirm details with the spa before visiting.',
  imageSrc: SPA_IMAGES.oilRitual,
  imageAlt:
    'Serene massage suite with warm cream linens, botanical oils, and eucalyptus at Austin Spa Thane',
  phoneDisplay: BUSINESS_INFO.phoneDisplay,
  phoneHref: BUSINESS_INFO.phoneHref,
  whatsappNumber: BUSINESS_INFO.whatsappNumber,
  whatsappPrefillMessage:
    'Hello Austin Spa Thane, I would like to know more about your first visit offer and available massage services.',
};
