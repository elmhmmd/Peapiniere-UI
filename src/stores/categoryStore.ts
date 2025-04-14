// src/stores/categoryStore.ts
import { create } from 'zustand';
import { createCategory, updateCategory, deleteCategory } from '@/lib/api';
import { Category } from '@/lib/types';

interface CategoryState {
  categories: Category[];
  isLoading: boolean;
  error: string | null;
  createCategory: (category_name: string, token: string) => Promise<void>;
  updateCategory: (id: number, category_name: string, token: string) => Promise<void>;
  deleteCategory: (id: number, token: string) => Promise<void>;
}

export const useCategoryStore = create<CategoryState>((set) => ({
  categories: [],
  isLoading: false,
  error: null,
  createCategory: async (category_name: string, token: string) => {
    set({ isLoading: true, error: null });
    try {
      const category = await createCategory(category_name, token);
      set((state) => ({
        categories: [...state.categories, category],
        isLoading: false,
      }));
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
    }
  },
  updateCategory: async (id: number, category_name: string, token: string) => {
    set({ isLoading: true, error: null });
    try {
      const updatedCategory = await updateCategory(id, category_name, token);
      set((state) => ({
        categories: state.categories.map((cat) =>
          cat.id === id ? updatedCategory : cat
        ),
        isLoading: false,
      }));
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
    }
  },
  deleteCategory: async (id: number, token: string) => {
    set({ isLoading: true, error: null });
    try {
      await deleteCategory(id, token);
      set((state) => ({
        categories: state.categories.filter((cat) => cat.id !== id),
        isLoading: false,
      }));
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
    }
  },
}));