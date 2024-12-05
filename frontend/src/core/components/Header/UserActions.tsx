import coinIcon from '../../assets/icon/coin-icon.png'
import likeIcon from '../../assets/icon/like-icon.png'
import bagIcon from '../../assets/icon/bag-icon.png'
import accountIcon from '../../assets/icon/account-icon.png'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../../constants/constants.router'

interface UserActionProps {
    setIsAccountModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserActions: React.FC<UserActionProps> = ({setIsAccountModalOpen}) => {

    const navigate = useNavigate();
    const handleClick = (url: string) => {
        navigate(url);
    };

  return (
    <ul className='flex gap-6 *:cursor-pointer *:text-[12px]'>
        <li className='hidden lg:block'>
            <ul className='flex flex-col items-center gap-y-[5px] group perspective-1000'>
                <li><img src={coinIcon} className='w-[20px] h-[20px] flip-effect'></img></li>
                <li className='text-center'>Đổi điểm</li>
            </ul>
        </li>
        <li className='hidden lg:block'>
            <ul className='flex flex-col items-center gap-y-[5px] group perspective-1000'>
                <li><img src={likeIcon} className='w-[20px] h-[20px] flip-effect'></img></li>
                <li className='text-center'>Yêu thích</li>
            </ul>
        </li>
        <li onClick={() => setIsAccountModalOpen(true)}>
            <ul className='flex flex-col items-center gap-y-[5px] group perspective-1000'>
                <li><img src={accountIcon} className='w-[20px] h-[20px] flip-effect'></img></li>
                <li className='text-center'>Tài khoản</li>
            </ul>
        </li>
        <li className='relative' onClick={() => handleClick(ROUTES.CART)}>
            <ul className='flex flex-col items-center gap-y-[5px] group perspective-1000'>
                <li><img src={bagIcon} className='w-[20px] h-[20px] flip-effect'></img></li>
                <li className='text-center'>Giỏ hàng</li>
            </ul>
            <div className='absolute z-10 w-[30px] h-[20px] text-[10px] text-[#FFF] rounded-[20px] bg-bg-alt2 right-[-7px] top-[-10px] flex items-center justify-center'>
                <span>0</span>
            </div>
        </li>
    </ul>
  )
}

export default UserActions