import { Skeleton } from '@/client/ui/skeleton';
import { cn } from '@/lib/utils';

type MessageSkeletonProps = {
  count?: number;
  variant?: 'default' | 'alternating';
};

export const MessageSkeleton = ({
  count = 3,
  variant = 'alternating',
}: MessageSkeletonProps) => {
  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, index) => {
        // for alternating variant, alternate between user and assistant
        // for default variant, all skeletons are assistant messages
        const isUser = variant === 'alternating' ? index % 2 === 1 : false;

        return (
          <div
            key={index}
            className={cn(
              'flex w-full gap-2',
              isUser ? 'justify-end' : 'justify-start',
            )}
          >
            {!isUser && (
              <Skeleton className="h-8 w-8 rounded-full flex-shrink-0" />
            )}

            <div className="flex flex-col max-w-[80%]">
              <Skeleton
                className={cn(
                  'h-16 rounded-lg',
                  isUser ? 'rounded-tr-none' : 'rounded-tl-none',
                  // each skeleton a different width for a more natural look
                  index % 3 === 0 ? 'w-40' : index % 3 === 1 ? 'w-52' : 'w-64',
                )}
              />
              <Skeleton className="h-3 w-16 mt-1 ml-1" />
            </div>

            {isUser && (
              <Skeleton className="h-8 w-8 rounded-full flex-shrink-0" />
            )}
          </div>
        );
      })}
    </div>
  );
};
