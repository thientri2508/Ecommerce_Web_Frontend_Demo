import { RootCategory } from "./RootCategory";
import ListCategory from "./ListCategory";
import brand1 from "../../assets/logo/brand1.png";
import brand2 from "../../assets/logo/brand2.png";
import brand3 from "../../assets/logo/brand3.png";
import brand4 from "../../assets/logo/brand4.png";
import brand5 from "../../assets/logo/brand5.png";
import brand6 from "../../assets/logo/brand6.png";
import brand7 from "../../assets/logo/brand7.png";
import { useAllCategories } from "../../hooks/categories/useCategories";
import LoadingComponent from "../Loading/Spinner";
import { Category } from "../../types/Category";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/constants.router";
import ErrorFallback from "../ErrorFallback/ErrorFallback";

const brands = [brand1, brand2, brand3, brand4, brand5, brand6, brand7];

export const SubHeader = () => {
  const { data: categories, isLoading, error } = useAllCategories();
  const [pId, setPid] = useState<number>(1);

  if (isLoading) return <LoadingComponent />;

  if (error) return <ErrorFallback message={error instanceof Error ? error.message : 'Lỗi từ máy chủ'} />;

  return (
    <div className="max-w-[1400px] m-auto flex justify-between py-[14px] pl-8 pr-12 gap-[70px]">
      <ul className="mt-[4px]">
        {categories
          ?.filter(
            (category: Category) =>
              category.p_id === 0 && // Lọc danh mục gốc
              categories.some((subCategory: Category) => subCategory.p_id === category.id) // Chỉ giữ danh mục có chứa danh mục con
          )
          ?.map((category: Category) => (
            <Link key={category.id} to={`${ROUTES.CATEGORIES}?id=${category?.id}`}>
              <li
                onMouseEnter={() => {
                  setPid(category.id);
                }}
                style={{
                  backgroundColor: pId === category.id ? "#FFFCE1" : "transparent",
                  transition: "background-color 0.3s",
                }}
              >
                <RootCategory category={category} />
              </li>
            </Link>
        ))}
      </ul>

      <ListCategory
          categoriesLv2={categories?.filter((category: Category) => pId === category.p_id)}
          categories={categories}
          pId={pId}
        />

      <div className="mt-8">
        <ul className="flex flex-col gap-5 items-center">
          {brands.map((brand, index) => (
            <li key={index}>
              <img src={brand} alt={`brand-${index + 1}`} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
