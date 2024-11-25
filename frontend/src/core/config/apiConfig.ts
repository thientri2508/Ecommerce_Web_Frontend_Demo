export const API_BASE_URL = import.meta.env.VITE_API_URL;
export const API_ENDPOINTS = {
  PRODUCTS: `${API_BASE_URL}/product`,
  CATEGORIES: `${API_BASE_URL}/category`,
  PRODUCT_DETAIL: (id: string) => `/product/${id}`,
  // Định nghĩa thêm các endpoint khác...
};