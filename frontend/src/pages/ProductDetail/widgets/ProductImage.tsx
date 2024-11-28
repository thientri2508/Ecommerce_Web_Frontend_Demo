import { useState } from "react";
import productImg from "../../../core/assets/product/product2.png";
import productSubImg from "../../../core/assets/product/product3.png";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Image } from "antd";

const ProductImage = () => {
  const images = [
    productSubImg,
    productSubImg,
    productSubImg,
    productSubImg,
    productSubImg,
    productSubImg,
    productSubImg,
    productSubImg,
  ];
  const [startIndex, setStartIndex] = useState(0); // Chỉ mục của item đầu tiên
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null); // Chỉ mục của item được chọn

  const visibleItems = 5; // Số item hiển thị cùng lúc

  const handleNext = () => {
    if (startIndex + visibleItems < images.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleSelectItem = (index: number) => {
    setSelectedIndex(index);
  };

  return (
    <div className="flex items-center justify-between gap-2 mt-5">
      <div className="relative ml-5">
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className="absolute top-[-30px] left-1/2 -translate-x-1/2 text-gray-500 hover:text-black disabled:opacity-50"
        >
          <IoIosArrowUp size={23} />
        </button>

        <div className="overflow-hidden h-[335px] relative">
          <div
            className="flex flex-col transition-transform duration-300"
            style={{
              transform: `translateY(-${startIndex * 68}px)`,
            }}
          >
            {images.map((img, idx) => (
              <div key={idx} className="flex justify-center items-center mb-2">
                <img
                  src={img}
                  className={`w-[60px] h-[60px] rounded-[8px] cursor-pointer hover:opacity-40 ${
                    idx === selectedIndex
                      ? "border-bg-alt1 border-2"
                      : "border-none"
                  }`}
                  onClick={() => handleSelectItem(idx)}
                />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handleNext}
          disabled={startIndex + visibleItems >= images.length}
          className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 text-gray-500 hover:text-black disabled:opacity-50"
        >
          <IoIosArrowDown size={23} />
        </button>
      </div>
      <Image
        width={'82%'}
        src={selectedIndex !== null ? images[selectedIndex] : productImg}
        className="w-[82%] aspect-square rounded-[16px] cursor-zoom-in"
        preview={{
          mask: false,
          scaleStep: 0.5,
        }}
      ></Image>
    </div>
  );
};

export default ProductImage;
