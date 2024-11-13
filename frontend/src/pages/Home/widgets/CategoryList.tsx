import LoadingComponent from "../../../core/components/Loading/LoadingComponent";
import { useCategories } from "../../../core/hooks/categories/useCategories";
import { Category } from "../../../core/types/Category";
import CardCategory from "./CardCategory"

const CategoryList = () => {

  const { data: categories, isLoading, error } = useCategories()

  if (isLoading) return <LoadingComponent />

  if (error) return <div>Error: {error instanceof Error ? error.message : 'Unknown error'}</div>

  return (
    <div className="w-full py-[51px] rounded-[32px] border-solid border-[1px] mt-8 flex items-center justify-center">
      <ul className="flex flex-wrap justify-center gap-x-14">
        {categories?.map((category: Category) => <CardCategory key={category.id} category={category} />)}
      </ul>
    </div>
  );
};

export default CategoryList;