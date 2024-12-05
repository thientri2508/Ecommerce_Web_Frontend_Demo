import { BsDashLg } from "react-icons/bs";
import { useSearchParams } from "react-router-dom";
import { useParentCategories } from "../../../core/hooks/categories/useCategories";
import React from "react";
import { Category } from "../../../core/types/Category";

const Breadcrumb = () => {

  const [searchParams] = useSearchParams();
  const p_id = searchParams.get("p_id");
  const category_id = searchParams.get("idCategory");

  const idCategory = p_id || category_id || null;

  const { data, isError, isLoading } = useParentCategories(idCategory!);

  if(isLoading) return <div className="h-2 w-[20%] bg-white rounded-md animate-pulse duration-500"></div>

  if(isError) return null

  return (
    <ul className="flex gap-2 items-center text-text-muted text-[12px]">
        {data?.map((item: Category, index: number) => (
        <React.Fragment key={item.level_category}>
          <li>{item.position_name}</li>
          {index < data.length - 1 && <li><BsDashLg /></li>}
        </React.Fragment>
        ))}
    </ul>
  )
}

export default Breadcrumb