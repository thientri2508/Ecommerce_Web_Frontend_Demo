import arrowIcon from "../../../core/assets/icon/rightArrow-icon.png"
import Button from "../../../core/components/Button/Button"
import ProductCarousel from "../../../core/components/ProductCarousel/ProductCarousel"

const FlashSale = () => {

  return (
    <div className="sm-:mt-8 w-full bg-custom-gradient md:rounded-[32px] pt-4 md:pt-14 pb-[30px] md:pb-14 px-[10px] sm-:px-[20px] md:px-[60px] select-none">
        <div className="flex justify-between px-5 items-center">
            <div className="flex flex-col md:flex-row gap-3 md:gap-8">
            <div className="font-heading text-[22px] md:text-headingText text-bg">FLASH SALES</div>
            <div className="flex items-center gap-2">
                <div className="bg-bg rounded-[4px] px-[6px] py-[4px] md:px-[10px] md:py-[8px] text-[14px] md:text-category font-bold text-timeColor">07</div>
                <div className="text-[20px] font-bold text-headingColor-alt">:</div>
                <div className="bg-bg rounded-[4px] px-[6px] py-[4px] md:px-[10px] md:py-[8px] text-[14px] md:text-category font-bold text-timeColor">07</div>
                <div className="text-[20px] font-bold text-headingColor-alt">:</div>
                <div className="bg-bg rounded-[4px] px-[6px] py-[4px] md:px-[10px] md:py-[8px] text-[14px] md:text-category font-bold text-timeColor">07</div>
            </div>
            </div>
            <Button text="Xem thêm" icon={arrowIcon} iconPosition="right"></Button>
        </div>

        <ProductCarousel />
    </div>
  )
}

export default FlashSale