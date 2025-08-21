import { useWsStore } from './use-ws-store';
import { useEffect } from 'react';
// import { MessageEventType } from '@exelimpichment/messenger';

export const MessageEventType = {
  SEND: 'message.send',
  EDIT: 'message.edit',
  DELETE: 'message.delete',
} as const;

interface UseMessagesRealtimeParams {
  conversationId: string | null;
}

interface UseMessagesRealtimeReturn {
  sendMessage: (content: string) => void;
  editMessage: (messageId: string, newContent: string) => void;
  deleteMessage: (messageId: string) => void;
}

export const useMessagesRealtime = ({
  conversationId,
}: UseMessagesRealtimeParams): UseMessagesRealtimeReturn => {
  const { ws, initializeWs, closeWs } = useWsStore();

  // Initialize WS and handle conversationId changes
  useEffect(() => {
    if (!conversationId) return;

    const wsInstance = initializeWs(conversationId);

    if (wsInstance) {
      wsInstance.onmessage = (event) => {
        const data = JSON.parse(event.data);
        console.log(data);

        switch (data.type) {
          case 'message_update':
            // Handle update
            break;
          case 'message_edited':
            // Handle edit
            break;
          case 'new_message':
            // Handle new message
            break;
          case 'message_deleted':
            // Handle deletion
            break;
        }
      };
    }

    return () => {
      closeWs();
    };
  }, [conversationId, initializeWs, closeWs]);

  // Methods for sending actions via WS
  const sendMessage = (content: string): void => {
    if (ws?.readyState === WebSocket.OPEN) {
      ws.send(
        JSON.stringify({
          event: MessageEventType.SEND,
          data: content,
        }),
      );
    } else {
      console.warn('WebSocket not open; message not sent');
    }
  };

  const editMessage = (messageId: string, newContent: string): void => {
    if (ws?.readyState === WebSocket.OPEN) {
      ws.send(
        JSON.stringify({
          event: MessageEventType.EDIT,
          data: {
            messageId,
            newContent,
          },
        }),
      );
    } else {
      console.warn('WebSocket not open; edit not sent');
    }
  };

  const deleteMessage = (messageId: string): void => {
    if (ws?.readyState === WebSocket.OPEN) {
      ws.send(
        JSON.stringify({
          event: MessageEventType.DELETE,
          data: messageId,
        }),
      );
    } else {
      console.warn('WebSocket not open; delete not sent');
    }
  };

  return {
    sendMessage,
    editMessage,
    deleteMessage,
  };
};
