import banner1 from "../../../core/assets/banner/banner1.png"
import banner2 from "../../../core/assets/banner/banner4.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import leftIcon from '../../../core/assets/icon/navigate-left.png';
import rightIcon from '../../../core/assets/icon/navigate-right.png';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../../../core/styles/App.css'
import { generateRandomId } from "../../../core/utils/generateRandomId";

// type ImageCarouselProps = {
//   images: string[];
// };

const ImageCarousel = () => {

  const prevButtonId = generateRandomId();
  const nextButtonId = generateRandomId();

  return (
    <div className='relative select-none w-[75%]'>
      <Swiper
        className="h-full"
        modules={[Navigation, Autoplay, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        navigation={{ prevEl: `#${prevButtonId}`, nextEl: `#${nextButtonId}` }}
      >
        <SwiperSlide><img src={banner1} className="w-full h-full object-cover rounded-[24px]" /></SwiperSlide>
        <SwiperSlide><img src={banner2} className="w-full h-full object-cover rounded-[24px]" /></SwiperSlide>
      </Swiper>
      <div id={prevButtonId} className='custom-prev top-[190px] left-0 shadow-custom-shadow border-[2px] flex'>
        <img src={leftIcon}></img>
      </div>
      <div id={nextButtonId} className='custom-next top-[190px] right-0 shadow-custom-shadow border-[2px] flex'>
        <img src={rightIcon}></img>
      </div>
    </div>
  );
};

export default ImageCarousel;