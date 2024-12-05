import { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { Category } from "../../../core/types/Category";
import { Link, useSearchParams } from "react-router-dom";
import { ROUTES } from "../../../core/constants/constants.router";

export const DropdownCategory = ({category} : {category: Category}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [maxHeight, setMaxHeight] = useState("0px");
  const listRef = useRef<HTMLUListElement>(null);

  const subCategories = category.json_cate ? JSON.parse(category.json_cate) : [];

  const [searchParams] = useSearchParams();
  const idCategory = searchParams.get('idCategory');
  const p_id = searchParams.get('p_id');
  const idParent = searchParams.get('idParent'); 

  useEffect(() => {
    if (listRef.current) {
      setMaxHeight(`${listRef.current.scrollHeight}px`);
    }
  }, []);

  return (
    <div className="select-none">
      <div
        className={`w-full flex justify-between items-center ${category?.id == Number(p_id) ? 'text-bg-alt1' : 'text-text'} py-[12px]`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4>{category?.position_name} <span className="font-light text-[13px] text-text-muted">(10)</span></h4>
        {isOpen ? (<span><MdKeyboardArrowUp size="25" /></span>) : (<span><MdKeyboardArrowDown size="25" /></span>)}
      </div>
      <ul
        ref={listRef}
        style={{
          maxHeight: isOpen ? maxHeight : "0px",
        }}
        className="transition-all duration-300 overflow-hidden text-[14px]"
      >
        {subCategories?.map((subCategory: Category) => (
          <Link to={`${ROUTES.PRODUCTS}?idParent=${idParent}&idCategory=${subCategory?.id}`} key={subCategory?.id}>
            <li className={`hover:text-bg-alt1 pl-4 py-[8px] ${subCategory?.id == Number(idCategory) ? 'text-bg-alt1' : 'text-text'}`}>
              {subCategory?.position_name}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
