
const ListCategory = () => {
  return (
    <div>
        <p className="text-category font-bold text-text cursor-pointer hover:text-bg-alt1 transition-all duration-200">Thời trang nữ</p>
        <ul className="*:text-text-muted *:cursor-pointer *:transition-all *:duration-200 text-subCategory flex flex-col gap-1 mt-2">
            <li className="hover:text-bg-alt1">Quần áo / Váy / Đầm</li>
            <li className="hover:text-bg-alt1">Phụ kiện</li>
            <li className="hover:text-bg-alt1">Giày dép</li>
            <li className="hover:text-bg-alt1">Túi xách</li>
            <li className="hover:text-bg-alt1">Xem thêm</li>
        </ul>
    </div>
  )
}

export default ListCategory