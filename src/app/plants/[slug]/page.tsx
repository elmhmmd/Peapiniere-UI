import PlantDetails from '@/components/PlantDetails';

interface PlantPageProps {
  params: { slug: string };
}

export default function PlantPage({ params }: PlantPageProps) {
  return <PlantDetails slug={params.slug} />;
}