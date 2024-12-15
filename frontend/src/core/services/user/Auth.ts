import { API_ENDPOINTS } from "../../config/apiConfig";
import connectAPI from "../../config/connectAPI";
import { APIResponse } from "../../types/App";
import { User } from "../../types/User";

export const UserLogin = async (account_name: string, password_hash: string) => {
    const url = `${API_ENDPOINTS.USER}/login`
    const response = await connectAPI<APIResponse<User>>('POST', url, { account_name, password_hash })
    if(!response.data) throw new Error("Số điện thoại hoặc mật khẩu không đúng!"); 
    const user = response.data;
    return user
};

export const UserRegister = async (user_name: string, phone_number: string, password_hash: string) => {
    const url = `${API_ENDPOINTS.USER}/create_update_user`
    const response = await connectAPI<APIResponse<User>>('POST', url, {user_name, phone_number, password_hash })
    const user = response.data;
    return user
};

export const CheckPhoneNumber = async (phone_number: string) => {
    const url = `${API_ENDPOINTS.USER}/check_phone_number`
    const response = await connectAPI<APIResponse<User>>('POST', url, { phone_number })
    return response.data
};