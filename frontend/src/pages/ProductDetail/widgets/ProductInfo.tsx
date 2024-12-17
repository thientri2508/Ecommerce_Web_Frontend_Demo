import { FaPlus, FaStar } from "react-icons/fa6";
import { PiLineVertical } from "react-icons/pi";
import TagVoucher from "../../../core/components/TagVoucher/TagVoucher";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { useEffect, useState } from "react";
import { RiSubtractFill } from "react-icons/ri";
import { Product } from "../../../core/types/Product";
import { AttributeProduct } from "../../../core/types/AttributeProduct";
import { MdOutlineErrorOutline } from "react-icons/md";
import { message } from "antd";

const ProductInfo = ({ product }: { product: Product }) => {
  const [messageApi, contextHolder] = message.useMessage();

  const [attributeProduct, setAttributeProduct] = useState<AttributeProduct>({
    id: product?.id,
    price: product.listed_price,
    stock: product.total_stock,
  });
  const [selectedAttr1, setSelectedAttr1] = useState<string | null>(null);
  const [selectedAttr2, setSelectedAttr2] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [errorMessage, setErrorMessage] = useState("");

  const list_attribute = product.list_attribute
    ? JSON.parse(product.list_attribute)
    : [];

  const titleAttribute1 = [
    ...new Set(
      list_attribute.map((item: AttributeProduct) => item.title_attribute1)
    ),
  ][0] as string | null;
  const titleAttribute2 = [
    ...new Set(
      list_attribute.map((item: AttributeProduct) => item.title_attribute2)
    ),
  ][0] as string | null;

  const uniqueAttribute1 = [
    ...new Set(list_attribute.map((item: AttributeProduct) => item.attribute1)),
  ] as string[];
  const uniqueAttribute2 = [
    ...new Set(list_attribute.map((item: AttributeProduct) => item.attribute2)),
  ] as string[];

  const handleAttr1Click = (attr1: string) => {
    setSelectedAttr1(attr1);
  };

  const handleAttr2Click = (attr2: string) => {
    setSelectedAttr2(attr2);
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleInputChange = (value: string) => {
    if (value === "") {
      setQuantity(1); // Nếu người dùng xóa hết ký tự, đặt về 0
    } else {
      const parsedValue = parseInt(value, 10);
      if (!isNaN(parsedValue) && parsedValue >= 0) {
        setQuantity(parsedValue); // Cập nhật giá trị hợp lệ
      }
    }
  };

  const logDataByAttributes = (atr1: string | null, atr2: string | null) => {
    // Lọc dữ liệu theo atr1 và atr2
    const filteredData = list_attribute?.filter(
      (item: any) =>
        item?.attribute1?.toUpperCase() === atr1?.toUpperCase() &&
        item?.attribute2?.toUpperCase() === atr2?.toUpperCase()
    );

    if (filteredData.length > 0) {
      setAttributeProduct(filteredData[0]);
    }
  };

  const addToCart = async () => {
    // if (isAuthenticated && user?.id) {
    //   if (titleAttribute1 && !selectedAttr1) {
    //     setErrorMessage("Vui lòng chọn đầy đủ thông tin sản phẩm");
    //     return;
    //   }
    //   if (titleAttribute2 && !selectedAttr2) {
    //     setErrorMessage("Vui lòng chọn đầy đủ thông tin sản phẩm");
    //     return;
    //   }
    //   const response = await AddToCart(
    //     user?.id,
    //     attributeProduct?.id,
    //     quantity
    //   );
    //   if (response?.success) {
    //     messageApi.open({
    //       type: "success",
    //       content: "Thêm sản phẩm vào giỏ hàng thành công",
    //     });
    //   } else {
    //     messageApi.open({
    //       type: "error",
    //       content: "Không thể thêm sản phẩm vào giỏ hàng",
    //     });
    //   }
    //   setErrorMessage("");
    // } else {
    //   navigate("/login");
    // }
    if (titleAttribute1 && !selectedAttr1) {
      setErrorMessage("Vui lòng chọn đầy đủ thông tin sản phẩm");
      return;
    }
    if (titleAttribute2 && !selectedAttr2) {
      setErrorMessage("Vui lòng chọn đầy đủ thông tin sản phẩm");
      return;
    }
    messageApi.open({
      type: "success",
      content: "Thêm sản phẩm vào giỏ hàng thành công",
    });
    setErrorMessage("");
  };

  useEffect(() => {
    logDataByAttributes(selectedAttr1, selectedAttr2);
  }, [selectedAttr1, selectedAttr2]);

  return (
    <div className="w-full flex flex-col">
      {contextHolder}
      <div className="text-[20px] font-semibold line-clamp-2 overflow-hidden text-ellipsis">
        {product?.product_name}
      </div>
      <ul className="flex items-center gap-2 text-[14px] mt-2">
        <li>
          <ul className="flex gap-[10px]">
            <li className="font-medium">{product?.rating}.0</li>
            <li className="flex gap-[2px]">
              {product?.rating &&
                Array.from({ length: product?.rating }, (_, index) => (
                  <FaStar key={index} size={18} color="#FFD000" />
                ))}
            </li>
            <li className="font-light text-text-muted">(231)</li>
          </ul>
        </li>
        <li>
          <PiLineVertical size={20} color="#818181" />
        </li>
        <li className="font-medium text-[#000000]">
          <span className="text-text-muted">Đã bán</span> 0
        </li>
        <li>
          <PiLineVertical size={20} color="#818181" />
        </li>
        <li className="text-text-muted">WD2830307404</li>
        <li>
          <PiLineVertical size={20} color="#818181" />
        </li>
        <li className="text-text-muted">Hàng có sẵn</li>
      </ul>

      <div className="w-full mt-6 p-4 flex gap-5 items-center font-price border-solid border-[#f0f0f0] border-[1px] rounded-[16px]">
        {product?.discount && product?.discount > 0 ? (
          <>
            <div className="text-priceColor font-bold text-[28px]">
              {(
                (attributeProduct?.price || 0) *
                (1 - product.discount / 100)
              ).toLocaleString("vi-VN")}{" "}
              đ
            </div>
            <TagVoucher text="%" />
            <div className="line-through text-[18px] text-priceColor-alt">
              {(attributeProduct?.price || 0).toLocaleString("vi-VN")} đ
            </div>
          </>
        ) : (
          <div className="text-priceColor font-bold text-[28px]">
            {(attributeProduct?.price || 0).toLocaleString("vi-VN")} đ
          </div>
        )}
      </div>

      {titleAttribute1 && (
        <>
          <div className="text-[16px] mt-6">
            {titleAttribute1}: {selectedAttr1}
          </div>
          <ul className="mt-3 flex flex-wrap gap-[10px] *:cursor-pointer">
            {uniqueAttribute1.map((attr1, index) => (
              <li
                key={index}
                className={`border-2 rounded-[8px] hover:border-bg-alt1 px-[21px] py-[7px] transition-all duration-200 ${
                  selectedAttr1 === attr1
                    ? "border-bg-alt1"
                    : "border-[#f0f0f0]"
                }`}
                onClick={() => handleAttr1Click(attr1)}
              >
                {attr1}
              </li>
            ))}
          </ul>
        </>
      )}

      {titleAttribute2 && (
        <>
          <div className="text-[16px] mt-6">
            {titleAttribute2}: {selectedAttr2}
          </div>
          <ul className="mt-3 flex flex-wrap gap-[10px] *:cursor-pointer">
            {uniqueAttribute2.map((attr2, index) => (
              <li
                key={index}
                className={`border-2 rounded-[8px] hover:border-bg-alt1 px-[21px] py-[7px] transition-all duration-200 ${
                  selectedAttr2 === attr2
                    ? "border-bg-alt1"
                    : "border-[#f0f0f0]"
                }`}
                onClick={() => handleAttr2Click(attr2)}
              >
                {attr2}
              </li>
            ))}
          </ul>
        </>
      )}

      <div className="flex gap-6 mt-8 items-center">
        <div className="flex justify-between items-center w-[240px] rounded-[32px] border-solid border-bg-alt1 border-[1px] px-4 py-2">
          <RiSubtractFill
            size={30}
            color={quantity > 1 ? "#d91d2c" : "#ccc"}
            className={`select-none ${
              quantity > 1
                ? "hover:opacity-80 cursor-pointer"
                : "cursor-not-allowed"
            }`}
            onClick={handleDecrease}
          />
          {/* <span className="text-[18px]">{quantity}</span> */}
          <input
            type="number"
            className="w-[50px] text-center text-[18px] border-none outline-none"
            value={quantity}
            onChange={(e) => handleInputChange(e.target.value)}
            min={0}
          />
          <FaPlus
            size={24}
            color="#d91d2c"
            className="cursor-pointer select-none hover:opacity-80"
            onClick={handleIncrease}
          />
        </div>
        <div className="text-[16px]">
          Số lượng:{" "}
          <span className="text-[14px] font-light text-text-muted">
            còn lại {attributeProduct?.stock} sản phẩm
          </span>
        </div>
      </div>

      <div className="flex gap-6 items-start text-[16px] *:cursor-pointer mt-6">
        <div
          className="flex items-center rounded-[32px] border-solid border-bg-alt1 border-[1px] px-[44px] py-[14px] gap-[10px] font-medium text-bg-alt1"
          onClick={addToCart}
        >
          <LiaShoppingBagSolid size={24} />
          <div>Thêm giỏ hàng</div>
        </div>
        <div className="rounded-[32px] bg-bg-alt1 px-[60px] py-[15px] text-[#FFFFFF]">
          Mua ngay
        </div>
      </div>

      {errorMessage && (
        <div className=" text-red-500 flex gap-2 items-center mt-4">
          <MdOutlineErrorOutline size={18} />
          <div>{errorMessage}</div>
        </div>
      )}
    </div>
  );
};

export default ProductInfo;
