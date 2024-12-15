import { createContext, useState, useContext, ReactNode } from "react";
import Modal from "../components/Notification/Modal";

interface ModalContextProps {
  showModal: (message: string, onConfirmCallback: () => void) => void;
  hideModal: () => void;
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState("");
  const [onConfirm, setOnConfirm] = useState(() => () => {});

  const showModal = (message: string, onConfirmCallback: () => void) => {
    setMessage(message);
    setOnConfirm(() => onConfirmCallback);
    setIsVisible(true);
  };

  const hideModal = () => {
    setIsVisible(false);
    setMessage("");
    setOnConfirm(() => () => {});
  };

  return (
    <ModalContext.Provider value={{ showModal, hideModal }}>
      {children}
      {isVisible && (
        <Modal
          message={message}
          onConfirm={() => {
            onConfirm();
            hideModal();
          }}
          onCancel={hideModal}
        />
      )}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
