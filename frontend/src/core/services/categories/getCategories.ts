import { API_ENDPOINTS } from '../../config/apiConfig';
import { validateNonEmptyArray } from '../../utils/validation/arrayValidation';
import connectAPI from '../../config/connectAPI';
import { Category } from '../../types/Category';
import { APIResponse } from '../../types/App';
import { categoryByLevelData, categoryData } from '../../mockData/categoryData';
import { RootCategoryData } from '../../mockData/RootCategoryData';

// Hàm lấy tất cà danh mục
export const getAllCategories = async () => {
    // const response = await connectAPI<APIResponse<Category>>('GET',`${API_ENDPOINTS.CATEGORIES}/get_category_menu_home`);
    // const categories = response.data.list
    // validateNonEmptyArray(categories, 'danh mục') 
    const categories = categoryData
    return categories
}; 

// Hàm lấy danh sách danh mục theo cấp
export const getCategoriesByLevel = async (level: number) => {
  // const url = `${API_ENDPOINTS.CATEGORIES}/get_category_by_level?level_category=${level}`
  // const response = await connectAPI<APIResponse<Category>>('GET',url);
  // const categories = response.data.list
  // validateNonEmptyArray(categories, 'danh mục')
  const categories = RootCategoryData
  return categories
};

// Hàm lấy danh sách danh mục con của 1 danh mục cụ thể
export const getCategoriesChildren = async (id: string) => {
  if (!id) {
    throw new Error("Danh sách danh mục không tồn tại");
  }
  const body = { "p_id" : id }
  const response = await connectAPI<APIResponse<Category>>('POST', `${API_ENDPOINTS.CATEGORIES}/get_category_product`, body)
  const categories = response.data.list
  validateNonEmptyArray(categories, 'danh mục') 
  return categories
};

//Hàm lấy danh mục theo id
export const getCategoryById = async (id: string) => {
  if (!id) {
    throw new Error("Danh mục không tồn tại");
  }
  const body = { "category_id" : id }
  const response = await connectAPI<APIResponse<Category>>('POST', `${API_ENDPOINTS.CATEGORIES}/get_category_product`, body)
  const category = response.data
  if(!category) {
    throw new Error("Danh mục không tồn tại");
  }
  return category
};

// Hàm lấy danh sách các danh mục con của danh mục root cụ thể
export const getDetailCategory = async (id: string) => {
  // if (!id) {
  //   throw new Error("Danh sách danh mục không tồn tại");
  // }
  // const url = `${API_ENDPOINTS.CATEGORIES}/get_detail_category_page?level_category=2&p_id=${id}`
  // const response = await connectAPI<APIResponse<Category>>('GET',url);
  // const categories = response.data.list
  // validateNonEmptyArray(categories, 'danh mục')
  // console.log(categories)
  const categories = categoryByLevelData
  return categories
};

// Hàm lấy các danh mục cha của 1 danh mục con cụ thể
export const getParentCategories = async (id: string) => {
  if (!id) {
    throw new Error("");
  }
  const url = `${API_ENDPOINTS.CATEGORIES}/read_breadcumb?id=${id}`
  const response = await connectAPI<APIResponse<Category>>('GET',url);
  const categories = response.data.list
  validateNonEmptyArray(categories, 'danh mục')
  return categories
};