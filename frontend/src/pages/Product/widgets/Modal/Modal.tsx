import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { Slider, InputNumber } from 'antd';
import { BsDashLg } from "react-icons/bs";
import CheckboxWithTag from "./CheckboxWithTag";

type ModalProps = {
  isOpen: boolean;
  closeModal: () => void;
};

const Modal: React.FC<ModalProps> = ({ isOpen, closeModal }) => {

  const promotions = ['Tặng xu', 'Voucher siêu tốc', 'Đang giảm giá', 'Hàng có sẵn'];
  const brands = ['Gucci', 'Louis Vuitton', 'Chanel', 'Prada', 'Dior'];

  const [price, setPrice] = useState<[number, number]>([0, 10000000]);
  const [selectedPromotions, setSelectedPromotions] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const handleSliderChange = (newValue: number | number[]) => {
    setPrice(newValue as [number, number]);
  };

  const handleInputChange = (index: number, newValue: number | string) => {
    const updatedValue = [...price];
    updatedValue[index] = newValue as number;
    setPrice(updatedValue as [number, number]);
  };

  const formatter = (value: number | string | undefined, appendCurrency: boolean = false): string => {
    if (value === undefined || value === null || value === '') return '';  
    const formattedValue = `${parseFloat(value.toString())
      .toFixed(0)
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
  
    return appendCurrency ? `${formattedValue} ₫` : formattedValue;  
  };

  const parser = (value: string | undefined): number => {
    if (!value) return 0;
    return parseFloat(value.replace(/,/g, ''));  // Loại bỏ dấu phân cách và chuyển thành số
  };

  const handleValueChange = (index: number, newValue: number | string | null) => {
    if (newValue === null || newValue === undefined) {
      newValue = 0;
    }
    handleInputChange(index, newValue);
  };

  const handleReset = () => {
    setPrice([0, 10000000])
    setSelectedPromotions([])
    setSelectedBrands([])
  };

  if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 z-50 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-xl max-w-[610px] relative">
        <h2 className="text-xl font-bold w-full text-center border-solid border-b-2 py-[17px]">Bộ Lọc Sản Phẩm</h2>
        <div className="absolute right-8 top-4 cursor-pointer" onClick={closeModal}><IoMdClose size={30} /></div>
        <div className="px-10 py-4">
            <div className="border-solid border-b-[2px] pb-6">
                <h3>Ưu đãi</h3>
                <CheckboxWithTag tags={promotions} selectedValues={selectedPromotions} setSelectedValues={setSelectedPromotions} />
            </div>
            
            <div className="mt-5 border-solid border-b-[2px] pb-6">
              <h3>Khoảng giá</h3>
              <div style={{ width: '80%', margin: 'auto' }}>
                <Slider
                  value={price}
                  range
                  min={0}
                  max={10000000}
                  step={100000}
                  onChange={handleSliderChange}
                  style={{ marginTop: '20px' }}
                  tooltip={{ formatter: (value) => formatter(value, true) }}
                />
                <div className="w-full flex justify-center gap-4 items-center mt-8">
                <div className="relative">
                  <InputNumber
                    value={price[0]}
                    min={0}
                    max={10000000}
                    step={100000}
                    style={{ width: 150, textAlign: 'center', paddingRight: '40px' }}
                    onChange={(newValue) => handleValueChange(0, newValue)}
                    formatter={(value) => formatter(value, false)}
                    parser={parser}
                  />
                  <span className="text-[18px] absolute top-[2px] right-[25px] font-light">₫</span>
                </div>
                
                <BsDashLg />

                <div className="relative">
                  <InputNumber
                    value={price[1]}
                    min={0}
                    max={10000000}
                    step={100000}
                    style={{ width: 150, textAlign: 'center' }}
                    onChange={(newValue) => handleValueChange(1, newValue)}
                    formatter={(value) => formatter(value, false)}
                    parser={parser}
                  />
                  <span className="text-[18px] absolute top-[2px] right-[25px] font-light">₫</span>
                </div>
                
                </div>
              </div>
            </div>

            <div className="mt-5">
                <h3>Thương hiệu</h3>
                <CheckboxWithTag tags={brands} selectedValues={selectedBrands} setSelectedValues={setSelectedBrands} />
            </div>

            <div className="mt-10 flex justify-between text-[16px] *:cursor-pointer *:select-none">
              <div className="px-8 py-3 border-solid border-2 rounded-xl hover:border-bg-alt1 transition-all duration-300" onClick={handleReset}>Xóa tất cả</div>
              <div className="px-8 py-3 border-solid border-2 rounded-xl bg-bg-alt1 text-[#FFF] hover:bg-[#BC101E] transition-all duration-300">Xem tất cả</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
