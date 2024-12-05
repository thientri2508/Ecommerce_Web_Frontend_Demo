import { useSearchParams } from "react-router-dom";
import { useCategoryById } from "../../../core/hooks/categories/useCategories";
import { Category } from "../../../core/types/Category";

export const HeadingCategory = () => {
  const [searchParams] = useSearchParams();
  const p_id = searchParams.get("p_id");
  const category_id = searchParams.get("idCategory");

  const idCategory = p_id || category_id || null;
  const { data: category, isError, isLoading } = useCategoryById(idCategory!)
  
  return (
    <div className="bg-bg w-[45%] py-[14px] px-4 rounded-[10px] flex gap-2 items-center">
      {isLoading ? (
        <div className="h-10 w-full bg-gray-100 rounded-md animate-pulse duration-500"></div>
      ) : isError ? (
        <p className="text-category font-bold">Danh mục sản phẩm</p>
      ) : (
        <>
          <p className="text-category font-bold">{(category as Category)?.position_name}</p>
          <span className="font-light text-text">(232 sản phẩm)</span>
        </>
      )}
    </div>
  );
};
