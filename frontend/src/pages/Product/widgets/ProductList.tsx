import CardProduct from "../../../core/components/CardProduct/CardProduct";
import { useProducts } from "../../../core/hooks/products/useProducts";
import ProductListLoading from "./ProductListLoading";
import rightIcon from '../../../core/assets/icon/navigate-right.png'
import leftIcon from '../../../core/assets/icon/navigate-left.png'
import ErrorFallback from "../../../core/components/ErrorFallback/ErrorFallback";
import React from 'react';

interface ProductListProps {
    filterPrice?: number;
  }

  const ProductList: React.FC<ProductListProps> = ({ filterPrice = 0 }) => {

    const { data: products, isLoading, error } = useProducts();

    const sortedData = React.useMemo(() => {
        if (!products) return [];
        if (filterPrice === 1) {
          return [...products].sort((a, b) => a.market_price - b.market_price); // Sắp xếp tăng dần
        }
        if (filterPrice === 2) {
          return [...products].sort((a, b) => b.market_price - a.market_price); // Sắp xếp giảm dần
        }
        return products; // Không sắp xếp
      }, [products, filterPrice]);


    if (isLoading) return <ProductListLoading />

    if (error) return <ErrorFallback message={error instanceof Error ? error.message : 'Lỗi từ máy chủ'} />; 

  return (
    <>
        <div className="flex flex-wrap gap-1 md:gap-4 ml-4">
            {sortedData?.map((product) => <CardProduct key={product.id} product={product} widthConfig='productlist' />)}
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