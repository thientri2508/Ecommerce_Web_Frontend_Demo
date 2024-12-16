import { API_ENDPOINTS } from "../../config/apiConfig";
import { APIResponse } from "../../types/App";
import { Product } from "../../types/Product";
import connectAPI from "../../config/connectAPI";
import { DetailProductData } from "../../mockData/productData";

// Hàm gọi API lấy chi tiết sản phẩm
export const getProductById = async (id: string) => {
  // if (!id) {
  //   throw new Error("Sản phẩm không tồn tại");
  // }
  // const body = {
  //   filters: [
  //     {
  //       name: "id",
  //       op: "=",
  //       value: id,
  //     },
  //   ],}
  //   const url = `${API_ENDPOINTS.PRODUCTS}/read_data`
  //   const response = await connectAPI<APIResponse<Product>>('POST', url, body)
  //   const products = response.data.list;
    
  //   if ( products && products.length > 0) {
  //     const product = products[0];
  //     console.log(product)
  //     return product;
  //   } else {
  //     throw new Error("Sản phẩm không tồn tại");
  //   }
  const product = DetailProductData
  return product
};