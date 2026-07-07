'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

type CompletedProjectsHeroCarouselProps = {
  images: readonly string[];
};

const AUTO_PLAY_MS = 6000;

export default function CompletedProjectsHeroCarousel({
  images,
}: CompletedProjectsHeroCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideCount = images.length;

  const goToSlide = useCallback(
    (index: number) => {
      if (index < 0 || index >= slideCount) return;
      setCurrentSlide(index);
    },
    [slideCount],
  );

  const goNext = useCallback(() => {
    goToSlide((currentSlide + 1) % slideCount);
  }, [currentSlide, goToSlide, slideCount]);

  const goPrev = useCallback(() => {
    goToSlide((currentSlide - 1 + slideCount) % slideCount);
  }, [currentSlide, goToSlide, slideCount]);

  useEffect(() => {
    if (slideCount <= 1) return;

    const timer = window.setInterval(goNext, AUTO_PLAY_MS);
    return () => window.clearInterval(timer);
  }, [goNext, slideCount]);

  if (slideCount === 0) return null;

  return (
    <div className="group/hero relative aspect-[16/9] min-h-[300px] w-full overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 shadow-[0_12px_40px_rgba(15,23,42,0.12)] sm:min-h-[380px] md:min-h-[460px] lg:min-h-[540px] xl:min-h-[600px]">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="flex h-full"
          animate={{ x: `-${currentSlide * 100}%` }}
          transition={{ type: 'spring', stiffness: 420, damping: 38, mass: 0.75 }}
        >
          {images.map((src, index) => (
            <div key={src} className="relative h-full w-full shrink-0 basis-full">
              <Image
                src={src}
                alt={`Completed construction projects by Omegaa Constructions — slide ${index + 1}`}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1400px"
                priority={index === 0}
              />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/75 via-slate-900/20 to-transparent" />

      {slideCount > 1 && (
        <>
          <button
            type="button"
            onClick={goPrev}
            className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-slate-900/50 text-white opacity-90 shadow-lg backdrop-blur-sm transition-all hover:border-gold/50 hover:bg-slate-900/70 md:left-4 md:h-11 md:w-11 md:opacity-0 md:group-hover/hero:opacity-100"
            aria-label="Previous hero slide"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={goNext}
            className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-slate-900/50 text-white opacity-90 shadow-lg backdrop-blur-sm transition-all hover:border-gold/50 hover:bg-slate-900/70 md:right-4 md:h-11 md:w-11 md:opacity-0 md:group-hover/hero:opacity-100"
            aria-label="Next hero slide"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>

          <div className="absolute right-4 top-4 z-20 rounded-full border border-white/20 bg-slate-900/50 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm md:text-sm">
            {currentSlide + 1} / {slideCount}
          </div>
        </>
      )}

      <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center p-6 text-center md:p-12">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gold/90 px-5 py-2 text-xs font-semibold uppercase tracking-widest text-slate-900 md:text-sm">
          <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5" aria-hidden="true" />
          Completed
        </div>
        <h2 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          Built to Stand the Test of Time
        </h2>
        <p className="mt-3 max-w-2xl text-base font-light text-white/90 md:text-lg">
          A showcase of successfully delivered sites — quality workmanship across
          residential and commercial projects.
        </p>

        {slideCount > 1 && (
          <div className="mt-5 flex items-center justify-center gap-2">
            {images.map((src, index) => (
              <button
                key={src}
                type="button"
                onClick={() => goToSlide(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === currentSlide
                    ? 'w-8 bg-gold'
                    : 'w-2.5 bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to hero slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
