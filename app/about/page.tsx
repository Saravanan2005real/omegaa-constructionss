import AboutContent from '@/components/about/AboutContent';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'About',
  description:
    'Meet Mr. Sivakumar V K, founder of Omegaa Construction. Three decades of trusted construction excellence across Tamil Nadu since 1996.',
  path: '/about',
});

export default function AboutPage() {
  return <AboutContent />;
}
