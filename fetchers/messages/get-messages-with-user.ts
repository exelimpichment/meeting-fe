import { ApiResponses } from '@exelimpichment/messenger';

export const getMessagesWithUser = async (
  conversationId: string,
): Promise<ApiResponses['GET api/conversations']> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/conversations/${conversationId}/messages`,
    {
      credentials: 'include',
    },
  );
  return response.json();
};
