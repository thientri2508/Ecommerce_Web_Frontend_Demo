import { API_ENDPOINTS } from "../../config/apiConfig";
import connectAPI from "../../config/connectAPI";
import { APIResponse } from "../../types/App";

export const getBannerImage = async (name: string) => {
    const url = `${API_ENDPOINTS.CATEGORIES}/read_data`;
    const body = { name }
    const response = await connectAPI<APIResponse<unknown>>('POST', url, body);
    const banner = response.data.list;
    return banner;
};