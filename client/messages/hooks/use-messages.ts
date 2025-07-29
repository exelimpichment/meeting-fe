import { MESSAGES_KEY } from '@/client/constants';
import { getMessages } from '@/fetchers/messages/get-messages';
import { useSuspenseQuery } from '@tanstack/react-query';
import { queryOptions } from '@tanstack/react-query';

export const useMessages = ({ conversationId }: { conversationId: string }) => {
  return useSuspenseQuery(generateMessagesQueryObject(conversationId));
};

export const generateMessagesQueryObject = (conversationId: string) => {
  return queryOptions({
    queryKey: [MESSAGES_KEY, conversationId],
    queryFn: () => getMessages(conversationId),
  });
};
