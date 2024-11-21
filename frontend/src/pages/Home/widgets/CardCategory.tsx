import { Category } from "../../../core/types/Category";
import { getUriConst } from "../../../core/constants/constants.imageURL";

interface CardCategoryProps {
  category: Category;
}

const CardCategory: React.FC<CardCategoryProps> = ({ category }) => {
  return ( 
    <div className="w-full flex flex-col items-center gap-3 cursor-pointer">
        <img src={getUriConst(category.uri)} className="shadow-custom-shadow rounded-[16px] w-full aspect-square"></img>
        <div className="text-center line-clamp-2 overflow-hidden text-ellipsis text-[11px] md:text-[13px] capitalize">{category?.position_name}</div>
    </div>
  )
}

export default CardCategory