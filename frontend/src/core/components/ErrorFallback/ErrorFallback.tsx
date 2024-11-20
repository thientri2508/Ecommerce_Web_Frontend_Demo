import React from 'react';
import { FiAlertCircle } from 'react-icons/fi';

interface ErrorFallbackProps {
  message?: string; 
}

const ErrorFallback: React.FC<ErrorFallbackProps> = ({ message }) => {
  return (
    <div className="flex flex-col justify-center items-center h-full text-center gap-4 py-12">
      <FiAlertCircle className="text-red-500 text-6xl" /> {/* Icon cảnh báo */}
      <p className="text-xl font-semibold text-gray-700">Rất tiếc! Đã xảy ra lỗi.</p>
      {message && <p className="text-sm text-gray-500">{message}</p>}
    </div>
  );
};

export default ErrorFallback;
