interface BannerProps {
  name: string;
}

const Banner: React.FC<BannerProps> = ({ name }) => {
  return (
    <div className="w-full my-8">
      <img
        className="w-full aspect-video md:aspect-auto object-fill md:rounded-[32px] shadow-custom-shadow"
        src={name}
      />
    </div>
  );
};

export default Banner;
