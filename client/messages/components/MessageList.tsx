// MessageList.tsx
'use client';

import { useMessagesRealtime } from '@/client/messages/hooks/use-messages-realtime';
import { useMessages } from '@/client/messages/hooks/use-messages';
import { useParams } from 'next/navigation';
import React from 'react';

export const MessageList = () => {
  const { conversationId } = useParams<{ conversationId: string }>();

  const { data: messages } = useMessages({ conversationId });
  useMessagesRealtime({ conversationId });

  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex w-4/5 flex-col">
        {/* {messages.map((msg) => (
          <Message
            content={msg.content}
            sender={msg.sender}
            avatar={msg.avatar}
            timestamp={msg.timestamp}
            key={msg.id}
            status={msg.status}
          />
        ))} */}
      </div>
    </div>
  );
};
