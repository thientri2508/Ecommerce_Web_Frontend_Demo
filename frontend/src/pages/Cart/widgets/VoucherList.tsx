import React, { useState } from "react";
import CardVoucher from "./CardVoucher";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { Voucher } from "../../../core/types/Voucher";

const vouchers: Voucher[] = [
  { id: 1, title: "Voucher 1", description: "Giảm giá 10% cho đơn hàng đầu tiên." },
  { id: 2, title: "Voucher 2", description: "Miễn phí vận chuyển cho đơn hàng từ 500K." },
  { id: 3, title: "Voucher 3", description: "Giảm 20% khi mua 2 sản phẩm trở lên." },
  { id: 4, title: "Voucher 4", description: "Tặng quà cho đơn hàng trên 1 triệu." },
];

interface VoucherListProps{
  type: 'delivery' | 'promotion'
}

const VoucherList: React.FC<VoucherListProps> = ({type}) => {
  const [showAll, setShowAll] = useState(false);
  const [selectedVoucher, setSelectedVoucher] = useState<number | null>(null);

  // Toggle hiển thị toàn bộ danh sách
  const handleToggle = () => {
    setShowAll(!showAll);
  };

  const handleSelectVoucher = (id: number) => {
    setSelectedVoucher((prev) => (prev === id ? null : id));
  };

  // Hiển thị 2 voucher đầu tiên nếu không ở trạng thái xem tất cả
  const displayedVouchers = showAll ? vouchers : vouchers.slice(0, 2);

  return (
    <div className="w-full py-3">
      <ul className="space-y-4">
        {displayedVouchers.map((voucher) => (
          <li
            key={voucher.id}
            className={`transition-opacity ${
              selectedVoucher !== null && selectedVoucher !== voucher.id
                ? "opacity-50"
                : "opacity-100"
            }`}
          >
            <CardVoucher type={type} voucher={voucher} handleSelectVoucher={handleSelectVoucher} isSelected={selectedVoucher === voucher.id} />
          </li>
        ))}
      </ul>
      <div className="w-full center">
        <button
          onClick={handleToggle}
          className="mt-3 py-2 px-4 flex items-center gap-2"
          >
          {showAll ? (
            <>
              Thu gọn <FaAngleUp />
            </>
          ) : (
            <>
              Xem thêm <FaAngleDown />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default VoucherList;
