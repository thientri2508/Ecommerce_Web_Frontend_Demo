import CardProduct from "../../../core/components/CardProduct/CardProduct";
import { useProductsByCategory } from "../../../core/hooks/products/useProducts";
import ProductListLoading from "./ProductListLoading";
import ErrorFallback from "../../../core/components/ErrorFallback/ErrorFallback";
import React, { useState } from 'react';
import { Product } from "../../../core/types/Product";
import { product_page_size } from "../../../core/constants/constants.pageSize";
import { Pagination } from "antd";

interface ProductListProps {
    filterPrice?: number;
  }

  const ProductList: React.FC<ProductListProps> = ({ filterPrice = 0 }) => {

    const [currentPage, setCurrentPage] = useState<number>(1)

    const onPageChange = (page: number) => {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" })
    };
  

    const { data, isLoading, error } = useProductsByCategory({category_id: 1, page: currentPage, page_size: product_page_size});

    const sortedData = React.useMemo(() => {
      if (!Array.isArray(data?.list)) return [];
      if (filterPrice === 1) {
        return [...data.list].sort((a, b) => a.market_price - b.market_price); // Tăng dần
      }
      if (filterPrice === 2) {
        return [...data.list].sort((a, b) => b.market_price - a.market_price); // Giảm dần
      }
      return [...data.list]; // Không sắp xếp
    }, [data?.list, filterPrice]);

    if (isLoading) return <ProductListLoading />

    if (error) return <ErrorFallback message={error instanceof Error ? error.message : 'Lỗi từ máy chủ'} />; 

  return (
    <>
        <div className="flex flex-wrap gap-1 md:gap-4 ml-4">
            {sortedData?.map((product: Product) => <CardProduct key={product.id} product={product} widthConfig='productlist' />)}
        </div>
        <div className="flex justify-center items-center mt-14 gap-2">
          <Pagination current={currentPage} pageSize={product_page_size} total={data?.total} showSizeChanger={false} onChange={onPageChange} />
        </div>
    </>
  )
}

export default ProductList