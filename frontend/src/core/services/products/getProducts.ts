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
  filter_id?: string;
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

export const getProducts = async (params: ProductParams, filter: string) => {
    const body = {
      "page": params?.page,
      "page_size": params?.page_size,
      "sort": "id desc",
      filters: [
        {
          name: filter,
          op: "=",
          value: params?.filter_id,
        },
      ],
    }
    const url = `${API_ENDPOINTS.PRODUCTS}/read_data`;
    const response = await connectAPI<APIResponse<Product>>('POST', url, body)
    const products = response.data;
    console.log(products)
    validateNonEmptyArray(products.list, 'sản phẩm')
    return products;
};