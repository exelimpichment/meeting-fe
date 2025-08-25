import useWebSocket from 'react-use-websocket';
export const MessageEventType = {
  SEND: 'message.send',
  EDIT: 'message.edit',
  DELETE: 'message.delete',
} as const;

interface UseSocketClientParams {
  socketUrl: string;
}

export const useSocketClient = ({ socketUrl }: UseSocketClientParams) => {
  const { sendMessage: wsSendMessage } = useWebSocket(socketUrl, {
    onOpen: () => console.log('opened'),
    onClose: () => console.log('closed'),
    share: true,
  });

  const sendMessage = ({
    data,
    event,
  }: {
    data: string;
    event: (typeof MessageEventType)[keyof typeof MessageEventType];
  }) => {
    wsSendMessage(
      JSON.stringify({
        event,
        data,
      }),
    );
  };

  return {
    sendMessage,
  };
};
