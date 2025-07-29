export const getMessages = async (conversationId: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/conversations/${conversationId}/messages`,
    {
      credentials: 'include',
    },
  );
  return response.json();
};
