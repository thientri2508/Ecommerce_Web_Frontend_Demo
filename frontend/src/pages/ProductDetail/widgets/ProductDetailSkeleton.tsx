import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductDetailSkeleton = () => {
  return (
    <main className="w-full bg-[#f5f5f5] pb-20">
      <div className="w-full md:max-w-[1340px] m-auto pt-8">
        <div className="flex flex-col lg:flex-row gap-6 p-6 lg:justify-between">
          {/* Cột Hình ảnh */}
          <div className="w-[37%] flex justify-between items-center">
            
            <div className="mt-4">
              {Array(5)
                .fill(0)
                .map((_, idx) => (
                  <Skeleton key={idx} height={60} width={60} />
                ))}
            </div>
            <div className="w-[83%] h-full"><Skeleton width="100%" height="100%" /></div>
          </div>

          {/* Cột Thông tin */}
          <div className="w-[58%] flex flex-col gap-4">
            <Skeleton height={50} width="90%" />
            <Skeleton height={60} width="60%" />
            <Skeleton height={35} width="40%" />
            <Skeleton height={35} width="70%" />
            <div className="flex gap-4">
              <Skeleton height={50} width={200} />
              <Skeleton height={50} width={200} />
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-12">
            <div className="w-[37%] flex justify-center items-center gap-12">
                <Skeleton height={150} width={150} />
                <div className="flex flex-col gap-2">
                    <Skeleton height={25} width={280} />
                    <Skeleton height={25} width={230} />
                    <Skeleton height={30} width={200} className="mt-5" />
                </div>
            </div>
            <div className="w-[58%] flex justify-between items-center">
                <Skeleton height={120} width={250} />
                <Skeleton height={120} width={250} />
                <Skeleton height={120} width={250} />
            </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetailSkeleton;
