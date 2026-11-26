import { X } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { FIRST_VISIT_OFFER_DATA } from '../../data/offerData';
import { OfferActions } from './OfferActions';
import { OfferDetails } from './OfferDetails';
import { OfferImage } from './OfferImage';

export function FirstVisitOfferPopup() {
  const offer = FIRST_VISIT_OFFER_DATA;
  const [isOpen, setIsOpen] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const closePopup = useCallback(() => {
    setIsOpen(false);
    try {
      sessionStorage.setItem(offer.sessionStorageKey, 'true');
    } catch {
      // Ignore storage access errors in private browsing modes
    }
    if (previousFocusRef.current) {
      previousFocusRef.current.focus();
      previousFocusRef.current = null;
    }
  }, [offer.sessionStorageKey]);

  useEffect(() => {
    if (!offer.isActive) return;

    let alreadyShown = false;
    try {
      alreadyShown = sessionStorage.getItem(offer.sessionStorageKey) === 'true';
    } catch {
      alreadyShown = false;
    }
    if (alreadyShown) return;

    const timerId = window.setTimeout(() => {
      try {
        if (sessionStorage.getItem(offer.sessionStorageKey) === 'true') return;
        sessionStorage.setItem(offer.sessionStorageKey, 'true');
      } catch {
        // Ignore storage errors
      }
      previousFocusRef.current = document.activeElement as HTMLElement | null;
      setIsOpen(true);
    }, offer.delayMs);

    return () => {
      window.clearTimeout(timerId);
    };
  }, [offer.isActive, offer.delayMs, offer.sessionStorageKey]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closePopup();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    const focusTimer = window.setTimeout(() => {
      closeBtnRef.current?.focus();
    }, 40);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.clearTimeout(focusTimer);
    };
  }, [isOpen, closePopup]);

  if (!offer.isActive) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="first-visit-offer-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.28 }}
          onClick={closePopup}
          role="dialog"
          aria-modal="true"
          aria-labelledby="first-visit-offer-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#34332F]/60 backdrop-blur-[2px] p-3 sm:p-6"
        >
          <motion.div
            key="first-visit-offer-card"
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }}
            transition={{
              duration: shouldReduceMotion ? 0.01 : 0.3,
              ease: [0.16, 1, 0.3, 1],
            }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[calc(100vw-24px)] md:max-w-[760px] max-h-[calc(100dvh-32px)] md:h-[510px] bg-[#FFF8F0] border border-[#E9E0D6] rounded-[28px] shadow-2xl overflow-y-auto md:overflow-hidden flex flex-col md:flex-row"
          >
            {/* Circular Top-Right Close Button */}
            <button
              ref={closeBtnRef}
              type="button"
              onClick={closePopup}
              aria-label="Close first visit offer popup"
              className="absolute top-3.5 right-3.5 z-10 w-10 h-10 rounded-full bg-white/95 border border-[#E9E0D6] text-[#34332F] hover:bg-[#FDF3E7] hover:scale-105 transition-all flex items-center justify-center shadow-sm cursor-pointer"
            >
              <X className="w-4 h-4" aria-hidden="true" />
            </button>

            {/* Left 48% Image Section */}
            <OfferImage src={offer.imageSrc} alt={offer.imageAlt} />

            {/* Right 52% Content Section */}
            <div className="w-full md:w-[52%] p-6 sm:p-7 md:p-8 flex flex-col justify-between gap-5">
              <OfferDetails offer={offer} titleId="first-visit-offer-title" />
              <OfferActions offer={offer} onActionClick={closePopup} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
