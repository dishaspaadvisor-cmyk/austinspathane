import { Clock, Mail, MapPin, MessageCircle, Navigation, Phone } from 'lucide-react';
import { BookingForm } from '../components/booking/BookingForm';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/seo/SeoHead';
import { BUSINESS_INFO, buildWhatsAppUrl } from '../data/businessInfo';
import { buildBreadcrumbSchema, buildLocalBusinessSchema } from '../lib/seo';

export function ContactPage() {
  const breadcrumbs = [{ label: 'Home', to: '/' }, { label: 'Contact' }];

  return (
    <>
      <SeoHead
        title="Contact Austin Spa Thane – Address, Phone, Hours & Directions"
        description="Contact Austin Spa Thane at Dev Milan CHS Ltd., Near Tip Top Plaza, LBS Marg, Teen Hath Naka, Thane West. Call +91 91528 44124 or message on WhatsApp."
        canonicalPath="/contact/"
        schemas={[buildBreadcrumbSchema(breadcrumbs), buildLocalBusinessSchema()]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-12">
        <div>
          <Breadcrumbs items={breadcrumbs} />
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-medium text-[#58785D]">Reach Our Reception Desk</p>
            <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[#34332F]">
              Contact &amp; Directions — Austin Spa Thane
            </h1>
            <p className="text-base leading-relaxed text-[#77736D]">
              Speak directly with our Teen Hath Naka reception desk to check available treatment slots, session lengths, or couple suite availability.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-[#E9E0D6] rounded-2xl p-6 sm:p-7 space-y-5">
              <h2 className="font-display text-2xl font-semibold text-[#34332F]">
                {BUSINESS_INFO.legalBrandLabel}
              </h2>

              <div className="space-y-4 text-sm text-[#34332F]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#58785D] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-medium">Verified Address</p>
                    <p className="mt-0.5 text-[#77736D] leading-relaxed">
                      {BUSINESS_INFO.address.fullFormatted}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#58785D] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-medium">Phone &amp; Bookings</p>
                    <a
                      href={BUSINESS_INFO.phoneHref}
                      className="mt-0.5 inline-block text-[#D05D3D] font-semibold hover:underline tabular-nums"
                    >
                      {BUSINESS_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#58785D] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a
                      href={`mailto:${BUSINESS_INFO.email}`}
                      className="mt-0.5 inline-block text-[#77736D] hover:text-[#D05D3D]"
                    >
                      {BUSINESS_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#58785D] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-medium">Operating Hours</p>
                    <p className="mt-0.5 text-[#77736D]">{BUSINESS_INFO.openingHours.summary}</p>
                    <p className="mt-1 text-xs text-[#77736D]">
                      {BUSINESS_INFO.openingHours.verificationNote}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-3 flex flex-wrap gap-3">
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#E8795A] hover:bg-[#D05D3D] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  WhatsApp Now
                </a>
                <a
                  href={BUSINESS_INFO.maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-[#34332F] bg-[#FFF8F0] border border-[#8DAA91] hover:bg-[#FDF3E7]"
                >
                  <Navigation className="w-4 h-4 text-[#58785D]" aria-hidden="true" />
                  Get Directions
                </a>
              </div>
            </div>

            <div className="bg-white border border-[#E9E0D6] rounded-2xl overflow-hidden">
              <iframe
                title="Austin Spa Thane Google Maps"
                src={BUSINESS_INFO.maps.embedQueryUrl}
                loading="lazy"
                className="w-full h-72 border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <h2 className="font-display text-2xl font-semibold text-[#34332F]">
              Send an Enquiry or Slot Request
            </h2>
            <p className="text-sm text-[#77736D]">
              All fields are validated and routed securely—we do not display external pricing estimates online, as reception confirms exact slot durations and applicable tariffs directly.
            </p>
            <BookingForm source="Contact Page" />
          </div>
        </div>
      </div>
    </>
  );
}
