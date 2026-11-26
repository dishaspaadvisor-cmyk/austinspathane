import { MapPin, MessageCircle, Phone } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { AccordionFAQ } from '../components/common/AccordionFAQ';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SafeImage } from '../components/common/SafeImage';
import { SeoHead } from '../components/seo/SeoHead';
import { ServiceCard } from '../components/services/ServiceCard';
import { BUSINESS_INFO, buildWhatsAppUrl } from '../data/businessInfo';
import { getRelatedServices, getServiceBySlug } from '../data/services';
import { buildBreadcrumbSchema, buildFaqSchema, buildServiceSchema } from '../lib/seo';
import { NotFoundPage } from './NotFoundPage';

export function ServiceDetailPage() {
  const { slug = '' } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug);

  if (!service) {
    return <NotFoundPage />;
  }

  const related = getRelatedServices(service);
  const breadcrumbs = [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/services/' },
    { label: service.searchableTitle },
  ];

  const whatsappText = `Hello Austin Spa Thane, I would like to enquire about ${service.searchableTitle} (${service.brandName}) at your Teen Hath Naka branch.`;

  return (
    <>
      <SeoHead
        title={service.metaTitle}
        description={service.metaDescription}
        canonicalPath={`/services/${service.slug}/`}
        schemas={[
          buildBreadcrumbSchema(breadcrumbs),
          buildServiceSchema(service),
          buildFaqSchema(service.faqs),
        ]}
      />

      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-14">
        {/* 1-4: Breadcrumbs, Hero Image, Unique H1, Introduction */}
        <div>
          <Breadcrumbs items={breadcrumbs} />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-center space-y-5">
              <p className="text-xs sm:text-sm font-medium text-[#58785D]">
                {service.category}
                <span aria-hidden="true" className="mx-2 text-[#77736D]">
                  ·
                </span>
                <span>{service.brandName}</span>
              </p>
              <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[#34332F] leading-[1.12]">
                {service.h1}
              </h1>
              <p className="text-base sm:text-lg leading-relaxed text-[#77736D]">
                {service.introduction}
              </p>
              <p className="text-sm font-medium text-[#34332F] bg-[#FDF3E7] border border-[#E9E0D6] rounded-xl px-4 py-3">
                Session Duration &amp; Slot Status: {service.durationNote}
              </p>

              <div className="flex flex-wrap gap-3 pt-1">
                <Link
                  to={`/booking/?service=${service.slug}`}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-semibold text-white bg-[#E8795A] hover:bg-[#D05D3D] transition-colors whitespace-nowrap"
                >
                  Book This Treatment
                </Link>
                <a
                  href={buildWhatsAppUrl(whatsappText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-[#34332F] bg-white border border-[#8DAA91] hover:bg-[#FDF3E7] transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4 text-[#58785D]" aria-hidden="true" />
                  WhatsApp Enquiry
                </a>
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold text-[#34332F] hover:text-[#D05D3D] transition-colors whitespace-nowrap tabular-nums"
                >
                  <Phone className="w-4 h-4 text-[#58785D]" aria-hidden="true" />
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="h-full min-h-[280px] rounded-2xl overflow-hidden border border-[#E9E0D6] bg-[#FDF3E7]">
                <SafeImage
                  src={service.heroImage}
                  alt={service.heroImageAlt}
                  loading="eager"
                  fallbackTitle={service.brandName}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Main Educational Body (5-19) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-8 space-y-10">
            {/* 5 & 6 & 7 */}
            <section className="bg-white border border-[#E9E0D6] rounded-2xl p-6 sm:p-8 space-y-6">
              <div>
                <h2 className="font-display text-2xl font-semibold text-[#34332F]">
                  Detailed Treatment Overview
                </h2>
                <p className="mt-3 text-base leading-relaxed text-[#77736D]">
                  {service.detailedDescription}
                </p>
              </div>
              <div className="pt-5 border-t border-[#E9E0D6]">
                <h3 className="font-display text-xl font-semibold text-[#34332F]">
                  What Is {service.searchableTitle}?
                </h3>
                <p className="mt-2.5 text-base leading-relaxed text-[#77736D]">
                  {service.whatIsIt}
                </p>
              </div>
              <div className="pt-5 border-t border-[#E9E0D6]">
                <h3 className="font-display text-xl font-semibold text-[#34332F]">
                  Background &amp; Tradition
                </h3>
                <p className="mt-2.5 text-base leading-relaxed text-[#77736D]">
                  {service.backgroundOrigin}
                </p>
              </div>
            </section>

            {/* 8 & 9: Techniques + How Session Works */}
            <section className="bg-white border border-[#E9E0D6] rounded-2xl p-6 sm:p-8 space-y-8">
              <div>
                <h2 className="font-display text-2xl font-semibold text-[#34332F]">
                  Core Techniques Used
                </h2>
                <ul className="mt-4 space-y-2.5 text-base text-[#77736D]">
                  {service.techniques.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="text-[#58785D] font-bold mt-0.5" aria-hidden="true">
                        ·
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-[#E9E0D6]">
                <h2 className="font-display text-2xl font-semibold text-[#34332F]">
                  How Your Session Unfolds Step by Step
                </h2>
                <ol className="mt-4 space-y-3 text-base text-[#77736D]">
                  {service.sessionSteps.map((step, i) => (
                    <li key={step} className="flex items-start gap-3">
                      <span className="font-display font-semibold text-[#D05D3D] tabular-nums shrink-0">
                        0{i + 1}.
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="pt-6 border-t border-[#E9E0D6]">
                <h3 className="font-display text-xl font-semibold text-[#34332F]">
                  What You Can Expect
                </h3>
                <p className="mt-2.5 text-base leading-relaxed text-[#77736D]">
                  {service.whatToExpect}
                </p>
              </div>
            </section>

            {/* 11, 12, 13, 14: Suitability, Benefits, Limitations, Precautions */}
            <section className="bg-white border border-[#E9E0D6] rounded-2xl p-6 sm:p-8 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="font-display text-xl font-semibold text-[#34332F]">
                    Suitable Preferences
                  </h2>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[#77736D]">
                    {service.suitablePreferences.map((item) => (
                      <li key={item}>· {item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="font-display text-xl font-semibold text-[#34332F]">
                    Potential Relaxation Benefits
                  </h2>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[#77736D]">
                    {service.potentialBenefits.map((item) => (
                      <li key={item}>· {item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-[#E9E0D6] space-y-4">
                <h2 className="font-display text-xl font-semibold text-[#34332F]">
                  Wellness Limitations &amp; Precautions
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-[#77736D]">
                  <strong className="text-[#34332F] font-semibold">Scope Note:</strong> {service.limitations}
                </p>
                <ul className="space-y-2 text-sm sm:text-base text-[#77736D]">
                  {service.precautions.map((p) => (
                    <li key={p}>· {p}</li>
                  ))}
                </ul>
              </div>
            </section>

            {/* 15, 16, 17, 18: Preparation, Aftercare, Hygiene, Facilities */}
            <section className="bg-white border border-[#E9E0D6] rounded-2xl p-6 sm:p-8 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="font-display text-xl font-semibold text-[#34332F]">
                    Before Your Arrival
                  </h2>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[#77736D]">
                    {service.preparation.map((item) => (
                      <li key={item}>· {item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="font-display text-xl font-semibold text-[#34332F]">
                    Aftercare Suggestions
                  </h2>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[#77736D]">
                    {service.aftercare.map((item) => (
                      <li key={item}>· {item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-6 border-t border-[#E9E0D6] grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-display text-xl font-semibold text-[#34332F]">
                    Hygiene &amp; Privacy
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#77736D]">
                    {service.hygieneAndPrivacy}
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-[#34332F]">
                    Suite Facilities
                  </h3>
                  <ul className="mt-2.5 space-y-1.5 text-sm text-[#77736D]">
                    {service.availableFacilities.map((fac) => (
                      <li key={fac}>· {fac}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* 20: FAQs */}
            <section className="bg-white border border-[#E9E0D6] rounded-2xl p-6 sm:p-8">
              <AccordionFAQ
                items={service.faqs}
                title={`Frequently Asked Questions: ${service.brandName}`}
              />
            </section>
          </div>

          {/* 22, 23, 24: Branch Details + Quick Booking Sidebar */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            <div className="bg-white border border-[#E9E0D6] rounded-2xl p-6 space-y-4">
              <p className="text-xs font-medium text-[#58785D]">Austin Spa Thane Branch</p>
              <h2 className="font-display text-xl font-semibold text-[#34332F]">
                Reserve {service.brandName}
              </h2>
              <p className="text-sm text-[#77736D] leading-relaxed">
                Confirm available suite slots, session duration, and tariff directly with our reception desk.
              </p>
              <div className="space-y-2.5 text-sm text-[#34332F] pt-2 border-t border-[#E9E0D6]">
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#58785D] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{BUSINESS_INFO.address.fullFormatted}</span>
                </p>
                <p className="text-xs text-[#77736D]">{BUSINESS_INFO.openingHours.summary}</p>
              </div>
              <div className="space-y-2.5 pt-2">
                <Link
                  to={`/booking/?service=${service.slug}`}
                  className="flex items-center justify-center w-full py-3 px-5 rounded-lg text-sm font-semibold text-white bg-[#E8795A] hover:bg-[#D05D3D] transition-colors"
                >
                  Request Appointment Slot
                </Link>
                <a
                  href={buildWhatsAppUrl(whatsappText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 px-5 rounded-lg text-sm font-semibold text-[#34332F] bg-[#FFF8F0] border border-[#8DAA91] hover:bg-[#FDF3E7] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#58785D]" aria-hidden="true" />
                  WhatsApp Reception
                </a>
                <a
                  href={BUSINESS_INFO.phoneHref}
                  className="flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-[#34332F] hover:text-[#D05D3D] tabular-nums"
                >
                  <Phone className="w-4 h-4 text-[#58785D]" aria-hidden="true" />
                  {BUSINESS_INFO.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="bg-[#FDF3E7] border border-[#E9E0D6] rounded-2xl p-6 space-y-3 text-sm">
              <h3 className="font-display text-lg font-semibold text-[#34332F]">Nearby Thane Guides</h3>
              <ul className="space-y-2 text-[#58785D] font-medium">
                <li>
                  <Link to="/locations/teen-hath-naka-thane/" className="hover:text-[#D05D3D]">
                    Spa Near Teen Hath Naka →
                  </Link>
                </li>
                <li>
                  <Link to="/locations/thane-west/" className="hover:text-[#D05D3D]">
                    Austin Spa Thane West →
                  </Link>
                </li>
                <li>
                  <Link to="/locations/naupada-thane/" className="hover:text-[#D05D3D]">
                    Naupada &amp; Thane Station Guide →
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>

        {/* 21: Related Services */}
        {related.length > 0 && (
          <section className="pt-8 border-t border-[#E9E0D6]">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#34332F] mb-6">
              Related Treatments at Austin Spa Thane
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((rel) => (
                <ServiceCard key={rel.id} service={rel} />
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}
