import React, { useEffect, useState } from 'react'
import { IoIosArrowUp } from "react-icons/io"

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Hiển thị nút khi người dùng cuộn xuống một khoảng nhất định
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Cuộn lên đầu trang khi nhấn nút
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-10 z-50 right-6 w-14 h-14 center rounded-full bg-bg-alt2 text-white shadow-custom-shadow transition-opacity duration-300"
        aria-label="Scroll to top"
      >
        <IoIosArrowUp size={30} /> 
      </button>
    )
  );
};

export default ScrollToTopButton;
