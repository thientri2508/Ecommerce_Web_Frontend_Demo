import CardProduct from "../CardProduct/CardProduct"
import { useProducts } from "../../hooks/products/useProducts";
import { useEffect } from "react";
import ProductListLoading from "./ProductListLoading";
import Button from "../Button/Button";
import arrowIcon from "../../assets/icon/rightArrow-icon.png"
import ErrorFallback from "../ErrorFallback/ErrorFallback";

interface ProductListProps {
    text: string;
    filter?: string;
    setLoading?: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProductList: React.FC<ProductListProps> = ({ text, filter, setLoading }) => {
  const { data, isLoading, error } = useProducts({ status_product: filter });

  useEffect(() => {
    if (!isLoading && !error) setLoading?.(false);
  }, [isLoading, error, setLoading]);

  if (isLoading) return <ProductListLoading />;
  if (error) return <ErrorFallback message={error instanceof Error ? error.message : 'Lỗi từ máy chủ'} />;

  return (
    <div className="mt-8 w-full px-0 md:px-10 py-0 md:py-8">
      <div className="font-heading text-[18px] md:text-headingText text-headingColor uppercase px-7">{text}</div>
      <div className="flex flex-wrap gap-1 md:gap-4 mt-10 md:ml-[8px]">
        {data?.map((product) => <CardProduct key={product.id} product={product} />)}
      </div>
      <div className="center mt-10"><Button text="Xem thêm" icon={arrowIcon} iconPosition="right" /></div>
    </div>
  );
};

export default ProductList;