export const MessageEventType = {
  SEND: 'message.send',
  EDIT: 'message.edit',
  DELETE: 'message.delete',
} as const;

export type MessageProps = {
  id: number;
  content: string;
  sender: 'user' | 'assistant';
  timestamp?: Date;
  avatar?: string;
  status?: 'sent' | 'delivered' | 'read';
};

export interface UseSocketClientParams {
  socketUrl: string;
}

export type MessageSendEvent = {
  event: typeof MessageEventType.SEND;
  data: { message: string; conversationId: string };
};

export type MessageEditEvent = {
  event: typeof MessageEventType.EDIT;
  data: { message: string; conversationId: string; messageId: string };
};

export type MessageDeleteEvent = {
  event: typeof MessageEventType.DELETE;
  data: { messageId: string; conversationId: string };
};

// discriminated union type for type-safe message events
export type MessageEvent =
  | MessageSendEvent
  | MessageEditEvent
  | MessageDeleteEvent;
