import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useEffect } from 'react';
import { GalleryItem } from '../../data/gallery';
import { SafeImage } from '../common/SafeImage';

interface GalleryLightboxProps {
  items: GalleryItem[];
  activeIndex: number | null;
  onClose: () => void;
  onSelect: (index: number) => void;
}

export function GalleryLightbox({ items, activeIndex, onClose, onSelect }: GalleryLightboxProps) {
  useEffect(() => {
    if (activeIndex === null) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && activeIndex !== null) {
        onSelect((activeIndex + 1) % items.length);
      }
      if (e.key === 'ArrowLeft' && activeIndex !== null) {
        onSelect((activeIndex - 1 + items.length) % items.length);
      }
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeIndex, items.length, onClose, onSelect]);

  if (activeIndex === null) return null;
  const current = items[activeIndex];
  if (!current) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={current.title}
      className="fixed inset-0 z-50 bg-[#34332F]/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-[#FFF8F0] rounded-2xl overflow-hidden border border-[#E9E0D6]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 px-5 py-4 border-b border-[#E9E0D6]">
          <div>
            <p className="text-xs text-[#58785D] font-medium">
              {current.category} · {current.sourceDisclosure}
            </p>
            <h3 className="font-display text-lg font-semibold text-[#34332F]">{current.title}</h3>
          </div>
          <button
            type="button"
            aria-label="Close gallery preview"
            onClick={onClose}
            className="w-10 h-10 rounded-lg border border-[#E9E0D6] flex items-center justify-center text-[#34332F] hover:bg-white cursor-pointer"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        <div className="relative aspect-[16/10] bg-[#FDF3E7]">
          <SafeImage
            src={current.image}
            alt={current.alt}
            fallbackTitle={current.title}
            className="w-full h-full object-cover"
          />
          <button
            type="button"
            aria-label="Previous image"
            onClick={() => onSelect((activeIndex - 1 + items.length) % items.length)}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 text-[#34332F] border border-[#E9E0D6] flex items-center justify-center hover:bg-white cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next image"
            onClick={() => onSelect((activeIndex + 1) % items.length)}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 text-[#34332F] border border-[#E9E0D6] flex items-center justify-center hover:bg-white cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        <div className="px-5 py-4 text-sm text-[#77736D] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <p>{current.caption}</p>
          <span className="text-xs font-medium text-[#34332F] tabular-nums shrink-0">
            {activeIndex + 1} / {items.length}
          </span>
        </div>
      </div>
    </div>
  );
}
