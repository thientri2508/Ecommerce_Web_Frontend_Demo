import axios from "axios";
import { API_ENDPOINTS } from "../../config/apiConfig";
import { handleAPIError } from "../../config/handleAPIError";

// Hàm gọi API lấy chi tiết sản phẩm
export const getProductById = async (id: string) => {
    try {
      if (!id) {
        throw new Error("Sản phẩm không tồn tại");
      }

      const response = await axios.post(`${API_ENDPOINTS.PRODUCT_DETAIL}`, {
        filters: [
          {
            name: "id",
            op: "=",
            value: id,
          },
        ],
      });
  
      const product = response.data.data.list;
      if (!product) {
        throw new Error("Sản phẩm không tồn tại");
      }
  
      return product;
    } catch (error) {
      throw new Error(handleAPIError(error));
    }
};