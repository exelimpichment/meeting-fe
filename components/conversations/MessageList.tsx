// MessageList.tsx
'use client';

import { getConversation } from '@/fetchers';
import { useSuspenseQuery } from '@tanstack/react-query';
// import { getConversation } from './actions';

import React from 'react';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

const MessageList = () => {
  // const search = searchParams.get('count');
  const [key, setKey] = React.useState('1');

  const [isPending, startTransition] = React.useTransition();

  const handleClick = async () => {
    startTransition(() => {
      setKey('2');
    });
  };

  const {
    data: messages,
    // isFetching,
    // isLoading,
    // isPending,
  } = useSuspenseQuery({
    queryKey: ['conversation', key],
    queryFn: () => getConversation(),
  });

  // console.log(isFetching, isLoading, isPending);
  console.log(isPending);

  return (
    <div className="text-red-700">
      <Button onClick={handleClick}>plus</Button>
      {messages.map((msg) => (
        <p
          key={msg.id}
          className={cn(
            'text-red-700',
            isPending ? 'text-red-200' : 'text-red-700',
          )}
        >
          {msg.message} - {msg.timestamp}
        </p>
      ))}
    </div>
  );
};

export default MessageList;
