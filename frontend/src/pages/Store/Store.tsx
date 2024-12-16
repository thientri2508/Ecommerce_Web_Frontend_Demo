import StoreCategory from "./widgets/StoreCategory";
import StoreProfile from "./widgets/StoreProfile";
import banner1 from "../../core/assets/banner/banner17.png";
import banner2 from "../../core/assets/banner/banner18.png";
import Heading from "../../core/components/Heading/Heading";
import ProductCarousel from "../../core/components/ProductCarousel/ProductCarousel";
import { HeadingCategory } from "../Product/widgets/HeadingCategory";
import Filter from "../Product/widgets/Filter";
import ProductList from "./widgets/ProductList";
import { useState } from "react";
import Modal from "../Product/widgets/Modal/Modal";
import { favorite_product, suggested_product } from "../../core/constants/constants.statusProduct";

const Store = () => {

  const categories = [
    "Tất cả sản phẩm",
    "Tên danh mục 1",
    "Tên danh mục 2",
    "Tên danh mục 3",
    "Tên danh mục 4",
    "Tên danh mục 5",
    "Tên danh mục 6"
  ];

  const [filterPrice, setFilterPrice] = useState<number>(0);

  const [isModalOpen, setIsModalOpen] = useState(false); 
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <main className="w-full bg-[#f5f5f5] pb-10">
      <Modal isOpen={isModalOpen} closeModal={closeModal} />
      <div className="w-full md:max-w-[1340px] m-auto pt-8">
        <div className="w-full bg-bg rounded-[16px]">
            <StoreProfile />
            <StoreCategory />
        </div>

        <div className="w-full h-[1765px] mt-8 rounded-[16px] bg-cover bg-center shadow-custom-shadow" style={{ backgroundImage: `url(${banner1})` }}>
        </div>

        <div className="w-full bg-bg rounded-[16px] mt-10 px-[10px] sm-:px-[20px] md:px-[60px] pt-4 md:pt-10 pb-[40px] md:pb-14">
          <Heading text="SPECIAL DEAL | BLACK FRIDAY 29.11" />
          <ProductCarousel status_product={favorite_product} />
        </div>

        <div className="w-full h-[660px] mt-8 rounded-[16px] bg-cover bg-center shadow-custom-shadow" style={{ backgroundImage: `url(${banner2})` }}>
        </div>

        <div className="w-full bg-bg rounded-[16px] mt-10 px-[10px] sm-:px-[20px] md:px-[60px] pt-4 md:pt-10 pb-[40px] md:pb-14">
          <Heading text="bộ sưu tập thu đông" />
          <ProductCarousel status_product={suggested_product} />
        </div>

        <div className="w-full flex justify-between items-start gap-5 mt-8">
          <div className="bg-bg w-[22%] rounded-[10px]">
            <h3 className="py-[14px] border-b-[1px] border-solid px-4">Khám khá theo danh mục</h3>
            {categories.map((category, index) => (
              <div
                key={index}
                className="py-[14px] border-b-[1px] border-solid px-4 text-[14px] font-medium cursor-pointer"
              >
                {category}
              </div>
            ))}
          </div>
          <div className="w-[75%] rounded-[16px]">
            <div className="flex justify-between">
              <HeadingCategory />
              <Filter filterPrice={filterPrice} setFilterPrice={setFilterPrice} openModal={openModal} />
            </div>

            <div className="bg-bg w-full rounded-[10px] mt-4 pt-4 pb-10">
              <ProductList filterPrice={filterPrice} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Store;
