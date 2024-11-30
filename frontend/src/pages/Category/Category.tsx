import banner11 from "../../core/assets/banner/banner11.png"
import banner10 from "../../core/assets/banner/banner10.png"
import banner13 from "../../core/assets/banner/banner13.png"
import banner14 from "../../core/assets/banner/banner14.png"
import banner15 from "../../core/assets/banner/banner15.png"
import CategoryList from "./widgets/CategoryList"
import ImageCarousel from "../../core/components/ImageCarousel/ImageCarousel"
import ProductList from "../../core/components/ProductList/ProductList"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import { best_selling_product, favorite_product } from "../../core/constants/constants.statusProduct"

const Category = () => {

  const DataImageCarousel = [banner11, banner10]
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [location]);

  return (
    <main className="w-full pb-10">
      <div className="w-full md:max-w-[1380px] m-auto pt-8">
        <div className="h-[300px] mt-8">
          <ImageCarousel images={DataImageCarousel} />
        </div>
        <CategoryList />

        <div className="mt-8 flex justify-between gap-5 *:w-[calc(33.66%-20px)]">
          <img src={banner13}></img>
          <img src={banner14}></img>
          <img src={banner15}></img>
        </div>

        <ProductList text="sản phẩm bán chạy" filter={{status_product: best_selling_product}} />
        <ProductList text="sản phẩm được yêu thích nhất" filter={{status_product: favorite_product}} />
      </div>
    </main>
  )
}

export default Category