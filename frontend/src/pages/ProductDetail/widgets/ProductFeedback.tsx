import { Progress } from "antd"
import StarRating from "./StarRating"
import StarRatingList from "./StarRatingList"
import productImg from "../../../core/assets/product/product5.png"
import ImageGalleryFeedback from "./ImageGalleryFeedback"
import ItemFeedback from "./ItemFeedback"

const ProductFeedback = () => {

    const images = new Array(18).fill(productImg);

  return (
    <div className="w-full bg-bg rounded-[16px] p-8 mt-5">
        <h2 className="font-bold text-[20px]">KHÁCH HÀNG ĐÁNH GIÁ</h2>
        <div className="flex justify-between mt-3 border-solid border-b-[1px] pb-6">
            <div className="w-[31%] border-solid border-r-[1px]">
                <div className="text-[16px]">Tổng quan</div>
                <div className="flex gap-6">
                    <h2 className="font-bold text-[40px]">4.5</h2>
                    <StarRating rating={4.5} />
                </div>
                <div className="font-light text-[14px] text-text-muted">(1271 đánh giá)</div>
                <div className="flex flex-col gap-2 mt-3">
                    <div className="flex gap-2 items-center">
                        <StarRatingList rating={5} />
                        <Progress 
                            percent={30} 
                            size="small"
                            strokeColor="#D91D2C"  
                            trailColor="#e6e6e6" 
                            style={{ width: '60%' }} 
                        />
                    </div>
                    <div className="flex gap-2 items-center">
                        <StarRatingList rating={4} />
                        <Progress 
                            percent={70} 
                            size="small"
                            strokeColor="#D91D2C"  
                            trailColor="#e6e6e6" 
                            style={{ width: '60%' }} 
                        />
                    </div>
                    <div className="flex gap-2 items-center">
                        <StarRatingList rating={3} />
                        <Progress 
                            percent={50} 
                            size="small"
                            strokeColor="#D91D2C"  
                            trailColor="#e6e6e6" 
                            style={{ width: '60%' }} 
                        />
                    </div>
                    <div className="flex gap-2 items-center">
                        <StarRatingList rating={2} />
                        <Progress 
                            percent={10} 
                            size="small"
                            strokeColor="#D91D2C"  
                            trailColor="#e6e6e6" 
                            style={{ width: '60%' }} 
                        />
                    </div>
                    <div className="flex gap-2 items-center">
                        <StarRatingList rating={1} />
                        <Progress 
                            percent={5} 
                            size="small"
                            strokeColor="#D91D2C"  
                            trailColor="#e6e6e6" 
                            style={{ width: '60%' }} 
                        />
                    </div>
                </div>
            </div>
            <div className="w-[66%]">
                <div className="text-[16px]">Tất cả hình ảnh <span className="font-light text-[14px] text-text-muted">(65)</span></div>
                <ImageGalleryFeedback images={images} maxImagesToShow={11} />
            </div>
        </div>

        <div className="text-[16px] mt-4">Lọc theo</div>
        <ul className="flex gap-3 mt-5 *:rounded-[24px] *:py-3 *:px-6 *:border-solid *:border-[1px] *:cursor-pointer">
            <li>Tất cả</li>
            <li>Mới nhất</li>
            <li>Có hình ảnh</li>
            <li>5 sao</li>
            <li>4 sao</li>
            <li>3 sao</li>
            <li>2 sao</li>
            <li>1 sao</li>
        </ul>

        <ItemFeedback />
        <ItemFeedback />
        <ItemFeedback />
        <ItemFeedback />

        <div className="center mt-14 gap-2">
          <button className="py-2 px-8 border-solid border rounded-[16px] border-bg-alt1">Xem Thêm</button>
        </div>
    </div>
  )
}

export default ProductFeedback