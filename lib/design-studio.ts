export const designStudioMedia = {
  designOverview: '/design-studio/01-design-overview.webp',
  sketchupVideo: '/design-studio/02-sketchup-video.mp4',
  sketchupImage: '/design-studio/03-sketchup-image.webp',
  renderedImage: '/design-studio/04-rendered-image.webp',
} as const;

export const omegaaVisualizationImages = [
  {
    src: '/design-studio/omegaa/hall-sketch.webp',
    alt: 'Living Room SketchUp model drawing',
    caption: 'Living Room — 3D SketchUp Image',
  },
  {
    src: '/design-studio/omegaa/hall-render.webp',
    alt: 'Living Room interior rendered visualization',
    caption: 'Living Room — 3D Rendered Image',
  },
  {
    src: '/design-studio/omegaa/02-bedroom-before-rendering.webp',
    alt: 'Bedroom 3D SketchUp model drawing',
    caption: 'Bedroom — 3D SketchUp Image',
  },
  {
    src: '/design-studio/omegaa/03-bedroom-after-rendering.webp',
    alt: 'Bedroom 3D rendered visualization',
    caption: 'Bedroom — 3D Rendered Image',
  },
  {
    src: '/design-studio/omegaa/04-kitchen-dining-before-rendering.webp',
    alt: 'Kitchen and dining 3D SketchUp model drawing',
    caption: 'Kitchen & Dining — 3D SketchUp Image',
  },
  {
    src: '/design-studio/omegaa/06-kitchen-dining-rendering-view.webp',
    alt: 'Kitchen and dining 3D rendered visualization',
    caption: 'Kitchen & Dining — 3D Rendered Image',
  },
  {
    src: '/design-studio/omegaa/05-kitchen-top-view-before-rendering.webp',
    alt: 'Kitchen top view 3D SketchUp model drawing',
    caption: 'Kitchen Top View — 3D SketchUp Image',
  },
  {
    src: '/design-studio/omegaa/07-kitchen-dining-after-rendering.webp',
    alt: 'Kitchen top view 3D rendered visualization',
    caption: 'Kitchen Top View — 3D Rendered Image',
  },
] as const;

export const visualizationPairs = [
  {
    title: 'Living Room',
    left: omegaaVisualizationImages[0],
    right: omegaaVisualizationImages[1],
  },
  {
    title: 'Bedroom',
    left: omegaaVisualizationImages[2],
    right: omegaaVisualizationImages[3],
  },
  {
    title: 'Kitchen View One',
    left: omegaaVisualizationImages[4],
    right: omegaaVisualizationImages[5],
  },
  {
    title: 'Kitchen View Two',
    left: omegaaVisualizationImages[6],
    right: omegaaVisualizationImages[7],
  },
] as const;

type DesignStudioImageSection = {
  id: string;
  heading: string;
  type: 'image';
  src: string;
  alt: string;
  aspectClass: string;
};

type DesignStudioVideoSection = {
  id: string;
  heading: string;
  type: 'video';
  src: string;
};

type DesignStudioGallerySection = {
  id: string;
  heading: string;
  type: 'gallery';
  pairs: typeof visualizationPairs;
};

export type DesignStudioSection =
  | DesignStudioImageSection
  | DesignStudioVideoSection
  | DesignStudioGallerySection;

export const designStudioSections: DesignStudioSection[] = [
  {
    id: 'design-overview',
    heading: 'Design Overview',
    type: 'image',
    src: designStudioMedia.designOverview,
    alt: 'Design studio overview from project PDF',
    aspectClass: 'aspect-[3/1]',
  },
  {
    id: 'sketchup-video',
    heading: '3D Model Video',
    type: 'video',
    src: designStudioMedia.sketchupVideo,
  },
  {
    id: 'omegaa-visualizations',
    heading: 'Design Visualizations',
    type: 'gallery',
    pairs: visualizationPairs,
  },
];
