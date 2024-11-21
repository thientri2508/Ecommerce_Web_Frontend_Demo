import axios from 'axios';
import { API_ENDPOINTS } from '../../config/apiConfig';
import { validateNonEmptyArray } from '../../utils/validation/arrayValidation';
import { handleAPIError } from '../../config/handleAPIError';

// Hàm lấy tất cà danh mục
export const getAllCategories = async () => {
  try {
    const response = await axios.get(`${API_ENDPOINTS.CATEGORIES}/get_category_menu_home`)
    const categories = response.data.data.list
    validateNonEmptyArray(categories, 'danh mục') 
    return categories
  } catch (error) {
    throw new Error(handleAPIError(error))
  }
};

// Hàm lấy danh sách danh mục theo cấp
export const getCategoriesByLevel = async (level: number) => {
  try {
    const response = await axios.get(`${API_ENDPOINTS.CATEGORIES}/get_category_by_level?level_category=${level}`)
    const categories = response.data.data
    validateNonEmptyArray(categories, 'danh mục') 
    return categories
  } catch (error) {
    throw new Error(handleAPIError(error))
  }
};

// Hàm lấy danh sách danh mục con của 1 danh mục cụ thể
export const getCategoriesChildren = async (id: string) => {
  try {
    if (!id) {
      throw new Error("Danh sách danh mục không tồn tại");
    }
    const response = await axios.post(`${API_ENDPOINTS.CATEGORIES}/get_category_product`, { "p_id" : id })
    const categories = response.data.data.list
    validateNonEmptyArray(categories, 'danh mục') 
    return categories
  } catch (error) {
    throw new Error(handleAPIError(error))
  }
};

//Hàm lấy danh mục theo id
export const getCategoryById = async (id: string) => {
  try {
    if (!id) {
      throw new Error("Danh mục không tồn tại");
    }
    const response = await axios.post(`${API_ENDPOINTS.CATEGORIES}/get_category_product`, { "category_id" : id })
    const category = response.data.data
    return category
  } catch (error) {
    throw new Error(handleAPIError(error))
  }
};

// Hàm lấy danh sách các danh mục con của danh mục root cụ thể
export const getDetailCategory = async (id: string) => {
  try {
    if (!id) {
      throw new Error("Danh sách danh mục không tồn tại");
    }
    const response = await axios.get(`${API_ENDPOINTS.CATEGORIES}/get_detail_category_page?level_category=2&p_id=${id}`)
    const categories = response.data.data.list
    console.log(categories)
    validateNonEmptyArray(categories, 'danh mục') 
    return categories
  } catch (error) {
    throw new Error(handleAPIError(error))
  }
};