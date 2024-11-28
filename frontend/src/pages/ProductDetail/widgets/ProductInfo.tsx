import { FaPlus, FaStar } from "react-icons/fa6"
import { PiLineVertical } from "react-icons/pi"
import TagVoucher from "../../../core/components/TagVoucher/TagVoucher"
import productImg from "../../../core/assets/product/product4.png"
import { IoIosArrowForward } from "react-icons/io"
import { LiaShoppingBagSolid } from "react-icons/lia"
import { useState } from "react"
import productSizeImg from "../../../core/assets/product/product3-size.png";
import { IoCloseSharp } from "react-icons/io5"
import { RiSubtractFill } from "react-icons/ri"

const ProductInfo = () => {

    const sizes = ["S", "M", "L", "XL", "XXL"];
    const [selectedSize, setSelectedSize] = useState<string | null>(null);
    const [selectedColor, setSelectedColor] = useState<number | null>(null);
    const [isModalSizeOpen, setIsModalSizeOpen] = useState(false);
    const [quantity, setQuantity] = useState(0);

    const handleSizeClick = (size: string) => {
        setSelectedSize(size);
    };

    const handleColorClick = (index: number) => {
        setSelectedColor(index);
    };
    
    const handleIncrease = () => {
        setQuantity(prev => prev + 1);
    };

    const handleDecrease = () => {
        setQuantity(prev => (prev > 0 ? prev - 1 : 0));
    };

  return (
    <div className="w-full flex flex-col">
        <div className="text-[20px] font-semibold line-clamp-2 overflow-hidden text-ellipsis">Áo thun MARY MARY tay xắn ống. Áo thun polo Lovito dệt kim waffle  112 màu trơn thường ngày cho nữ L68ED039 (Nhiều màu)</div>
        <ul className="flex items-center gap-2 text-[14px] mt-2">
            <li>
                <ul className="flex gap-[10px]">
                    <li className="font-medium">5.0</li>
                    <li className="flex gap-[2px]"><FaStar size={18} color="#FFD000" /><FaStar size={18} color="#FFD000" /><FaStar size={18} color="#FFD000" /><FaStar size={18} color="#FFD000" /><FaStar size={18} color="#FFD000" /></li>
                    <li className="font-light text-text-muted">(231)</li>
                </ul>
            </li>
            <li><PiLineVertical size={20} color="#818181" /></li>
            <li className="text-text-muted"><span className="font-medium text-[#000000]">11,3k</span> Đã bán</li>
            <li><PiLineVertical size={20} color="#818181" /></li>
            <li className="text-text-muted">WD2830307404</li>
            <li><PiLineVertical size={20} color="#818181" /></li>
            <li className="text-text-muted">Hàng có sẵn</li>
        </ul>

        <div className="w-full mt-6 p-4 flex gap-5 items-center font-price border-solid border-[#f0f0f0] border-[1px] rounded-[16px]">
            <div className="text-priceColor font-bold text-[28px]">1.999.000 đ</div>
            <TagVoucher text="%" />
            <div className="line-through text-[18px] text-priceColor-alt">2.999.000 đ</div>
        </div>

        <div className="text-[16px] mt-6">Phân loại: <span className="text-[14px] font-light text-text-muted">Đỏ đô</span></div>
        <ul className="mt-3 flex gap-[10px] *:cursor-pointer">
            {Array(10).fill(0).map((_, index) => (
            <li key={index}>
                <img src={productImg} className={`w-[60px] h-[60px] border-solid border-[#f0f0f0] border-[2px] rounded-[8px] hover:border-bg-alt1 transition-all duration-200 ${
                selectedColor === index ? "border-bg-alt1" : "border-[#f0f0f0]"
                }`}
                onClick={() => handleColorClick(index)} />
            </li>
            ))}
        </ul>

        <div className="flex justify-between">
            <div className="text-[16px] mt-6">Size: <span className="text-[14px] font-light text-text-muted">48-53kg</span></div>
            <div className="text-[14px] font-light text-text-muted flex items-center mt-6 cursor-pointer" onClick={() => setIsModalSizeOpen(true)}><span>Bảng kích thước</span><IoIosArrowForward size={18} /></div>
        </div>
        <ul className="mt-3 flex gap-[10px] *:cursor-pointer">
            {sizes.map((size, index) => (
            <li
                key={index}
                className={`border-2 rounded-[8px] hover:border-bg-alt1 px-[21px] py-[7px] transition-all duration-200 ${
                selectedSize === size ? "border-bg-alt1" : "border-[#f0f0f0]"
                }`}
                onClick={() => handleSizeClick(size)}
            >
            {size}
            </li>
            ))}
        </ul>

        {isModalSizeOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={() => setIsModalSizeOpen(false)}>
          <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-lg w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsModalSizeOpen(false)}
              className="absolute top-2 right-4 text-gray-600 hover:text-gray-800"
            >
              <IoCloseSharp size={40} />
            </button>
            <img
              src={productSizeImg}
              alt="Preview"
              className="w-full h-auto rounded-[32px]"
            />
          </div>
        </div>
        )}

        <div className="flex gap-6 mt-8 items-center">            
            <div className="flex justify-between items-center w-[240px] rounded-[32px] border-solid border-bg-alt1 border-[1px] px-4 py-2">
                <RiSubtractFill
                    size={30}
                    color={quantity > 0 ? "#d91d2c" : "#ccc"}
                    className={`cursor-pointer select-none ${quantity > 0 ? 'hover:opacity-80' : 'cursor-not-allowed'}`}
                    onClick={handleDecrease} 
                />
                <span className="text-[18px]">{quantity}</span>
                <FaPlus
                    size={24}
                    color="#d91d2c"
                    className="cursor-pointer select-none hover:opacity-80"
                    onClick={handleIncrease} 
                />
            </div>
            <div className="text-[16px]">Số lượng: <span className="text-[14px] font-light text-text-muted">còn lại 2 sản phẩm</span></div>
        </div>
           
        <div className="flex gap-6 items-start text-[16px] *:cursor-pointer mt-6">
            <div className="flex items-center rounded-[32px] border-solid border-bg-alt1 border-[1px] px-[44px] py-[14px] gap-[10px] font-medium text-bg-alt1">
                <LiaShoppingBagSolid size={24} />
                <div>Thêm giỏ hàng</div>
            </div>
            <div className="rounded-[32px] bg-bg-alt1 px-[60px] py-[15px] text-[#FFFFFF]">Mua ngay</div>
        </div>
    </div>
  )
}

export default ProductInfo