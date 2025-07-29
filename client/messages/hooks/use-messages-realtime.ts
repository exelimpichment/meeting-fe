'use client';

import { useEffect } from 'react';

export const useMessagesRealtime = ({
  conversationId,
}: {
  conversationId: string;
}) => {
  useEffect(() => {
    const socket = new WebSocket(
      `${process.env.NEXT_PUBLIC_API_URL}/api/conversations/realtime`,
    );

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log(data);
    };
  }, []);
};
