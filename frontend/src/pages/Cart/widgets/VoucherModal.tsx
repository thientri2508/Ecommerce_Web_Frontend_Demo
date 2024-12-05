import { IoMdClose } from "react-icons/io"
import voucherIcon from "../../../core/assets/icon/voucher-gray.png";
import VoucherList from "./VoucherList";

type VoucherModalProps = {
  isVoucherModalOpen: boolean;
  closeVoucherModal: () => void;
};

export const VoucherModal: React.FC<VoucherModalProps> = ({ isVoucherModalOpen, closeVoucherModal }) => {

  if (!isVoucherModalOpen) return null; 

  return (
    <div className="fixed inset-0 z-50 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-xl w-[36%] max-h-[100dvh] overflow-y-auto custom-scrollbar relative">
        <h2 className="text-xl font-bold w-full text-center border-solid border-b-2 py-[17px]">Vimall khuyến mãi</h2>
        <div className="absolute right-8 top-4 cursor-pointer" onClick={closeVoucherModal}><IoMdClose size={30} /></div>
        <div className="px-6">
          <div className="py-4 flex justify-between">
            <div className="flex gap-2 items-center w-[75%] border-solid border-2 rounded-[32px] py-2 px-4">
              <img src={voucherIcon}></img>
              <input type="text" placeholder="Nhập mã giảm giá" className="outline-none text-[14px] w-[80%]" />
            </div>
            <div className="bg-bg-alt1 center rounded-[32px] text-white text-[14px] font-medium w-[23%] py-2 cursor-pointer">Áp dụng</div>
          </div>

          <div className="text-[20px] font-bold mt-3">Voucher vận chuyển</div>
          <VoucherList type="delivery" />

          <div className="text-[20px] font-bold">Vimall khuyến mãi</div>
          <VoucherList type="promotion" />
        </div>
        
      </div>
    </div>
  )
}
