import { useBanner } from "../../hooks/banner/useBanner";
import ErrorFallback from "../ErrorFallback/ErrorFallback";
import { BannerSkeleton } from "../Loading/BannerSkeleton";

interface BannerProps {
  name: string;
}

const Banner: React.FC<BannerProps> = ({ name }) => {
  const { data, error, isLoading } = useBanner(name);

  return (
    <div className="w-full my-8">
      {isLoading && <BannerSkeleton heightConfig="banner" />}

      {error && (
        <ErrorFallback
          message={error instanceof Error ? error.message : "Lỗi từ máy chủ"}
        />
      )}

      {data && data[0]?.uri && !isLoading && !error && (
        <img
          className="w-full aspect-video md:aspect-auto object-fill md:rounded-[32px] shadow-custom-shadow"
          src={data[0]?.uri}
        />
      )}
    </div>
  );
};

export default Banner;
