import { Category } from "../../../core/types/Category";
import CategoryImg from "../../../core/assets/category/dogiadung.png";

interface CardCategoryProps {
  category: Category;
}

const CardCategory: React.FC<CardCategoryProps> = ({ category }) => {
  return (
    // <div className="w-[calc(33%-40px)] sm:w-[calc(25%-40px)] md:w-[calc(16.6%-40px)] lg:w-[calc(10%-40px)] flex flex-col items-center gap-3 cursor-pointer">
    <div className="w-full flex flex-col items-center gap-3 cursor-pointer">
        {/* <div className="bg-bg w-full h-[100px] flex items-center justify-center rounded-[16px] shadow-custom-shadow"><img src={category?.uri}></img></div> */}
        <img src={CategoryImg} className="shadow-custom-shadow rounded-[16px] w-full aspect-square"></img>
        <div className="text-center line-clamp-2 overflow-hidden text-ellipsis text-[11px] md:text-[13px] capitalize">{category?.position_name}</div>
    </div>
  )
}

export default CardCategory