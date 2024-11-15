import { Category } from "../../../core/types/Category";

interface CardCategoryProps {
  category: Category;
}

const CardCategory: React.FC<CardCategoryProps> = ({ category }) => {
  return (
    <div className="w-[calc(33%-40px)] sm:w-[calc(25%-40px)] md:w-[calc(16.6%-40px)] lg:w-[calc(12.5%-40px)] flex flex-col items-center gap-3 cursor-pointer">
        {/* <div className="bg-bg w-full h-[100px] flex items-center justify-center rounded-[16px] shadow-custom-shadow"><img src={category?.uri}></img></div> */}
        <img src={category?.uri} className="shadow-custom-shadow rounded-[16px] w-full aspect-square"></img>
        <div className="text-center text-[11px] md:text-[13px]">{category?.position_name}</div>
    </div>
  )
}

export default CardCategory