import { API_ENDPOINTS } from "../../config/apiConfig";
import connectAPI from "../../config/connectAPI";
import { APIResponse } from "../../types/App";
import { CartItem } from "../../types/CartItem";

// Hàm thêm sản phẩm vào giỏ hàng
export const AddToCart = async (user_id: number, attribute_product_id: number, quantity: number) => {
    const response = await connectAPI<APIResponse<CartItem>>('POST', API_ENDPOINTS.CART, {user_id, attribute_product_id, quantity})
    return response;
};