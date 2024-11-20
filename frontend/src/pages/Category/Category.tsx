import banner11 from "../../core/assets/banner/banner11.png"
import banner12 from "../../core/assets/banner/banner12.png"
import banner10 from "../../core/assets/banner/banner10.png"
import banner13 from "../../core/assets/banner/banner13.png"
import banner14 from "../../core/assets/banner/banner14.png"
import banner15 from "../../core/assets/banner/banner15.png"
import Tag from "../../core/components/Tag/Tag"
import CategoryList from "./widgets/CategoryList"
import ImageCarousel from "../../core/components/ImageCarousel/ImageCarousel"
import Banner from "../../core/components/Banner/Banner"
import FlashSale from "../Home/widgets/FlashSale"
import ProductList from "../../core/components/ProductList/ProductList"

const Category = () => {

  const DataImageCarousel = [banner11, banner10]

  return (
    <main className="w-full pb-10">
      <div className="w-full md:max-w-[1380px] m-auto pt-8">
        <ul className="hidden md:flex gap-2 px-10">
          <li><Tag text="Lorem ipsum dolor sit amet" /></li>
          <li><Tag text="Lorem ipsum " /></li>
          <li><Tag text="Lorem ipsum dolor" /></li>
          <li><Tag text="Lorem ipsum dolor sit amet" /></li>
        </ul>
        <div className="h-[300px] mt-8">
          <ImageCarousel images={DataImageCarousel} />
        </div>
        <CategoryList />
        <Banner img={banner12} />
        <FlashSale />

        <div className="mt-8 flex justify-between gap-5 *:w-[calc(33.66%-20px)]">
          <img src={banner13}></img>
          <img src={banner14}></img>
          <img src={banner15}></img>
        </div>

        <ProductList text="sản phẩm bán chạy" />
        <ProductList text="sản phẩm được yêu thích nhất" />
      </div>
    </main>
  )
}

export default Category