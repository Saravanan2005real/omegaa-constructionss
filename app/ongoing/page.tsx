import DesignStudioContent from '@/components/design-studio/DesignStudioContent';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Design Studio',
  description:
    'Explore Omegaa Constructions Design Studio — 3D SketchUp videos, model images, and rendered architectural visualizations.',
  path: '/ongoing',
});

export default function DesignStudioPage() {
  return <DesignStudioContent />;
}
