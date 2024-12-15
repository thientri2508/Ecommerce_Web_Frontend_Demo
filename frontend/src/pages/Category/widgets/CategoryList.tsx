import { useSearchParams } from "react-router-dom";
import Spinner from "../../../core/components/Loading/Spinner";
import { useCategoriesChildren } from "../../../core/hooks/categories/useCategories";
import { Category } from "../../../core/types/Category";
import CardCategory from "./CardCategory";
import ErrorFallback from "../../../core/components/ErrorFallback/ErrorFallback";

const CategoryList = () => {
  const [searchParams] = useSearchParams();
  const idCategory = searchParams.get("id");
  const {
    data: categories,
    error,
    isLoading,
  } = useCategoriesChildren(idCategory!);

  if (isLoading) return <Spinner />;

  if (error)
    return (
      <ErrorFallback
        message={error instanceof Error ? error.message : "Lỗi từ máy chủ"}
      />
    );

  return (
    <div className="w-full mt-10 flex flex-wrap gap-x-5 gap-y-10 ml-[10px]">
      {categories?.map((category: Category) => (
        <CardCategory category={category} key={category?.id} />
      ))}
    </div>
  );
};

export default CategoryList;
