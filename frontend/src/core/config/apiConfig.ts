const API_BASE_URL = import.meta.env.VITE_API_URL;
export const API_ENDPOINTS = {
  PRODUCTS: `${API_BASE_URL}/product/get-product-filter`,
  CATEGORIES: `${API_BASE_URL}/category/get-category-product`,
  PRODUCT_DETAIL: (id: string) => `/product/${id}`,
  // Định nghĩa thêm các endpoint khác...
};
