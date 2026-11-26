import { MapPin, MessageCircle, Phone } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { AccordionFAQ } from '../components/common/AccordionFAQ';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SafeImage } from '../components/common/SafeImage';
import { SeoHead } from '../components/seo/SeoHead';
import { ServiceCard } from '../components/services/ServiceCard';
import { BUSINESS_INFO, buildWhatsAppUrl } from '../data/businessInfo';
import { getLocationBySlug } from '../data/locations';
import { getApprovedServices } from '../data/services';
import { buildBreadcrumbSchema, buildFaqSchema, buildLocalBusinessSchema } from '../lib/seo';
import { NotFoundPage } from './NotFoundPage';

export function LocationDetailPage() {
  const { slug = '' } = useParams<{ slug: string }>();
  const location = getLocationBySlug(slug);

  if (!location) {
    return <NotFoundPage />;
  }

  const allServices = getApprovedServices();
  const featuredServices = location.featuredServiceSlugs
    .map((sSlug) => allServices.find((srv) => srv.slug === sSlug))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Locations', to: '/locations/' },
    { label: location.title },
  ];

  return (
    <>
      <SeoHead
        title={location.metaTitle}
        description={location.metaDescription}
        canonicalPath={`/locations/${location.slug}/`}
        schemas={[
          buildBreadcrumbSchema(breadcrumbs),
          buildLocalBusinessSchema(),
          buildFaqSchema(location.faqs),
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-14">
        <div>
          <Breadcrumbs items={breadcrumbs} />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-center space-y-5">
              <p className="text-xs font-medium text-[#58785D]">{location.areaLabel}</p>
              <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[#34332F] leading-[1.12]">
                {location.h1}
              </h1>
              <p className="text-base sm:text-lg leading-relaxed text-[#77736D]">
                {location.introduction}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/booking/"
                  className="px-6 py-3 rounded-lg text-sm font-semibold text-white bg-[#E8795A] hover:bg-[#D05D3D] transition-colors"
                >
                  Book Slot at This Branch
                </Link>
                <a
                  href={BUSINESS_INFO.maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-lg text-sm font-semibold text-[#34332F] bg-white border border-[#8DAA91] hover:bg-[#FDF3E7] transition-colors"
                >
                  Open Directions
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="h-full min-h-[260px] rounded-2xl overflow-hidden border border-[#E9E0D6] bg-[#FDF3E7]">
                <SafeImage
                  src={location.heroImage}
                  alt={location.heroImageAlt}
                  loading="eager"
                  fallbackTitle={location.title}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Local Context, Landmarks & Directions */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-8">
            <div className="bg-white border border-[#E9E0D6] rounded-2xl p-6 sm:p-8 space-y-4">
              <h2 className="font-display text-2xl font-semibold text-[#34332F]">
                Why Guests Choose Our {location.areaLabel} Access
              </h2>
              {location.localContext.map((p) => (
                <p key={p} className="text-base leading-relaxed text-[#77736D]">
                  {p}
                </p>
              ))}
            </div>

            <div className="bg-white border border-[#E9E0D6] rounded-2xl p-6 sm:p-8 space-y-5">
              <h2 className="font-display text-2xl font-semibold text-[#34332F]">
                Nearby Landmarks &amp; Route Directions
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {location.landmarks.map((lm) => (
                  <div key={lm.name} className="p-4 rounded-xl bg-[#FFF8F0] border border-[#E9E0D6]">
                    <p className="font-medium text-sm text-[#34332F]">{lm.name}</p>
                    <p className="mt-1 text-xs text-[#77736D]">{lm.proximityNote}</p>
                  </div>
                ))}
              </div>
              <ul className="space-y-2.5 pt-2 text-sm sm:text-base text-[#77736D]">
                {location.directionsList.map((dir) => (
                  <li key={dir}>· {dir}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-[#E9E0D6] rounded-2xl p-6 sm:p-8">
              <h2 className="font-display text-xl font-semibold text-[#34332F] mb-3">
                Thane Neighbourhoods Served From This Branch
              </h2>
              <p className="text-sm leading-relaxed text-[#77736D]">
                {location.nearbyAreasServed.join(' · ')}
              </p>
            </div>
          </div>

          <aside className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-[#E9E0D6] rounded-2xl overflow-hidden">
              <iframe
                title={`Map for ${location.title}`}
                src={BUSINESS_INFO.maps.embedQueryUrl}
                loading="lazy"
                className="w-full h-64 border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="p-6 space-y-3 text-sm">
                <p className="flex items-start gap-2 text-[#34332F]">
                  <MapPin className="w-4 h-4 text-[#58785D] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{BUSINESS_INFO.address.fullFormatted}</span>
                </p>
                <p className="text-[#77736D]">{BUSINESS_INFO.openingHours.summary}</p>
                <div className="pt-2 flex flex-wrap gap-3">
                  <a
                    href={BUSINESS_INFO.phoneHref}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#E8795A] hover:bg-[#D05D3D] tabular-nums"
                  >
                    <Phone className="w-4 h-4" aria-hidden="true" />
                    {BUSINESS_INFO.phoneDisplay}
                  </a>
                  <a
                    href={buildWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-[#34332F] bg-[#FFF8F0] border border-[#8DAA91]"
                  >
                    <MessageCircle className="w-4 h-4 text-[#58785D]" aria-hidden="true" />
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#E9E0D6] rounded-2xl p-6">
              <AccordionFAQ items={location.faqs} title="Local Visit FAQs" />
            </div>
          </aside>
        </section>

        {/* Featured Services for this Location */}
        <section className="pt-8 border-t border-[#E9E0D6]">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#34332F] mb-6">
            Recommended Treatments Available Here
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((srv) => (
              <ServiceCard key={srv.id} service={srv} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
