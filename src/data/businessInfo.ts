export interface BusinessInfo {
  brandName: string;
  legalBrandLabel: string;
  primaryDomain: string;
  legacyDomain: string;
  phoneDisplay: string;
  phoneHref: string;
  whatsappNumber: string;
  email: string;
  address: {
    line1: string;
    line2: string;
    landmark: string;
    road: string;
    locality: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    fullFormatted: string;
  };
  openingHours: {
    summary: string;
    days: string;
    opens: string;
    closes: string;
    verificationNote: string;
  };
  maps: {
    directionsUrl: string;
    embedQueryUrl: string;
    coordinatesNote: string;
  };
  serviceAudience: string;
  policiesNote: string;
}

export const BUSINESS_INFO: BusinessInfo = {
  brandName: 'Austin Spa',
  legalBrandLabel: 'Austin Spa Thane',
  primaryDomain: 'https://austinspathane.in',
  legacyDomain: 'https://www.austinspa.co.in',
  phoneDisplay: '+91 91528 44124',
  phoneHref: 'tel:+919152844124',
  whatsappNumber: '919152844124',
  email: 'austinspa.thane@gmail.com',
  address: {
    line1: 'Commercial Premises 102-A & 103-A, 1st Floor',
    line2: 'Dev Milan CHS Ltd.',
    landmark: 'Near Tip Top Plaza, Teen Hath Naka Flyover',
    road: 'L.B.S. Marg',
    locality: 'Thane West',
    city: 'Thane',
    state: 'Maharashtra',
    postalCode: '400602',
    country: 'India',
    fullFormatted:
      'Commercial Premises 102-A & 103-A, 1st Floor, Dev Milan CHS Ltd., Near Tip Top Plaza, L.B.S. Marg, Teen Hath Naka Flyover, Thane West, Maharashtra 400602',
  },
  openingHours: {
    summary: 'Open Daily · 10:00 AM – 11:00 PM',
    days: 'Monday – Sunday',
    opens: '10:00',
    closes: '23:00',
    verificationNote:
      'Publicly listed daily hours; guests are encouraged to call ahead for late-evening last-slot timings and public holidays.',
  },
  maps: {
    directionsUrl:
      'https://www.google.com/maps/search/?api=1&query=Dev+Milan+CHS+Ltd+Near+Tip+Top+Plaza+LBS+Marg+Teen+Hath+Naka+Thane+West+400602',
    embedQueryUrl:
      'https://www.google.com/maps?q=Dev+Milan+CHS+Ltd+Near+Tip+Top+Plaza+LBS+Marg+Teen+Hath+Naka+Thane+West+400602&output=embed',
    coordinatesNote: 'Located off L.B.S. Marg near Teen Hath Naka Flyover and Tip Top Plaza, Thane West.',
  },
  serviceAudience: 'Professional wellness, body care, and therapeutic massage for men, women, and couples.',
  policiesNote:
    'Strictly professional non-medical wellness and relaxation spa. No Ayurvedic therapies or unapproved treatments are offered.',
};

export const SPA_IMAGES = {
  heroReception: '/src/assets/images/hero_botanical_spa_1795703390600.jpg',
  oilRitual: '/src/assets/images/treatment_oil_ritual_1795703390626.jpg',
  thaiSuite: '/src/assets/images/treatment_thai_suite_1795703390711.jpg',
  hydroJacuzzi: '/src/assets/images/treatment_hydro_jacuzzi_1795703391094.jpg',
  reflexologyLounge: '/src/assets/images/treatment_reflexology_lounge_1795703391244.jpg',
  coupleSanctuary: '/src/assets/images/spa_couple_sanctuary_1795703392202.jpg',
} as const;

export function buildWhatsAppUrl(message?: string): string {
  const defaultMsg =
    message ??
    'Hello Austin Spa Thane, I would like to enquire about booking a spa session at your Teen Hath Naka, Thane West branch.';
  return `https://wa.me/${BUSINESS_INFO.whatsappNumber}?text=${encodeURIComponent(defaultMsg)}`;
}
