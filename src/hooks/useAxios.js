import axios from 'axios';
import { useAuth } from '../store';
import { useEffect } from 'react';
import usePublicAxios from './usePublicAxios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_BASE_URL,
  timeout: 5000,
});

const useAxios = () => {
  const axiosPubic = usePublicAxios();
  const { auth, setAuth, logout } = useAuth((state) => state);

  useEffect(() => {
    const requestIntercept = instance.interceptors.request.use(
      (config) => {
        const authToken = auth?.token;
        if (authToken) {
          config.headers.Authorization = `Bearer ${authToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error),
    );

    const responseIntercept = instance.interceptors.response.use(
      (res) => res,
      async (error) => {
        const originalRequest = error.config;
        console.log(originalRequest);

        if (error?.response?.status == 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            const refreshToken = auth?.refreshToken;
            const response = await axiosPubic.post(`/auth/refresh-token`, { refreshToken });
            const { token } = response.data;

            setAuth({
              user: auth.user,
              token,
              refreshToken,
            });
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return axiosPubic(originalRequest);
          } catch (error) {
            logout();
          }
        }
        return Promise.reject(error);
      },
    );

    return () => {
      instance.interceptors.request.eject(requestIntercept);
      instance.interceptors.response.eject(responseIntercept);
    };
  }, [auth.token]);
  return instance;
};
export default useAxios;
