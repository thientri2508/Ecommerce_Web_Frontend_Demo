import { productData, productDataByCategory, ProductStoreData } from '../../mockData/productData';

// Định nghĩa kiểu dữ liệu cho tham số lọc
export interface ProductParams {
  page?: number;
  page_size?: number;
  p_id?: number | null;
  category_id?: number | null;
  id_store?: number | null;
  status_product?: string;
}

export const getProductsByStatus = async () => {
  // const query = params ? queryString.stringify(params) : '';
  // const url = `${API_ENDPOINTS.PRODUCTS}/get-product-filter?${query}`; 
  // const response = await connectAPI<APIResponse<Product>>('GET', url);
  // const products = response.data.list;
  // validateNonEmptyArray(products, 'sản phẩm')
  // console.log(products)
  return new Promise((resolve) => {
    setTimeout(() => {
      const products = productData;
      resolve(products);
    }, 1000);
  });
};

export const getProductsByCategory = async () => {
    // const body = {
    //   "page": params?.page,
    //   "page_size": params?.page_size,
    //   "category_id": params?.category_id,
    //   "p_id": params?.p_id
    // }
    // const url = `${API_ENDPOINTS.PRODUCTS}/read_data_product`;
    // const response = await connectAPI<APIResponse<Product>>('POST', url, body)
    // const products = response.data;
    // validateNonEmptyArray(products.list, 'sản phẩm')
    return new Promise((resolve) => {
      setTimeout(() => {
        const products = productDataByCategory;
        resolve(products);
      }, 1000);
    });
};

export const getProductsByStore = async () => {
  // const body = {
  //   page: params?.page,
  //   page_size: params?.page_size,
  //   sort: "id desc",
  //   filters: [
  //     {
  //       name: "id_store",
  //       op: "=",
  //       value: params?.id_store,
  //     },
  //   ],}
  // const url = `${API_ENDPOINTS.PRODUCTS}/read_data`;
  // const response = await connectAPI<APIResponse<Product>>('POST', url, body)
  // const products = response.data.list;
  // validateNonEmptyArray(products, 'sản phẩm')
  // return products;
  return new Promise((resolve) => {
    setTimeout(() => {
      const products = ProductStoreData;
      resolve(products);
    }, 1000);
  });
};