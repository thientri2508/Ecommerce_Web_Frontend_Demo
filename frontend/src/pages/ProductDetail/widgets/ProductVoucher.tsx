import VoucherImg1 from "../../../core/assets/voucher/voucher1.png";
import VoucherImg2 from "../../../core/assets/voucher/voucher2.png";
import VoucherImg3 from "../../../core/assets/voucher/voucher3.png";
import { IoIosArrowRoundForward } from "react-icons/io";

const ProductVoucher = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="font-semibold text-[16px]">Voucher siêu tốc:</div>
        <div className="flex items-center gap-1 font-semibold">
          Xem tất cả
          <IoIosArrowRoundForward size={25} />
        </div>
      </div>
      <div className="flex gap-4 mt-2">
        <img
          src={VoucherImg1}
          className="w-[calc(33.33%-13px)] object-contain"
        ></img>
        <img
          src={VoucherImg2}
          className="w-[calc(33.33%-13px)] object-contain"
        ></img>
        <img
          src={VoucherImg3}
          className="w-[calc(33.33%-13px)] object-contain"
        ></img>
      </div>
    </>
  );
};

export default ProductVoucher;
