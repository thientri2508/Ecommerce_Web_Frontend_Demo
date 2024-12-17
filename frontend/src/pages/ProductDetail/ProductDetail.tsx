import StoreInfo from "./widgets/StoreInfo";
import ProductVoucher from "./widgets/ProductVoucher";
import ProductDetailInfo from "./widgets/ProductDetailInfo";
import ProductFeedback from "./widgets/ProductFeedback";
import { useProductDetail } from "../../core/hooks/products/useProductDetail";
import { useSearchParams } from "react-router-dom";
import ErrorFallback from "../../core/components/ErrorFallback/ErrorFallback";
import { PiLineVertical, PiShareFat } from "react-icons/pi";
import { FaRegHeart } from "react-icons/fa6";
import ProductImage from "./widgets/ProductImage";
import ShippingInfo from "./widgets/ShippingInfo";
import ProductInfo from "./widgets/ProductInfo";
import { StoreProductList } from "./widgets/StoreProductList";
import RelatedProducts from "./widgets/RelatedProducts";
import ProductDetailSkeleton from "./widgets/ProductDetailSkeleton";

const ProductDetail = () => {
  const [searchParams] = useSearchParams();
  const id_product = searchParams.get("id");

  const { data: product, error, isLoading } = useProductDetail(id_product!);

  if (isLoading) return <ProductDetailSkeleton />;

  if (error)
    return (
      <ErrorFallback
        message={error instanceof Error ? error.message : "Lỗi từ máy chủ"}
      />
    );

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

            <ProductImage
              logo_product={product?.logo_product}
            />
            <ShippingInfo />
          </div>

          <div className="w-[58%] pr-20 pt-[45px]">
            {product && <ProductInfo product={product} />}
          </div>
        </div>

        <div className="w-full mt-5 flex justify-between">
          <div className="w-[37%] bg-bg rounded-[16px] flex items-center gap-10 px-[20px] py-6">
            <StoreInfo />
          </div>
          <div className="w-[61.5%] bg-bg rounded-[16px] px-[24px] py-6">
            <ProductVoucher />
          </div>
        </div>

        <div className="w-full mt-5 flex justify-between items-start">
          <div className="w-[80%]">
            <ProductDetailInfo
              content={{
                description: product?.description || "",
                usage: product?.user_manual || "",
                warranty: product?.warranty_policy || "",
              }}
            />
            <ProductFeedback />
          </div>
          <div className="w-[18%] bg-white rounded-[16px]">
            <StoreProductList />
          </div>
        </div>
        <div className="w-full bg-bg rounded-[16px] mt-10">
          <RelatedProducts />
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
