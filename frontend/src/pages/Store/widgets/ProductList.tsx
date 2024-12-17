import CardProduct from "../../../core/components/CardProduct/CardProduct";
import { useProductsByCategory } from "../../../core/hooks/products/useProducts";
import ErrorFallback from "../../../core/components/ErrorFallback/ErrorFallback";
import { useState } from 'react';
import { Product } from "../../../core/types/Product";
import { product_page_size } from "../../../core/constants/constants.pageSize";
import { Pagination } from "antd";
import ProductListLoading from "../../Product/widgets/ProductListLoading";

  const ProductList = () => {

    const [currentPage, setCurrentPage] = useState<number>(1)

    const onPageChange = (page: number) => {
      setCurrentPage(page);
      window.scrollTo({ top: 3960, behavior: "smooth" })
    };
  

    const { data, isLoading, error } = useProductsByCategory({p_id: 1, category_id: 2, page: currentPage, page_size: product_page_size});

    if (isLoading) return <ProductListLoading />

    if (error) return <ErrorFallback message={error instanceof Error ? error.message : 'Lỗi từ máy chủ'} />; 

  return (
    <>
        <div className="flex flex-wrap gap-1 md:gap-4 ml-4">
            {Array.isArray(data) && data?.map((product: Product) => <CardProduct key={product.id} product={product} widthConfig='productlist' />)}
        </div>
        <div className="center mt-14 gap-2">
          <Pagination current={currentPage} pageSize={product_page_size} total={30} showSizeChanger={false} onChange={onPageChange} />
        </div>
    </>
  )
}

export default ProductList