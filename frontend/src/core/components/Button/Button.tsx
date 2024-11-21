import React from 'react';

interface ButtonProps {
  text: string;                     // Nội dung văn bản trên button
  icon?: React.ReactNode | string;  // Icon có thể là ReactNode hoặc đường dẫn ảnh
  onClick?: () => void;             // Sự kiện click tùy chọn
  iconPosition?: 'left' | 'right';  // Vị trí của icon: bên trái hoặc bên phải
  colorConfig?: 'red' | 'white' | 'stroke';
}

const Button: React.FC<ButtonProps> = ({ text, icon, onClick, iconPosition = 'left', colorConfig = 'red' }) => {

  const colorClasses =
    colorConfig === 'stroke'
      ? 'bg-[#FFF] text-button-bg border-solid border-2 border-button-bg'
      : colorConfig === 'white'
      ? 'bg-[#FFF] text-button-bg'
      : 'bg-button-bg text-button-text';

  return (
    <div 
      className={` ${colorClasses} px-[15px] lg:px-[30px] py-[10px] rounded-[24px] select-none flex items-center justify-center gap-2 md:gap-3 cursor-pointer transition-all duration-200`}
      onClick={onClick}
    >
      {iconPosition === 'left' && icon && (
        typeof icon === 'string' ? (
          <img src={icon} alt="icon" className="w-4 h-4" />
        ) : (
          <span className="icon">{icon}</span>
        )
      )}
      
      <span>{text}</span>

      {iconPosition === 'right' && icon && (
        typeof icon === 'string' ? (
          <img src={icon} alt="icon" className="w-4 h-4" />
        ) : (
          <span className="icon">{icon}</span>
        )
      )}
    </div>
  );
}

export default Button;
