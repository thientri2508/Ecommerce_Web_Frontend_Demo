// hook lấy danh sách sản phẩm
import { useQuery } from '@tanstack/react-query';
import { getProducts, ProductParams } from '../../services/products/getProducts';

export const useProducts = (params?: ProductParams) => useQuery({ queryKey: ['products', params], queryFn: () => getProducts(params) })