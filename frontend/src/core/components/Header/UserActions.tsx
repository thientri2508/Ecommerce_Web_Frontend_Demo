import coinIcon from '../../assets/icon/coin-icon.png'
import likeIcon from '../../assets/icon/like-icon.png'
import bagIcon from '../../assets/icon/bag-icon.png'
import accountIcon from '../../assets/icon/account-icon.png'

const UserActions = () => {
  return (
    <ul className='flex gap-6 *:cursor-pointer *:text-[12px]'>
        <li className='hidden lg:block'>
            <ul className='flex flex-col items-center gap-y-[5px]'>
                <li><img src={coinIcon} className='w-[20px] h-[20px]'></img></li>
                <li className='text-center'>Đổi điểm</li>
            </ul>
        </li>
        <li className='hidden lg:block'>
            <ul className='flex flex-col items-center gap-y-[5px]'>
                <li><img src={likeIcon} className='w-[20px] h-[20px]'></img></li>
                <li className='text-center'>Yêu thích</li>
            </ul>
        </li>
        <li>
            <ul className='flex flex-col items-center gap-y-[5px]'>
                <li><img src={accountIcon} className='w-[20px] h-[20px]'></img></li>
                <li className='text-center'>Tài khoản</li>
            </ul>
        </li>
        <li className='relative'>
            <ul className='flex flex-col items-center gap-y-[5px]'>
                <li><img src={bagIcon} className='w-[20px] h-[20px]'></img></li>
                <li className='text-center'>Giỏ hàng</li>
            </ul>
            <div className='absolute z-10 w-[23px] h-[23px] text-[8px] text-[#FFF] rounded-[50%] bg-bg-alt2 right-[0px] top-[-10px] flex items-center justify-center'>
                <span>99+</span>
            </div>
        </li>
    </ul>
  )
}

export default UserActions