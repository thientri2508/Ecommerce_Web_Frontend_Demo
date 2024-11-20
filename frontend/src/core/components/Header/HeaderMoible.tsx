import { useEffect, useState } from 'react';
import bagIcon from '../../assets/icon/bag-icon.png'
import listIcon from '../../assets/icon/list-icon.png'
import { FiSearch } from "react-icons/fi"

const HeaderMoible = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`flex justify-between items-center md:hidden w-full h-[50px] ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'} fixed z-50 px-3 transition-all duration-500`}>
        <div className="w-[75%] h-[35px] relative">
            <input 
            type="search" 
            placeholder="Hãy nhập sản phẩm cần tìm..." 
            className={`w-full h-full pl-3 pr-10 focus:outline-none ${isScrolled ? 'bg-gray-100' : 'bg-white'}`}
            />
            <div className='absolute right-2 top-2 cursor-pointer'><FiSearch size={20} /></div>
        </div>
        <div className='relative'>
          <img src={bagIcon} className="w-[25px] h-[25px] cursor-pointer"></img>
          <div className='absolute z-10 w-[21px] h-[21px] text-[7px] text-[#FFF] rounded-[50%] bg-bg-alt2 right-[-10px] top-[-8px] flex items-center justify-center'>
                <span>99+</span>
          </div>
        </div>
        <div><img src={listIcon} className="w-[20px] h-[20px] cursor-pointer"></img></div>
    </header>
  )
}

export default HeaderMoible