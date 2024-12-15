import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LoginModalContextType {
  isLoginModalVisible: boolean;
  showLoginModal: () => void;
  hideLoginModal: () => void;
}

const LoginModalContext = createContext<LoginModalContextType | undefined>(undefined);

interface LoginModalProviderProps {
  children: ReactNode;
}

export const LoginModalProvider: React.FC<LoginModalProviderProps> = ({ children }) => {
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false);

  const showLoginModal = () => setIsLoginModalVisible(true);
  const hideLoginModal = () => setIsLoginModalVisible(false);

  return (
    <LoginModalContext.Provider value={{ isLoginModalVisible, showLoginModal, hideLoginModal }}>
      {children}
    </LoginModalContext.Provider>
  );
};

// Custom hook để sử dụng context
export const useLoginModal = (): LoginModalContextType => {
  const context = useContext(LoginModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
