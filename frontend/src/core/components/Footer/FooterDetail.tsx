import { useState } from 'react';
import './style.css'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md';

type SectionState = {
  about: boolean;
  support: boolean;
  cooperation: boolean;
};

const FooterDetail = () => {

  const [isOpen, setIsOpen] = useState<SectionState>({
    about: false,
    support: false,
    cooperation: false,
  });

  const toggleSection = (section: keyof SectionState) => {
    setIsOpen((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div className='w-full justify-center flex flex-col md:flex-row gap-2 md:gap-[65px]'>
        <div>
            <div className='hidden md:block font-semibold text-headingFooter uppercase'>Về VIMALL</div>
            <div className="md:hidden flex justify-between items-center font-semibold text-headingFooter uppercase cursor-pointer select-none" onClick={() => toggleSection('about')}>
                <div>Về VIMALL</div>
                {isOpen.about ? (<MdKeyboardArrowUp size='30' />) : (<MdKeyboardArrowDown size='30' />)}
            </div>
            <ul className={`*:text-text *:text-textFooter ${isOpen.about? 'h-[110px] overflow-clip' : 'h-0 overflow-hidden'} list-footer gap-6 md:gap-4 md:h-auto md:overflow-auto transition-all duration-300`}>
              <li>Giới thiệu VIMALL</li>
              <li>Chính sách bảo mật</li>
              <li>Chính sách giải quyết khiếu nại</li>
              <li>Chính sách đổi điểm thưởng</li>
            </ul>
        </div>

        <div>
            <div className='hidden md:block font-semibold text-headingFooter uppercase'>Hỗ trợ khách hàng</div>
            <div className="md:hidden flex justify-between items-center font-semibold text-headingFooter uppercase cursor-pointer select-none" onClick={() => toggleSection('support')}>
                <div>Hỗ trợ khách hàng</div>
                {isOpen.support ? (<MdKeyboardArrowUp size='30' />) : (<MdKeyboardArrowDown size='30' />)}
            </div>
            <ul className={`*:text-text *:text-textFooter ${isOpen.support? 'h-[150px] overflow-clip' : 'h-0 overflow-hidden'} list-footer gap-6 md:gap-4 md:h-auto md:overflow-auto transition-all duration-300`}>
              <li>Trung tâm hỗ trợ</li>
              <li>Gửi yêu cầu hỗ trợ</li>
              <li>Phương thức giao hàng</li>
              <li>Chính sách đổi trả</li>
              <li>Chính sách bảo hành</li>
            </ul>
        </div>

        <div>
            <div className='hidden md:block font-semibold text-headingFooter uppercase'>Hợp tác cùng VIMALL</div>
            <div className="md:hidden flex justify-between items-center font-semibold text-headingFooter uppercase cursor-pointer select-none" onClick={() => toggleSection('cooperation')}>
                <div>Hợp tác cùng VIMALL</div>
                {isOpen.cooperation ? (<MdKeyboardArrowUp size='30' />) : (<MdKeyboardArrowDown size='30' />)}
            </div>
            <ul className={`*:text-text *:text-textFooter ${isOpen.cooperation? 'h-[110px] overflow-clip' : 'h-0 overflow-hidden'} list-footer gap-6 md:gap-4 md:h-auto md:overflow-auto transition-all duration-300`}>
              <li>Chính sách bán hàng</li>
              <li>Quy trình kiểm duyệt</li>
              <li>Mở cửa hàng trên VIMALL</li>
            </ul>
        </div>

    </div>
  )
}

export default FooterDetail