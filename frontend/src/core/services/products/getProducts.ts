import axios from 'axios';
import queryString from 'query-string';
import { API_ENDPOINTS } from '../../config/apiConfig';
import { validateNonEmptyArray } from '../../utils/validation/arrayValidation';
import { handleAPIError } from '../../config/handleAPIError';
import { productData, productDataByCategory } from '../../mockData/productData';

// Định nghĩa kiểu dữ liệu cho tham số lọc
export interface ProductParams {
  page?: number;
  page_size?: number;
  category_id?: number;
  status_product?: string;
}

// Hàm lấy danh sách sản phẩm theo trạng thái
export const getProductsByStatus = async (params?: ProductParams) => {
  try {
      // const query = params ? queryString.stringify(params) : '';
      // const response = await axios.get(`${API_ENDPOINTS.PRODUCTS}/get-product-filter?${query}`);
      // const products = response.data.data.list;
      // validateNonEmptyArray(products, 'sản phẩm')
      const products = productData
      return products;
  } catch (error) {
    throw new Error(handleAPIError(error))
  }
};

// Hàm lấy danh sách sản phẩm theo danh mục
export const getProductsByCategory = async (params?: ProductParams) => {
  try {
      // const response = await axios.post(`${API_ENDPOINTS.PRODUCTS}/read_data`, params);
      // const products = response.data.data;
      // validateNonEmptyArray(products.list, 'sản phẩm')
      const products = productDataByCategory
      return products;
  } catch (error) {
    throw new Error(handleAPIError(error))
  }
};