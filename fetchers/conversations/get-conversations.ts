import type { conversations } from '@exelimpichment/messenger';

export const getConversations = async (): Promise<conversations[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/conversations`,
    {
      credentials: 'include',
    },
  );

  return await response.json();
};
