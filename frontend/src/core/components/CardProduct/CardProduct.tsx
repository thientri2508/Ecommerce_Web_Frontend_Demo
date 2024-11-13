import product1 from '../../assets/product/product1.png'
import plusIcon from '../../assets/icon/plus-icon.png'
import heartIcon from '../../assets/icon/heart-icon.png'
import TagVoucher from '../TagVoucher/TagVoucher'
import { Product } from '../../types/Product'

interface CardProductProps {
  product: Product;
  widthConfig?: 'default' | 'topdeal' | 'carousel';
}

const CardProduct: React.FC<CardProductProps> = ({ product, widthConfig = 'default' }) => { 

    const widthClasses =
    widthConfig === 'carousel'
      ? 'w-full h-[360px]'
      : widthConfig === 'topdeal'
      ? 'w-[calc(50%-16px)] md:w-[calc(33%-16px)] lg+:w-[calc(50%-16px)] xl:w-[calc(33%-16px)]'
      : 'w-[calc(50%-16px)] md:w-[calc(33%-16px)] lg:w-[calc(25%-16px)] xl:w-[calc(20%-16px)]';

  return (
    <div className={`${widthClasses} m-auto sm:m-0 bg-slate-100 overflow-hidden rounded-[16px] p-4 flex flex-col gap-3 relative group cursor-pointer`}>
        <div className='absolute w-[36px] h-[36px] bg-bg-alt1 top-[22px] right-[22px] rounded-[50%] cursor-pointer center opacity-0 group-hover:opacity-100 transition-all duration-300'>
          <img src={heartIcon}></img>
        </div>
        <div><img src={product1} className='w-full h-[190px] rounded-[8px] object-cover'></img></div>
        <div className='flex gap-[10px]'>
          <TagVoucher text="23%" color="#FF4114" textColor="#FFFFFF" />
          <TagVoucher text="Tặng 114.000 đ" color="#FFE93F" textColor="#000000" />
        </div>
        <div className='flex flex-col font-price'>
          <span className='text-priceColor-alt text-priceText-alt line-through'>2.999.000 đ</span>
          <span className='text-priceColor font-bold text-priceText'>{product?.market_price.toLocaleString('vi-VN')} đ</span>
        </div>
        <div className="line-clamp-2 overflow-hidden text-ellipsis mt-[-7px]">{product?.product_name}</div>
        {/* <div className='rounded-[24px] border-border w-[190px] h-[36px] border-solid border-[1px] flex justify-between items-center px-4'>
          <span>Thêm vào giỏ hàng</span>
          <img src={plusIcon}></img>
        </div> */}
    </div>
  )
}

export default CardProduct