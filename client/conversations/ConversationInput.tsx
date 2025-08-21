'use client';

import { useMessagesRealtime } from '@/client/messages/hooks/use-messages-realtime';
import { useParams } from 'next/navigation';
import { Button } from '@/client/ui/button';
import { Input } from '@/client/ui/input';
import { ArrowUp } from 'lucide-react';
import { useState } from 'react';

export const ConversationInput = () => {
  const { conversationId } = useParams<{ conversationId: string }>();
  const [input, setInput] = useState('');

  const { sendMessage } = useMessagesRealtime({ conversationId });

  const sendMessageHandler = (input: string) => {
    sendMessage(input);
  };

  return (
    <div className="flex w-full items-center justify-center pb-4">
      <Input
        id="message"
        placeholder="Type your message..."
        className="h-10 w-4/5 pr-14"
        autoComplete="off"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />

      <Button
        disabled={!input.trim()}
        icon={ArrowUp}
        className="h-7 w-7 -translate-x-10 rounded-full p-0"
        onClick={() => {
          sendMessageHandler(input);
        }}
      ></Button>
    </div>
  );
};
