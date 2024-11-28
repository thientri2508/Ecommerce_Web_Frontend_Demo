
const ShippingInfo = () => {
  return (
    <div className="w-[82%] border-solid border-[#f0f0f0] border-[1px] rounded-[16px] pb-4 px-[18px] mt-9 float-right">
        <div className="flex items-center justify-between border-solid border-[#f0f0f0] border-b-[1px] py-[10px]">
        <div className="font-semibold text-[16px]">Giao hàng tiết kiệm</div>
        <div className="font-light text-text-muted">Giao Nhanh 4 Ngày</div>
        </div>
        <div className="text-[14px] mt-2 text-text-muted font-bold">Nhận vào 23 Th11</div>
        <div className="mt-2 text-text-muted font-light"><span className="text-bg-alt1 font-medium">Miễn phí vận chuyển</span> đơn tối thiểu 100.000</div>
        <div className="text-text-muted font-light"><span className="text-bg-alt1 font-medium">Miễn phí vận chuyển</span> đơn tối thiểu 500.000</div>
        <div className="mt-2 text-text-muted font-light italic">Giao hàng trong 4 ngày cho đơn đặt trước 14:00, không tính Chủ nhật & ngày lễ</div>
    </div>
  )
}

export default ShippingInfo