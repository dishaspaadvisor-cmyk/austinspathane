import { MessageCircle, Phone } from 'lucide-react';
import { FirstVisitOfferConfig } from '../../data/offerData';

interface OfferActionsProps {
  offer: FirstVisitOfferConfig;
  onActionClick?: () => void;
}

export function OfferActions({ offer, onActionClick }: OfferActionsProps) {
  const whatsappUrl = `https://wa.me/${offer.whatsappNumber}?text=${encodeURIComponent(
    offer.whatsappPrefillMessage
  )}`;

  return (
    <div className="space-y-3 pt-1">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <a
          href={offer.phoneHref}
          onClick={onActionClick}
          className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#E8795A] hover:bg-[#D05D3D] transition-colors whitespace-nowrap"
        >
          <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
          <span>Call Now</span>
        </a>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onActionClick}
          className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 py-2.5 rounded-xl text-sm font-semibold text-[#34332F] bg-white border border-[#8DAA91] hover:bg-[#FDF3E7] transition-colors whitespace-nowrap"
        >
          <MessageCircle className="w-4 h-4 text-[#58785D] shrink-0" aria-hidden="true" />
          <span>WhatsApp</span>
        </a>
      </div>
      <p className="text-[11px] leading-relaxed text-[#77736D]">{offer.disclaimer}</p>
    </div>
  );
}
