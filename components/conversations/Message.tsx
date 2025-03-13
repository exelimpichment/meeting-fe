import type React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { formatDistanceToNow } from 'date-fns';
import { Check, CheckCheck } from 'lucide-react';

export type MessageProps = {
  content: string;
  sender: 'user' | 'assistant';
  timestamp?: Date;
  avatar?: string;
  isLoading?: boolean;
  status?: 'sent' | 'delivered' | 'read';
};

export function Message({
  content,
  sender,
  timestamp = new Date(),
  avatar,
  isLoading = false,
  status = 'sent',
}: MessageProps) {
  const isUser = sender === 'user';

  return (
    <div
      className={cn(
        'flex w-full gap-2 mb-4',
        isUser ? 'justify-end' : 'justify-start',
      )}
    >
      {!isUser && (
        <Avatar className="h-8 w-8">
          <AvatarImage src={avatar} alt="Assistant" />
          <AvatarFallback>AI</AvatarFallback>
        </Avatar>
      )}

      <div className="flex flex-col max-w-[80%]">
        <div
          className={cn(
            'px-4 py-2 rounded-lg',
            isUser
              ? 'bg-primary text-primary-foreground rounded-tr-none'
              : 'bg-muted rounded-tl-none',
          )}
        >
          {isLoading ? (
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-current animate-bounce" />
              <div className="h-2 w-2 rounded-full bg-current animate-bounce [animation-delay:0.2s]" />
              <div className="h-2 w-2 rounded-full bg-current animate-bounce [animation-delay:0.4s]" />
            </div>
          ) : (
            <p className="whitespace-pre-wrap break-words">{content}</p>
          )}
        </div>

        <div
          className={cn(
            'flex items-center text-xs text-muted-foreground mt-1',
            isUser ? 'justify-end' : 'justify-start',
          )}
        >
          <span>{formatDistanceToNow(timestamp, { addSuffix: true })}</span>
          {isUser && status && (
            <span className="ml-2">
              {status === 'read' ? (
                <CheckCheck className="h-3 w-3" />
              ) : status === 'delivered' ? (
                <CheckCheck className="h-3 w-3 text-muted-foreground" />
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
