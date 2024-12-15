import { API_ENDPOINTS } from "../../config/apiConfig";
import connectAPI from "../../config/connectAPI";
import { APIResponse } from "../../types/App";
import { CartItem } from "../../types/CartItem";

// Hàm xóa sản phẩm trong giỏ hàng
export const deleteItemCart = async (id: number) => {
    const response = await connectAPI<APIResponse<CartItem>>('DELETE', API_ENDPOINTS.CART, {id})
    return response;
};