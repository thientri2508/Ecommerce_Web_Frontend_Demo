import { Skeleton } from "../../../core/components/Loading/Skeleton";

const ProductListLoading = () => {
    const products_loading = Array.from({ length: 12 });

    return (
        <div className="w-full">
            <ul className="flex flex-wrap gap-4 ml-4"> 
                {products_loading.map((_, index) => (
                <li key={index} className="w-[calc(25%-16px)]">
                    <Skeleton />
                </li>
                ))}
            </ul>
        </div>
      )
}

export default ProductListLoading