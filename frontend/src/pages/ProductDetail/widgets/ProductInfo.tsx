import { FaPlus, FaStar } from "react-icons/fa6";
import { PiLineVertical } from "react-icons/pi";
import TagVoucher from "../../../core/components/TagVoucher/TagVoucher";
// import productImg from "../../../core/assets/product/product4.png";
// import { IoIosArrowForward } from "react-icons/io";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { useEffect, useState } from "react";
// import productSizeImg from "../../../core/assets/product/product3-size.png";
// import { IoCloseSharp } from "react-icons/io5";
import { RiSubtractFill } from "react-icons/ri";
import { Product } from "../../../core/types/Product";
import { AttributeProduct } from "../../../core/types/AttributeProduct";
import { useAuth } from "../../../core/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { MdOutlineErrorOutline } from "react-icons/md";
import { AddToCart } from "../../../core/services/cart/AddToCart";
import { message } from "antd";

const ProductInfo = ({ product }: { product: Product }) => {
  const [messageApi, contextHolder] = message.useMessage();
  const { isAuthenticated, user } = useAuth();
  const navigate = useNavigate();

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
    if (isAuthenticated && user?.id) {
      if (titleAttribute1 && !selectedAttr1) {
        setErrorMessage("Vui lòng chọn đầy đủ thông tin sản phẩm");
        return;
      }
      if (titleAttribute2 && !selectedAttr2) {
        setErrorMessage("Vui lòng chọn đầy đủ thông tin sản phẩm");
        return;
      }
      const response = await AddToCart(
        user?.id,
        attributeProduct?.id,
        quantity
      );
      if (response?.success) {
        messageApi.open({
          type: "success",
          content: "Thêm sản phẩm vào giỏ hàng thành công",
        });
      } else {
        messageApi.open({
          type: "error",
          content: "Không thể thêm sản phẩm vào giỏ hàng",
        });
      }
      setErrorMessage("");
    } else {
      navigate("/login");
    }
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
              {Array.from({ length: product?.rating }, (_, index) => (
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
        {product?.discount > 0 ? (
          <>
            <div className="text-priceColor font-bold text-[28px]">
              {(
                attributeProduct.price *
                (1 - product.discount / 100)
              ).toLocaleString("vi-VN")}{" "}
              đ
            </div>
            <TagVoucher text="%" />
            <div className="line-through text-[18px] text-priceColor-alt">
              {attributeProduct.price.toLocaleString("vi-VN")} đ
            </div>
          </>
        ) : (
          <div className="text-priceColor font-bold text-[28px]">
            {attributeProduct.price.toLocaleString("vi-VN")} đ
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

      {/* <div className="text-[16px] mt-6">
        Phân loại:{" "}
        <span className="text-[14px] font-light text-text-muted">Đỏ đô</span>
      </div>

      <ul className="mt-3 flex gap-[10px] *:cursor-pointer">
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <li key={index}>
              <img
                src={productImg}
                className={`w-[60px] h-[60px] border-solid border-[#f0f0f0] border-[2px] rounded-[8px] hover:border-bg-alt1 transition-all duration-200 ${
                  selectedColor === index
                    ? "border-bg-alt1"
                    : "border-[#f0f0f0]"
                }`}
                onClick={() => handleColorClick(index)}
              />
            </li>
          ))}
      </ul> */}

      {/* <div className="flex justify-between">
        <div className="text-[16px] mt-6">
          Size:{" "}
          <span className="text-[14px] font-light text-text-muted">
            48-53kg
          </span>
        </div>
        <div
          className="text-[14px] font-light text-text-muted flex items-center mt-6 cursor-pointer"
          onClick={() => setIsModalSizeOpen(true)}
        >
          <span>Bảng kích thước</span>
          <IoIosArrowForward size={18} />
        </div>
      </div> */}

      {/* <div className="text-[16px] mt-6">
          Size:{" "}
          <span className="text-[14px] font-light text-text-muted">
            48-53kg
          </span>
        </div>

      <ul className="mt-3 flex gap-[10px] *:cursor-pointer">
        {sizes.map((size, index) => (
          <li
            key={index}
            className={`border-2 rounded-[8px] hover:border-bg-alt1 px-[21px] py-[7px] transition-all duration-200 ${
              selectedSize === size ? "border-bg-alt1" : "border-[#f0f0f0]"
            }`}
            onClick={() => handleSizeClick(size)}
          >
            {size}
          </li>
        ))}
      </ul> */}

      {/* {isModalSizeOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={() => setIsModalSizeOpen(false)}
        >
          <div
            className="relative bg-white p-4 rounded-lg shadow-lg max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalSizeOpen(false)}
              className="absolute top-2 right-4 text-gray-600 hover:text-gray-800"
            >
              <IoCloseSharp size={40} />
            </button>
            <img
              src={productSizeImg}
              alt="Preview"
              className="w-full h-auto rounded-[32px]"
            />
          </div>
        </div>
      )} */}
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
