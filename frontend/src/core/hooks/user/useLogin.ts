import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { UserLogin } from "../../services/user/Auth";
import { User } from "../../types/User";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (phoneNumber: string, password: string) => {
    if (!phoneNumber) {
      setErrorMessage("Vui lòng nhập số điện thoại/tên đăng nhập");
      return;
    }
    if (!password) {
      setErrorMessage("Vui lòng nhập mật khẩu.");
      return;
    }
    try {
      //const response = await UserLogin(phoneNumber, password);
      //login(response as User);
      setErrorMessage(null);
      navigate("/");
    } catch (error) {
      if (error instanceof Error) {
        setErrorMessage(error.message);
      } else {
        console.log("Unexpected error:", error);
      }
    }
  };

  return {
    handleLogin,
    errorMessage,
  };
};
