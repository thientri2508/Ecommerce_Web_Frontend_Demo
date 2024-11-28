import React from 'react';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa'; // Import icon từ react-icons

interface StarRatingProps {
  rating: number; // Giá trị rating từ 0 đến 5
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const fullStars = Math.floor(rating); // Số sao đầy đủ (làm tròn xuống)
  const hasHalfStar = rating % 1 >= 0.5; // Kiểm tra nếu có nửa sao
  const totalStars = 5; // Tổng số sao tối đa

  return (
    <div className="flex items-center gap-[6px]">
      {/* Vẽ các sao đầy đủ (sao vàng) */}
      {Array(fullStars)
        .fill(0)
        .map((_, index) => (
          <FaStar key={index} className="text-[#FFD000] w-6 h-6" />
        ))}

      {/* Vẽ nửa sao nếu có */}
      {hasHalfStar && <FaStarHalfAlt className="text-[#FFD000] w-6 h-6" />}

      {/* Vẽ sao có viền (sao rỗng) */}
      {Array(totalStars - fullStars - (hasHalfStar ? 1 : 0))
        .fill(0)
        .map((_, index) => (
          <FaRegStar key={index} className="text-[#FFD000] w-6 h-6" />
        ))}
    </div>
  );
};

export default StarRating;
