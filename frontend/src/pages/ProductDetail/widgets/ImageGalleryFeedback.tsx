import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

interface ImageGalleryFeedbackProps {
  images: string[];
  maxImagesToShow: number;
}

const ImageGalleryFeedback: React.FC<ImageGalleryFeedbackProps> = ({
  images, maxImagesToShow
}) => {
  const extraImagesCount = images.length - maxImagesToShow;

  const [currentIndex, setCurrentIndex] = useState(0); 
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="flex flex-wrap gap-4 mt-3">
      {images.slice(0, maxImagesToShow).map((image, index) => (
        <div
          key={index}
          className="w-24 h-24 overflow-hidden relative border border-gray-300 rounded-lg"
        >
          <img
            src={image}
            alt={`Image ${index + 1}`}
            className="w-full h-full object-cover"
            onClick={() => openModal(index)}
          />
        </div>
      ))}

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="relative bg-white rounded-[26px] pt-16 w-[600px] h-[500px]">
            <div className="center">
              <img
                src={images[currentIndex]}
                className="w-[70%] h-[400px] object-contain"
              />
            </div>

            <button
              className="absolute top-3 right-4 text-gray-500 hover:text-gray-800"
              onClick={closeModal}
            >
              <IoCloseSharp size={40} />
            </button>

            {/* Nút điều hướng */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 hover:text-text-muted"
            >
              <IoIosArrowBack size={40} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 hover:text-text-muted"
            >
              <IoIosArrowForward size={40} />
            </button>
          </div>
        </div>
      )}

      {extraImagesCount > 0 && (
        <div className="w-24 h-24 relative border border-gray-300">
          <img
            src={images[maxImagesToShow]}
            alt={`Extra Image`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center text-white text-lg font-bold">
            +{extraImagesCount}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGalleryFeedback;
