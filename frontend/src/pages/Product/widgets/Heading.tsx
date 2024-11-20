import { useSearchParams } from "react-router-dom";
import ErrorFallback from "../../../core/components/ErrorFallback/ErrorFallback"
import { useCategoryById } from "../../../core/hooks/categories/useCategories"

export const Heading = () => {
  const [searchParams] = useSearchParams();
  const idCategory = searchParams.get("idCategory");

  const { data: category, error, isLoading } = useCategoryById(idCategory!);

  if (error)
    return (
      <ErrorFallback
        message={error instanceof Error ? error.message : "Lỗi từ máy chủ"}
      />
    );

  return (
    <div className="bg-bg w-[45%] py-[14px] px-4 rounded-[10px] flex gap-2 items-center">
      {isLoading ? (
        <div className="h-10 w-full bg-gray-300 rounded-md animate-pulse duration-500"></div>
      ) : (
        <>
          <p className="text-category font-bold">{category?.position_name}</p>
          <span className="font-light text-text">(232 sản phẩm)</span>
        </>
      )}
    </div>
  );
};
