import React from 'react';

interface ButtonProps {
  text: string;                     // Nội dung văn bản trên button
  icon?: React.ReactNode | string;  // Icon có thể là ReactNode hoặc đường dẫn ảnh
  onClick?: () => void;             // Sự kiện click tùy chọn
  iconPosition?: 'left' | 'right';  // Vị trí của icon: bên trái hoặc bên phải
}

const Button: React.FC<ButtonProps> = ({ text, icon, onClick, iconPosition = 'left' }) => {
  return (
    <div 
      className='bg-button-bg px-[30px] py-[14px] rounded-[24px] select-none flex items-center justify-center gap-3 cursor-pointer hover:bg-button-hover transition-all duration-200'
      onClick={onClick}
    >
      {iconPosition === 'left' && icon && (
        typeof icon === 'string' ? (
          <img src={icon} alt="icon" className="w-5 h-5" />
        ) : (
          <span className="icon">{icon}</span>
        )
      )}
      
      <span>{text}</span>

      {iconPosition === 'right' && icon && (
        typeof icon === 'string' ? (
          <img src={icon} alt="icon" className="w-5 h-5" />
        ) : (
          <span className="icon">{icon}</span>
        )
      )}
    </div>
  );
}

export default Button;
