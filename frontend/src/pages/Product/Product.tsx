import banner11 from "../../core/assets/banner/banner11.png"
import banner10 from "../../core/assets/banner/banner10.png"
import { CategoryList } from "./widgets/CategoryList";
import Filter from "./widgets/Filter";
import Breadcrumb from "./widgets/Breadcrumb";
import ProductList from "./widgets/ProductList";
import ImageCarousel from "../../core/components/ImageCarousel/ImageCarousel";
import { useEffect, useState } from "react";
import Modal from "./widgets/Model";
import { Heading } from "./widgets/Heading";
import { useLocation } from "react-router-dom";

const Product = () => {

  const DataImageCarousel = [banner10, banner11]
  const [filterPrice, setFilterPrice] = useState<number>(0);

  const location = useLocation();

  const [isModalOpen, setIsModalOpen] = useState(false); 
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [location]);

  return (
    <main className="w-full bg-[#f5f5f5] pb-10">

      <Modal isOpen={isModalOpen} closeModal={closeModal} />
      
      <div className="w-full md:max-w-[1340px] m-auto pt-8">
        <Breadcrumb />
        <div className="h-[220px] mt-8">
          <ImageCarousel images={DataImageCarousel} />
        </div>

        <div className="flex justify-between items-start gap-5 mt-8">
          <div className="bg-bg w-[22%] rounded-[10px]">
            <h3 className="py-[14px] border-b-[1px] border-solid px-4">Khám khá theo danh mục</h3>
            <CategoryList />
          </div>
          <div className="w-[75%] rounded-[16px]">
            <div className="flex justify-between">
              <Heading />
              <Filter filterPrice={filterPrice} setFilterPrice={setFilterPrice} openModal={openModal} />
            </div>

            <div className="bg-bg w-full rounded-[10px] mt-4 pt-4 pb-10">
              <ProductList filterPrice={filterPrice} />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Product