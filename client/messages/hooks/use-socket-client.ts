import { MessageEvent, UseSocketClientParams } from '@/client/messages/types';
import useWebSocket from 'react-use-websocket';

export const useSocketClient = ({ socketUrl }: UseSocketClientParams) => {
  const { sendJsonMessage } = useWebSocket(socketUrl, {
    onClose: () => console.log('closed'),
    onOpen: () => console.log('opened'),
    share: true,
  });

  const sendMessage = (message: MessageEvent) => {
    sendJsonMessage({
      event: message.event,
      data: message.data,
    });
  };

  return {
    sendMessage,
  };
};
