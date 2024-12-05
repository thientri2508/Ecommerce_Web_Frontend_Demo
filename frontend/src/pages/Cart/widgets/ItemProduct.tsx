import { FaPlus } from "react-icons/fa6";
import { GoTrash } from "react-icons/go";
import { RiSubtractFill } from "react-icons/ri";
import CustomSelect from "./CustomSelect";
import { Checkbox } from "antd";
import productImg from "../../../core/assets/product/product6.png";
import { useModal } from "../../../core/context/ModalContext";

const ItemProduct = () => {

  const { showModal } = useModal();
  const handleDeleteCart = () => {
    showModal("Bạn có chắc muốn xóa sản phẩm này khỏi giỏ hàng?", () => {
      // Xử lý ở đây
    });
  };

  return (
    <div className="w-full flex justify-between items-center px-5 py-4 border-solid border-b-[1px]">
      <div className="relative">
        <Checkbox className="font-sans absolute top-[-1px] custom-checkbox"></Checkbox>
        <img
          src={productImg}
          className="w-[80px] h-[80px] rounded-[4px] ml-2 mt-2"
        ></img>
      </div>
      <div className="w-[43%]">
        <div className="line-clamp-2 overflow-hidden text-ellipsis">
          [Rom&nd] Son kem siêu lì, cho đôi môi mịn mượt Hàn Quốc Romand Blur
          Fudge Tint 5g
        </div>
        <div className="mt-2 flex gap-5">
          <CustomSelect />
          <CustomSelect />
        </div>
      </div>
      <div className="flex justify-between items-center w-[132px] rounded-[32px] border-[1px] px-3 py-[6px]">
        <RiSubtractFill
          size={18}
          // color={quantity > 1 ? "#d91d2c" : "#ccc"}
          // className={`select-none ${
          //   quantity > 1
          //     ? "hover:opacity-80 cursor-pointer"
          //     : "cursor-not-allowed"
          // }`}
          // onClick={handleDecrease}
        />
        <span className="text-[14px]">{1}</span>
        <FaPlus
          size={14}
          color="#d91d2c"
          className="cursor-pointer select-none hover:opacity-80"
          // onClick={handleIncrease}
        />
      </div>

      <div className="w-[15%] flex flex-col items-end">
        <div className="text-priceColor font-bold text-[18px]">100.000 đ</div>
        <div className="line-through text-[14px] text-priceColor-alt">
          200.000 đ
        </div>
      </div>

      <GoTrash size={18} className="text-text-muted cursor-pointer" onClick={handleDeleteCart} />
    </div>
  );
};

export default ItemProduct;
