import React, { useState } from "react";
import { IoMdArrowBack } from "react-icons/io"; // Icon quay lại

const Register: React.FC<{ switchToLogin: () => void }> = ({ switchToLogin }) => {
  const [step, setStep] = useState(1); // Bước hiện tại: 1 -> Số điện thoại, 2 -> OTP, 3 -> Mật khẩu
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Hàm xử lý chuyển bước
  const handleNextStep = () => {
    if (step === 1) {
      // Kiểm tra số điện thoại hợp lệ
      if (!phoneNumber) {
        alert("Vui lòng nhập số điện thoại.");
        return;
      }
      // Giả sử bạn gửi OTP khi bước 1 thành công
      alert("Mã OTP đã được gửi đến số điện thoại của bạn.");
      setStep(2);
    } else if (step === 2) {
      // Kiểm tra mã OTP hợp lệ
      if (!otp) {
        alert("Vui lòng nhập mã OTP.");
        return;
      }
      // Giả sử OTP hợp lệ và chuyển sang bước 3
      setStep(3);
    } else if (step === 3) {
      // Kiểm tra mật khẩu và xác nhận mật khẩu
      if (!password || !confirmPassword) {
        alert("Vui lòng nhập mật khẩu và xác nhận mật khẩu.");
        return;
      }
      if (password !== confirmPassword) {
        alert("Mật khẩu và xác nhận mật khẩu không khớp.");
        return;
      }
      // Giả sử đăng ký thành công
      alert("Đăng ký thành công!");
      // Reset các giá trị và chuyển về bước 1 hoặc quay lại trang đăng nhập
      setPhoneNumber("");
      setOtp("");
      setPassword("");
      setConfirmPassword("");
      setStep(1);
    }
  };

  // Hàm quay lại bước trước
  const handleBackStep = () => {
    if (step === 1) {
      switchToLogin(); // Chuyển sang màn hình đăng nhập nếu ở bước 1
    } else {
      setStep(step - 1);
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto p-6 bg-white rounded-lg shadow-md relative">
      {/* Nút quay lại chỉ hiển thị khi không ở bước 1 */}
      {step !== 1 && (
        <button
          onClick={handleBackStep}
          className="absolute top-4 left-4 text-gray-600 hover:text-blue-500"
        >
          <IoMdArrowBack size={24} />
        </button>
      )}

      <h2 className="text-2xl font-bold text-center mb-4">Đăng ký tài khoản</h2>

      {/* Bước 1: Nhập số điện thoại */}
      {step === 1 && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Số điện thoại</label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder="Nhập số điện thoại"
            />
          </div>
          <button
            onClick={handleNextStep}
            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Tiếp theo
          </button>
        </div>
      )}

      {/* Bước 2: Nhập mã OTP */}
      {step === 2 && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Mã OTP</label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder="Nhập mã OTP"
            />
          </div>
          <button
            onClick={handleNextStep}
            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Tiếp theo
          </button>
        </div>
      )}

      {/* Bước 3: Nhập mật khẩu và xác nhận mật khẩu */}
      {step === 3 && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Mật khẩu</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder="Nhập mật khẩu"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Xác nhận mật khẩu</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder="Xác nhận mật khẩu"
            />
          </div>
          <button
            onClick={handleNextStep}
            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Đăng ký
          </button>
        </div>
      )}

      {/* Quay lại đăng nhập */}
      <div className="mt-4 text-center">
        <button
          onClick={switchToLogin}
          className="text-blue-500 hover:underline"
        >
          Đã có tài khoản? Đăng nhập
        </button>
      </div>
    </div>
  );
};

export default Register;
