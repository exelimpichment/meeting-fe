import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import {
  MessageListSkeleton,
  MessageList,
} from '@/client/conversations/components';
import { getQueryClient } from '@/lib/get-query-client';
import { getConversation } from '@/fetchers';
import { Suspense } from 'react';

const ConversationsPage = () => {
  const queryClient = getQueryClient();

  queryClient.prefetchQuery({
    queryKey: ['conversation'],
    queryFn: () => getConversation(),
  });

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<MessageListSkeleton />}>
          <MessageList />
        </Suspense>
      </HydrationBoundary>
    </>
  );
};

export default ConversationsPage;
