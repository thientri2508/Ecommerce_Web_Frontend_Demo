
const ProductListLoading = () => {

    const products_loading = Array.from({ length: 10 });

    return (
        <div className="mt-8 w-full md:px-10 py-12">
            <ul className="flex flex-wrap gap-4 mt-10 md:ml-[8px]"> 
                {products_loading.map((_, index) => (
                <li key={index} className="w-[calc(50%-16px)] md:w-[calc(33%-16px)] lg:w-[calc(25%-16px)] xl:w-[calc(20%-16px)]">
                    <div className="flex flex-col bg-slate-100 w-full h-[365px] animate-pulse rounded-xl p-4 gap-3">
                    <div className="bg-neutral-400/50 w-full h-32 animate-pulse rounded-md"></div>
                    <div className="flex flex-col gap-2">
                        <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
                        <div className="bg-neutral-400/50 w-4/5 h-4 animate-pulse rounded-md"></div>
                        <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
                        <div className="bg-neutral-400/50 w-2/4 h-4 animate-pulse rounded-md"></div>
                    </div>
                    </div>
                </li>
                ))}
            </ul>
        </div>
      )
}

export default ProductListLoading