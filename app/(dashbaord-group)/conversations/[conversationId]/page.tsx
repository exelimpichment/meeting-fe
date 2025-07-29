import { MessageListSkeleton } from '@/client/messages/components/MessageListSkeleton';
import { generateMessagesQueryObject } from '@/client/messages/hooks/use-messages';
import { MessageList } from '@/client/messages/components/MessageList';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { getQueryClient } from '@/lib/get-query-client';
import { Suspense } from 'react';

type ConversationsPageProps = {
  params: Promise<{ conversationId: string }>;
};

export default async function ConversationsPage({
  params,
}: ConversationsPageProps) {
  const { conversationId } = await params;

  const queryClient = getQueryClient();

  queryClient.prefetchQuery(generateMessagesQueryObject(conversationId));

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
