import { useNavigate, useSearchParams } from "react-router-dom";
import { Category } from "../../../core/types/Category";
import { ROUTES } from "../../../core/constants/constants.router";

interface CardCategoryProps {
  category: Category;
}

const CardCategory: React.FC<CardCategoryProps> = ({ category }) => {

  const [searchParams] = useSearchParams();
  const idCategory = searchParams.get("id");

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`${ROUTES.PRODUCTS}?idParent=${idCategory}&p_id=${category?.id}`);
  };
  
  return (
    <div className="w-[calc(16.66%-20px)] p-4 rounded-[16px] bg-CardCategory flex flex-col justify-between cursor-pointer group" onClick={handleClick}>
        <h3 className="line-clamp-2 overflow-hidden text-ellipsis">{category?.position_name}</h3>
        <div className="center"><img src={category?.uri} className="w-[70%] aspect-square mt-2 group-hover:translate-y-3"></img></div>
    </div>
  )
}

export default CardCategory