interface ModalProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const Modal: React.FC<ModalProps> = ({ message, onConfirm, onCancel }) => {

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-gray-500 bg-opacity-50 z-[100]">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h3 className="text-lg font-semibold">{message}</h3>
        <div className="mt-4 flex justify-end gap-4">
          <button
            className="py-2 px-4 bg-red-500 text-white rounded"
            onClick={onConfirm}
          >
            Xác nhận
          </button>
          <button
            className="py-2 px-4 bg-gray-300 text-black rounded"
            onClick={onCancel}
          >
            Hủy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
