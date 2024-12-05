import logo from '../../assets/logo/logo.png'
import Button from '../Button/Button'
import UserActions from './UserActions'
import { Search } from './Search'
import { useEffect, useState } from 'react'
import { SubHeader } from '../SubHeader/SubHeader'
import { Link, useLocation } from 'react-router-dom'
import { HiViewList } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import AccountModal from '../Account/AccountModal'

const Header = () => {

  const [isOpenSubMenu, setIsOpenSubMenu] = useState(false)
  const [isAccountModalOpen, setIsAccountModalOpen] = useState(false);

  const closeAccountModal = () => {
    setIsAccountModalOpen(false);
  };

  const location = useLocation();

  useEffect(() => {
    setIsOpenSubMenu(false);
  }, [location]);

  return (
    <header className="hidden md:block w-full h-[70px] bg-bg sticky z-50 top-[-1px] border-solid border-b-2 shadow-custom-shadow-header">
      <div className="max-w-[1400px] m-auto h-full flex items-center justify-between px-8">
          <Link to='/'><img src={logo} className='w-[100px] lg:w-[142px]'></img></Link>
          <Button text='Danh mục' icon={isOpenSubMenu ? <IoCloseSharp size={20} /> : <HiViewList size={20} />} onClick={() => { setIsOpenSubMenu(!isOpenSubMenu) }} />
          <Search />
          <UserActions setIsAccountModalOpen={setIsAccountModalOpen} />
      </div>

      <div className={`${isOpenSubMenu ? 'block' : 'hidden'} w-full h-[100dvh] bg-custom-bg`} onClick={() => { setIsOpenSubMenu(!isOpenSubMenu) }}>
        <div className={`${isOpenSubMenu ? 'max-h-[450px] overflow-y-scroll' : 'h-0 overflow-hidden'} custom-scrollbar absolute w-full bg-bg top-[68px] border-b-2 border-t-2`}
        onClick={(e) => e.stopPropagation()}> 
          <SubHeader />
        </div>
      </div>

      <AccountModal isOpen={isAccountModalOpen} closeModal={closeAccountModal} />
    </header>
  )
}

export default Header