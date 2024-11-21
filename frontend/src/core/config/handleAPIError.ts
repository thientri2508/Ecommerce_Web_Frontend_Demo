import axios from 'axios';

// Hàm xử lý lỗi API
export const handleAPIError = (error: unknown) => {
  // Kiểm tra nếu lỗi đến từ axios
  if (axios.isAxiosError(error)) {
    const response = error?.response;
    
    // Kiểm tra mã lỗi trả về từ API
    if (response) {
      switch (response?.status) {
        case 400:
          return 'Yêu cầu không hợp lệ. Vui lòng kiểm tra lại thông tin.';
        case 401:
          return 'Bạn cần đăng nhập để thực hiện thao tác này.';
        case 403:
          return 'Bạn không có quyền truy cập vào tài nguyên này.';
        case 404:
          return 'Không tìm thấy tài nguyên yêu cầu.';
        case 409:
          return 'Xung đột trong yêu cầu. Tài nguyên có thể đã tồn tại.';
        case 413:
          return 'Dữ liệu gửi lên quá lớn. Vui lòng giảm kích thước và thử lại.';
        case 415:
          return 'Loại dữ liệu không được hỗ trợ. Vui lòng chọn định dạng hợp lệ.';
        case 500:
          return 'Lỗi máy chủ. Vui lòng thử lại sau.';
        case 503:
          return 'Hệ thống hiện đang bảo trì. Vui lòng thử lại sau.';
        default:
          return response.data?.message || 'Vui lòng thử lại sau.';
      }
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
