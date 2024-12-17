import CardProduct from "../../../core/components/CardProduct/CardProduct";
import { useProductsByCategory } from "../../../core/hooks/products/useProducts";
import ProductListLoading from "./ProductListLoading";
import ErrorFallback from "../../../core/components/ErrorFallback/ErrorFallback";
import { useState } from 'react';
import { Product } from "../../../core/types/Product";
import { product_page_size } from "../../../core/constants/constants.pageSize";
import { Pagination } from "antd";
import { useSearchParams } from "react-router-dom";

  const ProductList = () => {

    const [searchParams] = useSearchParams();
    const p_id = searchParams.get("p_id");
    const category_id = searchParams.get("idCategory");
    const parsed_p_id = p_id ? Number(p_id) : null;
    const parsed_category_id = category_id ? Number(category_id) : null;

    const [currentPage, setCurrentPage] = useState<number>(1)

    const onPageChange = (page: number) => {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" })
    };

    const { data, isLoading, error } = useProductsByCategory({p_id: parsed_p_id, category_id: parsed_category_id, page: currentPage, page_size: product_page_size});

    if (isLoading) return <ProductListLoading />

    if (error) return <ErrorFallback message={error instanceof Error ? error.message : 'Lỗi từ máy chủ'} />; 

  return (
    <>
        <div className="flex flex-wrap gap-1 md:gap-4 ml-4">
            {Array.isArray(data) && data?.map((product: Product) => <CardProduct key={product.id} product={product} widthConfig='productlist' />)}
        </div>
        <div className="center mt-14 gap-2">
          <Pagination current={currentPage} pageSize={product_page_size} total={50} showSizeChanger={false} onChange={onPageChange} />
        </div>
    </>
  )
}

export default ProductList