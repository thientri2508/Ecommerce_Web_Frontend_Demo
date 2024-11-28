import { PiLineVertical, PiShareFat } from "react-icons/pi"
import ProductImage from "./widgets/ProductImage"
import { FaRegHeart } from "react-icons/fa6"
import ShippingInfo from "./widgets/ShippingInfo"
import ProductInfo from "./widgets/ProductInfo"
import StoreInfo from "./widgets/StoreInfo"
import ProductVoucher from "./widgets/ProductVoucher"
import ProductDetailInfo from "./widgets/ProductDetailInfo"
import ProductFeedback from "./widgets/ProductFeedback"
import ProductList from "../../core/components/ProductList/ProductList"
// import { useProductDetail } from "../../core/hooks/products/useProductDetail"

const ProductDetail = () => {

  // const { data, isError, isLoading } = useProductDetail('163');

  return (
    <main className="w-full bg-[#f5f5f5] pb-10">
      <div className="w-full md:max-w-[1340px] m-auto pt-8">
        <div className="w-full bg-bg rounded-[16px] flex justify-between pt-6">
          <div className="w-[37%] pb-9">
            <div className="text-[14px] flex items-center gap-3 ml-[18%]">
              <div className="flex items-center gap-3 cursor-pointer">
                  <PiShareFat size={20} />
                  <div>Chia sẽ</div>
              </div>
              <PiLineVertical size={20} color="#818181" />
              <div className="flex items-center gap-3 cursor-pointer">
                  <FaRegHeart size={20} />
                  <div>Thêm vào danh sách yêu thích</div>
              </div>
            </div>

            <ProductImage />
            <ShippingInfo />
          </div>

          <div className="w-[58%] pr-20 pt-[45px]">
            <ProductInfo />
          </div>
        </div>

        <div className="w-full mt-5 flex justify-between">
          <div className="w-[37%] bg-bg rounded-[16px] flex gap-10 px-[20px] py-6">
            <StoreInfo />
          </div>
          <div className="w-[61.5%] bg-bg rounded-[16px] px-[24px] py-6">
            <ProductVoucher />
          </div>
        </div>

        <div className="w-full mt-5 flex justify-between items-start">
          <div className="w-[80%]">
            <ProductDetailInfo />
            <ProductFeedback />
          </div>
          <div className="w-[18%] bg-white">
            <div className="font-semibold text-[16px] w-full text-center py-6">Sản phẩm của shop</div>
            
          </div>
        </div>
        <div className="w-full bg-bg rounded-[16px]">
          <ProductList text="sản phẩm liên quan" />
        </div>
      </div>
    </main>
  )
}

export default ProductDetail