import CompletedProjectsContent from '@/components/completed/CompletedProjectsContent';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Completed Projects',
  description:
    'Browse Omegaa Constructions completed projects including Arul Site and BPT — quality workmanship across residential and commercial construction.',
  path: '/completed',
});

export default function CompletedPage() {
  return <CompletedProjectsContent />;
}
