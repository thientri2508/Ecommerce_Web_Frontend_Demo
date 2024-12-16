import CardProduct from "../../../core/components/CardProduct/CardProduct";
import { useProductsByCategory } from "../../../core/hooks/products/useProducts";
import ErrorFallback from "../../../core/components/ErrorFallback/ErrorFallback";
import React, { useState } from 'react';
import { Product } from "../../../core/types/Product";
import { product_page_size } from "../../../core/constants/constants.pageSize";
import { Pagination } from "antd";
import { useSearchParams } from "react-router-dom";
import ProductListLoading from "../../Product/widgets/ProductListLoading";

interface ProductListProps {
    filterPrice?: number;
  }

  const ProductList: React.FC<ProductListProps> = ({ filterPrice = 0 }) => {

    const [searchParams] = useSearchParams();
    const idStore = searchParams.get("idStore");

    const [currentPage, setCurrentPage] = useState<number>(1)

    const onPageChange = (page: number) => {
      setCurrentPage(page);
      window.scrollTo({ top: 3960, behavior: "smooth" })
    };
  

    const { data, isLoading, error } = useProductsByCategory({p_id: 1, category_id: 2, page: currentPage, page_size: product_page_size});

    const sortedData = React.useMemo(() => {
      if (!Array.isArray(data?.list)) return [];
      if (filterPrice === 1) {
        return [...data.list].sort((a, b) => a.listed_price - b.listed_price); // Tăng dần
      }
      if (filterPrice === 2) {
        return [...data.list].sort((a, b) => b.listed_price - a.listed_price); // Giảm dần
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
        <div className="center mt-14 gap-2">
          <Pagination current={currentPage} pageSize={product_page_size} total={data?.total} showSizeChanger={false} onChange={onPageChange} />
        </div>
    </>
  )
}

export default ProductList