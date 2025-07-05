import { useStore } from 'zustand';
import { useAuthStore } from './authStore';

export const useAuth = (selector) => useStore(useAuthStore, selector);

// const store = configureStore({
//   reducer: [],
// });

// export default store;
