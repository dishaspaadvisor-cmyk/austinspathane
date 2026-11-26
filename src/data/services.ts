import { SERVICES_PART_1 } from './servicesPart1';
import { SERVICES_PART_2 } from './servicesPart2';
import { SERVICES_PART_3 } from './servicesPart3';
import { SERVICES_PART_4 } from './servicesPart4';
import { ServiceCategory, SpaService } from './serviceTypes';

export type { AvailabilityStatus, ServiceCategory, ServiceFAQ, SpaService } from './serviceTypes';

export const ALL_SERVICES: SpaService[] = [
  ...SERVICES_PART_1,
  ...SERVICES_PART_2,
  ...SERVICES_PART_3,
  ...SERVICES_PART_4,
].sort((a, b) => a.order - b.order);

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  'Therapeutic & Muscle Care',
  'Traditional Dry & Stretching',
  'Aromatic Oil & Relaxation',
  'Four-Hand & Couples Suites',
  'Scrubs & Jacuzzi Rituals',
  'Targeted Express Care',
];

export function getApprovedServices(): SpaService[] {
  return ALL_SERVICES.filter((service) => service.availabilityStatus === 'approved');
}

export function getPopularServices(): SpaService[] {
  return getApprovedServices().filter((service) => service.popular);
}

export function getServiceBySlug(slug: string): SpaService | undefined {
  return getApprovedServices().find((service) => service.slug === slug);
}

export function getServicesByCategory(category: ServiceCategory): SpaService[] {
  return getApprovedServices().filter((service) => service.category === category);
}

export function getRelatedServices(service: SpaService): SpaService[] {
  const approved = getApprovedServices();
  return service.relatedSlugs
    .map((slug) => approved.find((s) => s.slug === slug))
    .filter((s): s is SpaService => Boolean(s));
}
