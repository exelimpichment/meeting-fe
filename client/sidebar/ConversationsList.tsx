'use client';

import { useConversations } from '@/client/conversations/hooks/use-conversations';
import { UrlGenerator } from '@/client/common/utils/url-generator';
import { formatDistanceToNow } from 'date-fns';
import Link from 'next/link';

export const ConversationsList = () => {
  const { data: conversationsData } = useConversations();

  return (
    <>
      {conversationsData.map((conversation) => (
        <Link
          href={UrlGenerator.conversation(conversation.id)}
          key={conversation.id}
          className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex flex-col items-start gap-2 border-b p-4 text-sm leading-tight whitespace-nowrap last:border-b-0"
        >
          <div className="flex w-full items-center gap-2">
            <span>{conversation.name}</span>
            <span className="ml-auto text-xs">
              {formatDistanceToNow(new Date(conversation.created_at), {
                addSuffix: true,
              })}
            </span>
          </div>

          {/* <span className="line-clamp-2 w-[260px] text-xs whitespace-break-spaces">
            {teaser}
          </span> */}
        </Link>
      ))}
    </>
  );
};
