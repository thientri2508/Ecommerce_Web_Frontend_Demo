import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

interface StarRatingListProps {
  rating: number; // Số sao (từ 0 đến 5)
}

const StarRatingList: React.FC<StarRatingListProps> = ({ rating }) => {
  // Hàm tạo các sao đầy đủ và sao trắng viền vàng
  const fullStars = Math.floor(rating); // Số sao đầy đủ (làm tròn xuống)
  const emptyStars = 5 - fullStars; // Số sao trống còn lại (sao trắng có viền)

  return (
    <div className="flex items-center gap-[2px]">
      {/* Vẽ các sao vàng (fullStars) */}
      {Array(fullStars)
        .fill(0)
        .map((_, index) => (
          <FaStar key={index} size={16} className="text-[#FFD000]" />
        ))}

      {/* Vẽ các sao trắng có viền vàng (emptyStars) */}
      {Array(emptyStars)
        .fill(0)
        .map((_, index) => (
          <FaRegStar key={index} size={16} className="text-[#FFD000]" />
        ))}
    </div>
  );
};

export default StarRatingList;
