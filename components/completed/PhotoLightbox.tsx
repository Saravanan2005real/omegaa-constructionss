'use client';

import { useCallback, useEffect } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { createPortal } from 'react-dom';

type PhotoLightboxProps = {
  photos: string[];
  captions?: string[];
  activeIndex: number;
  projectName: string;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export default function PhotoLightbox({
  photos,
  captions,
  activeIndex,
  projectName,
  onClose,
  onNavigate,
}: PhotoLightboxProps) {
  const hasPrev = activeIndex > 0;
  const hasNext = activeIndex < photos.length - 1;
  const currentPhoto = photos[activeIndex];

  const goPrev = useCallback(() => {
    if (hasPrev) onNavigate(activeIndex - 1);
  }, [activeIndex, hasPrev, onNavigate]);

  const goNext = useCallback(() => {
    if (hasNext) onNavigate(activeIndex + 1);
  }, [activeIndex, hasNext, onNavigate]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowLeft') {
        goPrev();
      } else if (event.key === 'ArrowRight') {
        goNext();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goNext, goPrev, onClose]);

  if (typeof document === 'undefined') {
    return null;
  }

  return createPortal(
    <AnimatePresence>
      <motion.div
        key="lightbox-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 p-2 backdrop-blur-sm sm:p-3"
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={`${projectName} photo viewer`}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 8 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative flex w-full max-w-[98vw] h-[96vh] flex-col overflow-hidden rounded-2xl border border-white/10 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.55)]"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex items-center justify-between gap-4 border-b border-slate-200/80 px-4 py-2 sm:px-6 sm:py-2.5">
            <div className="min-w-0">
              <p className="truncate text-sm font-bold text-slate-900 sm:text-base">
                {projectName}
              </p>
              <p className="text-xs font-medium text-slate-500">
                Photo {activeIndex + 1} of {photos.length}
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition-colors hover:bg-slate-200"
              aria-label="Close photo viewer"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <div className="relative flex-1 flex items-center justify-center bg-slate-950/95 px-2 py-2 sm:px-4 sm:py-3 overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentPhoto}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.22, ease: 'easeOut' }}
                className="relative h-full w-full"
              >
                <Image
                  src={currentPhoto}
                  alt={`${projectName} site photo ${activeIndex + 1}`}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            {hasPrev && (
              <button
                type="button"
                onClick={goPrev}
                className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow-lg transition hover:bg-white sm:left-5 sm:h-12 sm:w-12"
                aria-label="Previous photo"
              >
                <ChevronLeft className="h-6 w-6" aria-hidden="true" />
              </button>
            )}

            {hasNext && (
              <button
                type="button"
                onClick={goNext}
                className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-slate-800 shadow-lg transition hover:bg-white sm:right-5 sm:h-12 sm:w-12"
                aria-label="Next photo"
              >
                <ChevronRight className="h-6 w-6" aria-hidden="true" />
              </button>
            )}
          </div>

          <div className="flex items-center justify-between gap-3 border-t border-slate-200/80 px-4 py-2 text-xs text-slate-500 sm:px-6">
            <span className="hidden sm:inline">Use arrow keys to browse</span>
            {captions && captions[activeIndex] && (
              <span className="text-sm font-bold text-slate-900 mx-auto sm:mx-0">
                {captions[activeIndex]}
              </span>
            )}
            <span className="font-medium text-slate-700">
              {activeIndex + 1} / {photos.length}
            </span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>,
    document.body,
  );
}

export function PhotoLightboxHint() {
  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-slate-950/0 opacity-0 transition-all duration-300 group-hover:bg-slate-950/20 group-hover:opacity-100">
      <span className="flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-slate-800 shadow-md">
        <ZoomIn className="h-3.5 w-3.5" aria-hidden="true" />
        View
      </span>
    </div>
  );
}
