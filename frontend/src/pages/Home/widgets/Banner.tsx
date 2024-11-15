interface BannerProps {
    img: string
}

const Banner: React.FC<BannerProps> = ({ img }) => {
  return (
    <div className="w-full mt-8"><img className="w-full aspect-video md:aspect-auto object-fill md:rounded-[32px] shadow-custom-shadow" src={img}></img></div>
  )
}

export default Banner