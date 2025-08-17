'use client';

import { useMessagesRealtime } from '@/client/messages/hooks/use-messages-realtime';
import { useMessages } from '@/client/messages/hooks/use-messages';
import { Message } from '@/client/messages/components/Message';
import { useParams } from 'next/navigation';
import React from 'react';

export const MessageList = () => {
  const { conversationId } = useParams<{ conversationId: string }>();
  useMessagesRealtime({ conversationId });
  const { data: messages } = useMessages({ conversationId });
  return (
    <div className="flex w-full flex-1 shrink flex-col items-center overflow-y-auto">
      <div className="flex w-4/5 flex-1 flex-col gap-2">
        {messages.map((message) => (
          <Message
            content={message.content}
            sender={message.users.name === 'assistant' ? 'assistant' : 'user'}
            avatar={message.users.image_url}
            timestamp={message.created_at}
            key={message.id}
            // status={message.status}
            status={'delivered'}
          />
        ))}
      </div>
    </div>
  );
};
