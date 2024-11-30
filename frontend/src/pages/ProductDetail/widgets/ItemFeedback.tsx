import { PiLineVertical } from "react-icons/pi";
import StarRatingList from "./StarRatingList";
import ImageGalleryFeedback from "./ImageGalleryFeedback";
import productImg from "../../../core/assets/product/product5.png";
import userImg from "../../../core/assets/user/user1.png";

const ItemFeedback = () => {
  const images = new Array(4).fill(productImg);

  return (
    <div className="w-full py-8 border-b-[1px] border-solid">
      <div className="flex justify-between">
        <div className="w-[53%] border-solid border-r-[1px]">
          <div className="flex gap-4 items-center">
            <img
              src={userImg}
              className="h-[47px] w-[47px] rounded-[50%]"
            ></img>
            <div className="flex flex-col gap-2">
              <div className="text-[14px]">Pikachuansicula</div>
              <div className="flex gap-2"><StarRatingList rating={5} /><div className="font-light text-[12px] text-text-muted mt-1">5 sao</div></div>
            </div>
          </div>
          <div className="text-[12px] flex gap-[2px] items-center font-light text-text-muted mt-4">
            <div>22-11-2024</div>
            <PiLineVertical size={13} color="#818181" />
            <div>10:19</div>
          </div>
          <div className="text-[12px] flex gap-[2px] items-center font-light mt-[2px]">
            <div>
              Phân loại: <span className="text-text-muted">Đỏ đô</span>
            </div>
            <PiLineVertical size={13} color="#818181" />
            <div>
              Size: <span className="text-text-muted">M (48-52kg)</span>
            </div>
          </div>
        </div>
        <div className="w-[46%] pl-4">
          <ImageGalleryFeedback images={images} maxImagesToShow={4} />
        </div>
      </div>
      <div className="font-light text-[15px] mt-5">
        Đẹp đúng màu và mẫu mà make lên mới xinh nhen mn ai mặt tròn thì chưa
        hợp lắm ạ, đẹp nhất của các nhà nước Pháp khoa thi đấu tranh cãi nhau và
        các loài thực vật có thể lỡ lời nói rằng ông đã đăng ký và được làm bài
        viết chữ Hán giản thể lỡ qua live with me on the other side and the
        other side of my favorite song
      </div>
    </div>
  );
};

export default ItemFeedback;
