// MessageList.tsx
'use client';

import {
  CONVERSATIONS_KEY,
  useConversationRealtime,
} from '@/client/conversations';
import { useSuspenseQuery } from '@tanstack/react-query';
import { getConversation } from '@/fetchers';
import { Message } from '@/client';
import React from 'react';
import { useParams } from 'next/navigation';

export const MessageList = () => {
  const { conversationId } = useParams<{ conversationId: string }>();

  const { data: messages } = useSuspenseQuery({
    queryKey: [CONVERSATIONS_KEY, conversationId],
    queryFn: () => getConversation(conversationId),
  });

  useConversationRealtime({ conversationId });

  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex w-4/5 flex-col">
        {messages.map((msg) => (
          <Message
            content={msg.content}
            sender={msg.sender}
            avatar={msg.avatar}
            timestamp={msg.timestamp}
            key={msg.id}
            status={msg.status}
          />
        ))}
      </div>
    </div>
  );
};
