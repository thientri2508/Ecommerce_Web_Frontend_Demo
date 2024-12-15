import axios from "axios";
import { API_BASE_URL } from "./apiConfig";

const axiosInstance = axios.create({
    baseURL: API_BASE_URL, 
    timeout: 5000,
});

// Interceptor để thêm token vào header
axiosInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token'); // Lấy token từ Local Storage
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
);

export default axiosInstance;