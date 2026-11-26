import { SafeImage } from '../common/SafeImage';

interface OfferImageProps {
  src: string;
  alt: string;
}

export function OfferImage({ src, alt }: OfferImageProps) {
  return (
    <div className="w-full h-[192px] sm:h-[210px] md:h-full md:w-[48%] shrink-0 bg-[#FDF3E7] overflow-hidden">
      <SafeImage
        src={src}
        alt={alt}
        loading="lazy"
        fallbackTitle="Austin Spa Thane"
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
}
