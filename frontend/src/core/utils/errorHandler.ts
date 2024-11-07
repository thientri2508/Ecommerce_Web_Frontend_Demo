import axios from 'axios';

export function handleError(error: unknown): never {
    if (axios.isAxiosError(error)) {
        // Xử lý lỗi từ Axios
        throw new Error(error.response?.data?.message || 'Lỗi khi kết nối với server');
      } else {
        // Nếu là đối tượng Error thông thường
        if (error instanceof Error) {
          throw new Error(error.message);
        } else {
          // Nếu lỗi không xác định
          throw new Error('Lỗi không xác định');
        }
      }
}