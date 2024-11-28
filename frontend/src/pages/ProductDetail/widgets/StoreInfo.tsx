import { FaStar } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { PiLineVertical } from "react-icons/pi";
import storeImg from "../../../core/assets/store/store1.png";
import { Link } from "react-router-dom";

const StoreInfo = () => {
  return (
    <>
      <img src={storeImg} className="w-[130px] h-[112px]"></img>
      <div>
        <div className="font-semibold text-[16px]">
          LOVITO OFFICIAL STORE 1111
        </div>
        <div className="flex gap-2 items-center mt-1">
          <FiUsers size={16} />
          <div className="font-light text-[12px] text-text-muted">
            Người theo dõi
          </div>
          <div>12.3k</div>
          <PiLineVertical size={20} color="#818181" />
          <FaStar size={18} color="#FFD000" />
          <div>4.8</div>
        </div>
        <Link to="/store">
          <button className="rounded-[24px] border-[1px] border-solid border-bg-alt1 px-[68px] py-2 mt-6 text-[14px] text-text-muted cursor-pointer">
            Xem cửa hàng
          </button>
        </Link>
      </div>
    </>
  );
};

export default StoreInfo;
