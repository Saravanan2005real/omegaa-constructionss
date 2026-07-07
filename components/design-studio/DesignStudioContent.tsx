'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ZoomIn } from 'lucide-react';
import MainHeader from '@/components/layout/MainHeader';
import Footer from '@/components/layout/Footer';
import FadeIn from '@/components/ui/FadeIn';
import ConstructionBg from '@/components/home/ConstructionBg';
import SketchupVideoPlayer from '@/components/design-studio/SketchupVideoPlayer';
import SpecificationViewer from '@/components/design-studio/SpecificationViewer';
import { designStudioSections } from '@/lib/design-studio';
import PhotoLightbox from '@/components/completed/PhotoLightbox';

export default function DesignStudioContent() {
  const [lightboxData, setLightboxData] = useState<{
    photos: string[];
    captions?: string[];
    activeIndex: number;
    projectName: string;
  } | null>(null);

  const handleNavigate = (index: number) => {
    if (lightboxData) {
      setLightboxData({
        ...lightboxData,
        activeIndex: index,
      });
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <MainHeader />

      <main className="flex-1 bg-[#f8fafc]">
        <section className="relative overflow-hidden px-4 py-12 md:px-8 md:py-16 lg:px-16">
          <ConstructionBg />
          <div
            className="bg-blueprint pointer-events-none absolute inset-0 opacity-40"
            aria-hidden="true"
          />

          <div className="relative z-10 mx-auto max-w-5xl">
            <FadeIn>
              <div className="mb-10 text-center md:mb-14">
                <h1 className="text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
                  Design Studio
                </h1>
                <p className="mx-auto mt-4 max-w-2xl text-base font-light text-slate-600 md:text-lg">
                  Explore our design overview, 3D model walkthroughs, SketchUp
                  previews, and rendered visualizations — bringing your project to
                  life before construction begins.
                </p>
                <div className="mx-auto mt-5 h-1.5 w-24 rounded-full bg-gold" />
              </div>
            </FadeIn>

            <div className="space-y-10 md:space-y-12">
              {designStudioSections.map((section) => (
                <FadeIn key={section.id}>
                  <article className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white/95 shadow-[0_12px_40px_rgba(15,23,42,0.06)] backdrop-blur-sm">
                    <div className="border-b border-slate-100 px-5 py-4 md:px-8 md:py-5">
                      <h2 className="text-xl font-bold text-slate-900 md:text-2xl">
                        {section.heading}
                      </h2>
                    </div>

                    <div className="p-4 sm:p-6 md:p-8">
                      {section.type === 'video' ? (
                        <SketchupVideoPlayer src={section.src} />
                      ) : section.type === 'gallery' ? (
                        <div className="space-y-10">
                          {section.pairs.map((pair, pairIdx) => {
                            const flatImages = section.pairs.flatMap((p) => [p.left, p.right]);
                            const flatPhotos = flatImages.map((img) => img.src);
                            const flatCaptions = flatImages.map((img) => img.caption);
                            
                            const leftIdx = pairIdx * 2;
                            const rightIdx = pairIdx * 2 + 1;

                            return (
                              <div key={pair.title} className="space-y-4">
                                <h3 className="text-base font-bold text-slate-800 border-l-4 border-gold pl-3">
                                  {pair.title}
                                </h3>
                                <div className="grid gap-4 grid-cols-2 md:gap-6">
                                  {/* Left side: SketchUp Image */}
                                  <figure className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-[0_8px_30px_rgba(15,23,42,0.08)] flex flex-col h-full">
                                    <div
                                      className="relative aspect-[4/3] cursor-zoom-in overflow-hidden"
                                      onClick={() =>
                                        setLightboxData({
                                          photos: flatPhotos,
                                          captions: flatCaptions,
                                          activeIndex: leftIdx,
                                          projectName: section.heading,
                                        })
                                      }
                                    >
                                      <Image
                                        src={pair.left.src}
                                        alt={pair.left.alt}
                                        fill
                                        className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                                        sizes="(max-width: 640px) 100vw, 432px"
                                      />
                                      <div className="absolute inset-0 flex items-center justify-center bg-slate-950/0 opacity-0 transition-all duration-300 group-hover:bg-slate-950/20 group-hover:opacity-100">
                                        <span className="flex items-center gap-2 rounded-full bg-white/95 px-3.5 py-2 text-xs font-semibold text-slate-800 shadow-md transform translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                                          <ZoomIn className="h-4 w-4 text-slate-700" aria-hidden="true" />
                                          View
                                        </span>
                                      </div>
                                    </div>
                                    <figcaption className="flex-1 flex flex-col justify-between border-t border-slate-200 bg-white px-4 py-3.5 text-center">
                                      <p className="text-xs font-semibold text-slate-800 mb-3 sm:text-sm">
                                        {pair.left.caption}
                                      </p>
                                      <div className="flex justify-center">
                                        <button
                                          type="button"
                                          onClick={() =>
                                            setLightboxData({
                                              photos: flatPhotos,
                                              captions: flatCaptions,
                                              activeIndex: leftIdx,
                                              projectName: section.heading,
                                            })
                                          }
                                          className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-brand-blue/30 hover:bg-slate-50 hover:text-brand-blue"
                                        >
                                          <ZoomIn className="h-3.5 w-3.5" />
                                          View Image
                                        </button>
                                      </div>
                                    </figcaption>
                                  </figure>

                                  {/* Right side: Rendered Image */}
                                  <figure className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-[0_8px_30px_rgba(15,23,42,0.08)] flex flex-col h-full">
                                    <div
                                      className="relative aspect-[4/3] cursor-zoom-in overflow-hidden"
                                      onClick={() =>
                                        setLightboxData({
                                          photos: flatPhotos,
                                          captions: flatCaptions,
                                          activeIndex: rightIdx,
                                          projectName: section.heading,
                                        })
                                      }
                                    >
                                      <Image
                                        src={pair.right.src}
                                        alt={pair.right.alt}
                                        fill
                                        className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                                        sizes="(max-width: 640px) 100vw, 432px"
                                      />
                                      <div className="absolute inset-0 flex items-center justify-center bg-slate-950/0 opacity-0 transition-all duration-300 group-hover:bg-slate-950/20 group-hover:opacity-100">
                                        <span className="flex items-center gap-2 rounded-full bg-white/95 px-3.5 py-2 text-xs font-semibold text-slate-800 shadow-md transform translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                                          <ZoomIn className="h-4 w-4 text-slate-700" aria-hidden="true" />
                                          View
                                        </span>
                                      </div>
                                    </div>
                                    <figcaption className="flex-1 flex flex-col justify-between border-t border-slate-200 bg-white px-4 py-3.5 text-center">
                                      <p className="text-xs font-semibold text-slate-800 mb-3 sm:text-sm">
                                        {pair.right.caption}
                                      </p>
                                      <div className="flex justify-center">
                                        <button
                                          type="button"
                                          onClick={() =>
                                            setLightboxData({
                                              photos: flatPhotos,
                                              captions: flatCaptions,
                                              activeIndex: rightIdx,
                                              projectName: section.heading,
                                            })
                                          }
                                          className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-brand-blue/30 hover:bg-slate-50 hover:text-brand-blue"
                                        >
                                          <ZoomIn className="h-3.5 w-3.5" />
                                          View Image
                                        </button>
                                      </div>
                                    </figcaption>
                                  </figure>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="group relative">
                          <div
                            className={`relative ${section.aspectClass} overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-[0_8px_30px_rgba(15,23,42,0.08)] cursor-zoom-in`}
                            onClick={() =>
                              setLightboxData({
                                photos: [section.src],
                                captions: [section.heading],
                                activeIndex: 0,
                                projectName: section.heading,
                              })
                            }
                          >
                            <Image
                              src={section.src}
                              alt={section.alt}
                              fill
                              className="object-contain transition-transform duration-500 group-hover:scale-[1.01]"
                              sizes="(max-width: 1024px) 100vw, 896px"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-slate-950/0 opacity-0 transition-all duration-300 group-hover:bg-slate-950/20 group-hover:opacity-100">
                              <span className="flex items-center gap-2 rounded-full bg-white/95 px-4 py-2.5 text-sm font-semibold text-slate-800 shadow-md transform translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                                <ZoomIn className="h-4 w-4 text-slate-700" aria-hidden="true" />
                                View Full Design
                              </span>
                            </div>
                          </div>
                          <div className="mt-4 flex justify-center">
                            <button
                              type="button"
                              onClick={() =>
                                setLightboxData({
                                  photos: [section.src],
                                  captions: [section.heading],
                                  activeIndex: 0,
                                  projectName: section.heading,
                                })
                              }
                              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-brand-blue/30 hover:bg-slate-50 hover:text-brand-blue"
                            >
                              <ZoomIn className="h-4 w-4" />
                              View Full Design
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </article>
                </FadeIn>
              ))}

              <FadeIn>
                <article className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white/95 shadow-[0_12px_40px_rgba(15,23,42,0.06)] backdrop-blur-sm">
                  <div className="border-b border-slate-100 px-5 py-4 md:px-8 md:py-5">
                    <h2 className="text-xl font-bold text-slate-900 md:text-2xl">
                      Omegaa Construction Specification
                    </h2>
                  </div>
                  <div className="p-4 sm:p-6 md:p-8">
                    <SpecificationViewer />
                  </div>
                </article>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {lightboxData && (
        <PhotoLightbox
          photos={lightboxData.photos}
          captions={lightboxData.captions}
          activeIndex={lightboxData.activeIndex}
          projectName={lightboxData.projectName}
          onClose={() => setLightboxData(null)}
          onNavigate={handleNavigate}
        />
      )}
    </div>
  );
}
