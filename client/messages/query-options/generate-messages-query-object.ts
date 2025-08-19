import { getMessagesWithUser } from '@/fetchers/messages/get-messages-with-user';
import { queryOptions } from '@tanstack/react-query';
import { MESSAGES_KEY } from '@/client/constants';

export const generateMessagesQueryObject = (
  conversationId: string,
  options?: { headers: { Cookie: string } },
) => {
  return queryOptions({
    queryKey: [MESSAGES_KEY, conversationId],
    queryFn: () => getMessagesWithUser(conversationId, options),
  });
};
