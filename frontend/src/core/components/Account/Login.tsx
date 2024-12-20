import React, { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import logo from "../../assets/logo/logo-login.png";
import successIcon from "../../assets/icon/success.png";
import { HiOutlineArrowRight } from "react-icons/hi";
import OTPInput from "./OTPInput";

const Login: React.FC<{ switchToRegister: () => void }> = ({
  switchToRegister,
}) => {
  const [forgotPasswordStep, setForgotPasswordStep] = useState(0); // 0 = Đăng nhập, 1-4 = Các bước quên mật khẩu
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState<string[]>(Array(4).fill(""));
  const [forgotPhoneNumber, setForgotPhoneNumber] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  // Xử lý nút "Back" để quay lại bước trước hoặc trở về đăng nhập
  const handleBack = () => {
    if (forgotPasswordStep === 0) return; // Không làm gì nếu đang ở màn hình đăng nhập
    setForgotPasswordStep(forgotPasswordStep - 1); // Quay lại bước trước đó
  };

  // Xử lý chuyển sang bước tiếp theo
  const handleNextStep = () => {
    if (forgotPasswordStep === 1 && !phoneNumber) {
      alert("Vui lòng nhập số điện thoại.");
      return;
    }
    if (forgotPasswordStep === 2 && !otp.every((digit) => digit !== "")) {
      alert("Vui lòng nhập mã OTP.");
      return;
    }
    if (forgotPasswordStep === 3) {
      if (!newPassword || !confirmNewPassword) {
        alert("Vui lòng nhập mật khẩu mới và xác nhận mật khẩu.");
        return;
      }
      if (newPassword !== confirmNewPassword) {
        alert("Mật khẩu mới và xác nhận mật khẩu không khớp.");
        return;
      }
    }
    setForgotPasswordStep(forgotPasswordStep + 1); // Chuyển sang bước tiếp theo
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Lấy giá trị đầu vào
    const value = e.target.value;

    // Chỉ cho phép nhập số và tối đa 12 ký tự
    if (/^\d{0,12}$/.test(value)) {
      setPhoneNumber(value);
    }
  };

  const handleForgotPhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Lấy giá trị đầu vào
    const value = e.target.value;

    // Chỉ cho phép nhập số và tối đa 12 ký tự
    if (/^\d{0,12}$/.test(value)) {
      setForgotPhoneNumber(value);
    }
  };

  const handleLogin = () => {
    if (!phoneNumber) {
      alert("Vui lòng nhập số điện thoại.");
      return;
    }
    if (!password) {
      alert("Vui lòng nhập mật khẩu.");
      return;
    }
    alert("Đăng nhập thành công!");
  };

  // Xử lý hiển thị các bước quên mật khẩu
  const renderForgotPasswordSteps = () => {
    switch (forgotPasswordStep) {
      case 1: // Bước 1: Nhập số điện thoại
        return (
          <div>
            <div className="flex flex-col gap-1 mt-[50px]">
              <h2 className="font-bold text-[24px] text-[#555555]">
                Quên mật khẩu?
              </h2>
              <div className="font-light text-[15px] text-text-muted">
                Bạn vui lòng nhập thông tin tài khoản để lấy lại mật khẩu
              </div>
            </div>
            <input
              type="text"
              value={forgotPhoneNumber}
              onChange={handleForgotPhoneNumberChange}
              maxLength={12}
              inputMode="numeric"
              placeholder="Số điện thoại"
              className="w-full rounded-[32px] text-text-muted text-[16px] mt-8 py-3 px-8 border-2 outline-none transition duration-300 focus:shadow-custom-shadow-inp"
            />
            <button
              onClick={handleNextStep}
              className="w-full rounded-[32px] text-white text-[16px] py-4 bg-bg-alt1 mt-4"
            >
              Gửi mã OTP
            </button>
          </div>
        );
      case 2: // Bước 2: Nhập mã OTP
        return (
          <div>
            <div className="flex flex-col gap-1 mt-[50px]">
              <h2 className="font-bold text-[24px] text-[#555555]">
                Quên mật khẩu?
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
              Tiếp tục
            </button>
          </div>
        );
      case 3: // Bước 3: Nhập mật khẩu mới
        return (
          <div className="space-y-4">
            <div>
              <div className="flex flex-col gap-1 mt-[50px]">
                <h2 className="font-bold text-[24px] text-[#555555]">
                  Quên mật khẩu?
                </h2>
                <div className="font-light text-[15px] text-text-muted">
                  Mật khẩu dài từ 8-32 kí tự, Có cả chữ và số
                </div>
              </div>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Nhập mật khẩu mới"
                className="w-full rounded-[32px] text-text-muted text-[16px] mt-8 py-3 px-8 border-2 outline-none transition duration-300 focus:shadow-custom-shadow-inp"
              />
            </div>
            <div>
              <input
                type="password"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                placeholder="Nhập lại mật khẩu mới"
                className="w-full rounded-[32px] text-text-muted text-[16px] py-3 px-8 border-2 outline-none transition duration-300 focus:shadow-custom-shadow-inp"
              />
            </div>
            <button
              onClick={handleNextStep}
              className="w-full rounded-[32px] text-white text-[16px] py-4 bg-bg-alt1 mt-4"
            >
              Đặt lại mật khẩu
            </button>
          </div>
        );
      case 4: // Bước 4: Thành công
        return (
          <div className="text-center space-y-4 flex flex-col gap-5 mt-6">
            <div className="w-[230px] h-[230px] border-2 m-auto rounded-[32px] center shadow-custom-shadow flex flex-col gap-6">
              <img src={successIcon}></img>
              <h2 className="text-[20px] font-medium leading-tight text-success">
                Tạo mật khẩu mới thành công
              </h2>
            </div>

            <div
              onClick={() => setForgotPasswordStep(0)}
              className="w-[43%] m-auto text-[16px] text-text-muted cursor-pointer flex items-center justify-between"
            >
              <div>Quay lại đăng nhập</div>
              <HiOutlineArrowRight size={20} />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full px-6 pb-8">
      {/* Nút quay lại */}
      {forgotPasswordStep > 0 && (
        <button
          onClick={handleBack}
          className="absolute top-4 left-4 text-gray-600"
        >
          <IoMdArrowBack size={24} />
        </button>
      )}

      <img src={logo} className="w-[150px] h-[150px] m-auto mt-8"></img>

      {/* Giao diện đăng nhập hoặc quên mật khẩu */}
      {forgotPasswordStep === 0 ? (
        <>
          <div className="flex flex-col gap-1 mt-[40px]">
            <h2 className="font-bold text-[24px] text-[#555555]">Đăng nhập</h2>
            <div className="font-light text-[15px] text-text-muted">
              Nhập số điện thoại và mật khẩu để đăng nhập
            </div>
          </div>
          <div className="mt-12">
            <input
              type="text"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              placeholder="Số điện thoại"
              maxLength={12}
              inputMode="numeric"
              className="w-full rounded-[32px] text-text-muted text-[16px] py-3 px-8 border-2 outline-none transition duration-300 focus:shadow-custom-shadow-inp"
            />
          </div>
          <div className="mt-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mật khẩu"
              className="w-full rounded-[32px] text-text-muted text-[16px] py-3 px-8 border-2 outline-none transition duration-300 focus:shadow-custom-shadow-inp"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-[32px] text-white text-[16px] py-4 bg-bg-alt1 mt-4 cursor-pointer"
            onClick={handleLogin}
          >
            Đăng nhập
          </button>
          <div className="flex justify-between text-text-muted mt-4 cursor-pointer">
            <div
              className="hover:underline"
              onClick={() => setForgotPasswordStep(1)}
            >
              Quên mật khẩu?
            </div>
            <div>
              <span>Bạn chưa có tài khoản? </span>
              <button
                onClick={switchToRegister}
                className="text-bg-alt1 hover:underline"
              >
                Đăng ký ngay
              </button>
            </div>
          </div>
        </>
      ) : (
        renderForgotPasswordSteps()
      )}
      <div className="text-text-muted font-light text-[11px] mt-6">
        Bằng việc tiếp tuc, bạn đã đọc và đồng ý với điều khoản sử dụng và Chính
        sách bảo mật thông tin cá nhân của Vimall
      </div>
    </div>
  );
};

export default Login;
