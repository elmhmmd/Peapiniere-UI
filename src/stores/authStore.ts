// src/stores/authStore.ts
import { create } from 'zustand';
import { login } from '@/lib/api';
import { LoginResponse, User } from '@/lib/types';

interface AuthState {
  token: string | null;
  user: User | null;
  isLoading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  user: null,
  isLoading: false,
  error: null,
  login: async (email: string, password: string) => {
    set({ isLoading: true, error: null });
    try {
      const data: LoginResponse = await login(email, password);
      set({ token: data.access_token, isLoading: false });
      // Optionally fetch user data here if API provides it
    } catch (error: any) {
      set({ error: error.message, isLoading: false });
    }
  },
  logout: () => set({ token: null, user: null, error: null }),
}));