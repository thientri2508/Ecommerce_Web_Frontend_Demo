// Hàm gọi API lấy danh sách sản phẩm
import axios from 'axios';
import queryString from 'query-string';
import { API_ENDPOINTS } from '../../config/apiConfig';
import { validateNonEmptyArray } from '../../utils/validation/arrayValidation';
import { handleError } from '../../utils/errorHandler';
import { productData } from '../../mockData/productData';

// Định nghĩa kiểu dữ liệu cho tham số lọc
export interface ProductParams {
  page?: number;
  page_size?: number;
  status_product?: string;
}
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
export const getProducts = async (params?: ProductParams) => {
    try {
        await delay(1000); 
        // const query = params ? queryString.stringify(params) : '';
        // const response = await axios.get(`${API_ENDPOINTS.PRODUCTS}?${query}`);
        // const products = response.data.data.list;
        const products = productData
        validateNonEmptyArray(products, 'sản phẩm')
        return products;
    } catch (error) {
        handleError(error)
      }
};

