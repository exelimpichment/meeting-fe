'use client';

import { useSocketClient } from '@/client/messages/hooks/use-socket-client';
import { MessageEventType } from '@/client/messages/types';
import { useParams } from 'next/navigation';
import { Button } from '@/client/ui/button';
import { Input } from '@/client/ui/input';
import { ArrowUp } from 'lucide-react';
import { useCallback, useState } from 'react';
import { useEnterKey } from '@/client/common/hooks/use-enter-key';

export const ConversationInput = () => {
  const { conversationId } = useParams<{ conversationId: string }>();
  const [input, setInput] = useState('');

  const { sendMessage } = useSocketClient({
    socketUrl: `${process.env.NEXT_PUBLIC_API_URL}/ws/messages?conversation_id=${encodeURIComponent(conversationId)}`,
  });

  const handleSendMessage = useCallback(() => {
    if (!input.trim()) return;

    sendMessage({
      event: MessageEventType.SEND,
      data: { message: input, conversationId },
    });

    setInput('');
  }, [conversationId, input, sendMessage]);

  const { handleKeyDown } = useEnterKey(handleSendMessage);

  return (
    <div className="flex w-full items-center justify-center pb-4">
      <Input
        id="message"
        placeholder="Type your message..."
        className="h-10 w-4/5 pr-14"
        autoComplete="off"
        value={input}
        onChange={(event) => setInput(event.target.value)}
        onKeyDown={handleKeyDown}
      />

      <Button
        disabled={!input.trim()}
        icon={ArrowUp}
        className="h-7 w-7 -translate-x-10 rounded-full p-0"
        onClick={handleSendMessage}
      ></Button>
    </div>
  );
};
