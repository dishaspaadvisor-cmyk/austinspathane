export interface NavItem {
  label: string;
  to: string;
}

export const HEADER_NAV_ITEMS: NavItem[] = [
  { label: 'Services', to: '/services/' },
  { label: 'Locations', to: '/locations/' },
  { label: 'Gallery', to: '/gallery/' },
  { label: 'Journal', to: '/journal/' },
  { label: 'About', to: '/about/' },
];

export const FOOTER_COLUMNS = {
  treatments: [
    { label: 'All 24 Treatments', to: '/services/' },
    { label: 'Thai Massage in Thane', to: '/services/thai-massage-thane/' },
    { label: 'Deep Tissue Massage', to: '/services/deep-tissue-massage-thane/' },
    { label: 'Swedish Massage', to: '/services/swedish-massage-thane/' },
    { label: 'Balinese Massage', to: '/services/balinese-massage-thane/' },
    { label: 'Couples & Four-Hand Suites', to: '/services/four-hand-couples-signature-thane/' },
  ],
  locations: [
    { label: 'Thane Branch Overview', to: '/locations/' },
    { label: 'Austin Spa Thane', to: '/locations/thane/' },
    { label: 'Austin Spa Thane West', to: '/locations/thane-west/' },
    { label: 'Spa Near Teen Hath Naka', to: '/locations/teen-hath-naka-thane/' },
    { label: 'Naupada & Thane Station', to: '/locations/naupada-thane/' },
  ],
  explore: [
    { label: 'About Austin Spa', to: '/about/' },
    { label: 'Sanctuary Gallery', to: '/gallery/' },
    { label: 'Wellness Journal', to: '/journal/' },
    { label: 'Book Appointment', to: '/booking/' },
    { label: 'Contact & Directions', to: '/contact/' },
    { label: 'SEO & Keyword Strategy', to: '/seo-research/' },
  ],
  legal: [
    { label: 'Privacy Policy', to: '/privacy-policy/' },
    { label: 'Terms & Conditions', to: '/terms-and-conditions/' },
    { label: 'Cancellation Policy', to: '/cancellation-policy/' },
    { label: 'HTML Sitemap', to: '/sitemap/' },
  ],
};
