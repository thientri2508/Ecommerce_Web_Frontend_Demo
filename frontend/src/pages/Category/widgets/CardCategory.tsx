import img_category from  "../../../core/assets/category/thoitrangnam.png"
import { Category } from "../../../core/types/Category";

interface CardCategoryProps {
  category: Category;
}

const CardCategory: React.FC<CardCategoryProps> = ({ category }) => {
  return (
    <div className="w-full p-4 rounded-[16px] bg-CardCategory flex flex-col justify-between cursor-pointer group">
        <h3>{category?.position_name}</h3>
        <div className="center"><img src={img_category} className="w-[70%] aspect-square mt-2 group-hover:translate-y-3"></img></div>
    </div>
  )
}

export default CardCategory