import Button from "../../../core/components/Button/Button"
import arrowIcon from "../../../core/assets/icon/rightArrow-icon.png"

interface HeadingProps {
    text: string
}

const Heading: React.FC<HeadingProps> = ({ text }) => {
  return (
    <div className="flex justify-between">
        <div className="font-heading text-headingText text-headingColor uppercase">{text}</div>
        <Button text="Xem thêm" icon={arrowIcon} iconPosition="right"></Button>
    </div>
  )
}

export default Heading