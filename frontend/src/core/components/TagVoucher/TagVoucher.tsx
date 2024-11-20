import React from 'react';

interface TagVoucherProps {
    text: string;
    color?: string;   // Màu nền tùy chọn
    textColor?: string; // Màu chữ tùy chọn
}

const TagVoucher: React.FC<TagVoucherProps> = ({ text, color, textColor }) => {
  return (
    <div
      className="relative text-[9px] sm-:text-small font-light pl-[5px] pr-[12px] py-[1px]"
      style={{ 
        backgroundColor: color ? color : '#FF4114',  // Màu nền tùy chọn hoặc mặc định
        color: textColor ? textColor : '#ffffff'  // Màu chữ tùy chọn hoặc mặc định
      }}
    >
        <span>{text}</span>
        <div className="absolute rotate-[-90deg] top-[4px] right-[-6.5px] sm-:top-[5.5px] sm-:right-[-6px] w-0 h-0 border-l-[9.5px] border-r-[9.5px] border-b-[8px] border-l-transparent border-r-transparent border-b-bg"></div>
    </div>
  );
}

export default TagVoucher;
