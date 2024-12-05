import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const CustomSelect: React.FC = () => {
    const options = ['Option 1', 'Option 2', 'Option 3'];

    const [selectedOption, setSelectedOption] = useState<string>(options[0]);
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (option: string) => {
        setSelectedOption(option);
        setIsOpen(false);
    };

  return (
    <div className="relative inline-block text-[12px] select-none">
      {/* Hiển thị giá trị chọn */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="border-[1px] py-[2px] px-4 flex items-center gap-2 text-bg-alt1 rounded-md cursor-pointer hover:bg-gray-100"
      >
        {selectedOption}
        <IoIosArrowDown size={18} />
      </div>

      {/* Dropdown options */}
      {isOpen && (
        <div className="absolute w-full mt-1 border-[1px] bg-white rounded-md shadow-lg z-10">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleSelect(option)}
              className="hover:bg-gray-100 py-2 px-4 cursor-pointer"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
