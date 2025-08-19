import { create } from 'zustand';

// types for the websocket store
interface WsStore {
  ws: WebSocket | null;
  currentConversationId: string | null;
  initializeWs: (conversationId: string) => WebSocket | null;
  closeWs: () => void;
}

// zustand store to manage a single ws instance
export const useWsStore = create<WsStore>((set, get) => ({
  ws: null,
  currentConversationId: null,
  initializeWs: (conversationId: string) => {
    const { ws, currentConversationId } = get();

    // close existing connection if conversationId changes or ws exists
    if (ws && currentConversationId !== conversationId) {
      ws.close();
      set({ ws: null, currentConversationId: null });
    }

    // create new ws only if none exists
    if (!ws) {
      const wsUrl = `${process.env.NEXT_PUBLIC_API_URL}/ws/v1/messages?conversationId=${encodeURIComponent(conversationId)}`;
      const newWs = new WebSocket(wsUrl);

      newWs.onerror = (error) => {
        console.error('WebSocket error:', error);
      };

      newWs.onclose = () => {
        console.log('WebSocket closed for conversation:', conversationId);
        set({ ws: null, currentConversationId: null });
      };

      set({ ws: newWs, currentConversationId: conversationId });
    }

    return get().ws;
  },
  closeWs: () => {
    const { ws } = get();

    if (ws) {
      ws.close();
      set({ ws: null, currentConversationId: null });
    }
  },
}));
