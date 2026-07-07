'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type HomeHeroCarouselProps = {
  images: readonly string[];
};

const AUTO_PLAY_MS = 6000;

export default function HomeHeroCarousel({ images }: HomeHeroCarouselProps) {
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

  if (slideCount === 1) {
    return (
      <div className="relative w-full">
        <Image
          src={images[0]}
          alt="Omegaa Constructions"
          width={1920}
          height={800}
          className="block h-auto w-full"
          priority
        />
      </div>
    );
  }

  return (
    <div className="isolate w-full px-4 pt-4 pb-6 md:px-8 md:pt-5 md:pb-8 lg:px-12 lg:pt-6 lg:pb-10">
      <div className="group/hero relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-[0_8px_32px_rgba(15,23,42,0.10)] md:rounded-3xl">
        <div className="relative aspect-[16/9] min-h-[220px] w-full sm:min-h-[300px] md:min-h-[380px] lg:min-h-[460px]">
        <motion.div
          className="flex h-full"
          animate={{ x: `-${currentSlide * 100}%` }}
          transition={{ type: 'spring', stiffness: 420, damping: 38, mass: 0.75 }}
        >
          {images.map((src, index) => (
            <div
              key={src}
              className="relative flex h-full w-full shrink-0 basis-full items-center justify-center bg-slate-50"
            >
              <Image
                src={src}
                alt={`Omegaa Constructions hero slide ${index + 1}`}
                fill
                className="object-contain object-center"
                sizes="100vw"
                priority={index === 0}
              />
            </div>
          ))}
        </motion.div>
        </div>

        <button
          type="button"
          onClick={goPrev}
          className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-slate-900/50 text-white opacity-90 shadow-lg backdrop-blur-sm transition-all hover:border-gold/50 hover:bg-slate-900/70 md:left-5 md:h-11 md:w-11 md:opacity-0 md:group-hover/hero:opacity-100"
          aria-label="Previous hero slide"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>

        <button
          type="button"
          onClick={goNext}
          className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-slate-900/50 text-white opacity-90 shadow-lg backdrop-blur-sm transition-all hover:border-gold/50 hover:bg-slate-900/70 md:right-5 md:h-11 md:w-11 md:opacity-0 md:group-hover/hero:opacity-100"
          aria-label="Next hero slide"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 md:bottom-5">
          {images.map((src, index) => (
            <button
              key={src}
              type="button"
              onClick={() => goToSlide(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === currentSlide
                  ? 'w-8 bg-gold'
                  : 'w-2.5 bg-white/60 hover:bg-white/90'
              }`}
              aria-label={`Go to hero slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="absolute right-4 top-4 z-20 rounded-full border border-white/20 bg-slate-900/50 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm md:text-sm">
          {currentSlide + 1} / {slideCount}
        </div>
      </div>
    </div>
  );
}
