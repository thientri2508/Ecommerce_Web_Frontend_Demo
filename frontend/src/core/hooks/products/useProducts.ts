import { useQuery } from '@tanstack/react-query';
import { getProductsByStatus, ProductParams, getProductsByCategory } from '../../services/products/getProducts';

// Hook lấy danh sách sản phẩm theo trạng thái
export const useProductsByStatus = (params?: ProductParams) => useQuery({ queryKey: ['products', params], queryFn: () => getProductsByStatus(params) })

// Hook lấy danh sách sản phẩm theo danh mục
export const useProductsByCategory = (params?: ProductParams) => useQuery({ queryKey: ['products', params], queryFn: () => getProductsByCategory(params) })