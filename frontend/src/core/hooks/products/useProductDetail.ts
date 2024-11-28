import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../../services/products/getProductDetail";

// hook lấy thông tin chi tiết sản phẩm
export const useProductDetail = (id: string) => useQuery({ queryKey: ['product', id], queryFn: () => getProductById(id) })