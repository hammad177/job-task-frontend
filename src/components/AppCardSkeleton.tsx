import { Skeleton } from "./ui/skeleton";

const AppCardSkeleton = () => {
  return (
    <div className="p-4 w-full space-y-4">
      <div className="flex justify-between">
        <Skeleton className="h-6 w-1/2 bg-slate-300" />
        {/* Job title skeleton */}
        <Skeleton className="h-6 w-1/6 bg-slate-300" />
        {/* Badge skeleton */}
      </div>
      <Skeleton className="w-full h-[350px] rounded-sm bg-slate-300" />
      {/* Image skeleton */}
      <Skeleton className="h-5 w-3/4 bg-slate-300" />
      {/* Job description skeleton */}
      <Skeleton className="h-4 w-1/2 bg-slate-300" />
      {/* Additional skeleton for description */}
    </div>
  );
};

export default AppCardSkeleton;
