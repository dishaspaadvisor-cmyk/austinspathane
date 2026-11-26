import { BUSINESS_INFO } from '../data/businessInfo';
import { FAQItem } from '../data/faqs';
import { JournalPost } from '../data/journalTypes';
import { SpaService } from '../data/serviceTypes';

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

export function buildCanonicalUrl(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${BUSINESS_INFO.primaryDomain}${normalized}`;
}

export function buildLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'DaySpa',
    '@id': `${BUSINESS_INFO.primaryDomain}/#dayspa`,
    name: BUSINESS_INFO.legalBrandLabel,
    url: `${BUSINESS_INFO.primaryDomain}/`,
    telephone: BUSINESS_INFO.phoneDisplay,
    email: BUSINESS_INFO.email,
    sameAs: [BUSINESS_INFO.legacyDomain],
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${BUSINESS_INFO.address.line1}, ${BUSINESS_INFO.address.line2}, ${BUSINESS_INFO.address.landmark}, ${BUSINESS_INFO.address.road}`,
      addressLocality: BUSINESS_INFO.address.locality,
      addressRegion: BUSINESS_INFO.address.state,
      postalCode: BUSINESS_INFO.address.postalCode,
      addressCountry: 'IN',
    },
    areaServed: [
      'Thane',
      'Thane West',
      'Teen Hath Naka',
      'Naupada',
      'Panch Pakhadi',
      'Wagle Estate',
      'Vartak Nagar',
      'Majiwada',
      'Kapurbawdi',
      'Kopri',
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: BUSINESS_INFO.openingHours.opens,
        closes: BUSINESS_INFO.openingHours.closes,
      },
    ],
  };
}

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BUSINESS_INFO.primaryDomain}/#organization`,
    name: BUSINESS_INFO.legalBrandLabel,
    url: `${BUSINESS_INFO.primaryDomain}/`,
    email: BUSINESS_INFO.email,
    telephone: BUSINESS_INFO.phoneDisplay,
    sameAs: [BUSINESS_INFO.legacyDomain],
  };
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.label,
      ...(item.to ? { item: buildCanonicalUrl(item.to) } : {}),
    })),
  };
}

export function buildServiceSchema(service: SpaService) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${service.searchableTitle} (${service.brandName})`,
    serviceType: service.searchableTitle,
    description: service.metaDescription,
    url: buildCanonicalUrl(`/services/${service.slug}/`),
    provider: {
      '@type': 'DaySpa',
      name: BUSINESS_INFO.legalBrandLabel,
      telephone: BUSINESS_INFO.phoneDisplay,
      address: {
        '@type': 'PostalAddress',
        streetAddress: `${BUSINESS_INFO.address.line1}, ${BUSINESS_INFO.address.line2}, ${BUSINESS_INFO.address.road}`,
        addressLocality: BUSINESS_INFO.address.locality,
        addressRegion: BUSINESS_INFO.address.state,
        postalCode: BUSINESS_INFO.address.postalCode,
        addressCountry: 'IN',
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'Thane',
    },
  };
}

export function buildArticleSchema(post: JournalPost) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedDate,
    dateModified: post.updatedDate,
    mainEntityOfPage: buildCanonicalUrl(`/journal/${post.slug}/`),
    author: {
      '@type': 'Organization',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: BUSINESS_INFO.legalBrandLabel,
      url: `${BUSINESS_INFO.primaryDomain}/`,
    },
  };
}

export function buildFaqSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
