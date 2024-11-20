import { DropdownCategory } from "./DropdownCategory";
import ErrorFallback from "../../../core/components/ErrorFallback/ErrorFallback";
import { useDetailCategory } from "../../../core/hooks/categories/useCategories";
import { Category } from "../../../core/types/Category";
import CategoryListLoading from "./CategoryListLoading";
import { useSearchParams } from "react-router-dom";

export const CategoryList = () => {
  const [searchParams] = useSearchParams();
  const idParentCategory = searchParams.get("idParent");
  const {
    data: categories,
    error,
    isLoading,
  } = useDetailCategory(idParentCategory!);

  if (isLoading) return <CategoryListLoading />;

  if (error)
    return (
      <ErrorFallback
        message={error instanceof Error ? error.message : "Lỗi từ máy chủ"}
      />
    );

  return (
    <ul className="px-4 *:w-full *:cursor-pointer">
      {categories?.map((category: Category) => {
        return <DropdownCategory key={category?.id} category={category} />;
      })}
    </ul>
  );
};
