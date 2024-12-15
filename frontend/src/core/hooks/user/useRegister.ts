import { useState } from "react";
import { CheckPhoneNumber, UserRegister } from "../../services/user/Auth";
import { useAuth } from "../../context/AuthContext";
import { User } from "../../types/User";

export const useRegister = () => {
  const [step, setStep] = useState(1); // Bước hiện tại: 1 -> Số điện thoại, 2 -> OTP, 3 -> Mật khẩu
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState<string[]>(Array(4).fill(""));
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { login } = useAuth();

  const handleNextStep = async () => {
    if (step === 1) {
      if (!phoneNumber) {
        setErrorMessage("Vui lòng nhập số điện thoại.");
        return;
      }

      try {
        const isExists = await CheckPhoneNumber(phoneNumber);
        if (isExists.success) {
            setErrorMessage("Số điện thoại đã tồn tại.");
            return;
        }
      } catch (error) {
        if (error instanceof Error) {
          setErrorMessage(error.message);
        } 
        return;
      }
      setErrorMessage("");
      setStep(2);
    } else if (step === 2) {
      if (!otp.every((digit) => digit !== "")) {
        setErrorMessage("Vui lòng nhập mã OTP.");
        return;
      }
      if (otp.join("") !== "1234") {
        setErrorMessage("Mã OTP không chính xác.");
        return;
      }
      setErrorMessage("");
      setStep(3);
    } else if (step === 3) {
        if(!username) {
            setErrorMessage("Vui lòng nhập tên đăng nhập.");
            return;
        }
      if (!password || !confirmPassword) {
        setErrorMessage("Vui lòng nhập mật khẩu và xác nhận mật khẩu.");
        return;
      }
      if (password.length < 8 || password.length > 32) {
        setErrorMessage("Mật khẩu phải dài từ 8-32 kí tự.");
        return;
      }
      if (password !== confirmPassword) {
        setErrorMessage("Mật khẩu và xác nhận mật khẩu không khớp.");
        return;
      }

      const response = await UserRegister(username, phoneNumber, password);
      login(response as User);

      setErrorMessage("");
      resetForm();
    }
  };

  const resetForm = () => {
    setPhoneNumber("");
    setOtp([]);
    setPassword("");
    setConfirmPassword("");
    setStep(1);
  };

  const handleBackStep = () => {
    setStep(step - 1);
  };

  return {
    step,
    phoneNumber,
    otp,
    username,
    password,
    confirmPassword,
    errorMessage,
    setPhoneNumber,
    setOtp,
    setUsername,
    setPassword,
    setConfirmPassword,
    handleNextStep,
    handleBackStep,
  };
};
