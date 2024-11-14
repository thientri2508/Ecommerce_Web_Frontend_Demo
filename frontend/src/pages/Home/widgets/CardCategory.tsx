import { Category } from "../../../core/types/Category";

interface CardCategoryProps {
  category: Category;
}

const CardCategory: React.FC<CardCategoryProps> = ({ category }) => {
  return (
    <div className="w-[100px] flex flex-col items-center gap-3 cursor-pointer">
        {/* <div className="bg-bg w-full h-[100px] flex items-center justify-center rounded-[16px] shadow-custom-shadow"><img src={category?.uri}></img></div> */}
        <img src={category?.uri} className="shadow-custom-shadow rounded-[16px]"></img>
        <div className="text-center">{category?.position_name}</div>
    </div>
  )
}

export default CardCategory