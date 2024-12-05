import heartIcon from "../../assets/icon/heart-icon.png";
import TagVoucher from "../TagVoucher/TagVoucher";
import { Product } from "../../types/Product";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ROUTES } from "../../constants/constants.router";

interface CardProductProps {
  product: Product;
  widthConfig?:
    | "default"
    | "topdeal"
    | "carousel"
    | "productlist"
    | "productdetail";
}

const CardProduct: React.FC<CardProductProps> = ({
  product,
  widthConfig = "default",
}) => {
  const navigate = useNavigate();
  const handleClick = (id: number) => {
    navigate(`${ROUTES.PRODUCT_DETAIL}?id=${id}`);
  };

  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false); // Hình ảnh đã tải xong, bỏ hiệu ứng blur
  };

  const widthClasses =
    widthConfig === "carousel"
      ? "w-full h-[260px] sm-:h-[330px]"
      : widthConfig === "topdeal"
      ? "w-[calc(50%-4px)] md:w-[calc(33.33%-12px)] lg+:w-[calc(50%-10px)] xl:w-[calc(33.33%-12px)]"
      : widthConfig === "productlist"
      ? "w-[calc(25%-16px)]"
      : widthConfig === "productdetail"
      ? "w-[90%]"
      : "w-[calc(50%-4px)] md:w-[calc(33%-10px)] lg:w-[calc(25%-12px)] xl:w-[calc(20%-14px)]";

  return (
    <div
      onClick={() => handleClick(product?.id)}
      className={`${widthClasses} bg-bg border-solid border-[0.7px] border-[#DEDEDE] overflow-hidden rounded-[16px] p-4 flex flex-col gap-[10px] relative group cursor-pointer`}
    >
      <div className="absolute w-[36px] h-[36px] bg-bg-alt1 top-[22px] right-[22px] rounded-[50%] cursor-pointer center opacity-0 group-hover:opacity-100 transition-all duration-300">
        <img src={heartIcon}></img>
      </div>
      <div>
        <img
          src={product?.logo_product}
          onLoad={handleImageLoad}
          className={`w-full ${
            widthConfig === "carousel"
              ? "h-[130px] sm-:h-[190px]"
              : "aspect-square"
          } rounded-[8px] object-cover transition-all ${
            isLoading ? "blur-sm" : ""
          }`}
        ></img>
      </div>
      <div className="flex gap-[5px] sm-:gap-[10px]">
        <TagVoucher text="Sale 23%" color="#FF4114" textColor="#FFFFFF" />
        <TagVoucher text="FREESHIP" color="#FFE93F" textColor="#000000" />
      </div>
      <div className="flex flex-wrap items-center justify-between font-price">
        {product?.discount > 0 ? (
          <>
            <span className="text-priceColor font-bold text-[15px] sm-:text-priceText">
              {(
                product?.listed_price *
                (1 - product.discount / 100)
              ).toLocaleString("vi-VN")}{" "}
              đ
            </span>
            <span className="text-priceColor-alt text-priceText-alt line-through hidden sm-:block">
              {product?.listed_price.toLocaleString("vi-VN")} đ
            </span>
          </>
        ) : (
          <span className="text-priceColor font-bold text-[15px] sm-:text-priceText">
            {product?.listed_price.toLocaleString("vi-VN")} đ
          </span>
        )}
      </div>
      <div className="line-clamp-2 overflow-hidden text-ellipsis mt-[-7px] leading-tight md:leading-normal">
        {product?.product_name}
      </div>
    </div>
  );
};

export default CardProduct;
