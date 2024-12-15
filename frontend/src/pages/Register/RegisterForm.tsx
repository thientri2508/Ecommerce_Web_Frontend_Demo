import React, { useState } from "react";
import logo from "../../core/assets/logo/logo-login.png";
import OTPInput from "./OTPInput";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { MdOutlineErrorOutline } from "react-icons/md";
import { useRegister } from "../../core/hooks/user/useRegister";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const RegisterForm = () => {
  // const [step, setStep] = useState(1); // Bước hiện tại: 1 -> Số điện thoại, 2 -> OTP, 3 -> Mật khẩu
  // const [phoneNumber, setPhoneNumber] = useState("");
  // const [otp, setOtp] = useState<string[]>(Array(4).fill(""));
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Lấy giá trị đầu vào
    const value = e.target.value;

    // Chỉ cho phép nhập số và tối đa 12 ký tự
    if (/^\d{0,12}$/.test(value)) {
      setPhoneNumber(value);
    }
  };

  // // Hàm xử lý chuyển bước
  // const handleNextStep = async () => {
  //   if (step === 1) {
  //     // Kiểm tra số điện thoại hợp lệ
  //     if (!phoneNumber) {
  //       setErrorMessage("Vui lòng nhập số điện thoại.");
  //       return;
  //     }

  //     const isExists = await CheckPhoneNumber(phoneNumber);

  //     if (isExists.success) {
  //       setErrorMessage("Số điện thoại đã tồn tại.");
  //       return false;
  //     }
  //     setErrorMessage("");
  //     setStep(2);
  //   } else if (step === 2) {
  //     // Kiểm tra mã OTP hợp lệ
  //     if (!otp.every((digit) => digit !== "")) {
  //       setErrorMessage("Vui lòng nhập mã OTP.");
  //       return;
  //     }
  //     if (otp.join("") !== "1234") {
  //       setErrorMessage("Mã OTP không chính xác.");
  //       return;
  //     }
  //     // Giả sử OTP hợp lệ và chuyển sang bước 3
  //     setErrorMessage("");
  //     setStep(3);
  //   } else if (step === 3) {
  //     // Kiểm tra mật khẩu và xác nhận mật khẩu
  //     if (!password || !confirmPassword) {
  //       setErrorMessage("Vui lòng nhập mật khẩu và xác nhận mật khẩu.");
  //       return;
  //     }
  //     if (password.length < 8 || password.length > 32) {
  //       setErrorMessage("Mật khẩu phải dài từ 8-32 kí tự.");
  //       return;
  //     }
  //     if (password !== confirmPassword) {
  //       setErrorMessage("Mật khẩu và xác nhận mật khẩu không khớp.");
  //       return;
  //     }

  //     const response = await UserRegister(phoneNumber, password)
  //     login(response as User);

  //     // Giả sử đăng ký thành công
  //     setErrorMessage("");
  //     setPhoneNumber("");
  //     setOtp([]);
  //     setPassword("");
  //     setConfirmPassword("");
  //     setStep(1);
  //   }
  // };

  // // Hàm quay lại bước trước
  // const handleBackStep = () => {
  //   setStep(step - 1);
  // };

  const {
    step,
    phoneNumber,
    otp,
    username,
    password,
    confirmPassword,
    errorMessage,
    setOtp,
    setPhoneNumber,
    setUsername,
    setPassword,
    setConfirmPassword,
    handleNextStep,
    handleBackStep,
  } = useRegister();

  return (
    <div className="w-full px-6 pt-6 pb-4 relative">
      {step !== 1 && (
        <button
          onClick={handleBackStep}
          className="absolute top-4 left-6 text-gray-600"
        >
          <IoMdArrowBack size={24} />
        </button>
      )}

      <img src={logo} className="w-[130px] h-[130px]] m-auto"></img>

      {/* Bước 1: Nhập số điện thoại */}
      {step === 1 && (
        <div className="mt-[20px]">
          <div className="flex flex-col gap-1">
            <h2 className="font-bold text-[24px] text-[#555555]">Đăng ký</h2>
            <div className="font-light text-[15px] text-text-muted">
              Nhập số điện thoại để đăng ký
            </div>
          </div>
          <div className="relative w-full mt-6">
            <input
              type="text"
              id="phoneNumber"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              maxLength={12}
              inputMode="numeric"
              placeholder=" "
              className="w-full rounded-[32px] text-text-muted text-[16px] py-3 px-8 border-2 outline-none peer"
            />
            <label htmlFor="phoneNumber" className="label-inp">
              Số điện thoại
            </label>
          </div>

          {errorMessage && (
            <div className=" text-red-500 flex gap-2 items-center mt-2 center">
              <MdOutlineErrorOutline size={18} />
              <div>{errorMessage}</div>
            </div>
          )}

          <button
            onClick={handleNextStep}
            className="w-full rounded-[32px] text-white text-[16px] py-4 bg-bg-alt1 mt-4"
          >
            Tiếp tục
          </button>

          <div className="mt-4 text-center flex gap-1 justify-center">
            <span className="text-text-muted">Bạn đã có tài khoản?</span>
            <button
              className="text-bg-alt1 hover:underline"
              onClick={() => navigate("/login")}
            >
              Đăng nhập
            </button>
          </div>
        </div>
      )}

      {/* Bước 2: Nhập mã OTP */}
      {step === 2 && (
        <div className="mt-[20px]">
          <div className="flex flex-col gap-1">
            <h2 className="font-bold text-[24px] text-[#555555]">
              Xác minh số điện thoại
            </h2>
            <div className="font-light text-[15px] text-text-muted">
              Vui lòng nhập mã OTP gồm 4 chữ số được gửi về số điện thoại{" "}
              <b className="text-black font-semibold">{phoneNumber}</b>
            </div>
          </div>
          <div className="mt-6 center">
            <OTPInput otp={otp} setOtp={setOtp} />
          </div>

          {errorMessage && (
            <div className=" text-red-500 flex gap-2 items-center mt-2 center">
              <MdOutlineErrorOutline size={18} />
              <div>{errorMessage}</div>
            </div>
          )}

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
        <div className="space-y-4 mt-[20px]">
          <div>
            <div className="flex flex-col gap-1">
              <h2 className="font-bold text-[24px] text-[#555555]">
                Tạo tài khoản
              </h2>
              <div className="font-light text-[15px] text-text-muted">
                Mật khẩu phải dài từ 8-32 kí tự
              </div>
            </div>
            <div className="relative w-full mt-6">
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder=" "
                className="w-full rounded-[32px] text-text-muted text-[16px] py-3 px-8 border-2 outline-none peer"
              />
              <label htmlFor="username" className="label-inp">
                Tên đăng nhập
              </label>
            </div>
            <div className="relative w-full mt-4">
              <input
                type={isPasswordVisible ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder=" "
                className="w-full rounded-[32px] text-text-muted text-[16px] py-3 px-8 border-2 outline-none peer"
              />
              <label htmlFor="password" className="label-inp">
                Mật khẩu
              </label>
              <div
                className="absolute top-1/2 right-6 transform -translate-y-1/2 cursor-pointer select-none"
                onClick={togglePasswordVisibility}
              >
                {isPasswordVisible ? (
                  <IoEyeOutline size={24} className="text-gray-500" />
                ) : (
                  <IoEyeOffOutline size={24} className="text-gray-500" />
                )}
              </div>
            </div>
          </div>
          <div className="relative w-full">
            <input
              type={isConfirmPasswordVisible ? "text" : "password"}
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder=" "
              className="w-full rounded-[32px] text-text-muted text-[16px] py-3 px-8 border-2 outline-none peer"
            />
            <label htmlFor="confirmPassword" className="label-inp">
              Nhập lại mật khẩu
            </label>
            <div
              className="absolute top-1/2 right-6 transform -translate-y-1/2 cursor-pointer select-none"
              onClick={toggleConfirmPasswordVisibility}
            >
              {isConfirmPasswordVisible ? (
                <IoEyeOutline size={24} className="text-gray-500" />
              ) : (
                <IoEyeOffOutline size={24} className="text-gray-500" />
              )}
            </div>
          </div>

          {errorMessage && (
            <div className=" text-red-500 flex gap-2 items-center mt-2 center">
              <MdOutlineErrorOutline size={18} />
              <div>{errorMessage}</div>
            </div>
          )}

          <button
            className="w-full rounded-[32px] text-white text-[16px] py-4 bg-bg-alt1 mt-4"
            onClick={handleNextStep}
          >
            Tạo tài khoản
          </button>
        </div>
      )}

      <div className="text-text-muted font-light text-[11px] mt-6">
        Bằng việc tiếp tuc, bạn đã đọc và đồng ý với điều khoản sử dụng và Chính
        sách bảo mật thông tin cá nhân của Vimall
      </div>
    </div>
  );
};

export default RegisterForm;
