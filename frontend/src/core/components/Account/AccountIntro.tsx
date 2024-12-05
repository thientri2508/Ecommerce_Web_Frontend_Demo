import React from "react";
import logo from "../../assets/logo/logo-login.png"

interface AccountIntroProps {
  onRegisterClick: () => void;
  onLoginClick: () => void;
}

const AccountIntro: React.FC<AccountIntroProps> = ({ onRegisterClick, onLoginClick }) => {
  return (
    <div className="w-full h-full px-6">
      <img src={logo} className="w-[160px] h-[160px] m-auto mt-12"></img>
      <div className="flex flex-col gap-1 mt-[50px]">
        <h2 className="font-bold text-[24px] text-[#555555]">Xin chào,</h2>
        <div className="font-light text-[15px] text-text-muted">Đăng nhập hoặc đăng ký</div>
      </div>
      <div className="w-full rounded-[32px] text-white text-[16px] center py-4 bg-bg-alt1 mt-10 cursor-pointer"
        onClick={onLoginClick}
      >Đăng nhập</div>
      <div className="w-full rounded-[32px] text-text-muted text-[16px] center py-4 border-2 mt-3 cursor-pointer"
        onClick={onRegisterClick}
      >Đăng ký</div>
    </div>
  );
};

export default AccountIntro;