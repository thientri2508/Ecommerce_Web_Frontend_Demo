import { FaStar } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { PiLineVertical } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import ErrorFallback from "../../../core/components/ErrorFallback/ErrorFallback";
import Spinner from "../../../core/components/Loading/Spinner";
import { useStoreDetail } from "../../../core/hooks/store/useStoreDetail";
import { ROUTES } from "../../../core/constants/constants.router";

const StoreInfo = ({ id }: { id: number }) => {
  const navigate = useNavigate();
  const handleClick = (id: number) => {
    navigate(`${ROUTES.STORE}?id=${id}`);
  };

  const { data: store, error, isLoading } = useStoreDetail(id);

  if (isLoading) return <Spinner />;

  if (error)
    return (
      <ErrorFallback
        message={error instanceof Error ? error.message : "Lỗi từ máy chủ"}
      />
    );

  return (
    <>
      <img src={store?.logo_uri} className="w-[110px] h-[100px] ml-2"></img>
      <div>
        <div className="font-semibold text-[16px]">{store?.name_store}</div>
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
        <button
          className="rounded-[24px] border-[1px] border-solid border-bg-alt1 
          px-[68px] py-2 mt-6 text-[14px] text-text-muted cursor-pointer"
          onClick={() => handleClick(id)}
        >
          Xem cửa hàng
        </button>
      </div>
    </>
  );
};

export default StoreInfo;
