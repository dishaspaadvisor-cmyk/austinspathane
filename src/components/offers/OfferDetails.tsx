import { FirstVisitOfferConfig } from '../../data/offerData';

interface OfferDetailsProps {
  offer: FirstVisitOfferConfig;
  titleId: string;
}

export function OfferDetails({ offer, titleId }: OfferDetailsProps) {
  return (
    <div className="space-y-4">
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#58785D]">
          {offer.badgeText}
        </p>
        <p
          id={titleId}
          className="mt-1.5 font-display text-3xl sm:text-[34px] font-semibold leading-[1.1] text-[#34332F]"
        >
          <span className="block">{offer.headingLine1}</span>
          <span className="block text-[#D05D3D]">{offer.headingLine2}</span>
        </p>
      </div>

      {/* Special Price Offer Card */}
      <div className="bg-white border border-[#E9E0D6] rounded-2xl p-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#58785D]">
          {offer.cardLabel}
        </p>
        <div className="mt-1.5 flex items-baseline gap-3 tabular-nums">
          <span className="font-display text-3xl font-semibold text-[#34332F]">
            {offer.offerPrice}
          </span>
          <span className="text-base text-[#77736D] line-through">{offer.originalPrice}</span>
        </div>
        <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.1em] text-[#77736D]">
          {offer.priceSubLabel}
        </p>
      </div>

      <div className="space-y-1.5">
        <p className="text-sm leading-relaxed text-[#34332F]">{offer.description}</p>
        <p className="text-xs leading-relaxed text-[#77736D]">{offer.supportingText}</p>
      </div>
    </div>
  );
}
