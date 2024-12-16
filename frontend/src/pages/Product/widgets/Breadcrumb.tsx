import { BsDashLg } from "react-icons/bs";

const Breadcrumb = () => {

  return (
    <ul className="flex gap-2 items-center text-text-muted text-[12px]">
        <li>Thời trang</li>
        <li><BsDashLg /></li>
        <li>Thời trang nam</li>
        <li><BsDashLg /></li>
        <li>Áo thun nam</li>
    </ul>
  )
}

export default Breadcrumb