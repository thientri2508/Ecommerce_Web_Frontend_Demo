import React, { useRef } from "react";

interface OTPInputProps {
  otp: string[];
  setOtp: React.Dispatch<React.SetStateAction<string[]>>;
}

const OTPInput: React.FC<OTPInputProps> = ({ otp, setOtp }) => {
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleChange = (value: string, index: number) => {
    if (!/^\d*$/.test(value)) return; // Chỉ cho phép nhập số
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Tự động chuyển focus đến ô tiếp theo
    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").slice(0, otp.length);
    const newOtp = pasteData.split("").map((char, i) => char || otp[i]);
    setOtp(newOtp); // Truyền giá trị trực tiếp thay vì callback
    const lastIndex = Math.min(pasteData.length - 1, otp.length - 1);
    inputRefs.current[lastIndex]?.focus();
  };
  

  return (
    <div className="flex gap-4">
      {otp.map((value, index) => (
        <input
          key={index}
          type="text"
          value={value}
          maxLength={1}
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          ref={(el) => (inputRefs.current[index] = el!)}
          className="w-[68px] h-[68px] text-center border border-gray-300 rounded-[8px] focus:outline-none focus:ring-1 focus:ring-bg-alt1 text-[28px]"
        />
      ))}
    </div>
  );
};

export default OTPInput;
