import { Check, MapPin, Phone } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { BookingForm } from '../components/booking/BookingForm';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/seo/SeoHead';
import { BUSINESS_INFO } from '../data/businessInfo';
import { buildBreadcrumbSchema, buildLocalBusinessSchema } from '../lib/seo';

export function BookingPage() {
  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get('service') || '';
  const breadcrumbs = [{ label: 'Home', to: '/' }, { label: 'Booking' }];

  return (
    <>
      <SeoHead
        title="Book a Spa Appointment in Thane West | Austin Spa Thane"
        description="Reserve your massage, body scrub, or Jacuzzi ritual at Austin Spa Thane near Teen Hath Naka & Tip Top Plaza. Call +91 91528 44124 or submit an online enquiry."
        canonicalPath="/booking/"
        schemas={[buildBreadcrumbSchema(breadcrumbs), buildLocalBusinessSchema()]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
        <div>
          <Breadcrumbs items={breadcrumbs} />
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-medium text-[#58785D]">Appointment Request</p>
            <h1 className="font-display text-3xl sm:text-5xl font-semibold text-[#34332F]">
              Reserve Your Session at Austin Spa Thane
            </h1>
            <p className="text-base leading-relaxed text-[#77736D]">
              Select your preferred treatment, date, and time window below. Our reception desk confirms room readiness, therapist pairing, and applicable tariff directly.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-8">
            <BookingForm defaultServiceSlug={serviceParam} source="Booking Page" />
          </div>

          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-white border border-[#E9E0D6] rounded-2xl p-6 space-y-4">
              <h2 className="font-display text-xl font-semibold text-[#34332F]">
                Before You Arrive
              </h2>
              <ul className="space-y-3 text-sm text-[#77736D]">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#58785D] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Arrive 10 minutes early for calm consultation and fresh room check-in.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#58785D] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Couples, Four-Hand, and Jacuzzi suites require advance booking for sanitization and therapist coordination.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-[#58785D] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Men, women, and couples welcome under strictly professional wellness guidelines.</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#FDF3E7] border border-[#E9E0D6] rounded-2xl p-6 space-y-3 text-sm">
              <h2 className="font-display text-lg font-semibold text-[#34332F]">
                Teen Hath Naka Branch
              </h2>
              <p className="flex items-start gap-2 text-[#77736D]">
                <MapPin className="w-4 h-4 text-[#58785D] shrink-0 mt-0.5" aria-hidden="true" />
                <span>{BUSINESS_INFO.address.fullFormatted}</span>
              </p>
              <a
                href={BUSINESS_INFO.phoneHref}
                className="inline-flex items-center gap-2 font-semibold text-[#D05D3D] tabular-nums"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                {BUSINESS_INFO.phoneDisplay}
              </a>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
