// Hàm gọi API lấy danh sách danh mục
import axios from 'axios';
import { API_ENDPOINTS } from '../../config/apiConfig';
import { validateNonEmptyArray } from '../../utils/validation/arrayValidation';
import { handleError } from '../../utils/errorHandler';
import { categoryData } from '../../mockData/categoryData';

export const getCategories = async () => {
  try {
    //const response = await axios.post(API_ENDPOINTS.CATEGORIES);
    // if (response.status < 200 || response.status >= 300) {
    //     throw new Error('Không thể lấy dữ liệu từ server');
    // }
    //const categories = response.data.data.list
    //validateNonEmptyArray(categories, 'danh mục') 
    const categories = categoryData
    return categories
  } catch (error) {
    handleError(error)
  }
};
