import rightIcon from "../../assets/icon/right-icon.png";
import questionIcon from "../../assets/icon/question-icon.png";
import { Category } from "../../types/Category";

export const RootCategory = ({ category }: { category: Category }) => {
  return (
    <ul className="flex items-center justify-between w-[252px] h-[40px] px-[14px] cursor-pointer">
      <li>
        <ul className="flex items-center gap-3">
          <li>
            <img src={questionIcon}></img>
          </li>
          <li className="text-subCategory capitalize">{category.position_name}</li>
        </ul>
      </li>
      <li>
        <img src={rightIcon}></img>
      </li>
    </ul>
  );
};
