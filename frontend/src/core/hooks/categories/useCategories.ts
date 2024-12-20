import { useQuery } from '@tanstack/react-query';
import { 
  getAllCategories, 
  getCategoriesByLevel, 
  getCategoriesChildren, 
  getDetailCategory, 
  getCategoryById,
  getParentCategories
} from '../../services/categories/getCategories';

// Hook lấy danh sách tát cả danh mục
export const useAllCategories = () => 
  useQuery({
    queryKey: ['categories'],
    queryFn: getAllCategories,
});

// Hook lấy danh mục theo cấp
export const useCategoriesByLevel = (level: number) => 
  useQuery({
    queryKey: ['categories', level],
    queryFn: () => getCategoriesByLevel(),
});

// Hook lấy danh sách các danh mục con của 1 danh mục cha cụ thể
export const useCategoriesChildren = (id: string) => 
  useQuery({
    queryKey: ['ChildCategories', id],
    queryFn: () => getCategoriesChildren(id),
});

// Hook lấy danh sách các danh mục con của danh mục root cụ thể (dữ liệu trả về có json)
export const useDetailCategory = (id: string) => 
  useQuery({
    queryKey: ['DetailCategory', id],
    queryFn: () => getDetailCategory(),
});

// Hook lấy thông tin chi tiết 1 danh mục
export const useCategoryById = (id: string) => 
  useQuery({
    queryKey: ['CategoryById', id],
    queryFn: () => getCategoryById(id),
});

// Hook lấy các danh mục cha của 1 danh mục con cụ thể
export const useParentCategories = (id: string) => 
  useQuery({
    queryKey: ['ParentCategories', id],
    queryFn: () => getParentCategories(id),
});