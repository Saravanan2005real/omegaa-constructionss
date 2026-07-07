import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ImageIcon } from 'lucide-react';
import MainHeader from '@/components/layout/MainHeader';
import Footer from '@/components/layout/Footer';
import FadeIn from '@/components/ui/FadeIn';
import PhotoCollageGallery from '@/components/completed/PhotoCollageGallery';
import type { CompletedProject } from '@/lib/completed-projects';

type ProjectGalleryContentProps = {
  project: CompletedProject;
};

export default function ProjectGalleryContent({
  project,
}: ProjectGalleryContentProps) {
  const hasPhotos = project.photos.length > 0;

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <MainHeader />

      <main className="flex-1 bg-[#f8fafc]">
        <section className="px-4 py-12 md:px-8 md:py-16 lg:px-16">
          <div className="mx-auto max-w-6xl">
            <FadeIn>
              <Link
                href="/completed"
                className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue transition-colors hover:text-brand-blue/80"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Back to Completed Projects
              </Link>

              <div className="mb-10">
                <h1 className="text-3xl font-bold text-slate-900 md:text-4xl">
                  {project.name}
                </h1>
                <p className="mt-3 max-w-3xl text-base font-light text-slate-600 md:text-lg">
                  {project.summary}
                </p>
              </div>
            </FadeIn>

            {hasPhotos ? (
              <PhotoCollageGallery
                photos={project.photos}
                projectName={project.name}
                slideDescriptions={project.slideDescriptions}
                youtubeVideo={project.youtubeVideo}
              />
            ) : (
              <FadeIn>
                <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center shadow-sm md:py-20">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-blue/10">
                    <ImageIcon
                      className="h-8 w-8 text-brand-blue"
                      aria-hidden="true"
                    />
                  </div>
                  <h2 className="text-xl font-bold text-slate-900 md:text-2xl">
                    Site Photos Coming Soon
                  </h2>
                  <p className="mx-auto mt-3 max-w-lg text-sm font-light text-slate-600 md:text-base">
                    Project photos for {project.name} will be published here
                    shortly.
                  </p>
                  <div className="relative mx-auto mt-8 aspect-[16/9] max-w-3xl overflow-hidden rounded-xl border border-slate-200">
                    <Image
                      src={project.coverImage}
                      alt={`${project.name} preview`}
                      fill
                      className="object-cover opacity-80"
                      sizes="(max-width: 768px) 100vw, 768px"
                    />
                  </div>
                </div>
              </FadeIn>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
