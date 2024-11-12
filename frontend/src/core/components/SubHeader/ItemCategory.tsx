import rightIcon from '../../assets/icon/right-icon.png'
import questionIcon from '../../assets/icon/question-icon.png'

export const ItemCategory = () => {
  return (
    <ul>
        <li>
            <ul className='flex items-center justify-between w-[252px] h-[40px] px-[14px] cursor-pointer hover:bg-button-hover transition-all duration-300'>
            <li>
                <ul className='flex items-center gap-3'>
                <li><img src={questionIcon}></img></li>
                <li className='text-subCategory'>Thời trang</li>
                </ul>
            </li>
            <li><img src={rightIcon}></img></li>
            </ul>
        </li>
    </ul>
  )
}
