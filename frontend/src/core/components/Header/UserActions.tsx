import coinIcon from "../../assets/icon/coin-icon.png";
import likeIcon from "../../assets/icon/like-icon.png";
import bagIcon from "../../assets/icon/bag-icon.png";
import accountIcon from "../../assets/icon/account-icon.png";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/constants.router";
import { FaRegCircleUser } from "react-icons/fa6";
import { GoChecklist } from "react-icons/go";
import { HiOutlineLogout } from "react-icons/hi";
import { PiWarningFill } from "react-icons/pi";
import { useAuth } from "../../context/AuthContext";

const UserActions: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuth();

  const navigate = useNavigate();
  const handleClick = (url: string) => {
    navigate(url);
  };

  return (
    <ul className="flex gap-6 *:cursor-pointer *:text-[12px]">
      <li className="hidden lg:block">
        <ul className="flex flex-col items-center gap-y-[5px] group perspective-1000">
          <li>
            <img src={coinIcon} className="w-[20px] h-[20px] flip-effect"></img>
          </li>
          <li className="text-center">Đổi điểm</li>
        </ul>
      </li>
      <li className="hidden lg:block">
        <ul className="flex flex-col items-center gap-y-[5px] group perspective-1000">
          <li>
            <img src={likeIcon} className="w-[20px] h-[20px] flip-effect"></img>
          </li>
          <li className="text-center">Yêu thích</li>
        </ul>
      </li>

      {isAuthenticated ? (
        <li
          onClick={() => handleClick(ROUTES.ACCOUNT)}
          className="relative group"
        >
          {!user?.full_name && (
            <div className="absolute top-[-12px] right-[1px] z-40">
              <PiWarningFill size={24} className="text-yellow-300" />
            </div>
          )}

          <div className="flex flex-col items-center gap-y-[5px]">
            <ul className="flex flex-col items-center gap-y-[5px] group perspective-1000">
              <li>
                <img
                  src={accountIcon}
                  className="w-[20px] h-[20px] flip-effect"
                ></img>
              </li>
              <li className="text-center">Tài khoản</li>
            </ul>
            <div className="absolute w-[244px] top-[40px] left-[-90px] z-[100] group-hover:opacity-100 opacity-0 invisible group-hover:visible transition-opacity duration-300">
              <div className="w-full mt-[25px] rounded-[16px] border-2 shadow-custom-shadow bg-white flex flex-col text-[15px] text-text-muted">
                <div className="flex gap-2 items-center px-6 py-[14px] border-b-[1px] hover:text-bg-alt1">
                  <FaRegCircleUser size={20} />
                  <div>Tài khoản của tôi</div>
                  {!user?.full_name && (
                    <PiWarningFill size={22} className="text-yellow-300" />
                  )}
                </div>
                <div className="flex gap-2 items-center px-6 py-[14px] border-b-[1px] hover:text-bg-alt1">
                  <GoChecklist size={20} />
                  <div>Đơn hàng đã mua</div>
                </div>
                <div
                  className="flex gap-2 items-center px-6 py-[14px] hover:text-bg-alt1"
                  onClick={logout}
                >
                  <HiOutlineLogout size={20} />
                  <div>Đăng xuất</div>
                </div>
              </div>
            </div>
          </div>
        </li>
      ) : (
        <li onClick={() => handleClick(ROUTES.LOGIN)}>
          <ul className="flex flex-col items-center gap-y-[5px] group perspective-1000">
            <li>
              <img
                src={accountIcon}
                className="w-[20px] h-[20px] flip-effect"
              ></img>
            </li>
            <li className="text-center">Tài khoản</li>
          </ul>
        </li>
      )}

      <li className="relative" onClick={() => handleClick(ROUTES.CART)}>
        <ul className="flex flex-col items-center gap-y-[5px] group perspective-1000">
          <li>
            <img src={bagIcon} className="w-[20px] h-[20px] flip-effect"></img>
          </li>
          <li className="text-center">Giỏ hàng</li>
        </ul>
        <div className="absolute z-10 w-[30px] h-[20px] text-[10px] text-[#FFF] rounded-[20px] bg-bg-alt2 right-[-7px] top-[-10px] flex items-center justify-center">
          <span>0</span>
        </div>
      </li>
    </ul>
  );
};

export default UserActions;
