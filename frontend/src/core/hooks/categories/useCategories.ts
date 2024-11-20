// hook lấy danh sách danh mục
import { useQuery } from '@tanstack/react-query';
import { getAllCategories, getCategoriesByLevel, getCategoriesChildren, getDetailCategory, getCategoryById } from '../../services/categories/getCategories';

export const useAllCategories = () => useQuery({ queryKey: ['categories'], queryFn: getAllCategories })
export const useCategoriesByLevel = (level: number) => useQuery({ queryKey: ['categories', level], queryFn: () => getCategoriesByLevel(level) })
export const useCategoriesChildren = (id: string) => useQuery({ queryKey: ['ChildCategories', id], queryFn: () => getCategoriesChildren(id) })
export const useDetailCategory = (id: string) => useQuery({ queryKey: ['DetailCategory', id], queryFn: () => getDetailCategory(id) })
export const useCategoryById = (id: string) => useQuery({ queryKey: ['CategoryById', id], queryFn: () => getCategoryById(id) })