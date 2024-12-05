import { API_ENDPOINTS } from "../../config/apiConfig";
import connectAPI from "../../config/connectAPI";
import { APIResponse } from "../../types/App";
import { Store } from "../../types/Store";

// Hàm gọi API lấy thông tin cửa hàng
export const getStoreById = async (id: number) => {
    if (!id) {
      throw new Error("Cửa hàng không tồn tại");
    }
    const body = {
      filters: [
        {
          name: "id",
          op: "=",
          value: id,
        },
      ],}
    const url = `${API_ENDPOINTS.STORE}/read_data`
    const response = await connectAPI<APIResponse<Store>>('POST', url, body)
    const data = response.data.list;
    
    if ( data && data.length > 0) {
    const store = data[0];
    console.log(store)
    return store;
    } else {
    throw new Error("Cửa hàng không tồn tại");
    }
};