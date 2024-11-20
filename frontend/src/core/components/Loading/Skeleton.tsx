
export const Skeleton = () => {
  return (
    <>
    <div className="flex flex-col bg-slate-100 w-full h-[340px] animate-pulse rounded-xl p-4 gap-3">
        <div className="bg-neutral-400/50 w-full h-32 animate-pulse rounded-md"></div>
        <div className="flex flex-col gap-2">
            <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
            <div className="bg-neutral-400/50 w-4/5 h-4 animate-pulse rounded-md"></div>
            <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
            <div className="bg-neutral-400/50 w-2/4 h-4 animate-pulse rounded-md"></div>
        </div>
    </div>
    </>
  )
}
