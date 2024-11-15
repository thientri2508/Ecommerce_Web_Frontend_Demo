import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { TopBar } from '../TopBar/TopBar';
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton';
import HeaderMoible from '../Header/HeaderMoible';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

  return (
    <div>
        <TopBar />
        <Header />
        <HeaderMoible />
        <ScrollToTopButton />
        <main>{children}</main>
        <Footer />
    </div>
)
}

export default Layout