import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../../styles/App.css";
import { useBanner } from "../../hooks/banner/useBanner";
import ErrorFallback from "../ErrorFallback/ErrorFallback";
import { BannerSkeleton } from "../Loading/BannerSkeleton";

type ImageCarouselProps = {
  name: string;
};

const ImageCarousel: React.FC<ImageCarouselProps> = ({ name }) => {
  const { data: banners, error, isLoading } = useBanner(name);

  return (
    <div className={`relative select-none w-full h-full group`}>
      {isLoading && <BannerSkeleton heightConfig="slider" />}

      {error && (
        <ErrorFallback
          message={error instanceof Error ? error.message : "Lỗi từ máy chủ"}
        />
      )}

      {!isLoading && !error && (
        <>
          <Swiper
            className="h-full"
            modules={[Navigation, Autoplay, Pagination]}
            spaceBetween={10}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            pagination={{ clickable: true }}
            navigation={{
              prevEl: ".custom-prev-banner",
              nextEl: ".custom-next-banner",
            }}
          >
            {banners?.map((banner) => (
              <SwiperSlide key={banner?.id}>
                <img
                  src={banner?.uri}
                  className="w-full h-full object-cover md:rounded-[24px]"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="custom-prev-banner left-0">
            <IoIosArrowBack size={30} />
          </div>
          <div className="custom-next-banner right-0">
            <IoIosArrowForward size={30} />
          </div>
        </>
      )}
    </div>
  );
};

export default ImageCarousel;
