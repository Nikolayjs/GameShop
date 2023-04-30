import axios from 'axios';
const getContentType = () => ({
  'Content-Type': 'application/json',
});
export const axiosClassic = axios.create({
  baseURL: 'http://localhost:4000',
  headers: getContentType(),
});
export const instance = axios.create({
  baseURL: 'http://localhost:4000',
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = localStorage.getItem('token');
  return config;
});

export default instance;
