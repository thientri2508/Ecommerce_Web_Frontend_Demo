import "./style.css";

interface BannerSkeletonProps {
  heightConfig: "banner" | "slider";
}

export const BannerSkeleton: React.FC<BannerSkeletonProps> = ({
  heightConfig,
}) => {
  const heightClasses = heightConfig === "banner" ? "h-[275px]" : "h-full";

  return (
    <div
      className={`w-full ${heightClasses} bg-gray-300 md:rounded-[32px] relative overflow-hidden`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-skeleton"></div>
    </div>
  );
};
