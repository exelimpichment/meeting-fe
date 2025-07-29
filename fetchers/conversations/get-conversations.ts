import * as types from '@exelimpichment/meeting-contracts';

type Conversations = types.ApiEndpoints['GET /api/conversations/']['response'];

export const getConversations = async (): Promise<Conversations> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/conversations`,
    {
      credentials: 'include',
    },
  );

  return await response.json();
};
