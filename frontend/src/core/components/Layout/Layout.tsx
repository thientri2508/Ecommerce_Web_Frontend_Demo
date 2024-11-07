import Header from '../Header/Header'
import Footer from '../Footer/Footer'

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

  return (
    <div>
        <Header />
        <main>{children}</main>
        <Footer />
    </div>
)
}

export default Layout