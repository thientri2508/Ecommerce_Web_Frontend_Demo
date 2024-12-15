import React, { useState } from "react";
import logo from "../../core/assets/logo/logo-login.png";
import { useNavigate } from "react-router-dom";
import { MdOutlineErrorOutline } from "react-icons/md";
import { useLogin } from "../../core/hooks/user/useLogin";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const LoginForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin, errorMessage } = useLogin();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const navigate = useNavigate();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleLogin(phoneNumber, password);
  };

  return (
    <div className="w-full px-6 pt-6 pb-4">
      <img src={logo} className="w-[130px] h-[130px] m-auto"></img>

      <div className="flex flex-col gap-1 mt-[20px]">
        <h2 className="font-bold text-[24px] text-[#555555]">Đăng nhập</h2>
        <div className="font-light text-[15px] text-text-muted">
          Nhập số điện thoại và mật khẩu để đăng nhập
        </div>
      </div>
      <form onSubmit={onSubmit}>
        <div className="relative w-full mt-6">
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder=" "
            maxLength={12}
            inputMode="numeric"
            className="w-full rounded-[32px] text-text-muted text-[16px] py-3 px-8 border-2 outline-none peer"
          />
          <label htmlFor="phoneNumber" className="label-inp">
            Số điện thoại/Tên đăng nhập
          </label>
        </div>
        <div className="relative w-full mt-4">
          <input
            type={isPasswordVisible ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder=" "
            className="w-full rounded-[32px] text-text-muted text-[16px] py-3 pl-8 pr-14 border-2 outline-none peer"
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

        {errorMessage && (
          <div className=" text-red-500 flex gap-2 items-center mt-2 center">
            <MdOutlineErrorOutline size={18} />
            <div>{errorMessage}</div>
          </div>
        )}

        <button
          type="submit"
          className="w-full rounded-[32px] text-white text-[16px] py-4 bg-bg-alt1 mt-4 cursor-pointer"
        >
          Đăng nhập
        </button>
      </form>
      <div className="flex justify-between text-text-muted mt-4 cursor-pointer">
        <div className="hover:underline">Quên mật khẩu?</div>
        <div>
          <span>Bạn chưa có tài khoản? </span>
          <button
            className="text-bg-alt1 hover:underline"
            onClick={() => navigate("/register")}
          >
            Đăng ký ngay
          </button>
        </div>
      </div>
      <div className="text-text-muted font-light text-[11px] mt-8">
        Bằng việc tiếp tuc, bạn đã đọc và đồng ý với điều khoản sử dụng và Chính
        sách bảo mật thông tin cá nhân của Vimall
      </div>
    </div>
  );
};

export default LoginForm;
