import { useNavigate } from "react-router-dom";
import { Category } from "../../../core/types/Category";
import { ROUTES } from "../../../core/constants/constants.router";

interface CardCategoryProps {
  category: Category;
}

const CardCategory: React.FC<CardCategoryProps> = ({ category }) => {

  const navigate = useNavigate();
  const handleClick = (id: number) => {
    navigate(`${ROUTES.CATEGORIES}?id=${id}`)
  };

  return ( 
    <div className="w-full flex flex-col items-center gap-3 cursor-pointer" onClick={() => handleClick(category?.id)}>
        <img src={category?.uri} className="shadow-custom-shadow rounded-[16px] w-full aspect-square"></img>
        <div className="text-center line-clamp-2 overflow-hidden text-ellipsis text-[11px] md:text-[13px] capitalize">{category?.position_name}</div>
    </div>
  )
}

export default CardCategory