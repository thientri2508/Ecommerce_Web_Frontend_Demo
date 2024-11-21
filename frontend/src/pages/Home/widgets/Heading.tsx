import Button from "../../../core/components/Button/Button"
import { FaArrowRight } from "react-icons/fa6"

interface HeadingProps {
    text: string
}

const Heading: React.FC<HeadingProps> = ({ text }) => {
  return (
    <div className="flex justify-between items-center px-4 md:px-7">
        <div className="font-heading text-[18px] md:text-headingText text-headingColor uppercase">{text}</div>
        <Button text="Xem thêm" icon={<FaArrowRight size={20} />} iconPosition="right" colorConfig="stroke"></Button>
    </div>
  )
}

export default Heading