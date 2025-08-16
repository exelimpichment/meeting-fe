import { ApiResponses } from '@exelimpichment/messenger';

export const getMessagesWithUser = async (
  conversationId: string,
  options?: { headers: { Cookie: string } },
): Promise<ApiResponses['GET /api/conversations/:id/messages']> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/conversations/${conversationId}/messages`,
    {
      credentials: 'include',
      ...(options?.headers ? { headers: options.headers } : {}),
    },
  );
  return response.json();
};
