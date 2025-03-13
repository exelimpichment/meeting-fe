import { Avatar, AvatarFallback, AvatarImage } from '@/client/ui/avatar';
import { Check, CheckCheck } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { MessageProps } from '@/client';
import { cn } from '@/lib/utils';
import type React from 'react';

export function Message({
  content,
  sender,
  timestamp = new Date(),
  avatar,
  status = 'sent',
}: Omit<MessageProps, 'id'>) {
  const isUser = sender === 'user';

  return (
    <div
      className={cn(
        'mb-4 flex w-full gap-2',
        isUser ? 'justify-end' : 'justify-start',
      )}
    >
      {!isUser && (
        <Avatar className="h-8 w-8">
          <AvatarImage src={avatar} alt="Assistant" />
          <AvatarFallback>AI</AvatarFallback>
        </Avatar>
      )}

      <div className="flex max-w-[80%] flex-col">
        <div
          className={cn(
            'rounded-lg px-4 py-2',
            isUser
              ? 'bg-primary text-primary-foreground rounded-tr-none'
              : 'bg-muted rounded-tl-none',
          )}
        >
          <p className="break-words whitespace-pre-wrap">{content}</p>
        </div>

        <div
          className={cn(
            'text-muted-foreground mt-1 flex items-center text-xs',
            isUser ? 'justify-end' : 'justify-start',
          )}
        >
          <span>{formatDistanceToNow(timestamp, { addSuffix: true })}</span>
          {isUser && status && (
            <span className="ml-2">
              {status === 'read' ? (
                <CheckCheck className="h-3 w-3" />
              ) : status === 'delivered' ? (
                <CheckCheck className="text-muted-foreground h-3 w-3" />
              ) : (
                <Check className="h-3 w-3" />
              )}
            </span>
          )}
        </div>
      </div>

      {isUser && (
        <Avatar className="h-8 w-8">
          <AvatarImage src={avatar} alt="User" />
          <AvatarFallback>You</AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}
