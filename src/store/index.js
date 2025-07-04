import { useStore } from 'zustand';
import { useAuthStore } from './authStore';

export const useAuth = (selector) => useStore(useAuthStore, selector);
