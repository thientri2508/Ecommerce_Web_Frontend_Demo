import { API_ENDPOINTS } from "../../config/apiConfig";
import connectAPI from "../../config/connectAPI";
import { APIResponse } from "../../types/App";
import { CartItem } from "../../types/CartItem";
import { validateNonEmptyArray } from "../../utils/validation/arrayValidation";

// Hàm lấy danh sách sản phẩm trong giỏ hàng
export const getCart = async (user_id: number) => {
    const url = `${API_ENDPOINTS.CART}/show_cart_shopping?user_id=${user_id}`
    const response = await connectAPI<APIResponse<CartItem>>('GET', url)
    const carts = response.data.list;
    validateNonEmptyArray(carts, 'giỏ hàng')
    return carts;
};