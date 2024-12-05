const Payment = () => {
  return (
    <div className="w-full relative bg-bg bg-opacity-40 rounded-[12px] px-5 py-3 mb-[150px]">
      <div className="text-[14px] font-medium">Thanh toán</div>
      <div className="flex justify-between py-[6px] border-dashed border-b-2">
        <div className="text-text-muted">Tổng tiền hàng</div>
        <div>1.000.000 đ</div>
      </div>

      <div className="flex flex-col gap-1 py-[6px] border-dashed border-b-2">
        <div className="flex justify-between">
          <div className="text-text-muted">Tổng khuyến mãi</div>
          <div>-510.000 đ</div>
        </div>
        <div className="flex justify-between">
          <div className="text-text-muted ml-6">Voucher Vimall</div>
          <div>-30.000 đ</div>
        </div>
        <div className="flex justify-between">
          <div className="text-text-muted ml-6">Voucher của shop</div>
          <div>-10.000 đ</div>
        </div>
      </div>

      <div className="flex justify-between pt-[6px] pb-[14px] border-dashed border-b-2">
        <div className="text-text-muted">Nhận điểm thưởng</div>
        <div>+ 500.000 điểm</div>
      </div>

      <div className="absolute z-20 w-full px-5 py-4 bg-bg rounded-[12px] left-0 top-[calc(100%-14px)] border-[1px] border-solid shadow-custom-shadow-header">
        <div className="w-full flex justify-between">
          <div className="text-[14px] font-medium">Tổng tiền thanh toán</div>
          <div className="flex flex-col items-end">
            <div className="text-[20px] font-bold text-bg-alt1">490.000 đ</div>
            <div className="text-[12px] font-light">
              (Đã bao gồm VAT nếu có)
            </div>
          </div>
        </div>
        <div className="w-full rounded-[32px] bg-bg-alt1 center py-4 text-[16px] text-white mt-3 cursor-pointer">
          Mua ngay (5)
        </div>
      </div>
    </div>
  );
};

export default Payment;
