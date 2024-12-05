import { Checkbox } from "antd";
import { MdChevronRight } from "react-icons/md";
import ItemProduct from "./ItemProduct";
import houseIcon from "../../../core/assets/icon/house.png";
import truckIcon from "../../../core/assets/icon/truck.png";

export const ItemStore = () => {
  return (
    <div className="w-full bg-bg rounded-[16px] px-3 mt-4 pb-3">
      <div className="w-full flex gap-3 items-center px-5 py-4 border-solid border-b-[1px]">
        <Checkbox className="font-sans custom-checkbox"></Checkbox>
        <div className="py-1 px-[10px] rounded-[16px] bg-[#F2DFE0] text-[14px] text-bg-alt1">
          Chính hãng
        </div>
        <div className="text-[16px] font-bold">Romand_Official Store</div>
      </div>

      <ItemProduct />
      <ItemProduct />
      <ItemProduct />

      <div className="w-full flex items-center gap-3 px-5 py-2 cursor-pointer mt-1">
        <img src={houseIcon}></img>
        <div className="font-light">Giảm 10k cho đơn hàng trên 200k</div>
        <MdChevronRight size={20} className="text-text-muted" />
      </div>
      <div className="w-full flex items-center gap-3 px-5 py-2 cursor-pointer">
        <img src={truckIcon}></img>
        <div className="font-light">
          Giảm phí vận chuyển 25k cho đơn hàng trên 100k
        </div>
        <MdChevronRight size={20} className="text-text-muted" />
      </div>
    </div>
  );
};
