import mailIcon from '../../assets/icon/mail-icon.png'

const FooterForm = () => {
  return (
    <div className='mt-24 w-[418px]'>
        <div className='w-full h-[52px] relative'>
            <input type='text' placeholder='Hãy điền email của bạn'
                className='outline-none w-full h-full border-solid border-2 rounded-[8px] pl-[66px] pr-[100px]'></input>
            <img src={mailIcon} className='absolute top-[10px] left-[20px] w-[32px] h-[32px]'></img>
            <div className='w-[65px] h-[52px] bg-bg-alt1 cursor-pointer uppercase text-headingColor-alt font-bold absolute right-0 top-0 rounded-r-[8px] flex justify-center items-center'>gửi</div>
        </div>
        <div className='text-super-small text-text-footer w-full mt-[10px]'>Bằng cách đăng ký, bạn đồng ý với chúng tôi <span className='text-bg-alt1 cursor-pointer'>Điều khoản & Điều kiện và Chính sách quyền riêng tư & Cookie.</span></div>
    </div>
  )
}

export default FooterForm