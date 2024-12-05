import { BsTruck } from "react-icons/bs";
import { FaCheck } from "react-icons/fa6";
import { MdOutlineInfo } from "react-icons/md";
import logoIcon from "../../../core/assets/icon/logo.png";
import { Voucher } from "../../../core/types/Voucher";

interface CardVoucherProps {
  type: "delivery" | "promotion";
  voucher: Voucher;
  handleSelectVoucher: (id: number) => void;
  isSelected: boolean;
}

const CardVoucher: React.FC<CardVoucherProps> = ({
  type,
  voucher,
  handleSelectVoucher,
  isSelected,
}) => {

  return (
    <div className="w-full h-[100px] flex justify-between relative group cursor-pointer">
      <div className="h-full w-[22%] border-solid border-2 rounded-[20px] shadow group-hover:shadow-lg transition-all"></div>
      <div className="h-full w-[78%] border-solid border-2 rounded-[20px] shadow group-hover:shadow-lg transition-all pl-[105px] pr-[25px] flex justify-between items-center">
        <div className="flex flex-col gap-3 w-[63%]">
          <div className="text-[14px]">{voucher.description}</div>
          <div className="flex gap-2 text-[14px] font-light text-text-muted items-center">
            <div>HSD: 30-11</div>
            <MdOutlineInfo size={22} />
          </div>
        </div>

        {/* Phần tick */}
        <div className="flex items-center space-x-3 select-none">
          <div
            className={`relative w-8 h-8 border-2 rounded-full cursor-pointer transition-all duration-200 
                      ${isSelected ? "border-[#d91d2c]" : "border-gray-300"}`}
            onClick={(e) => {
              e.stopPropagation();
              handleSelectVoucher(voucher.id);
            }}
          >
            {isSelected && (
              <FaCheck className="absolute inset-0 w-5 h-5 text-bg-alt1 m-auto" />
            )}
          </div>
        </div>
        <div className="absolute z-20 text-bg-alt1 text-[12px] top-2 right-3">
          x99
        </div>
      </div>

      {/* Phần hộp loại voucher */}
      <div
        className={`absolute z-50 w-[41%] h-[71%] left-[1.5px] ${
          type === "delivery" ? "bg-[#00BC00]" : "bg-[#d91d2c]"
        }
                text-white rounded-[32px] rounded-l-none shadow-custom-shadow top-[14px] flex items-center justify-between pl-4 pr-7`}
      >
        <div className="flex flex-col w-[39%] items-center text-center gap-1">
          {type === "delivery" ? (
            <>
              <BsTruck size={28} />
              <div className="text-[11px] leading-tight">
                Miễn phí vận chuyển
              </div>
            </>
          ) : (
            <img src={logoIcon} className="mt-[-5px] ml-[-5px]"></img>
          )}
        </div>
        <div className="text-[16px] font-semibold">Giảm 25k</div>
      </div>
    </div>
  );
};

export default CardVoucher;
