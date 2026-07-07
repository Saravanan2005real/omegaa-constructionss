import { notFound } from 'next/navigation';
import ProjectGalleryContent from '@/components/completed/ProjectGalleryContent';
import {
  getCompletedProject,
  getCompletedProjectSlugs,
} from '@/lib/completed-projects';
import { createPageMetadata } from '@/lib/seo';

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getCompletedProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getCompletedProject(slug);

  if (!project) {
    return createPageMetadata({
      title: 'Project Not Found',
      description: 'The requested completed project could not be found.',
      path: `/completed/${slug}`,
    });
  }

  return createPageMetadata({
    title: project.name,
    description: project.summary,
    path: `/completed/${slug}`,
  });
}

export default async function CompletedProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getCompletedProject(slug);

  if (!project) {
    notFound();
  }

  return <ProjectGalleryContent project={project} />;
}
