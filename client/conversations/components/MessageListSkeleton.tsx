import { MessageSkeleton } from '@/client';

export const MessageListSkeleton = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex w-4/5 flex-col">
        <MessageSkeleton count={10} variant="alternating" />
      </div>
    </div>
  );
};
