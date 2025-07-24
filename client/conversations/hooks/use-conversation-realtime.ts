'use client';

import { useEffect } from 'react';

export const useConversationRealtime = ({
  conversationId,
}: {
  conversationId: string;
}) => {
  useEffect(() => {
    const socket = new WebSocket(
      `${process.env.NEXT_PUBLIC_API_URL}/conversations/realtime`,
    );

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log(data);
    };
  }, []);
};
