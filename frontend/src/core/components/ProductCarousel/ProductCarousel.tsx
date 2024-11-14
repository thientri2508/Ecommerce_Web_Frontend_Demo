import React, { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import leftIcon from '../../assets/icon/navigate-left.png';
import rightIcon from '../../assets/icon/navigate-right.png';
import CardProduct from '../CardProduct/CardProduct';
import { Product } from '../../types/Product';
import { useProducts } from '../../hooks/products/useProducts';
import LoadingComponent from '../Loading/LoadingComponent';
import { generateRandomId } from '../../utils/generateRandomId';

interface ProductCarouselProps {
  filter?: string;
  setLoading?: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({ filter, setLoading }) => {

  const { data: products, isLoading, error } = useProducts({status_product: filter})

  const btnLeft = useRef<HTMLDivElement | null>(null);
  const btnRight = useRef<HTMLDivElement | null>(null);

  const prevButtonId = generateRandomId();
  const nextButtonId = generateRandomId();

  useEffect(() => {
    if (!isLoading && !error) setLoading?.(false);
  }, [isLoading, error, setLoading]);

  // Hàm xử lý khi slide thay đổi
  const handleSlideChange = (swiper: any) => {
    if (!swiper.isBeginning) {
      if (btnLeft.current) btnLeft.current.style.display = 'flex';
    } else {
      if (btnLeft.current) btnLeft.current.style.display = 'none';
    }
  };

  if (isLoading) return <LoadingComponent />

  if (error) return <div>Error: {error instanceof Error ? error.message : 'Unknown error'}</div>
  
  return (
    <div className='relative mt-10 px-0 md:px-5'>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={15}
        slidesPerView={5}
        slidesPerGroup={5}
        onSlideChange={handleSlideChange}
        onReachEnd={() => {
          if (btnRight.current) btnRight.current.style.display = 'none';
        }}
        onFromEdge={() => {
          if (btnRight.current) btnRight.current.style.display = 'flex';
        }}
        breakpoints={{
          1280: { slidesPerView: 5, slidesPerGroup: 5 },
          1024: { slidesPerView: 4, slidesPerGroup: 4 },
          768: { slidesPerView: 3, slidesPerGroup: 3 },
          640: { slidesPerView: 2, slidesPerGroup: 2},
          300: { slidesPerView: 2, slidesPerGroup: 2 },
        }}
        loop={false}
        navigation={{ prevEl: `#${prevButtonId}`, nextEl: `#${nextButtonId}` }}
      >
        {products?.map((product: Product) => (
            <SwiperSlide key={product.id} className='w-1/5'><CardProduct product={product} widthConfig='carousel' /></SwiperSlide>
        ))}
      </Swiper>

      <div ref={btnLeft} id={prevButtonId} className='custom-prev top-[360px] left-[10px] md:top-[165px] md:left-[-45px] shadow-custom-shadow border-[2px] hidden'>
        <img src={leftIcon}></img>
      </div>
      <div ref={btnRight} id={nextButtonId} className='custom-next top-[360px] right-[10px] md:top-[165px] md:right-[-45px] shadow-custom-shadow border-[2px] flex'>
        <img src={rightIcon}></img>
      </div>

    </div>
  );
}

export default ProductCarousel;