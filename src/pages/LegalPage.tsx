import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { SeoHead } from '../components/seo/SeoHead';
import { BUSINESS_INFO } from '../data/businessInfo';
import { buildBreadcrumbSchema } from '../lib/seo';

interface LegalPageProps {
  type: 'privacy' | 'terms' | 'cancellation';
}

const LEGAL_COPY = {
  privacy: {
    title: 'Privacy Policy',
    path: '/privacy-policy/',
    metaTitle: 'Privacy Policy | Austin Spa Thane',
    metaDescription:
      'How Austin Spa Thane handles appointment enquiry details, phone numbers, and privacy expectations.',
    sections: [
      {
        heading: '1. Information You Provide',
        body: 'When you submit an appointment enquiry or contact request on austinspathane.in, we collect only the details you enter—such as your name, phone number, preferred treatment, date, time window, and optional comfort notes—solely to coordinate your booking at our Thane West branch.',
      },
      {
        heading: '2. Confidentiality & Third-Party Sharing',
        body: 'Austin Spa Thane does not sell, rent, or trade guest contact records to marketing brokers. Enquiry details are reviewed exclusively by our branch reception staff to confirm appointments.',
      },
      {
        heading: '3. Health & Comfort Disclosures',
        body: 'Any comfort notes or precaution disclosures shared before a massage session (such as allergies, recent injuries, or pressure preferences) are used purely to tailor safe non-medical wellness care.',
      },
      {
        heading: '4. Contact for Privacy Questions',
        body: `Questions regarding your enquiry records may be directed to ${BUSINESS_INFO.email} or ${BUSINESS_INFO.phoneDisplay}.`,
      },
    ],
  },
  terms: {
    title: 'Terms & Conditions',
    path: '/terms-and-conditions/',
    metaTitle: 'Terms & Conditions | Austin Spa Thane',
    metaDescription:
      'Professional spa code of conduct, non-medical service scope, and guest guidelines at Austin Spa Thane West.',
    sections: [
      {
        heading: '1. Strictly Professional Wellness Conduct',
        body: 'Austin Spa Thane operates strictly as a legitimate spa, massage, and body-care wellness centre for men, women, and couples. Respectful conduct from guests and staff is mandatory at all times; inappropriate requests result in immediate termination of service without refund.',
      },
      {
        heading: '2. Non-Medical Wellness Scope',
        body: 'All treatments described on this website—including Thai, Deep Tissue, Swedish, Balinese, Aromatherapy, Reflexology, Body Scrubs, and Jacuzzi soaking—are non-medical relaxation and wellness services. They do not substitute for medical diagnosis, physiotherapy, or clinical care.',
      },
      {
        heading: '3. Service Availability & Confirmation',
        body: 'Listing of treatments online is subject to suite scheduling, therapist availability, and Jacuzzi preparation windows. Exact session durations and tariffs are confirmed by reception prior to starting.',
      },
    ],
  },
  cancellation: {
    title: 'Cancellation & Rescheduling Policy',
    path: '/cancellation-policy/',
    metaTitle: 'Cancellation Policy | Austin Spa Thane',
    metaDescription:
      'Guidelines for rescheduling, late arrivals, and cancelling standard, couples, or Jacuzzi suite bookings at Austin Spa Thane.',
    sections: [
      {
        heading: '1. Advance Notice for Standard Appointments',
        body: `If your plans change, please inform reception at ${BUSINESS_INFO.phoneDisplay} at least 3 hours ahead of your slot so we can release the room cleanly for waiting guests.`,
      },
      {
        heading: '2. Couples, Four-Hand & Jacuzzi Suite Slots',
        body: 'Because Four-Hand and Jacuzzi bookings require dedicated paired therapists plus fresh draining, disinfection, and tub refilling ahead of arrival, please notify us at least 6 hours in advance to reschedule.',
      },
      {
        heading: '3. Late Arrivals',
        body: 'Arriving late may shorten your available room window if subsequent reservations are scheduled immediately afterward. Calling ahead if delayed on L.B.S. Marg or the Eastern Express Highway helps us advise the best adjustment.',
      },
    ],
  },
} as const;

export function LegalPage({ type }: LegalPageProps) {
  const doc = LEGAL_COPY[type];
  const breadcrumbs = [{ label: 'Home', to: '/' }, { label: doc.title }];

  return (
    <>
      <SeoHead
        title={doc.metaTitle}
        description={doc.metaDescription}
        canonicalPath={doc.path}
        schemas={[buildBreadcrumbSchema(breadcrumbs)]}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-8">
        <div>
          <Breadcrumbs items={breadcrumbs} />
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#34332F]">
            {doc.title}
          </h1>
          <p className="mt-2 text-sm text-[#77736D]">
            {BUSINESS_INFO.legalBrandLabel} · {BUSINESS_INFO.address.fullFormatted}
          </p>
        </div>

        <div className="bg-white border border-[#E9E0D6] rounded-2xl p-6 sm:p-8 space-y-6">
          {doc.sections.map((sec) => (
            <section key={sec.heading} className="space-y-2">
              <h2 className="font-display text-xl font-semibold text-[#34332F]">{sec.heading}</h2>
              <p className="text-sm sm:text-base leading-relaxed text-[#77736D]">{sec.body}</p>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
