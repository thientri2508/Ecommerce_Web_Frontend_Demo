import logo from '../../assets/logo/logo.png'
import Button from '../Button/Button'
import UserActions from './UserActions'
import { Search } from './Search'
import { useEffect, useState } from 'react'
import { SubHeader } from '../SubHeader/SubHeader'
import { Link, useLocation } from 'react-router-dom'
import { HiViewList } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {

  const [isOpen, setIsOpen] = useState(false)

  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className="hidden md:block w-full h-[70px] bg-bg sticky z-50 top-[-1px] border-solid border-b-2 shadow-custom-shadow-header">
      <div className="max-w-[1400px] m-auto h-full flex items-center justify-between px-8">
          <Link to='/'><img src={logo} className='w-[100px] lg:w-[142px]'></img></Link>
          <Button text='Danh mục' icon={isOpen ? <IoCloseSharp size={20} /> : <HiViewList size={20} />} onClick={() => { setIsOpen(!isOpen) }} />
          <Search />
          <UserActions />
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} w-full h-[100dvh] bg-custom-bg`} onClick={() => { setIsOpen(!isOpen) }}>
        <div className={`${isOpen ? 'max-h-[450px] overflow-y-scroll' : 'h-0 overflow-hidden'} custom-scrollbar absolute w-full bg-bg top-[68px] border-b-2 border-t-2`}
        onClick={(e) => e.stopPropagation()}> 
          <SubHeader />
        </div>
      </div>

    </header>
  )
}

export default Header