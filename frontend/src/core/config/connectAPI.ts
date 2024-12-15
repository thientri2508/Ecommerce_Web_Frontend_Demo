import { handleAPIError } from './handleAPIError';
import axiosInstance from './axiosInstance';

// Định nghĩa kiểu trả về từ API có thể là một đối tượng với thuộc tính data
interface ApiResponse<T> {
  data: T;
}

const connectAPI = async <T>(method: 'GET' | 'POST' | 'PUT' | 'DELETE', url: string, data?: unknown): Promise<ApiResponse<T>> => {
  try {
    let response;

    switch (method) {
      case 'GET':
        response = await axiosInstance.get(url, { params: data });
        break;
      case 'POST':
        response = await axiosInstance.post(url, data);
        break;
      case 'PUT':
        response = await axiosInstance.put(url, data);
        break;
      case 'DELETE':
        response = await axiosInstance.delete(url, { data });
        break;
      default:
        throw new Error('Unsupported HTTP method');
    }

    return response.data;
  } catch (error) {
    throw new Error(handleAPIError(error));
  }
};

export default connectAPI;
