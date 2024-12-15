import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { TopBar } from "../TopBar/TopBar";
import ScrollToTopButton from "../ScrollToTopButton/ScrollToTopButton";
import HeaderMoible from "../Header/HeaderMoible";
import HeaderAuth from "../Header/HeaderAuth";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  // Kiểm tra nếu URL là "/login" hoặc "/register"
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <div>
      {isAuthPage ? (
        <HeaderAuth /> // Render HeaderAuth nếu là /login hoặc /register
      ) : (
        <>
          <TopBar />
          <Header />
        </>
      )}
      <HeaderMoible />
      <ScrollToTopButton />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
