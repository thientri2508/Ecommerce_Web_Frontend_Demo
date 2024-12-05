import React from "react";
import logo from "../../assets/logo/logo-login.png";

const Login: React.FC<{ switchToRegister: () => void }> = ({
  switchToRegister,
}) => {
  return (
    <div className="w-full h-full px-6">
      <img src={logo} className="w-[160px] h-[160px] m-auto mt-12"></img>
      <div className="flex flex-col gap-1 mt-[50px]">
        <h2 className="font-bold text-[24px] text-[#555555]">Đăng nhập</h2>
        <div className="font-light text-[15px] text-text-muted">
          Nhập số điện thoại và mật khẩu để đăng nhập
        </div>
      </div>
      <form>
        <div className="mt-12">
          <input
            type="text"
            placeholder="Số điện thoại"
            className="w-full rounded-[32px] text-text-muted text-[16px] py-3 px-8 border-2 outline-none transition duration-300 focus:shadow-custom-shadow-inp"
          />
        </div>
        <div className="mt-4">
          <input
            type="password"
            placeholder="Mật khẩu"
            className="w-full rounded-[32px] text-text-muted text-[16px] py-3 px-8 border-2 outline-none transition duration-300 focus:shadow-custom-shadow-inp"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-[32px] text-white text-[16px] py-4 bg-bg-alt1 mt-4 cursor-pointer"
        >
          Đăng nhập
        </button>
      </form>
      <div className="flex justify-between text-text-muted mt-4 cursor-pointer">
        <div>Quên mật khẩu?</div>
        <div>
          <span>Bạn chưa có tài khoản? </span>
          <button onClick={switchToRegister} className="text-bg-alt1">
            Đăng ký ngay
          </button>
        </div>
      </div>
      <div className="text-text-muted font-light text-[11px] mt-10">
        Bằng việc tiếp tuc, bạn đã đọc và đồng ý với điều khoản sử dụng và Chính
        sách bảo mật thông tin cá nhân của Vimall
      </div>
    </div>
  );
};

export default Login;