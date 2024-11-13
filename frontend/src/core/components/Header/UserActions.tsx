import coinIcon from '../../assets/icon/coin-icon.png'
import likeIcon from '../../assets/icon/like-icon.png'
import bagIcon from '../../assets/icon/bag-icon.png'
import accountIcon from '../../assets/icon/account-icon.png'

const UserActions = () => {
  return (
    <ul className='flex gap-8 *:cursor-pointer'>
        <li>
            <ul className='flex flex-col items-center gap-y-2'>
                <li><img src={coinIcon} className='w-[32px] h-[32px]'></img></li>
                <li>Đổi điểm</li>
            </ul>
        </li>
        <li>
            <ul className='flex flex-col items-center gap-y-2'>
                <li><img src={likeIcon} className='w-[32px] h-[32px]'></img></li>
                <li>Yêu thích</li>
            </ul>
        </li>
        <li>
            <ul className='flex flex-col items-center gap-y-2'>
                <li><img src={accountIcon} className='w-[32px] h-[32px]'></img></li>
                <li>Tài khoản</li>
            </ul>
        </li>
        <li className='relative'>
            <ul className='flex flex-col items-center gap-y-2'>
                <li><img src={bagIcon} className='w-[32px] h-[32px]'></img></li>
                <li>Giỏ hàng</li>
            </ul>
            <div className='absolute z-10 w-[30px] h-[30px] text-[10px] rounded-[50%] bg-bg-alt2 right-[-8px] top-[-10px] flex items-center justify-center'>
                <span>99+</span>
            </div>
        </li>
    </ul>
  )
}

export default UserActions