import { designStudioMedia, omegaaVisualizationImages } from './design-studio';

export const images = {
  logo: '/images/logo.webp',
  hero: '/images/banner-1.webp',
  heroSlides: [
    '/images/banner-1.webp',
    '/images/banner-2.webp',
    '/images/banner-3.webp',
    '/images/banner-4.webp',
    '/images/banner-5.webp',
  ] as const,
  map: '/images/map.webp',
  completedProjectsHero: '/images/completed/hero/slide-1.webp',
  completedProjectsHeroSlides: [
    '/images/completed/hero/slide-1.webp',
    '/images/completed/hero/slide-2.webp',
    '/images/completed/hero/slide-3.webp',
  ],
  gallery: {
    one: '/images/gallery-1.webp',
    two: '/images/gallery-2.webp',
  },
  associations: {
    bai: '/images/associations/bai.webp',
    kancea: '/images/associations/kancea.webp',
  },
  designStudio: {
    designOverview: designStudioMedia.designOverview,
    sketchupVideo: designStudioMedia.sketchupVideo,
    sketchupImage: designStudioMedia.sketchupImage,
    renderedImage: designStudioMedia.renderedImage,
    omegaaVisualizations: omegaaVisualizationImages,
  },
} as const;
