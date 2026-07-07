import { designStudioMedia, omegaaVisualizationImages } from './design-studio';

export const images = {
  logo: '/images/logo.webp',
  hero: '/images/hero.webp',
  heroSlides: [
    '/images/hero.webp',
    '/images/hero-2.webp',
    '/images/hero-revathi-nagar.webp',
    '/images/hero-vaiyavoor.webp',
    '/images/hero-vedachalam-nagar.webp',
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
