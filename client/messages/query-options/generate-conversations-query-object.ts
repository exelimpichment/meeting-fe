import { CONVERSATIONS_KEY } from '@/client/constants';
import { getConversations } from '@/fetchers/conversations/get-conversations';
import { queryOptions } from '@tanstack/react-query';

export const generateConversationsQueryObject = (options?: {
  headers: { Cookie: string };
}) => {
  return queryOptions({
    queryKey: [CONVERSATIONS_KEY],
    queryFn: () => getConversations(options),
  });
};
