import React, { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import logo from "../../assets/logo/logo-login.png";
import OTPInput from "./OTPInput";

const Register: React.FC<{ switchToLogin: () => void }> = ({
  switchToLogin,
}) => {
  const [step, setStep] = useState(1); // Bước hiện tại: 1 -> Số điện thoại, 2 -> OTP, 3 -> Mật khẩu
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState<string[]>(Array(4).fill(""));
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Lấy giá trị đầu vào
    const value = e.target.value;

    // Chỉ cho phép nhập số và tối đa 12 ký tự
    if (/^\d{0,12}$/.test(value)) {
      setPhoneNumber(value);
    }
  };

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
      if (!otp.every((digit) => digit !== "")) {
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
      if(password.length < 8 || password.length > 32){
        alert("Mật khẩu phải dài từ 8-32 kí tự.");
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
      setOtp([]);
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
    <div className="w-full px-6">
      {/* Nút quay lại chỉ hiển thị khi không ở bước 1 */}
      {step !== 1 && (
        <button
          onClick={handleBackStep}
          className="absolute top-4 left-4 text-gray-600"
        >
          <IoMdArrowBack size={24} />
        </button>
      )}

      <img src={logo} className="w-[150px] h-[150px] m-auto mt-8"></img>

      {/* Bước 1: Nhập số điện thoại */}
      {step === 1 && (
        <div className="mt-14">
          <div className="flex flex-col gap-1">
            <h2 className="font-bold text-[24px] text-[#555555]">Đăng ký</h2>
            <div className="font-light text-[15px] text-text-muted">
              Nhập số điện thoại để đăng ký
            </div>
          </div>
          <input
            type="text"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            maxLength={12}
            inputMode="numeric"
            placeholder="Số điện thoại"
            className="w-full rounded-[32px] text-text-muted text-[16px] mt-12 py-3 px-8 border-2 outline-none transition duration-300 focus:shadow-custom-shadow-inp"
          />
          <button
            onClick={handleNextStep}
            className="w-full rounded-[32px] text-white text-[16px] py-4 bg-bg-alt1 mt-4"
          >
            Tiếp tục
          </button>
        </div>
      )}

      {/* Bước 2: Nhập mã OTP */}
      {step === 2 && (
        <div className="mt-14">
          <div className="flex flex-col gap-1">
            <h2 className="font-bold text-[24px] text-[#555555]">
              Xác minh số điện thoại
            </h2>
            <div className="font-light text-[15px] text-text-muted">
              Vui lòng nhập mã OTP gồm 4 chữ số được gửi về số điện thoại
              0728398422
            </div>
          </div>
          <div className="mt-6 center">
            <OTPInput otp={otp} setOtp={setOtp} />
          </div>
          <button
            onClick={handleNextStep}
            className="w-full rounded-[32px] text-white text-[16px] py-4 bg-bg-alt1 mt-4"
          >
            Xác nhận
          </button>
        </div>
      )}

      {/* Bước 3: Nhập mật khẩu và xác nhận mật khẩu */}
      {step === 3 && (
        <div className="space-y-4 mt-12">
          <div>
            <div className="flex flex-col gap-1">
              <h2 className="font-bold text-[24px] text-[#555555]">
                Tạo mật khẩu
              </h2>
              <div className="font-light text-[15px] text-text-muted">
                Mật khẩu phải dài từ 8-32 kí tự
              </div>
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Nhập mật khẩu"
              className="w-full rounded-[32px] text-text-muted text-[16px] mt-8 py-3 px-8 border-2 outline-none transition duration-300 focus:shadow-custom-shadow-inp"
            />
          </div>
          <div>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Nhập lại mật khẩu"
              className="w-full rounded-[32px] text-text-muted text-[16px] py-3 px-8 border-2 outline-none transition duration-300 focus:shadow-custom-shadow-inp"
            />
          </div>
          <button
            className="w-full rounded-[32px] text-white text-[16px] py-4 bg-bg-alt1 mt-4"
            onClick={handleNextStep}
          >
            Đặt mật khẩu
          </button>
        </div>
      )}

      {/* Quay lại đăng nhập */}
      <div className="mt-4 text-center flex gap-1 justify-center">
        <span className="text-text-muted">Bạn đã có tài khoản?</span>
        <button
          onClick={switchToLogin}
          className="text-bg-alt1 hover:underline"
        >
          Đăng nhập
        </button>
      </div>
      <div className="text-text-muted font-light text-[11px] mt-6">
        Bằng việc tiếp tuc, bạn đã đọc và đồng ý với điều khoản sử dụng và Chính
        sách bảo mật thông tin cá nhân của Vimall
      </div>
    </div>
  );
};

export default Register;
