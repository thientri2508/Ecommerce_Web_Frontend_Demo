import { useQuery } from "@tanstack/react-query";
import { getStoreById } from "../../services/store/getStoreDetail";

// hook lấy thông tin cửa hàng
export const useStoreDetail = (id: number) => useQuery({ queryKey: ['store', id], queryFn: () => getStoreById(id) })