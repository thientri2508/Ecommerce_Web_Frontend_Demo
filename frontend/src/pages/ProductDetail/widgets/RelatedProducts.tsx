import { useSearchParams } from "react-router-dom";
import Button from "../../../core/components/Button/Button";
import CardProduct from "../../../core/components/CardProduct/CardProduct";
import ErrorFallback from "../../../core/components/ErrorFallback/ErrorFallback";
import { useProductsByCategory } from "../../../core/hooks/products/useProducts";
import { Product } from "../../../core/types/Product";
import ProductListLoading from "../../Product/widgets/ProductListLoading";
import { FaArrowRight } from "react-icons/fa6";

const RelatedProducts = () => {
  const [searchParams] = useSearchParams();
  const id_product = searchParams.get("id");

  const { data, isLoading, error } = useProductsByCategory({
    category_id: 1,
    page: 1,
    page_size: 15,
  });

  if (isLoading) return <ProductListLoading />;
  if (error)
    return (
      <ErrorFallback
        message={error instanceof Error ? error.message : "Lỗi từ máy chủ"}
      />
    );
  return (
    <div className="mt-8 w-full px-0 md:px-10 py-0 md:py-8">
      <div className="font-heading text-[18px] md:text-headingText text-headingColor uppercase px-7">
        Sản phẩm liên quan
      </div>
      <div className="flex flex-wrap gap-1 md:gap-4 mt-10 md:ml-[8px]">
        {data?.list?.slice(0, 10).map((product: Product) =>
          product.id === Number(id_product) ? null : (
            <CardProduct key={product.id} product={product} />
          )
        )}
      </div>
      <div className="center mt-10">
        <Button
          text="Xem thêm"
          icon={<FaArrowRight size={20} />}
          iconPosition="right"
          colorConfig="stroke"
        />
      </div>
    </div>
  );
};

export default RelatedProducts;
