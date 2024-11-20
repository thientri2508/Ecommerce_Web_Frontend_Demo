import { Link, useLocation } from "react-router-dom";
import Spinner from "../../../core/components/Loading/Spinner";
import { useCategoriesChildren } from "../../../core/hooks/categories/useCategories";
import { Category } from "../../../core/types/Category";
import CardCategory from "./CardCategory"
import ErrorFallback from "../../../core/components/ErrorFallback/ErrorFallback";
import { ROUTES } from "../../../core/constants/constants.router";

const CategoryList = () => {

  const location = useLocation();
  const categoryId = location.state?.id;
  const { data: categories, error, isLoading } = useCategoriesChildren(categoryId!); 

  if (isLoading) return <Spinner />

  if (error) return <ErrorFallback message={error instanceof Error ? error.message : 'Lỗi từ máy chủ'} />;

  return (
    <div className="w-full mt-10 flex flex-wrap gap-x-5 gap-y-10 ml-[10px]">
        {categories?.map((category: Category) =>(
          <Link to={`${ROUTES.PRODUCTS}?idParent=${categoryId}&idCategory=${category?.id}`} key={category?.id} className="w-[calc(16.66%-20px)]">
            <CardCategory category={category} />
          </Link>))}
    </div>
  )
}

export default CategoryList