import ErrorFallback from "../../../core/components/ErrorFallback/ErrorFallback";
import Spinner from "../../../core/components/Loading/Spinner";
import { useCategoriesByLevel } from "../../../core/hooks/categories/useCategories";
import leftIcon from '../../../core/assets/icon/navigate-left.png';
import rightIcon from '../../../core/assets/icon/navigate-right.png';
import { Category } from "../../../core/types/Category";
import CardCategory from "./CardCategory"
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { generateRandomId } from "../../../core/utils/generateRandomId";

const CategoryList = () => {

  const { data: categories, isLoading, error } = useCategoriesByLevel(1)

  const btnLeft = useRef<HTMLDivElement | null>(null);
  const btnRight = useRef<HTMLDivElement | null>(null);

  const prevButtonId = generateRandomId();
  const nextButtonId = generateRandomId();

  const handleSlideChange = (swiper: any) => {
    if (!swiper.isBeginning) {
      if (btnLeft.current) btnLeft.current.style.display = 'flex';
    } else {
      if (btnLeft.current) btnLeft.current.style.display = 'none';
    }

    if (swiper.isEnd) {
      if (btnRight.current) btnRight.current.style.display = 'none';
    } else {
      if (btnRight.current) btnRight.current.style.display = 'flex';
    }
  };

  if (isLoading) return <Spinner />

  if (error) return <ErrorFallback message={error instanceof Error ? error.message : 'Lỗi từ máy chủ'} />;

  return (
    <div className='relative mt-5 md:mt-10 px-8 md:px-[80px]'>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={10}
        slidesPerGroup={10}
        onSlideChange={handleSlideChange}
        breakpoints={{
          1280: { slidesPerView: 10, slidesPerGroup: 10 },
          1024: { slidesPerView: 8, slidesPerGroup: 8 },
          640: { slidesPerView: 6, slidesPerGroup: 6},
          300: { slidesPerView: 4, slidesPerGroup: 4 },
        }}
        loop={false}
        navigation={{ prevEl: `#${prevButtonId}`, nextEl: `#${nextButtonId}` }}
      >
        {categories?.map((category: Category) => (
            <SwiperSlide key={category.id} className='w-1/10'><CardCategory category={category} /></SwiperSlide>
        ))}
      </Swiper>

      <div ref={btnLeft} id={prevButtonId} className='custom-prev opacity-0 md:opacity-100 top-[290px] left-[10px] md:top-[25%] md:left-[10px] shadow-custom-shadow border-[2px] hidden'>
        <img src={leftIcon}></img>
      </div>
      <div ref={btnRight} id={nextButtonId} className='custom-next opacity-0 md:opacity-100 top-[290px] right-[10px] md:top-[25%] md:right-[10px] shadow-custom-shadow border-[2px] flex'>
        <img src={rightIcon}></img>
      </div>

    </div>
  );
};

export default CategoryList;