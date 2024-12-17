import CardProduct from "../../../core/components/CardProduct/CardProduct";
import ErrorFallback from "../../../core/components/ErrorFallback/ErrorFallback";
import Spinner from "../../../core/components/Loading/Spinner";
import { useProductsByStore } from "../../../core/hooks/products/useProducts";
import { Product } from "../../../core/types/Product";

export const StoreProductList = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useProductsByStore({ id_store: 1, page: 1, page_size: 5 });

  if (isLoading) return <Spinner />;
  if (error)
    return (
      <ErrorFallback
        message={error instanceof Error ? error.message : "Lỗi từ máy chủ"}
      />
    );

  return (
    <div className="w-full text-center py-6 flex flex-col items-center gap-6">
      <div className="font-semibold text-[16px]">Sản phẩm của shop</div>
      {Array.isArray(products) && products?.map((product: Product) => (
        <CardProduct
          key={product.id}
          product={product}
          widthConfig="productdetail"
        />
      ))}
      <button className="py-2 px-8 border rounded-[16px] border-bg-alt1">
        Xem Thêm
      </button>
    </div>
  );
};
