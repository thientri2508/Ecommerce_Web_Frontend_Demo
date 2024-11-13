import categoryIcon from "../../../core/assets/icon/category-icon.png"
import { Category } from "../../../core/types/Category";

interface CardCategoryProps {
  category: Category;
}

const CardCategory: React.FC<CardCategoryProps> = ({ category }) => {
  return (
    <div className="w-[100px] flex flex-col items-center gap-3 cursor-pointer">
        <div className="bg-bg w-full h-[100px] flex items-center justify-center rounded-[16px] shadow-custom-shadow"><img src={categoryIcon}></img></div>
        <div className="text-center">{category?.position_name}</div>
    </div>
  )
}

export default CardCategory