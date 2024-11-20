import React from "react";
import { BsDashLg } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";

type ModalProps = {
  isOpen: boolean;
  closeModal: () => void;
};

const Modal: React.FC<ModalProps> = ({ isOpen, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-gray-600 bg-opacity-50 flex justify-center items-center"
      onClick={closeModal}
    >
      <div
        className="bg-white rounded-xl w-[40%] relative"
        onClick={(e) => e.stopPropagation()} 
      >
        <h2 className="text-xl font-bold w-full text-center border-solid border-b-2 py-[17px]">Bộ Lọc Sản Phẩm</h2>
        <div className="absolute right-8 top-4 cursor-pointer" onClick={closeModal}><IoMdClose size={30} /></div>
        <div className="px-10 py-4">
            <div className="border-solid border-b-[2px] pb-6">
                <h3>Ưu đãi</h3>
                <ul className="mt-3 flex flex-wrap gap-y-3 *:w-[50%] *:text-text">
                    <li>Tặng xu</li>
                    <li>Voucher siêu tốc</li>
                    <li>Đang giảm giá</li>
                    <li>Hàng có sẵn</li>
                </ul>
            </div>
            
            <div className="mt-5 border-solid border-b-[2px] pb-6">
                <div className="flex justify-between">
                    <h3>Khoảng giá</h3>
                    <div className="text-bg-alt1 cursor-pointer">Xóa</div>
                </div>
                <div className="mt-5 flex justify-between items-center">
                    <div className="w-[48%] relative">
                        <input type="text" placeholder="Từ" className="w-full outline-none text-priceText border-solid border-[2px] rounded-lg py-[10px] pl-4 pr-16" />
                        <div className="absolute top-0 right-0 h-full w-[40px] center"><span className="w-full h-[65%] text-[18px] border-solid border-l-[2px] center">đ</span></div>
                    </div>
                    <div><BsDashLg /></div>
                    <div className="w-[48%] relative">
                        <input type="text" placeholder="Đến" className="w-full outline-none text-priceText border-solid border-[2px] rounded-lg py-[10px] pl-4 pr-16" />
                        <div className="absolute top-0 right-0 h-full w-[40px] center"><span className="w-full h-[65%] text-[18px] border-solid border-l-[2px] center">đ</span></div>
                    </div>
                </div>
            </div>

            <div className="mt-5">
                <h3>Thương hiệu</h3>
                <ul className="mt-3 flex flex-wrap gap-y-3 *:w-[50%] *:text-text">
                    <li>Tên nhãn hàng</li>
                    <li>Tên nhãn hàng</li>
                    <li>Tên nhãn hàng</li>
                    <li>Tên nhãn hàng</li>
                </ul>
            </div>

            <div className="mt-5 flex justify-between text-[16px] *:cursor-pointer *:select-none">
              <div className="px-8 py-3 border-solid border-2 rounded-xl text-[#777]">Xóa tất cả</div>
              <div className="px-8 py-3 border-solid border-2 rounded-xl bg-bg-alt1 text-[#FFF]">Xem tất cả</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
