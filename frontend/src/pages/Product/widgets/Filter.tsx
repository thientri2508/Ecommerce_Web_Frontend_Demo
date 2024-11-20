import { RiArrowUpDownFill } from "react-icons/ri";
import { BiFilterAlt } from "react-icons/bi";
import { FaArrowUpLong } from "react-icons/fa6";
import { FaArrowDownLong } from "react-icons/fa6";

interface FilterProps {
    filterPrice: number
    setFilterPrice: React.Dispatch<React.SetStateAction<number>>
    openModal: () => void;
}

const Filter: React.FC<FilterProps> = ({filterPrice, setFilterPrice, openModal}) => {
  return (
    <div className="bg-bg w-[54%] select-none px-3 flex justify-between items-center rounded-[10px]">
        <div className="flex">
            <div className="px-6 py-[11px] text-text-muted hover:bg-bg-alt1 hover:text-[#FFF] rounded-[10px] cursor-pointer">Nổi bật</div>
            <div className="px-6 py-[11px] text-text-muted hover:bg-bg-alt1 hover:text-[#FFF] rounded-[10px] cursor-pointer">Bán chạy</div>
            <div className="px-6 py-[11px] text-text-muted hover:bg-bg-alt1 hover:text-[#FFF] rounded-[10px] cursor-pointer">Mới nhất</div>
        </div>
        <div className="flex gap-2">
            <div className="px-4 py-[11px] text-text-muted bg-[#f5f5f5] rounded-[10px] cursor-pointer flex items-center justify-between gap-2"
                onClick={() => setFilterPrice((prevState: number) => (prevState + 1) % 3)}>
                <p>Giá</p>
                {/* <span><RiArrowUpDownFill size={23} /></span> */}
                <span>{filterPrice === 1 ? <FaArrowUpLong size={18} /> : filterPrice === 2 ? <FaArrowDownLong size={18} /> : <RiArrowUpDownFill size={23} />}</span>
            </div>
            <div className="px-4 py-[11px] text-text-muted bg-[#f5f5f5] rounded-[10px] cursor-pointer flex items-center justify-between gap-2"
                onClick={openModal}>
                <p>Bộ lọc</p>
                <span><BiFilterAlt  size={23} /></span>
            </div>
        </div>
    </div>
  )
}

export default Filter