import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Register from "./Register";
import Login from "./Login";
import AccountIntro from "./AccountIntro";

const AccountModal: React.FC<{ isOpen: boolean; closeModal: () => void }> = ({
  isOpen,
  closeModal,
}) => {
  const [step, setStep] = useState<"intro" | "login" | "register">("intro");

  // Handle when user clicks on 'Đăng ký' or 'Đăng nhập'
  const handleRegisterClick = () => setStep("register");
  const handleLoginClick = () => setStep("login");

  return (
    <div
      className={`fixed top-0 right-0 w-full select-none h-full bg-black bg-opacity-50 transition-all duration-300 ease-in-out ${
        isOpen ? "opacity-100 z-50" : "opacity-0 z-[-1]"
      }`}
    >
      <div
        className={`fixed top-0 right-0 w-1/3 h-full bg-white transition-transform duration-500 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()} // Ngừng lan truyền sự kiện click để modal không đóng khi bấm vào bên trong
      >
        <div className="p-4 flex flex-col justify-between h-full relative">
          {/* Nút đóng modal */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
          >
            <IoMdClose size={30} />
          </button>

          {/* Nội dung modal */}
          <div className="flex flex-col gap-4">
            {/* Hiển thị component intro */}
            {step === "intro" && (
              <AccountIntro onRegisterClick={handleRegisterClick} onLoginClick={handleLoginClick} />
            )}

            {/* Hiển thị form đăng nhập hoặc đăng ký */}
            {step === "login" && (
              <Login switchToRegister={() => setStep("register")} />
            )}
            {step === "register" && (
              <Register switchToLogin={() => setStep("login")} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountModal;
