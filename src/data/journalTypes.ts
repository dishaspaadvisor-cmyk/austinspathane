import { FAQItem } from './faqs';

export interface JournalSection {
  heading: string;
  subheading?: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface JournalPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: 'Modality Guides' | 'Comparisons' | 'First Visit & Hygiene' | 'Local Thane Guides';
  publishedDate: string;
  updatedDate: string;
  readTime: string;
  author: string;
  heroImage: string;
  heroImageAlt: string;
  introduction: string;
  sections: JournalSection[];
  relatedServiceSlugs: string[];
  relatedLocationSlug: string;
  faqs: FAQItem[];
}
