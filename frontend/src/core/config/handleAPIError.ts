import axios from 'axios';

// Hàm xử lý lỗi API
export const handleAPIError = (error: unknown) => {
  // Kiểm tra nếu lỗi đến từ axios
  if (axios.isAxiosError(error)) {
    const response = error?.response;
    if (response) {
      return response.data.message
    } else if (error.request) {
      // Nếu không nhận được phản hồi từ server
      return 'Không nhận được phản hồi từ server. Vui lòng kiểm tra kết nối internet.';
    } else {
      // Nếu có lỗi trong việc cấu hình request
      return `Lỗi khi gửi yêu cầu: ${error.message}`;
    }
  } else {
    // Nếu là đối tượng Error thông thường
    if (error instanceof Error) {
      return error.message;
    } else {
      // Nếu lỗi không xác định
      return 'Đã có lỗi không xác định xảy ra.';
    }
  }
};
