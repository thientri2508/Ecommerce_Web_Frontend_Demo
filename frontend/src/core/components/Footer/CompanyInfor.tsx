import logo from '../../assets/logo/logo-large.png'
import bookIcon from '../../assets/icon/book-icon.png'
import phoneIcon from '../../assets/icon/phone-icon.png'
import locationIcon from '../../assets/icon/location-icon.png'
import mailIcon from '../../assets/icon/mail-icon.png'

const CompanyInfor = () => {
  return (
    <ul className='w-[33%] flex flex-col gap-y-3'>
        <li className='font-semibold text-headingFooter'>Công ty TNHH thương mại điện tử VIMALL</li>
        <li><img src={logo}></img></li>
        <li className='flex gap-2 items-center text-text-footer'>
            <img src={bookIcon}></img>
            <span>Giấy chứng nhận ĐKKD số: 0318682724 Do Sở KHĐT TPHCM cấp ngày 24/09/2024</span>
        </li>
        <li className='flex gap-2 items-center text-text-footer'>
            <img src={locationIcon}></img>
            <span>Số 63 - 65 Đường Số 10, Khu Đô Thị Sala, Phường An Lợi Đông, Thành phố Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam</span>
        </li>
        <li className='flex gap-2 items-center text-text-footer'>
            <img src={mailIcon}></img>
            <span>Email: vimallecommerce@gmail.com</span>
        </li>
        <li className='flex gap-2 items-center text-text-footer'>
            <img src={phoneIcon}></img>
            <span>Tổng đài CSKH: <span className='text-headingFooter text-bg-alt1 font-medium'>0934094167</span></span>
        </li>
    </ul>
  )
}

export default CompanyInfor