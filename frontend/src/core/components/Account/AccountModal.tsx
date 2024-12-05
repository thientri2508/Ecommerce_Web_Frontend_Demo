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
      className={`fixed top-0 right-0 w-full h-full bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${
        isOpen ? "opacity-100 z-50" : "opacity-0 pointer-events-none"
      }`}
      onClick={closeModal} // Đóng modal khi click bên ngoài
    >
      <div
        className={`absolute top-0 right-0 w-1/3 h-full bg-white transition-transform duration-500 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()} // Ngăn chặn sự kiện lan ra ngoài
      >
        {/* Nội dung modal */}
        <div className="p-4">
          {/* Nút đóng */}
          <button onClick={closeModal} className="absolute top-4 right-4">
            <IoMdClose size={30} />
          </button>

          {/* Nội dung chính */}
          {step === "intro" && (
            <AccountIntro
              onRegisterClick={handleRegisterClick}
              onLoginClick={handleLoginClick}
            />
          )}
          {step === "login" && (
            <Login switchToRegister={() => setStep("register")} />
          )}
          {step === "register" && (
            <Register switchToLogin={() => setStep("login")} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AccountModal;
