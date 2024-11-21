import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Input, Slider, Space } from '@arco-design/web-react';
import { BsDashLg } from "react-icons/bs";

type ModalProps = {
  isOpen: boolean;
  closeModal: () => void;
};

const Modal: React.FC<ModalProps> = ({ isOpen, closeModal }) => {

  const [value, setValue] = useState<[number, number]>([0, 10000000]);

  const handleSliderChange = (newValue: number | number[]) => {
    setValue(newValue as [number, number]);
  };

  const formatVND = (amount: number) => {
    return `${amount.toLocaleString('vi-VN')} ₫`
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-xl w-[40%] relative">
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
              <h3>Khoảng giá</h3>
              <Space style={{ marginTop: '30px' }} size={60} direction="vertical">
                <Slider
                  value={value}
                  range
                  min={0} 
                  max={10000000} 
                  step={100000}
                  onChange={handleSliderChange}
                  style={{ width: 525 }}
                />
              
                <div className="w-full flex justify-center gap-4 items-center mt-[-35px]">
                  <Input
                    value={formatVND(value[0])}
                    readOnly
                    style={{ width: 150, textAlign: 'center' }}
                  />
                  <BsDashLg />
                  <Input
                    value={formatVND(value[1])}
                    readOnly
                    style={{ width: 150, textAlign: 'center' }}
                  />
                </div>
              </Space>
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
