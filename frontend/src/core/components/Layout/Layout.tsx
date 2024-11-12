import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { TopBar } from '../TopBar/TopBar';
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

  return (
    <div>
        <TopBar />
        <Header />
        <ScrollToTopButton />
        <main>{children}</main>
        <Footer />
    </div>
)
}

export default Layout