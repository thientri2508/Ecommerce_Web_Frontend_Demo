import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { PiLineVerticalThin } from "react-icons/pi";

interface Category {
  id: number;
  name: string;
}

const StoreCategory = () => {
  const categories: Category[] = [
    { id: 1, name: "Cửa hàng" },
    { id: 2, name: "Tất cả sản phẩm" },
    { id: 3, name: "Category 3" },
    { id: 4, name: "Category 4" },
    { id: 5, name: "Category 5" },
    { id: 6, name: "Category 6" },
    { id: 7, name: "Category 7" },
    { id: 8, name: "Category 8" },
  ];

  const visibleCategories = categories.slice(0, 5); // Tối đa 5 danh mục
  const hiddenCategories = categories.slice(5); // Các danh mục còn lại

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="flex flex-wrap items-center gap-2 w-full text-[15px] text-text-muted">
      {/* Hiển thị danh mục */}

      {visibleCategories.map((category) => (
        <React.Fragment key={category.id}>
          <span
            key={category.id}
            className="py-4 flex-1 text-center hover:text-bg-alt1 cursor-pointer select-none"
          >
            {category.name}
          </span>

          <PiLineVerticalThin size={22} />
        </React.Fragment>
      ))}

      {/* Dropdown cho danh mục ẩn */}
      {hiddenCategories.length > 0 && (
        <div className="relative">
          {/* Button để mở dropdown */}
          <div
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="py-4 px-6 flex gap-3 items-center text-center hover:text-bg-alt1 cursor-pointer select-none"
          >
            <span>Thêm</span>
            <IoIosArrowDown size={20} />
          </div>

          {/* Dropdown */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-lg z-10">
              {hiddenCategories.map((category) => (
                <div
                  key={category.id}
                  className="px-10 py-4 cursor-pointer border border-b hover:bg-gray-100"
                >
                  {category.name}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default StoreCategory;
