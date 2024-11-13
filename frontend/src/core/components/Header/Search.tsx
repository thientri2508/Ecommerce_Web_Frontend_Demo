import searchIcon from '../../assets/icon/search-icon.png'

export const Search = () => {
  return (
    <div className="relative p-[1px] rounded-[24px] bg-gradient-to-r from-[#D91D2C] via-[#E14B3E] to-[#FFDA44] w-[551px] h-[40px]">
        <input 
        type="search" 
        placeholder="Hãy nhập từ khoá, sản phẩm cần tìm" 
        className="w-full h-full pl-6 pr-12 rounded-[24px] focus:outline-none bg-white"
        />
        <div className='absolute top-[7px] right-[18px] cursor-pointer'><img src={searchIcon}></img></div>
    </div>
  )
}
