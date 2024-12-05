import { useState } from "react";
interface ContentProps {
  description: string;
  usage: string;
  warranty: string;
}

interface ProductDetailInfoProps {
  content: ContentProps;
}

const ProductDetailInfo: React.FC<ProductDetailInfoProps> = ({ content }) => {
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
        <div
          className="mt-4 p-4"
          dangerouslySetInnerHTML={{ __html: content[activeTab] }}
        />
      </div>
    </>
  );
};

export default ProductDetailInfo;
