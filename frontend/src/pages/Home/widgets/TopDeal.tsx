import { useEffect } from "react"
import banner1 from "../../../core/assets/banner/banner5.png"
import banner2 from "../../../core/assets/banner/banner6.png"
import CardProduct from "../../../core/components/CardProduct/CardProduct"
import Spinner from "../../../core/components/Loading/Spinner"
import { useProducts } from "../../../core/hooks/products/useProducts"
import { Product } from "../../../core/types/Product"
import arrowIcon from "../../../core/assets/icon/rightArrow-icon.png"
import Button from "../../../core/components/Button/Button"
import ErrorFallback from "../../../core/components/ErrorFallback/ErrorFallback"

interface TopDealProps {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const TopDeal: React.FC<TopDealProps> = ({ setLoading }) => {

  const { data: products, isLoading, error } = useProducts({page: 1, page_size: 6})

  useEffect(() => {
    if (!isLoading && !error) setLoading?.(false);
  }, [isLoading, error, setLoading]);

  if (isLoading) return <Spinner />

  if (error) return <ErrorFallback message={error instanceof Error ? error.message : 'Lỗi từ máy chủ'} />;

  return (
    <div className="mt-8 w-full px-0 sm-:px-10 py-6 sm-:py-12 border-solid border-2 md:rounded-[30px]">
        <div className="font-heading text-[18px] md:text-headingText text-headingColor uppercase px-7">Top Deal</div>
        <div className="flex flex-col lg+:flex-row justify-center gap-[40px] mt-6 sm-:mt-10">
            <div className="*:w-[500px] flex flex-row lg+:flex-col gap-4">
                <div><img src={banner1} className="w-full aspect-square md:h-[365px] object-cover"></img></div>
                <div><img src={banner2} className="w-full aspect-square md:h-[365px] object-cover"></img></div>
            </div>
            <div className="flex flex-wrap gap-1 md:gap-4">
              {/* {products?.map((product: Product) => (
              <li key={product.id}><CardProduct product={product} /></li>
              ))} */}
              {products?.slice(0, 6).map((product: Product) => (
                <CardProduct key={product.id} product={product} widthConfig="topdeal" />
              ))}
            </div>
        </div>
        <div className="center mt-10"><Button text="Xem thêm" icon={arrowIcon} iconPosition="right" /></div>
    </div>
  )
}

export default TopDeal