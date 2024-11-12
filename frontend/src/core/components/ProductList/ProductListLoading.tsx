
const ProductListLoading = () => {

    const products_loading = Array.from({ length: 10 });

    return (
        <div className="mt-8 w-full md:px-10 py-12">
            <ul className="flex flex-wrap gap-8 mt-12 px-6">
                {products_loading.map((_, index) => (
                <li key={index}>
                    <div className="flex flex-col bg-slate-100 w-[222px] h-[365px] animate-pulse rounded-xl p-4 gap-3">
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