import { generateMessagesQueryObject } from '@/client/messages/query-options/generate-messages-query-object';
import { MessageListSkeleton } from '@/client/messages/components/MessageListSkeleton';
import { MessageList } from '@/client/messages/components/MessageList';
import { dehydrate, HydrationBoundary } from '@tanstack/react-query';
import { getQueryClient } from '@/lib/get-query-client';
import { Suspense } from 'react';
import { cookies } from 'next/headers';

type ConversationsPageProps = {
  params: Promise<{ conversationId: string }>;
};

export default async function ConversationsPage({
  params,
}: ConversationsPageProps) {
  const { conversationId } = await params;
  const cookieStore = await cookies();

  const queryClient = getQueryClient();

  queryClient.prefetchQuery(
    generateMessagesQueryObject(conversationId, {
      headers: {
        Cookie: cookieStore.toString(),
      },
    }),
  );

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
