import { getConversations } from '@/fetchers/conversations/get-conversations';
import { useSuspenseQuery } from '@tanstack/react-query';
import { CONVERSATIONS_KEY } from '@/client/constants';

export const useConversations = () => {
  return useSuspenseQuery({
    queryKey: [CONVERSATIONS_KEY],
    queryFn: () => getConversations(),
  });
};
