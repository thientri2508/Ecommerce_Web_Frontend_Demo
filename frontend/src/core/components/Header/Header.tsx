import logo from '../../assets/logo/logo.png'
import listIcon from '../../assets/icon/list-icon.png'
import xIcon from '../../assets/icon/x-icon.png'
import Button from '../Button/Button'
import UserActions from './UserActions'
import { Search } from './Search'
import { useState } from 'react'
import { SubHeader } from '../SubHeader/SubHeader'

const Header = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full h-[75px] bg-bg sticky z-50 top-[-1px] border-solid border-b-2 shadow-custom-shadow">
      <div className="max-w-[1400px] m-auto h-full flex items-center justify-between px-8">
          <div><img src={logo}></img></div>
          <Button text='Danh mục' icon={isOpen ? xIcon:listIcon} onClick={() => { setIsOpen(!isOpen) }} />
          <Search />
          <UserActions />
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} w-full h-[100dvh] bg-custom-bg`} onClick={() => { setIsOpen(!isOpen) }}>
        <div className={`${isOpen ? 'h-[450px] overflow-visible' : 'h-0 overflow-hidden'} absolute w-full bg-bg top-[72px] border-b-2 border-t-2`}
        onClick={(e) => e.stopPropagation()}> 
          <SubHeader />
        </div>
      </div>

    </header>
  )
}

export default Header