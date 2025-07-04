import { createStore } from 'zustand';
import { immer } from 'zustand/middleware/immer';

export const useAuthStore = createStore(
  immer((set) => ({
    auth: {
      user: null,
      token: null,
      refreshToken: null,
      loading: true,
    },
    setAuth: (payload) => {
      set((state) => {
        state.auth.user = payload.user;
        state.auth.loading = false;
        state.auth.token = payload.token;
        state.auth.refreshToken = payload.refreshToken;
      });
    },
    setToken: (token) => {
      set((state) => {
        state.auth.token = token;
      });
    },
    setRefreshToken: (refreshToken) => {
      set((state) => {
        state.auth.refreshToken = refreshToken;
      });
    },
    setUser: (payload) => {
      set((state) => {
        state.auth.user = payload.user;
      });
    },
  })),
);
