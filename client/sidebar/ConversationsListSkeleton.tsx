import { Skeleton } from '@/client/ui/skeleton';

export const ConversationsListSkeleton = () => {
  return (
    <div className="flex flex-col gap-1.5 px-2">
      <Skeleton className="h-12 w-full" />
      <Skeleton className="h-12 w-full" />
      <Skeleton className="h-12 w-full" />
      <Skeleton className="h-12 w-full" />
    </div>
  );
};
