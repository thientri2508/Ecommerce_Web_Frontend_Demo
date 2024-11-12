import arrowIcon from "../../../core/assets/icon/rightArrow-icon.png"
import Button from "../../../core/components/Button/Button"
import ProductCarousel from "../../../core/components/ProductCarousel/ProductCarousel"

const FlashSale = () => {

  return (
    <div className="mt-8 w-full bg-custom-gradient rounded-[32px] py-14 md:px-[60px]">
        <div className="flex justify-between px-5">
            <div className="flex gap-8">
            <div className="font-heading text-headingText text-bg">FLASH SALES</div>
            <div className="flex items-center gap-2">
                <div className="bg-bg rounded-[4px] px-[10px] py-[8px] text-category font-bold text-timeColor">07</div>
                <div className="text-[20px] font-bold text-headingColor-alt">:</div>
                <div className="bg-bg rounded-[4px] px-[10px] py-[8px] text-category font-bold text-timeColor">07</div>
                <div className="text-[20px] font-bold text-headingColor-alt">:</div>
                <div className="bg-bg rounded-[4px] px-[10px] py-[8px] text-category font-bold text-timeColor">07</div>
            </div>
            </div>
            <Button text="Xem thêm" icon={arrowIcon} iconPosition="right"></Button>
        </div>

        <ProductCarousel />
    </div>
  )
}

export default FlashSale