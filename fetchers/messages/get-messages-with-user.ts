import { messages, users } from '@exelimpichment/messenger';

type MessageWithUser = messages & { users: users };

export const getMessagesWithUser = async (
  conversationId: string,
): Promise<MessageWithUser[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/conversations/${conversationId}/messages`,
    {
      credentials: 'include',
    },
  );
  return response.json();
};
