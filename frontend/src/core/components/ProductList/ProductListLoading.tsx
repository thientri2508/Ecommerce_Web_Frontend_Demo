import { Skeleton } from "../Loading/Skeleton";

const ProductListLoading = () => {
    const products_loading = Array.from({ length: 10 });

    return (
        <div className="mt-8 w-full md:px-10 py-12">
            <ul className="flex flex-wrap gap-4 mt-10 md:ml-[8px]"> 
                {products_loading.map((_, index) => (
                <li key={index} className="w-[calc(50%-4px)] md:w-[calc(33%-16px)] lg:w-[calc(25%-16px)] xl:w-[calc(20%-16px)]">
                   <Skeleton />
                </li>
                ))}
            </ul>
        </div>
      )
}

export default ProductListLoading