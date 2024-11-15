import CardProduct from "../CardProduct/CardProduct"
import Heading from "../../../pages/Home/widgets/Heading"
import rightIcon from '../../assets/icon/navigate-right.png'
import leftIcon from '../../assets/icon/navigate-left.png'
import { useProducts } from "../../hooks/products/useProducts";
import { useEffect } from "react";
import ProductListLoading from "./ProductListLoading";

interface ProductListProps {
    text: string;
    filter?: string;
    pagination?: boolean;
    setLoading?: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProductList: React.FC<ProductListProps> = ({ text, filter, pagination, setLoading }) => {
  const { data, isLoading, error } = useProducts({ status_product: filter });

  useEffect(() => {
    if (!isLoading && !error) setLoading?.(false);
  }, [isLoading, error, setLoading]);

  if (isLoading) return <ProductListLoading />;
  if (error) return <div>Error: {error instanceof Error ? error.message : 'Unknown error'}</div>;

  return (
    <div className="mt-8 w-full px-0 md:px-10 py-0 md:py-12">
      <Heading text={text} />
      <div className="flex flex-wrap gap-1 md:gap-4 mt-10 md:ml-[8px]">
        {data?.map((product) => <CardProduct key={product.id} product={product} />)}
      </div>

      {pagination && (
        <div className="flex justify-center items-center mt-14 gap-2">
          <div className="btn-pagination"><img src={leftIcon} alt="left" /></div>
          <ul className="flex gap-2">
            {[1, 2, 3, 4].map((page) => (
              <li key={page} className="btn-pagination">{page}</li>
            ))}
          </ul>
          <div className="btn-pagination"><img src={rightIcon} alt="right" /></div>
        </div>
      )}
    </div>
  );
};

export default ProductList;