import CardProduct from "../CardProduct/CardProduct"
import { useProductsByStatus } from "../../hooks/products/useProducts";
import { useEffect } from "react";
import ProductListLoading from "./ProductListLoading";
import Button from "../Button/Button";
import ErrorFallback from "../ErrorFallback/ErrorFallback";
import { FaArrowRight } from "react-icons/fa6";
import { home_page_size } from "../../constants/constants.pageSize";
import { Product } from "../../types/Product";

interface ProductListProps {
    text: string;
    filter?: {
      status_product?: string;
      page?: number;      
      page_size?: number;   
  };
    setLoading?: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProductList: React.FC<ProductListProps> = ({ text, filter = {}, setLoading }) => {
  const { status_product, page = 1, page_size = home_page_size } = filter;
  const { data, isLoading, error } = useProductsByStatus({
        status_product,
        page,
        page_size,
    });

  useEffect(() => {
    if (!isLoading && !error) setLoading?.(false);
  }, [isLoading, error, setLoading]);

  if (isLoading) return <ProductListLoading />;
  if (error) return <ErrorFallback message={error instanceof Error ? error.message : 'Lỗi từ máy chủ'} />;

  return (
    <div className="mt-8 w-full px-0 md:px-10 py-8">
      <div className="font-heading text-[18px] md:text-headingText text-headingColor uppercase px-7">{text}</div>
      <div className="flex flex-wrap gap-1 md:gap-4 mt-10 md:ml-[8px]">
        {data?.map((product: Product) => <CardProduct key={product.id} product={product} />)}
      </div>
      <div className="center mt-10"><Button text="Xem thêm" icon={<FaArrowRight size={20} />} iconPosition="right" colorConfig="stroke" /></div>
    </div>
  );
};

export default ProductList;