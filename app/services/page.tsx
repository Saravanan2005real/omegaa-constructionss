import PlaceholderPage from '@/components/pages/PlaceholderPage';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Services',
  description:
    'Explore Omegaa Constructions services including residential construction, commercial builds, renovation, and turnkey project delivery.',
  path: '/services',
});

export default function ServicesPage() {
  return (
    <PlaceholderPage
      title="Services"
      message="System Standing By: Content for Services will be inserted here."
    />
  );
}
