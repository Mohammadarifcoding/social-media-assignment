import { createStore } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { getLocalStorage } from '../utils/LocalStorage';

export const useAuthStore = createStore(
  immer((set) => ({
    auth: {
      user: getLocalStorage('user') || null,
      token: getLocalStorage('token') || null,
      refreshToken: getLocalStorage('refreshToken') || null,
      loading: false,
    },
    setAuth: (payload) => {
      set((state) => {
        state.auth.user = payload.user;
        state.auth.loading = false;
        state.auth.token = payload.token;
        state.auth.refreshToken = payload.refreshToken;
        localStorage.setItem('token', payload.token);
        localStorage.setItem('refreshToken', payload.refreshToken);
        localStorage.setItem('user', JSON.stringify(payload.user));
      });
    },
    setToken: (token) => {
      set((state) => {
        state.auth.token = token;
        localStorage.setItem('token', token);
      });
    },
    setRefreshToken: (refreshToken) => {
      set((state) => {
        state.auth.refreshToken = refreshToken;
        localStorage.setItem('refreshToken', refreshToken);
      });
    },
    setUser: (payload) => {
      set((state) => {
        state.auth.user = payload.user;
        localStorage.setItem('user', JSON.stringify(payload.user));
      });
    },
    setLoading: (payload) => {
      set((state) => {
        state.auth.loading = payload;
      });
    },
    logout: () => {
      set((state) => {
        state.auth.user = null;
        state.auth.token = null;
        state.auth.refreshToken = null;
      });
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('user');
    },
  })),
);
