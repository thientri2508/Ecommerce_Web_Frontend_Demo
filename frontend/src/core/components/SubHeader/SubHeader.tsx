import { RootCategory } from "./RootCategory";
import ListCategory from "./ListCategory";
import brand1 from "../../assets/logo/brand1.png";
import brand2 from "../../assets/logo/brand2.png";
import brand3 from "../../assets/logo/brand3.png";
import brand4 from "../../assets/logo/brand4.png";
import brand5 from "../../assets/logo/brand5.png";
import brand6 from "../../assets/logo/brand6.png";
import brand7 from "../../assets/logo/brand7.png";
import { Category } from "../../types/Category";
import { categoryData } from "../../mockData/categoryData";

const brands = [brand1, brand2, brand3, brand4, brand5, brand6, brand7];

export const SubHeader = () => {
  return (
    <div className="max-w-[1400px] m-auto flex justify-between py-[14px] pl-8 pr-12 gap-[70px]">
      <ul className="mt-[4px]">
        <RootCategory category_name='Thời trang' />
        <RootCategory category_name='Thời trang' />
        <RootCategory category_name='Thời trang' />
        <RootCategory category_name='Thời trang' />
        <RootCategory category_name='Thời trang' />
        <RootCategory category_name='Thời trang' />
        <RootCategory category_name='Thời trang' />
      </ul>

      <ListCategory
        categoriesLv2={categoryData?.filter(
          (category: Category) => 2 === category.level_category
        )}
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
