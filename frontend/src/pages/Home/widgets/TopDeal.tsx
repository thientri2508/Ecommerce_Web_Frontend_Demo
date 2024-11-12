import { useEffect } from "react"
import banner1 from "../../../core/assets/banner/banner5.png"
import banner2 from "../../../core/assets/banner/banner6.png"
import CardProduct from "../../../core/components/CardProduct/CardProduct"
import LoadingComponent from "../../../core/components/Loading/LoadingComponent"
import { useProducts } from "../../../core/hooks/products/useProducts"
import { Product } from "../../../core/types/Product"
import Heading from "./Heading"

interface TopDealProps {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const TopDeal: React.FC<TopDealProps> = ({ setLoading }) => {

  const { data: products, isLoading, error } = useProducts({page: 1, page_size: 6})

  useEffect(() => {
    if (!isLoading && !error) setLoading?.(false);
  }, [isLoading, error, setLoading]);

  if (isLoading) return <LoadingComponent />

  if (error) return <div>Error: {error instanceof Error ? error.message : 'Unknown error'}</div>

  return (
    <div className="mt-8 w-full px-7 md:px-10 py-12 border-solid border-2 rounded-[30px]">
        <Heading text="top deal" />
        <div className="flex flex-col lg+:flex-row justify-center gap-[40px] mt-10">
            <div className="*:w-[500px] *:h-[365px] flex flex-row lg+:flex-col gap-4">
                <div><img src={banner1} className="w-full h-full object-cover"></img></div>
                <div><img src={banner2} className="w-full h-full object-cover"></img></div>
            </div>
            <div className="flex flex-wrap gap-4">
              {/* {products?.map((product: Product) => (
              <li key={product.id}><CardProduct product={product} /></li>
              ))} */}
              {products?.slice(0, 6).map((product: Product) => (
                <CardProduct key={product.id} product={product} widthConfig="topdeal" />
              ))}
            </div>
        </div>
    </div>
  )
}

export default TopDeal