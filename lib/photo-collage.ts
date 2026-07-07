export type PhotoMeta = {
  src: string;
};

export type CollageSlide = {
  photos: PhotoMeta[];
  slideIndex: number;
  description: string;
};

export function getCollageContainerClass(): string {
  return 'grid grid-cols-2 gap-2.5 md:gap-3';
}

export function getCollageCellClass(_index: number): string {
  return '';
}

export function buildCollageSlides(
  photos: string[],
  slideDescriptions: string[],
  projectName: string,
): CollageSlide[] {
  const slides: CollageSlide[] = [];

  for (let index = 0; index < photos.length; index += 4) {
    const slideIndex = index / 4;

    slides.push({
      photos: photos.slice(index, index + 4).map((src) => ({ src })),
      slideIndex,
      description:
        slideDescriptions[slideIndex] ??
        `Construction progress highlights from ${projectName}, capturing key milestones during this phase of the build.`,
    });
  }

  return slides;
}

export function getSlideCount(photoCount: number): number {
  return Math.ceil(photoCount / 4);
}
