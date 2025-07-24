import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { CONVERSATIONS_KEY } from '@/client/conversations';
import { getQueryClient } from '@/lib/get-query-client';
import { getConversation } from '@/fetchers';
import {
  MessageListSkeleton,
  MessageList,
} from '@/client/conversations/components';
import { Suspense } from 'react';

type ConversationsPageProps = {
  params: Promise<{ conversationId: string }>;
};

export default async function ConversationsPage({
  params,
}: ConversationsPageProps) {
  const { conversationId } = await params;

  const queryClient = getQueryClient();

  queryClient.prefetchQuery({
    queryKey: [CONVERSATIONS_KEY, conversationId],
    queryFn: () => getConversation(conversationId),
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
}
