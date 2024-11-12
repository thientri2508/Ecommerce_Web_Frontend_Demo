import './style.css'

const FooterDetail = () => {
  return (
    <div className='flex gap-x-24'>
        <div>
            <div className='font-semibold text-headingFooter uppercase'>Về VIMALL</div>
            <ul className='*:text-text *:text-textFooter list-footer'>
              <li>Giới thiệu VIMALL</li>
              <li>Chính sách bảo mật</li>
              <li>Chính sách giải quyết khiếu nại</li>
              <li>Chính sách đổi điểm thưởng</li>
            </ul>
        </div>

        <div>
            <div className='font-semibold text-headingFooter uppercase'>Hỗ trợ khách hàng</div>
            <ul className='*:text-text *:text-textFooter list-footer'>
              <li>Trung tâm hỗ trợ</li>
              <li>Gửi yêu cầu hỗ trợ</li>
              <li>Phương thức giao hàng</li>
              <li>Chính sách đổi trả</li>
              <li>Chính sách bảo hành</li>
            </ul>
        </div>

        <div>
            <div className='font-semibold text-headingFooter uppercase'>Hợp tác cùng VIMALL</div>
            <ul className='*:text-text *:text-textFooter list-footer'>
            <li>Chính sách bán hàng</li>
            <li>Quy trình kiểm duyệt</li>
            <li>Mở cửa hàng trên VIMALL</li>
            </ul>
        </div>

    </div>
  )
}

export default FooterDetail