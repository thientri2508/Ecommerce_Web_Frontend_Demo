import { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { Category } from "../../../core/types/Category";
import { useLocation, useSearchParams } from "react-router-dom";

export const DropdownCategory = ({category} : {category: Category}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [maxHeight, setMaxHeight] = useState("0px");
  const listRef = useRef<HTMLUListElement>(null);

  const subCategories = category.json_cate ? JSON.parse(category.json_cate) : [];

  // const searchParams = new URLSearchParams(location.search);
  // const idCategory = searchParams.get('idCategory'); 

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    setSearchParams(new URLSearchParams(location.search));
  }, [location.search, setSearchParams]);

  const handleCategoryClick = (categoryId: string) => {
    searchParams.set("idCategory", categoryId);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    if (listRef.current) {
      setMaxHeight(`${listRef.current.scrollHeight}px`);
    }
  }, []);

  return (
    <div className="select-none">
      <div
        className={`w-full flex justify-between items-center ${category?.id == Number(searchParams.get("idCategory")) ? 'text-bg-alt1' : 'text-text'} py-[12px]`}
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
        className="transition-all duration-300 overflow-hidden *:pl-4 *:py-[8px] text-[14px]"
      >
        {subCategories?.map((subCategory: Category) => (
          <li key={subCategory?.id} className={`hover:text-bg-alt1 ${subCategory?.id == Number(searchParams.get("idCategory")) ? 'text-bg-alt1' : 'text-text'}`} onClick={() => handleCategoryClick(`${subCategory?.id}`)}>
            {subCategory?.position_name}
          </li>
        ))}
      </ul>
    </div>
  );
};
