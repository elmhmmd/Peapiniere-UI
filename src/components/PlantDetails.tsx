// src/components/PlantDetails.tsx
'use client';

import { useEffect } from 'react';
import { usePlantStore } from '@/stores/plantStore';
import { useAuthStore } from '@/stores/authStore';

interface PlantDetailsProps {
  slug: string;
}

export default function PlantDetails({ slug }: PlantDetailsProps) {
  const { plant, isLoading, error, fetchPlant } = usePlantStore();
  const { token } = useAuthStore();

  useEffect(() => {
    if (token) {
      fetchPlant(slug, token);
    }
  }, [slug, token, fetchPlant]);

  if (!token) return <p className="text-red-500">Please login to view plant details.</p>;
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!plant) return <p>No plant found.</p>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl mb-4">{plant.name}</h2>
      <p className="mb-4">{plant.description}</p>
      <p className="mb-4">Price: ${plant.price.toFixed(2)}</p>
      {plant.images.length > 0 && (
        <img
          src={plant.images[0]}
          alt={plant.name}
          className="w-full h-64 object-cover rounded"
        />
      )}
    </div>
  );
}