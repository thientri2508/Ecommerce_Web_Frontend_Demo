import { API_BASE_URL } from "../config/apiConfig"

export const getUriConst =(image:string)=> `${API_BASE_URL}/image/get_image/${image}`