// hook lấy danh sách danh mục
import { useQuery } from '@tanstack/react-query';
import { getCategories } from '../../services/categories/getCategories';

export const useCategories = () => useQuery({ queryKey: ['categories'], queryFn: getCategories })