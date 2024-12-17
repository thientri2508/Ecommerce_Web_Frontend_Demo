import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Image } from "antd";
import { ImageProduct } from "../../../core/types/ImageProduct";
import { ProductImageData } from "../../../core/mockData/productData";

interface ProductImageProps {
  logo_product?: string;
}

const ProductImage: React.FC<ProductImageProps> = ({ logo_product }) => {

  //const image_list = images ? JSON.parse(images) : [];
  const image_list = ProductImageData

  const [startIndex, setStartIndex] = useState(0); // Chỉ mục của item đầu tiên
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null); // Chỉ mục của item được chọn

  const visibleItems = 5; // Số item hiển thị cùng lúc

  const handleNext = () => {
    if (startIndex + visibleItems < image_list.length) {
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
      <div className='relative ml-5'>
        <div className={`${image_list.length === 0 ? 'hidden' : ''}`}>
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
              {image_list?.map((img: ImageProduct, idx: number) => (
                <div key={img?.id} className="flex justify-center items-center mb-2">
                  <img
                    src={img?.uri}
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
            disabled={startIndex + visibleItems >= image_list.length}
            className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 text-gray-500 hover:text-black disabled:opacity-50"
          >
            <IoIosArrowDown size={23} />
          </button>
        </div>
      </div>
      <Image
        width={'82%'}
        src={selectedIndex !== null ? image_list[selectedIndex].uri : logo_product}
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
