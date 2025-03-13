// import { getConversation } from '@/components';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import MessageList from '@/components/conversations/MessageList';
import { getQueryClient } from '@/lib/get-query-client';
import { getConversation } from '@/fetchers';
import { Suspense } from 'react';

const Conversations = () => {
  const queryClient = getQueryClient();

  queryClient.prefetchQuery({
    queryKey: ['conversation'],
    queryFn: () => getConversation(),
  });

  return (
    <>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<div>Loading ...</div>}>
          <MessageList />
        </Suspense>
      </HydrationBoundary>
    </>
  );
};

export default Conversations;
