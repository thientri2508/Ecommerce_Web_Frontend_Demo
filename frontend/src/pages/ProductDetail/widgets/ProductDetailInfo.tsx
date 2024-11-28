import { useState } from "react";

const ProductDetailInfo = () => {
  const data = [
    { title: "Số lượng hàng khuyến mãi", value: "132" },
    { title: "Số sản phẩm còn lại", value: "223" },
    { title: "Thương hiệu", value: "Lovito" },
    { title: "Giới tính", value: "Nữ" },
    { title: "Chất liệu", value: "1 Metal" },
    { title: "Gửi từ", value: "Quận 2, HCM" },
  ];

  const [activeTab, setActiveTab] =
    useState<keyof typeof content>("description");

  const tabs = [
    { id: "description", label: "Mô tả sản phẩm" },
    { id: "usage", label: "Hướng dẫn sử dụng" },
    { id: "warranty", label: "Chính sách bảo hành" },
  ];

  const content = {
    description: (
        <div className="font-light text-[15px]">
          <h3>MÔ TẢ</h3>
          <ul className="list-none pl-0 mt-2">
            <li><strong>Hoa văn:</strong> Màu trơn</li>
            <li><strong>Phong cách:</strong> Ngày thường</li>
            <li><strong>Chất liệu:</strong> 100% kim loại</li>
            <li><strong>Xuất xứ:</strong> Trung Quốc đại lục</li>
          </ul>
  
          <h3 className="mt-4">✅ GÓI HÀNG BAO GỒM</h3>
          <ul className="list-disc pl-5 mt-2">
            <li>1X Kính mát</li>
          </ul>
  
          <h3 className="mt-4">✅ GIỚI THIỆU LOVITO</h3>
          <p className="mt-2 text-gray-700">
            Lovito là một thương hiệu mới nổi tin vào sức mạnh của con gái, cam kết cung cấp các lựa chọn quần áo thời trang và giá cả phải chăng cho các phong cách, nhu cầu và bản sắc khác nhau.
            Chúng tôi tin rằng thời trang phải mang lại niềm vui, sự tự do và khiến bạn cảm thấy tuyệt vời. Xét cho cùng, phụ kiện tốt nhất cho mọi vẻ ngoài chính là sự tự tin.
          </p>
  
          <h3 className="mt-4">✅ Ghi chú mua hàng</h3>
          <p className="mt-2 text-gray-700">
            Tất cả hình ảnh sản phẩm trong cửa hàng này đều là ảnh chụp thật. Do sự khác biệt về ánh sáng và màn hình, sự khác biệt nhỏ về màu sắc giữa hình ảnh và sản phẩm là không thể tránh khỏi.
            Theo dõi cửa hàng của chúng tôi và khám phá các mặt hàng mới và ưu đãi tốt nhất dành cho bạn!!
          </p>
        </div>
      ),
      usage: (
        <div className="font-light text-[15px]">
          <h3>HƯỚNG DẪN SỬ DỤNG</h3>
          <ul className="list-none pl-0 mt-2">
            <li><strong>1. Trước khi sử dụng:</strong> Đảm bảo sản phẩm đã được kiểm tra kỹ lưỡng và không có lỗi gì từ nhà sản xuất.</li>
            <li><strong>2. Cách sử dụng:</strong> Mở sản phẩm và kiểm tra các phụ kiện đi kèm. Sau đó, bạn có thể sử dụng theo mục đích của mình như trong hướng dẫn.</li>
            <li><strong>3. Hướng dẫn bảo quản:</strong> Sau khi sử dụng, hãy giữ sản phẩm ở nơi khô ráo, tránh xa ánh nắng trực tiếp và nhiệt độ cao để bảo vệ tuổi thọ của sản phẩm.</li>
          </ul>
  
          <h3 className="mt-4">✅ Lưu ý:</h3>
          <ul className="list-disc pl-5 mt-2">
            <li>Tránh làm rơi sản phẩm, đặc biệt là những phụ kiện nhỏ.</li>
            <li>Không nên dùng sản phẩm trong môi trường ẩm ướt hoặc dưới nước.</li>
          </ul>
        </div>
      ),
      warranty: (
        <div className="font-light text-[15px]">
          <h3>CHÍNH SÁCH BẢO HÀNH</h3>
          <p className="mt-2">
            Chúng tôi cam kết bảo hành sản phẩm trong vòng 12 tháng kể từ ngày mua hàng. Chính sách bảo hành áp dụng cho tất cả các lỗi do nhà sản xuất.
          </p>
  
          <h3 className="mt-4">✅ Điều kiện bảo hành:</h3>
          <ul className="list-disc pl-5 mt-2">
            <li>Chỉ bảo hành đối với các lỗi kỹ thuật do sản xuất.</li>
            <li>Bảo hành không áp dụng cho các lỗi do người sử dụng gây ra, chẳng hạn như làm rơi, bị va đập mạnh, hoặc do sự cố ngoài ý muốn.</li>
          </ul>
  
          <h3 className="mt-4">✅ Quy trình bảo hành:</h3>
          <p className="mt-2">
            Để thực hiện bảo hành, vui lòng liên hệ với chúng tôi qua số điện thoại hoặc email hỗ trợ. Bạn cần cung cấp hóa đơn mua hàng và mô tả lỗi gặp phải.
          </p>
  
          <h3 className="mt-4">✅ Lưu ý:</h3>
          <p className="mt-2">
            Mọi yêu cầu bảo hành sẽ được xử lý trong vòng 7 ngày làm việc kể từ khi nhận được yêu cầu và sản phẩm.
          </p>
        </div>
      ),
  };

  return (
    <>
      <div className="w-full bg-bg rounded-[16px] p-8">
        <h2 className="font-bold text-[20px]">THÔNG SỐ SẢN PHẨM</h2>
        <table className="table-auto border-collapse w-full text-[15px] mt-3">
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td className="border-solid border-[#f0f0f0] border-[1px] px-4 py-[14px] w-[45%]">
                  {item.title}
                </td>
                <td className="border-solid border-[#f0f0f0] border-[1px] px-4 py-[14px] w-[55%]">
                  {item.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="w-full bg-bg rounded-[16px] p-8 mt-5">
        <div className="flex border-b border-gray-300 gap-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`px-4 py-2 font-bold text-[20px] uppercase ${
                activeTab === tab.id
                  ? "border-b-2 border-black text-black"
                  : "text-text-muted hover:text-black"
              }`}
              onClick={() => setActiveTab(tab.id as keyof typeof content)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="mt-4 p-4">
          {content[activeTab]}
        </div>
      </div>
    </>
  );
};

export default ProductDetailInfo;
