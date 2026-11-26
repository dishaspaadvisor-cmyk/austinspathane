import { MessageCircle, Phone } from 'lucide-react';
import { BUSINESS_INFO, buildWhatsAppUrl } from '../../data/businessInfo';

export function FloatingActions() {
  return (
    <div className="fixed bottom-4 right-4 z-30 flex items-center gap-2.5">
      <a
        href={BUSINESS_INFO.phoneHref}
        aria-label={`Call Austin Spa Thane at ${BUSINESS_INFO.phoneDisplay}`}
        className="inline-flex items-center justify-center w-11 h-11 sm:w-auto sm:px-4 sm:py-2.5 rounded-full bg-white text-[#34332F] border border-[#8DAA91] shadow-md hover:bg-[#FFF8F0] transition-colors text-xs font-semibold whitespace-nowrap"
      >
        <Phone className="w-4 h-4 text-[#58785D] sm:mr-2" aria-hidden="true" />
        <span className="hidden sm:inline tabular-nums">Call Now</span>
      </a>
      <a
        href={buildWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message Austin Spa Thane on WhatsApp"
        className="inline-flex items-center justify-center w-11 h-11 sm:w-auto sm:px-4 sm:py-2.5 rounded-full bg-[#E8795A] text-white shadow-md hover:bg-[#D05D3D] transition-colors text-xs font-semibold whitespace-nowrap"
      >
        <MessageCircle className="w-4 h-4 sm:mr-2" aria-hidden="true" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  );
}
