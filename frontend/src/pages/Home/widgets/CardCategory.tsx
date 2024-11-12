import categoryIcon from "../../../core/assets/icon/category-icon.png"

const CardCategory = () => {
  return (
    <div className="w-[78px] h-[126px] flex flex-col items-center gap-3 cursor-pointer">
        <div className="bg-bg w-full h-[78px] flex items-center justify-center rounded-[16px] shadow-custom-shadow"><img src={categoryIcon}></img></div>
        <div>Thực phẩm & đồ uống</div>
    </div>
  )
}

export default CardCategory