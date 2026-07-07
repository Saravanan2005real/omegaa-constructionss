import WaitInstructionsContent from '@/components/pages/WaitInstructionsContent';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  title: 'Instructions',
  description: 'Omegaa Constructions system status and instructions page.',
  path: '/instructions',
});

export default function InstructionsPage() {
  return <WaitInstructionsContent />;
}
