import { generateMessagesQueryObject } from '@/client/messages/query-options/generate-messages-query-object';
import { useSuspenseQuery } from '@tanstack/react-query';

export const useMessages = ({ conversationId }: { conversationId: string }) => {
  return useSuspenseQuery(generateMessagesQueryObject(conversationId));
};
