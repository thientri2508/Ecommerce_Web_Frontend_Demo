import { cartData } from "../../mockData/cartData";

// Hàm lấy danh sách sản phẩm trong giỏ hàng
export const getCart = async () => {
    // const url = `${API_ENDPOINTS.CART}/show_cart_shopping?user_id=${user_id}`
    // const response = await connectAPI<APIResponse<CartItem>>('GET', url)
    // const carts = response.data.list;
    // validateNonEmptyArray(carts, 'giỏ hàng')
    const carts = cartData;
    return carts;
};