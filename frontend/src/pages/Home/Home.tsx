// import Tag from "../../core/components/Tag/Tag"
// import banner2 from "../../core/assets/banner/banner2.png"
// import banner3 from "../../core/assets/banner/banner3.png"
import banner4 from "../../core/assets/banner/banner4.png"
import banner7 from "../../core/assets/banner/banner7.png"
import banner8 from "../../core/assets/banner/banner8.png"
import banner9 from "../../core/assets/banner/banner9.png"
import ProductCarousel from "../../core/components/ProductCarousel/ProductCarousel"
import ProductList from "../../core/components/ProductList/ProductList"
import TopDeal from "./widgets/TopDeal"
import Heading from "../../core/components/Heading/Heading"
import CategoryList from "./widgets/CategoryList"
import FlashSale from "./widgets/FlashSale"
import Banner from "../../core/components/Banner/Banner"
import { useState, useEffect } from 'react';
import banner1 from "../../core/assets/banner/banner1.png"
import ImageCarousel from "../../core/components/ImageCarousel/ImageCarousel"
import { best_selling_product, favorite_product, new_product, suggested_product } from "../../core/constants/constants.statusProduct"

const Home = () => {

  // State để lưu trữ các danh sách sản phẩm đã được render
  const [loadedLists, setLoadedLists] = useState<number[]>([1, 2]);
  // State để kiểm tra xem có còn danh sách nào chưa tải không
  const [allListsLoaded, setAllListsLoaded] = useState<boolean>(false);
  // State để theo dõi việc tải dữ liệu
  const [loading, setLoading] = useState<boolean>(false);

  // Hàm xử lý việc cuộn đến cuối trang
  const handleScroll = () => {
    const scrollPosition = window.innerHeight + document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;

    // Nếu cuộn đến gần cuối trang và chưa đang tải và chưa tải hết tất cả danh sách
    if (scrollPosition >= scrollHeight - 500 && !allListsLoaded && !loading) {
      // Cập nhật trạng thái để tải thêm danh sách
      loadMoreLists();
    }
  };

  const DataImageCarousel = [banner1, banner4]

  const loadMoreLists = () => {
    setLoading(true);
    setLoadedLists((prev) => {
      const nextCategory = prev.length + 1;
      if (nextCategory <= 6) {
        return [...prev, nextCategory];
      } else {
        setAllListsLoaded(true);
        return prev;
      }
    });
  };

  // Dùng useEffect để gắn sự kiện scroll khi trang tải
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [allListsLoaded, loading]);

  return (
    <main className="w-full">
      <div className="w-full md:max-w-[1380px] m-auto pt-8">
        {/* {loadedLists.includes(1) &&
        <ul className="hidden md:flex gap-2 px-10">
          <li><Tag text="Lorem ipsum dolor sit amet" /></li>
          <li><Tag text="Lorem ipsum " /></li>
          <li><Tag text="Lorem ipsum dolor" /></li>
          <li><Tag text="Lorem ipsum dolor sit amet" /></li>
        </ul>} */}

        {/* {loadedLists.includes(1) &&
        <div className="flex gap-5 mt-[-32px] md:mt-8 h-[200px] md:h-[425px] md:px-5 select-none">
          <ImageCarousel images={DataImageCarousel} />
          <div className="hidden lg:flex flex-col justify-between w-[23%]">
            <img src={banner3} className="h-[70%] object-cover rounded-[24px]"></img>
            <img src={banner2} className="h-[25%] object-cover rounded-[24px]"></img>
          </div>
        </div>} */}

        {loadedLists.includes(1) &&
        <div className="mt-[-32px] md:mt-8 h-[200px] md:h-[425px] md:px-5 select-none">
          <ImageCarousel images={DataImageCarousel} />
        </div>}

        {loadedLists.includes(1) && <CategoryList /> }

        {loadedLists.includes(1) && <FlashSale />}

        {loadedLists.includes(2) && <Banner img={banner4} />}

        {loadedLists.includes(2) && <ProductList text="sản phẩm bán chạy" filter={{status_product: best_selling_product}} />}

        {loadedLists.includes(3) && <TopDeal setLoading={setLoading} />}

        {loadedLists.includes(3) && <Banner img={banner7} />}

        {loadedLists.includes(4) &&
          <div className="w-full mt-10 px-[10px] sm-:px-[20px] md:px-[60px] pt-4 md:pt-14 pb-[40px] md:pb-14 border-solid border-2 md:rounded-[30px]">
            <Heading text="sản phẩm yêu thích" />
            <ProductCarousel setLoading={setLoading} status_product={favorite_product} />
          </div>}
      </div>

      {loadedLists.includes(4) &&
      <div className="w-full m-auto py-6 mt-10 bg-gray-100 border-solid border-t-2 border-b-2 overflow-hidden whitespace-nowrap">
        <div className="w-[200%] flex animate-marquee">
          <img src={banner8} className="w-1/2 h-[90px]"></img>
          <img src={banner8} className="w-1/2 h-[90px]"></img>
        </div>
      </div>}

      <div className="max-w-[1380px] m-auto">
        {loadedLists.includes(5) && <ProductList text="sản phẩm mới" setLoading={setLoading} filter={{status_product: new_product}} />}
        {loadedLists.includes(5) && <Banner img={banner9} />}
        {loadedLists.includes(6) && <ProductList text="gợi ý hôm nay" setLoading={setLoading} filter={{status_product: suggested_product}} />}
      </div>
      
    </main>
  )
}

export default Home