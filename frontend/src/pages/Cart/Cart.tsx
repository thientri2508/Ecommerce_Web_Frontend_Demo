import { Checkbox } from "antd";
import { GoTrash } from "react-icons/go";
import voucherIcon from "../../core/assets/icon/voucher.png";
import vixu from "../../core/assets/icon/vixu.png";
import { MdChevronRight } from "react-icons/md";
import { useState } from "react";
import { ItemStore } from "./widgets/ItemStore";
import Payment from "./widgets/Payment";
import { VoucherModal } from "./widgets/VoucherModal";
import { useModal } from "../../core/context/ModalContext";

const Cart = () => {
  const [isOn, setIsOn] = useState(false);

  const { showModal } = useModal();
  const handleDeleteCart = () => {
    showModal("Bạn có chắc muốn xóa tất cả sản phẩm khỏi giỏ hàng?", () => {
      // Xử lý ở đây
    });
  };

  const toggleSwitch = () => {
    setIsOn((prev) => !prev);
  };

  const [isVoucherModalOpen, setIsVoucherModalOpen] = useState(false); 
  const openVoucherModal = () => setIsVoucherModalOpen(true);
  const closeVoucherModal = () => setIsVoucherModalOpen(false);

  return (
    <main className="w-full bg-[#f5f5f5] pb-10">
      <VoucherModal isVoucherModalOpen={isVoucherModalOpen} closeVoucherModal={closeVoucherModal} />
      <div className="w-full md:max-w-[1340px] m-auto pt-8">
        <h2 className="font-bold text-[20px]">GIỎ HÀNG</h2>
        <div className="w-full mt-5 flex justify-between">
          <div className="w-[70%]">
            <div className="w-full py-4 px-8 bg-bg rounded-[38px] flex justify-between items-center">
              <Checkbox className="font-sans custom-checkbox">
                Chọn tất cả
              </Checkbox>
              <GoTrash size={18} className="text-text-muted cursor-pointer" onClick={handleDeleteCart} />
            </div>
            <ItemStore />
          </div>

          <div className="w-[29%] flex flex-col gap-4">
            <div className="w-full bg-bg rounded-[12px] px-5 py-4">
              <div className="text-[14px] font-medium">Vimall khuyến mãi</div>
              <div className="flex gap-2 text-bg-alt1 text-[14px] justify-center cursor-pointer items-center mt-3" onClick={openVoucherModal}>
                <img src={voucherIcon}></img>
                <div>Mua thêm để freeship cho đơn hàng</div>
                <MdChevronRight size={26} />
              </div>
            </div>

            <div className={`w-full ${isOn ? 'bg-bg' : 'bg-bg bg-opacity-40'} rounded-[12px] px-6 py-4`}>
              <div className="text-[14px] font-medium">Sử dụng Vixu</div>
              <div className="flex justify-between border-[1px] px-4 py-2 rounded-[16px] mt-2">
                <div className="flex items-center gap-2 text-[14px]">
                  <img src={vixu}></img>
                  <div>Đổi 154k Vixu</div>
                  <div className="font-light">(~154k)</div>
                </div>
                <div
                  onClick={toggleSwitch}
                  className={`w-[46px] h-[25px] flex items-center cursor-pointer rounded-full ${
                    isOn ? "bg-[#D91D2C]" : "bg-[#DEDEDE]"
                  }`}
                >
                  <div
                    className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${
                      isOn ? "translate-x-6" : "translate-x-0"
                    }`}
                  ></div>
                </div>
              </div>
            </div>

            <Payment />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cart;
