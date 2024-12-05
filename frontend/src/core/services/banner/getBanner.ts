import { API_ENDPOINTS } from "../../config/apiConfig";
import connectAPI from "../../config/connectAPI";
import { APIResponse } from "../../types/App";
import { Banner } from "../../types/Banner";
import { validateNonEmptyArray } from "../../utils/validation/arrayValidation";

export const getBannerImage = async (name: string) => {
    const url = `${API_ENDPOINTS.BANNER_HOME}?name=${name}`;
    const response = await connectAPI<APIResponse<Banner>>('GET', url);
    const banners = response.data.list;
    validateNonEmptyArray(banners, 'hình ảnh') 
    return banners;
};