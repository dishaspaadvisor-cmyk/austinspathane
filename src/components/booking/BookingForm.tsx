import { CheckCircle2, MessageCircle, Phone } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { BUSINESS_INFO, buildWhatsAppUrl } from '../../data/businessInfo';
import { getApprovedServices } from '../../data/services';

interface BookingFormProps {
  defaultServiceSlug?: string;
  compact?: boolean;
  source?: string;
}

export function BookingForm({
  defaultServiceSlug = '',
  compact = false,
  source = 'Website Booking Form',
}: BookingFormProps) {
  const services = getApprovedServices();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceSlug, setServiceSlug] = useState(defaultServiceSlug || services[0]?.slug || '');
  const [date, setDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('Evening (4:00 PM – 8:00 PM)');
  const [guests, setGuests] = useState('1 Guest');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submittedSummary, setSubmittedSummary] = useState<{
    referenceId: string;
    whatsappUrl: string;
    serviceName: string;
  } | null>(null);

  const selectedService = services.find((s) => s.slug === serviceSlug);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError('');

    const cleanedPhone = phone.replace(/[^\d+]/g, '');
    if (name.trim().length < 2) {
      setError('Please enter your name (at least 2 characters).');
      return;
    }
    if (cleanedPhone.length < 10) {
      setError('Please enter a valid 10-digit Indian mobile or phone number.');
      return;
    }
    if (!date) {
      setError('Please select your preferred appointment date.');
      return;
    }

    const chosenLabel = selectedService
      ? `${selectedService.searchableTitle} (${selectedService.brandName})`
      : 'General Spa Consultation';

    const whatsappSummary = `Hello Austin Spa Thane, I submitted a booking enquiry:\nName: ${name.trim()}\nPhone: ${phone.trim()}\nTreatment: ${chosenLabel}\nDate: ${date}\nTime: ${preferredTime}\nGuests: ${guests}${
      message.trim() ? `\nNotes: ${message.trim()}` : ''
    }`;

    setSubmitting(true);
    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          service: chosenLabel,
          date,
          preferredTime,
          guests,
          message: message.trim(),
          source,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data?.error || 'Could not record enquiry right now.');
      }
      setSubmittedSummary({
        referenceId: data.referenceId || 'AST-ENQ',
        whatsappUrl: buildWhatsAppUrl(whatsappSummary),
        serviceName: chosenLabel,
      });
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Unable to submit form right now. Please call +91 91528 44124 directly.'
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (submittedSummary) {
    return (
      <div className="bg-white border border-[#8DAA91] rounded-2xl p-6 sm:p-8 space-y-5">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="w-6 h-6 text-[#58785D] shrink-0 mt-0.5" aria-hidden="true" />
          <div>
            <h3 className="font-display text-xl font-semibold text-[#34332F]">
              Booking Enquiry Received
            </h3>
            <p className="text-sm text-[#77736D] mt-1">
              Reference <span className="font-medium text-[#34332F] tabular-nums">{submittedSummary.referenceId}</span> for{' '}
              <span className="font-medium text-[#34332F]">{submittedSummary.serviceName}</span>.
            </p>
          </div>
        </div>
        <p className="text-sm leading-relaxed text-[#77736D]">
          Room allocation, therapist pairing, and exact slot duration are confirmed directly by our Teen Hath Naka reception desk. For immediate slot confirmation, send your request on WhatsApp or call us now.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={submittedSummary.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#E8795A] hover:bg-[#D05D3D] transition-colors whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" aria-hidden="true" />
            Send Details on WhatsApp
          </a>
          <a
            href={BUSINESS_INFO.phoneHref}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-[#34332F] bg-[#FFF8F0] border border-[#8DAA91] hover:bg-[#FDF3E7] transition-colors whitespace-nowrap tabular-nums"
          >
            <Phone className="w-4 h-4 text-[#58785D]" aria-hidden="true" />
            Call {BUSINESS_INFO.phoneDisplay}
          </a>
          <button
            type="button"
            onClick={() => setSubmittedSummary(null)}
            className="px-4 py-2.5 text-sm font-medium text-[#77736D] hover:text-[#34332F] cursor-pointer"
          >
            Submit another enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`bg-white border border-[#E9E0D6] rounded-2xl ${compact ? 'p-6' : 'p-6 sm:p-8'} space-y-5`}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="booking-name" className="block text-sm font-medium text-[#34332F] mb-1.5">
            Full Name <span className="text-[#D05D3D]">*</span>
          </label>
          <input
            id="booking-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className="w-full px-3.5 py-2.5 rounded-lg border border-[#E9E0D6] bg-[#FFF8F0]/40 text-sm text-[#34332F] focus:border-[#E8795A]"
          />
        </div>
        <div>
          <label htmlFor="booking-phone" className="block text-sm font-medium text-[#34332F] mb-1.5">
            Phone / WhatsApp Number <span className="text-[#D05D3D]">*</span>
          </label>
          <input
            id="booking-phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="+91 98XXX XXXXX"
            className="w-full px-3.5 py-2.5 rounded-lg border border-[#E9E0D6] bg-[#FFF8F0]/40 text-sm text-[#34332F] tabular-nums focus:border-[#E8795A]"
          />
        </div>
      </div>

      <div>
        <label htmlFor="booking-service" className="block text-sm font-medium text-[#34332F] mb-1.5">
          Preferred Treatment
        </label>
        <select
          id="booking-service"
          value={serviceSlug}
          onChange={(e) => setServiceSlug(e.target.value)}
          className="w-full px-3.5 py-2.5 rounded-lg border border-[#E9E0D6] bg-[#FFF8F0]/40 text-sm text-[#34332F] focus:border-[#E8795A]"
        >
          {services.map((srv) => (
            <option key={srv.slug} value={srv.slug}>
              {srv.searchableTitle} — {srv.brandName}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label htmlFor="booking-date" className="block text-sm font-medium text-[#34332F] mb-1.5">
            Appointment Date <span className="text-[#D05D3D]">*</span>
          </label>
          <input
            id="booking-date"
            type="date"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-lg border border-[#E9E0D6] bg-[#FFF8F0]/40 text-sm text-[#34332F] tabular-nums focus:border-[#E8795A]"
          />
        </div>
        <div>
          <label htmlFor="booking-time" className="block text-sm font-medium text-[#34332F] mb-1.5">
            Preferred Time
          </label>
          <select
            id="booking-time"
            value={preferredTime}
            onChange={(e) => setPreferredTime(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-lg border border-[#E9E0D6] bg-[#FFF8F0]/40 text-sm text-[#34332F] focus:border-[#E8795A]"
          >
            <option>Morning (10:00 AM – 1:00 PM)</option>
            <option>Afternoon (1:00 PM – 4:00 PM)</option>
            <option>Evening (4:00 PM – 8:00 PM)</option>
            <option>Late Evening (8:00 PM – 10:30 PM)</option>
          </select>
        </div>
        <div>
          <label htmlFor="booking-guests" className="block text-sm font-medium text-[#34332F] mb-1.5">
            Number of Guests
          </label>
          <select
            id="booking-guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-lg border border-[#E9E0D6] bg-[#FFF8F0]/40 text-sm text-[#34332F] focus:border-[#E8795A]"
          >
            <option>1 Guest</option>
            <option>2 Guests (Couple Suite)</option>
            <option>2 Guests (Separate Rooms)</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="booking-message" className="block text-sm font-medium text-[#34332F] mb-1.5">
          Pressure Preference or Special Notes
        </label>
        <textarea
          id="booking-message"
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Share preferred pressure (light/medium/firm), therapist preference, or any sore areas..."
          className="w-full px-3.5 py-2.5 rounded-lg border border-[#E9E0D6] bg-[#FFF8F0]/40 text-sm text-[#34332F] focus:border-[#E8795A]"
        />
      </div>

      {error && (
        <p role="alert" className="text-sm font-medium text-[#B83E20] bg-[#FDF1ED] border border-[#E8795A]/40 rounded-lg px-3.5 py-2.5">
          {error}
        </p>
      )}

      <div className="flex flex-wrap items-center gap-3 pt-1">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-semibold text-white bg-[#E8795A] hover:bg-[#D05D3D] disabled:opacity-60 transition-colors cursor-pointer whitespace-nowrap"
        >
          {submitting ? 'Sending Enquiry...' : 'Request Appointment Slot'}
        </button>
        <a
          href={BUSINESS_INFO.phoneHref}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-[#34332F] bg-white border border-[#8DAA91] hover:bg-[#FFF8F0] transition-colors whitespace-nowrap tabular-nums"
        >
          <Phone className="w-4 h-4 text-[#58785D]" aria-hidden="true" />
          Call {BUSINESS_INFO.phoneDisplay}
        </a>
      </div>
    </form>
  );
}
