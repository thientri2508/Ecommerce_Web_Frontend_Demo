import { FiPackage, FiUsers } from "react-icons/fi";
import banner1 from "../../../core/assets/banner/banner16.png";
import storeImg from "../../../core/assets/store/store1-1.png";
import { FaRegStar } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { HiOutlineChatAlt } from "react-icons/hi";
import { IoMdAdd } from "react-icons/io";

const StoreProfile = () => {
  return (
    <div
      className="w-full h-[245px] rounded-[16px] bg-cover bg-center flex items-center shadow-custom-shadow"
      style={{ backgroundImage: `url(${banner1})` }}
    >
      <div className="bg-bg w-[725px] h-[187px] flex justify-between rounded-[16px] ml-9 p-6 shadow-custom-shadow">
        <img src={storeImg} className="w-[140px] h-[140px]"></img>
        <div className="w-[75%]">
          <h3>LOVITO OFFICIAL STORE 1111</h3>
          <div className="flex justify-between mt-2">
            <div className="flex flex-col gap-2 font-light text-[14px] text-text-muted">
              <div className="flex gap-2">
                <FiUsers size={18} color="black" />
                <div>Người theo dõi:</div>
              </div>
              <div className="flex gap-2">
                <FiPackage size={18} color="black" />
                <div>Tổng sản phẩm:</div>
              </div>
              <div className="flex gap-2">
                <FaRegStar size={18} color="black" />
                <div>Lượt đánh giá:</div>
              </div>
              <div className="flex gap-2">
                <MdOutlineRemoveRedEye size={18} color="black" />
                <div>Online 4 phút trước</div>
              </div>
            </div>
            <div className="flex flex-col gap-2 text-[14px]">
              <div>12.3k</div>
              <div>53</div>
              <div>
                5{" "}
                <span className="text-[12px] font-light text-text-muted">
                  (224)
                </span>
              </div>
            </div>
            <div className="text-[14px] *:cursor-pointer">
              <div className="flex justify-center items-center gap-2 rounded-[32px] bg-bg-alt1 px-9 py-2 text-white">
                <div>Chat ngay</div>
                <HiOutlineChatAlt size={22} />
              </div>
              <div className="flex justify-center items-center gap-2 rounded-[32px] border-solid border-bg-alt1 border-[1px] px-9 py-2 text-bg-alt1 mt-3">
                <div>Theo dõi</div>
                <IoMdAdd size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreProfile;
