import { MessageSkeleton } from '@/client';

export const MessageListSkeleton = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-4/5 flex flex-col">
        <MessageSkeleton count={10} variant="alternating" />
      </div>
    </div>
  );
};
