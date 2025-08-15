import type { ApiResponses } from '@exelimpichment/messenger';

type GetConversationsResponse =
  ApiResponses['GET /api/conversations/:id/messages'];

export const getConversations = async (): Promise<GetConversationsResponse> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/conversations`,
    {
      credentials: 'include',
    },
  );

  return await response.json();
};
