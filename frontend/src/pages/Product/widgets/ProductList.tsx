import CardProduct from "../../../core/components/CardProduct/CardProduct";
import { useProducts } from "../../../core/hooks/products/useProducts";
import ProductListLoading from "./ProductListLoading";
import rightIcon from '../../../core/assets/icon/navigate-right.png'
import leftIcon from '../../../core/assets/icon/navigate-left.png'
import ErrorFallback from "../../../core/components/ErrorFallback/ErrorFallback";

const ProductList = () => {

    const { data, isLoading, error } = useProducts();
    if (isLoading) return <ProductListLoading />
    if (error) return <ErrorFallback message={error instanceof Error ? error.message : 'Lỗi từ máy chủ'} />;

  return (
    <>
        <div className="flex flex-wrap gap-1 md:gap-4 ml-4">
            {data?.map((product) => <CardProduct key={product.id} product={product} widthConfig='productlist' />)}
        </div>
        <div className="flex justify-center items-center mt-14 gap-2">
            <div className="btn-pagination"><img src={leftIcon} alt="left" /></div>
            <ul className="flex gap-2">
            {[1, 2, 3, 4].map((page) => (
                <li key={page} className="btn-pagination">{page}</li>
            ))}
            </ul>
            <div className="btn-pagination"><img src={rightIcon} alt="right" /></div>
        </div>
    </>
  )
}

export default ProductList