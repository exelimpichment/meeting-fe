'use client';

import { useState } from 'react';
import { Input } from '@/client/ui/input';

export const ConversationInput = () => {
  const [input, setInput] = useState('');

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
