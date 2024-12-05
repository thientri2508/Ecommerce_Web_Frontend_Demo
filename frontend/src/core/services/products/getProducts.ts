import queryString from 'query-string';
import { API_ENDPOINTS } from '../../config/apiConfig';
import { validateNonEmptyArray } from '../../utils/validation/arrayValidation';
import connectAPI from '../../config/connectAPI';
import { Product } from '../../types/Product';
import { APIResponse } from '../../types/App';

// Định nghĩa kiểu dữ liệu cho tham số lọc
export interface ProductParams {
  page?: number;
  page_size?: number;
  p_id?: number | null;
  category_id?: number | null;
  status_product?: string;
}

export const getProductsByStatus = async (params: ProductParams) => {
  const query = params ? queryString.stringify(params) : '';
  const url = `${API_ENDPOINTS.PRODUCTS}/get-product-filter?${query}`; 
  const response = await connectAPI<APIResponse<Product>>('GET', url);
  const products = response.data.list;
  validateNonEmptyArray(products, 'sản phẩm')
  return products;
};

export const getProductsByCategory = async (params: ProductParams) => {
    const body = {
      "page": params?.page,
      "page_size": params?.page_size,
      "category_id": params?.category_id,
      "p_id": params?.p_id
    }
    const url = `${API_ENDPOINTS.PRODUCTS}/read_data_product`;
    const response = await connectAPI<APIResponse<Product>>('POST', url, body)
    const products = response.data;
    validateNonEmptyArray(products.list, 'sản phẩm')
    return products;
};