import { useQuery } from '@tanstack/react-query';
import { getProductsByStatus, ProductParams, getProductsByCategory, getProductsByStore } from '../../services/products/getProducts';

// Hook lấy danh sách sản phẩm theo trạng thái
export const useProductsByStatus = (params: ProductParams) => useQuery({ queryKey: ['products_by_status', params], queryFn: () => getProductsByStatus(params) })

// Hook lấy danh sách sản phẩm theo danh mục
export const useProductsByCategory = (params: ProductParams) => useQuery({ queryKey: ['products_by_category', params], queryFn: () => getProductsByCategory(params) })

// Hook lấy danh sách sản phẩm của cửa hàng
export const useProductsByStore = (params: ProductParams) => useQuery({ queryKey: ['products_by_store', params], queryFn: () => getProductsByStore(params) })