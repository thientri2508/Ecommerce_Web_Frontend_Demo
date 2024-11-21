import { Link } from "react-router-dom";
import { Category } from "../../types/Category";
import { ROUTES } from "../../constants/constants.router";

const ListCategory = ({
  categoriesLv2,
  categories,
  pId,
}: {
  categoriesLv2: Category[],
  categories: Category[],
  pId: number
}) => {
  return (
    <div className="flex flex-wrap gap-x-14 gap-y-8 mt-8 w-[65%] items-start">
      {categoriesLv2?.map((categoryLv2: Category) => {
        return (
          <div key={categoryLv2?.id} className="w-[calc(33.33%-56px)]">
            <Link to={`${ROUTES.PRODUCTS}?idParent=${pId}&idCategory=${categoryLv2?.id}`}>
              <p className="text-category font-semibold text-text cursor-pointer hover:text-bg-alt1 transition-all duration-200">
                {categoryLv2?.position_name}
              </p>
            </Link>
            <ul className="*:text-text-muted *:cursor-pointer *:transition-all *:duration-200 text-subCategory flex flex-col gap-3 mt-4">
              {categories
                ?.filter((category: Category) => categoryLv2.id == category.p_id)
                ?.map((categoryLv3: Category) => {
                  return (
                    <Link to={`${ROUTES.PRODUCTS}?idParent=${pId}&idCategory=${categoryLv3?.id}`} key={categoryLv3?.id}>
                      <li className="hover:text-bg-alt1">
                        {categoryLv3?.position_name}
                      </li>
                    </Link>
                  );
                })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default ListCategory;
