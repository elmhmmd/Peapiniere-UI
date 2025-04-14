// src/stores/plantStore.ts
import { create } from 'zustand';
import { getPlantBySlug } from '@/lib/api';
import { Plant } from '@/lib/types';

interface PlantState {
  plant: Plant | null;
  isLoading: boolean;
  error: string | null;
  fetchPlant: (slug: string, token: string) => Promise<void>;
}

export const usePlantStore = create<PlantState>((set) => ({
  plant: null,
  isLoading: false,
  error: null,
  fetchPlant: async (slug: string, token: string) => {
    set({ isLoading: true, error: null });
    try {
      const plant = await getPlantBySlug(slug, token);
      set({ plant, isLoading: false });
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
    }
  },
}));