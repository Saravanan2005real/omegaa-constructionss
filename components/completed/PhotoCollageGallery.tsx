'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ConstructionBg from '@/components/home/ConstructionBg';
import {
  buildCollageSlides,
  getCollageCellClass,
  getCollageContainerClass,
  type CollageSlide,
} from '@/lib/photo-collage';
import PhotoLightbox, { PhotoLightboxHint } from '@/components/completed/PhotoLightbox';

type PhotoCollageGalleryProps = {
  photos: string[];
  projectName: string;
  slideDescriptions: string[];
  youtubeVideo?: {
    url: string;
    description?: string;
  };
};

const SWIPE_THRESHOLD = 48;

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#FF0000"
        d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"
      />
      <path fill="#FFFFFF" d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function CollageCell({
  src,
  alt,
  className,
  onOpen,
}: {
  src: string;
  alt: string;
  className: string;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className={`group relative block w-full min-h-[180px] cursor-zoom-in overflow-hidden rounded-2xl border border-white/60 bg-slate-200 text-left shadow-[0_8px_24px_rgba(15,23,42,0.12)] sm:min-h-[220px] md:min-h-[260px] ${className}`}
      aria-label={`View ${alt}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        sizes="(max-width: 768px) 50vw, 400px"
        draggable={false}
      />
      <PhotoLightboxHint />
    </button>
  );
}

function CollageSlideCard({
  slide,
  projectName,
  photoIndexBySrc,
  onOpenPhoto,
}: {
  slide: CollageSlide;
  projectName: string;
  photoIndexBySrc: Record<string, number>;
  onOpenPhoto: (index: number) => void;
}) {
  return (
    <div className="flex w-full shrink-0 flex-col px-1 sm:px-2">
      <div className={`${getCollageContainerClass()} mb-5`}>
        {slide.photos.map((photo, photoIndex) => (
          <CollageCell
            key={photo.src}
            src={photo.src}
            alt={`${projectName} site photo`}
            className={getCollageCellClass(photoIndex)}
            onOpen={() => onOpenPhoto(photoIndexBySrc[photo.src])}
          />
        ))}
      </div>

      <p className="text-sm font-light leading-relaxed text-slate-600 md:text-base">
        {slide.description}
      </p>
    </div>
  );
}

export default function PhotoCollageGallery({
  photos,
  projectName,
  slideDescriptions,
  youtubeVideo,
}: PhotoCollageGalleryProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);
  const isSwipingRef = useRef(false);

  const photoIndexBySrc = useMemo(
    () => Object.fromEntries(photos.map((src, index) => [src, index])),
    [photos],
  );

  const photoSlides = useMemo(
    () => buildCollageSlides(photos, slideDescriptions, projectName),
    [photos, slideDescriptions, projectName],
  );

  const slideCount = photoSlides.length;

  const goToSlide = useCallback(
    (index: number) => {
      if (index < 0 || index >= slideCount) return;
      setCurrentSlide(index);
    },
    [slideCount],
  );

  const goNext = useCallback(() => {
    goToSlide(Math.min(currentSlide + 1, slideCount - 1));
  }, [currentSlide, goToSlide, slideCount]);

  const goPrev = useCallback(() => {
    goToSlide(Math.max(currentSlide - 1, 0));
  }, [currentSlide, goToSlide]);

  const handleTouchStart = useCallback((event: React.TouchEvent) => {
    const touch = event.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
    isSwipingRef.current = false;
  }, []);

  const handleTouchMove = useCallback((event: React.TouchEvent) => {
    const start = touchStartRef.current;
    if (!start) return;

    const touch = event.touches[0];
    const deltaX = Math.abs(touch.clientX - start.x);
    const deltaY = Math.abs(touch.clientY - start.y);

    if (deltaX > deltaY && deltaX > 10) {
      isSwipingRef.current = true;
    }
  }, []);

  const handleTouchEnd = useCallback(
    (event: React.TouchEvent) => {
      const start = touchStartRef.current;
      if (!start) return;

      const touch = event.changedTouches[0];
      const deltaX = touch.clientX - start.x;
      const deltaY = touch.clientY - start.y;

      if (
        isSwipingRef.current &&
        Math.abs(deltaX) > Math.abs(deltaY) &&
        Math.abs(deltaX) > SWIPE_THRESHOLD
      ) {
        if (deltaX < 0) {
          goNext();
        } else {
          goPrev();
        }
      }

      touchStartRef.current = null;
      isSwipingRef.current = false;
    },
    [goNext, goPrev],
  );

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (activeIndex !== null) return;
      if (event.key === 'ArrowRight') goNext();
      if (event.key === 'ArrowLeft') goPrev();
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex, goNext, goPrev]);

  if (photos.length === 0) {
    return null;
  }

  return (
    <>
      <section className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-[#f8fafc] shadow-[0_12px_40px_rgba(15,23,42,0.06)]">
        <ConstructionBg />
        <div className="bg-blueprint pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/70 via-[#f8fafc]/80 to-brand-blue/[0.03]" aria-hidden="true" />

        <div className="relative z-10 p-4 sm:p-6 md:p-8">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Swipe to explore
              </p>
              <p className="mt-1 text-sm font-bold text-slate-900 md:text-base">
                {projectName} construction gallery
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              {youtubeVideo && (
                <a
                  href={youtubeVideo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-white/90 px-4 py-1.5 text-sm font-semibold text-slate-800 shadow-sm backdrop-blur-sm transition hover:border-red-300 hover:bg-red-50"
                >
                  <YouTubeIcon className="h-5 w-5 shrink-0" />
                  Click here to watch on YouTube
                </a>
              )}
              <p className="rounded-full border border-slate-200 bg-white/90 px-4 py-1.5 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur-sm">
                {currentSlide + 1} / {slideCount}
              </p>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/80 bg-white/90 p-4 shadow-[0_10px_35px_rgba(21,46,255,0.06)] backdrop-blur-md sm:p-6">
            <div
              className="touch-pan-y overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <motion.div
                className="flex"
                animate={{ x: `-${currentSlide * 100}%` }}
                transition={{ type: 'spring', stiffness: 420, damping: 38, mass: 0.75 }}
              >
                {photoSlides.map((slide) => (
                  <div
                    key={slide.slideIndex}
                    className="w-full shrink-0 basis-full"
                    aria-hidden={slide.slideIndex !== currentSlide}
                  >
                    <CollageSlideCard
                      slide={slide}
                      projectName={projectName}
                      photoIndexBySrc={photoIndexBySrc}
                      onOpenPhoto={setActiveIndex}
                    />
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="mt-6 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={goPrev}
                disabled={currentSlide === 0}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-brand-blue/30 hover:text-brand-blue disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Previous slide"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>

              <div className="flex flex-wrap items-center justify-center gap-2">
                {Array.from({ length: slideCount }, (_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => goToSlide(index)}
                    className={`h-2.5 rounded-full transition-all ${
                      index === currentSlide
                        ? 'w-8 bg-brand-blue'
                        : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={goNext}
                disabled={currentSlide === slideCount - 1}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-brand-blue/30 hover:text-brand-blue disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Next slide"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {activeIndex !== null && (
        <PhotoLightbox
          photos={photos}
          activeIndex={activeIndex}
          projectName={projectName}
          onClose={() => setActiveIndex(null)}
          onNavigate={setActiveIndex}
        />
      )}
    </>
  );
}
