import banner1 from "../../../core/assets/banner/banner1.png"
import banner2 from "../../../core/assets/banner/banner4.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../../../core/styles/App.css'

// type ImageCarouselProps = {
//   images: string[];
// };

const ImageCarousel = () => {

  return (
    <div className='relative select-none w-full lg:w-[75%] group'>
      <Swiper
        className="h-full"
        modules={[Navigation, Autoplay, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        pagination={{ clickable: true }}
        navigation={{ prevEl: '.custom-prev-banner', nextEl: '.custom-next-banner' }}
      >
        <SwiperSlide><img src={banner1} className="w-full h-full object-cover md:rounded-[24px]" /></SwiperSlide>
        <SwiperSlide><img src={banner2} className="w-full h-full object-cover md:rounded-[24px]" /></SwiperSlide>
      </Swiper>
      <div className="custom-prev-banner left-0">
        <IoIosArrowBack size={30} />
      </div>
      <div className="custom-next-banner right-0">
        <IoIosArrowForward size={30} />
      </div>
    </div>
  );
};

export default ImageCarousel;