import axios from 'axios';
import React from 'react';

const instance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_BASE_URL,
  timeout: 5000,
});

const usePublicAxios = () => {
  return instance;
};

export default usePublicAxios;
