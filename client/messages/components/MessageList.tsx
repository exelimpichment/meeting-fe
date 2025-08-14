'use client';

import { useMessagesRealtime } from '@/client/messages/hooks/use-messages-realtime';
import { useMessages } from '@/client/messages/hooks/use-messages';
import { Message } from '@/client/messages/components/Message';
import { useParams } from 'next/navigation';
import React from 'react';

export const MessageList = () => {
  const { conversationId } = useParams<{ conversationId: string }>();

  // const { data: messages } = useMessages({ conversationId });
  // useMessagesRealtime({ conversationId });

  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex w-4/5 flex-col">
        {/* {messages.map((message) => (
          <Message
            content={message.content}
            sender={message.users.name === 'assistant' ? 'assistant' : 'user'}
            avatar={message.users.image_url}
            timestamp={message.created_at}
            key={message.id}
            // status={message.status}
            status={'delivered'}
          />
        ))} */}
      </div>
    </div>
  );
};
