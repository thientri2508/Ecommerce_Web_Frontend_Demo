interface BannerProps {
    img: string
}

const Banner: React.FC<BannerProps> = ({ img }) => {
  return (
    <div className="w-full mt-8"><img className="w-full rounded-[32px]" src={img}></img></div>
  )
}

export default Banner