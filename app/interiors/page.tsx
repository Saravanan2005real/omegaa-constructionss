import PlaceholderPage from '@/components/pages/PlaceholderPage';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Interiors',
  description:
    'Discover Omegaa Constructions interior design and fit-out services for residential and commercial spaces.',
  path: '/interiors',
});

export default function InteriorsPage() {
  return (
    <PlaceholderPage
      title="Interiors"
      message="System Standing By: Content for Interiors will be inserted here."
    />
  );
}
