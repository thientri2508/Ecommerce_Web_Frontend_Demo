import rightIcon from "../../assets/icon/right-icon.png";
import questionIcon from "../../assets/icon/question-icon.png";

export const RootCategory = ({ category_name }: { category_name: string }) => {
  return (
    <ul className="flex items-center justify-between w-[252px] h-[40px] px-[14px] cursor-pointer bg-transparent hover:bg-[#FFFCE1] transition-all">
      <li>
        <ul className="flex items-center gap-3">
          <li>
            <img src={questionIcon}></img>
          </li>
          <li className="text-subCategory capitalize">{category_name}</li>
        </ul>
      </li>
      <li>
        <img src={rightIcon}></img>
      </li>
    </ul>
  );
};
