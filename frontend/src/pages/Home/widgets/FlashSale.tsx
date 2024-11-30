import Button from "../../../core/components/Button/Button";
import ProductCarousel from "../../../core/components/ProductCarousel/ProductCarousel";
import { FaArrowRight } from "react-icons/fa6";
import { flash_sale_product } from "../../../core/constants/constants.statusProduct";
import { useEffect, useState } from "react";

const FlashSale = () => {
  const [timeLeft, setTimeLeft] = useState<number>(3600); // Ví dụ: 1 giờ (3600 giây)

  useEffect(() => {
    // Thiết lập bộ đếm giờ
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    // Dọn dẹp bộ đếm giờ khi component unmount
    return () => clearInterval(timer);
  }, []);

  // Tính giờ, phút, giây
  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="sm-:mt-8 w-full bg-custom-gradient md:rounded-[32px] pt-4 md:pt-14 pb-[30px] md:pb-14 px-[10px] sm-:px-[20px] md:px-[60px] select-none">
      <div className="flex justify-between px-5 items-center">
        <div className="flex flex-col md:flex-row gap-3 md:gap-8">
          <div className="font-heading text-[22px] md:text-headingText text-bg">
            FLASH SALES
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-bg rounded-[4px] w-[40px] h-[44px] center text-[14px] md:text-category font-bold text-timeColor">
              {String(hours).padStart(2, "0")}
            </div>
            <div className="text-[20px] font-bold text-headingColor-alt">:</div>
            <div className="bg-bg rounded-[4px] w-[40px] h-[44px] center text-[14px] md:text-category font-bold text-timeColor">
              {String(minutes).padStart(2, "0")}
            </div>
            <div className="text-[20px] font-bold text-headingColor-alt">:</div>
            <div className="bg-bg rounded-[4px] w-[40px] h-[44px] center text-[14px] md:text-category font-bold text-timeColor">
              {String(seconds).padStart(2, "0")}
            </div>
          </div>
        </div>
        <Button
          text="Xem thêm"
          icon={<FaArrowRight size={20} />}
          iconPosition="right"
          colorConfig="white"
        ></Button>
      </div>

      <ProductCarousel status_product={flash_sale_product} />
    </div>
  );
};

export default FlashSale;
