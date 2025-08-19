import { useSuspenseQuery } from '@tanstack/react-query';
import { generateConversationsQueryObject } from '@/client/messages/query-options/generate-conversations-query-object';

export const useConversations = () => {
  return useSuspenseQuery(generateConversationsQueryObject());
};
