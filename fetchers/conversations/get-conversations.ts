import type { ApiResponses } from '@exelimpichment/messenger';

type GetConversationsResponse = ApiResponses['GET api/conversations'];

export const getConversations = async (options?: {
  headers: { Cookie: string };
}): Promise<GetConversationsResponse> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/conversations`,
    {
      credentials: 'include',
      ...(options?.headers ? { headers: options.headers } : {}),
    },
  );

  return await response.json();
};
