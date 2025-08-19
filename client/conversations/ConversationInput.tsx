'use client';

import { useState } from 'react';
import { Input } from '@/client/ui/input';
import { useParams } from 'next/navigation';
import { useMessagesRealtime } from '@/client/messages/hooks/use-messages-realtime';

export const ConversationInput = () => {
  const { conversationId } = useParams<{ conversationId: string }>();
  const [input, setInput] = useState('');

  useMessagesRealtime({ conversationId });

  return (
    <div className="flex w-full items-center justify-center pb-4">
      <Input
        id="message"
        placeholder="Type your message..."
        className="h-10 w-4/5"
        autoComplete="off"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
    </div>
  );
};
