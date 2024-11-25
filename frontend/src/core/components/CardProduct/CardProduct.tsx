import product1 from '../../assets/product/product1.png'
// import plusIcon from '../../assets/icon/plus-icon.png'
import heartIcon from '../../assets/icon/heart-icon.png'
import TagVoucher from '../TagVoucher/TagVoucher'
import { Product } from '../../types/Product'

interface CardProductProps {
  product: Product;
  widthConfig?: 'default' | 'topdeal' | 'carousel' | 'productlist';
}
 
const CardProduct: React.FC<CardProductProps> = ({ product, widthConfig = 'default' }) => { 

    const widthClasses =
    widthConfig === 'carousel'
      ? 'w-full h-[260px] sm-:h-[330px]'
      : widthConfig === 'topdeal'
      ? 'w-[calc(50%-4px)] md:w-[calc(33.33%-12px)] lg+:w-[calc(50%-10px)] xl:w-[calc(33.33%-12px)]'
      : widthConfig === 'productlist'
      ? 'w-[calc(25%-16px)]'
      : 'w-[calc(50%-4px)] md:w-[calc(33%-10px)] lg:w-[calc(25%-12px)] xl:w-[calc(20%-14px)]';

  return (
    <div className={`${widthClasses} bg-bg border-solid border-[0.7px] border-[#DEDEDE] overflow-hidden rounded-[16px] p-4 flex flex-col gap-[10px] relative group cursor-pointer`}>
        <div className='absolute w-[36px] h-[36px] bg-bg-alt1 top-[22px] right-[22px] rounded-[50%] cursor-pointer center opacity-0 group-hover:opacity-100 transition-all duration-300'>
          <img src={heartIcon}></img>
        </div>
        <div><img src={product1} className={`w-full ${widthConfig === 'carousel' ? 'h-[130px] sm-:h-[190px]' : 'aspect-square'} rounded-[8px] object-cover`}></img></div>
        <div className='flex gap-[5px] sm-:gap-[10px]'>
          <TagVoucher text="Sale 23%" color="#FF4114" textColor="#FFFFFF" />
          <TagVoucher text="FREESHIP" color="#FFE93F" textColor="#000000" />
        </div>
        <div className='flex flex-wrap items-center justify-between font-price'>
          <span className='text-priceColor font-bold text-[15px] sm-:text-priceText'>{product?.market_price.toLocaleString('vi-VN')} đ</span>
          <span className='text-priceColor-alt text-priceText-alt line-through hidden sm-:block'>2.999.000 đ</span>
        </div>
        <div className="line-clamp-2 overflow-hidden text-ellipsis mt-[-7px] leading-tight md:leading-normal">{product?.product_name}</div>
        {/* <div className='rounded-[24px] border-border w-[190px] h-[36px] border-solid border-[1px] flex justify-between items-center px-4'>
          <span>Thêm vào giỏ hàng</span>
          <img src={plusIcon}></img>
        </div> */}
    </div>
  )
}

export default CardProduct