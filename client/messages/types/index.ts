export type MessageProps = {
  id: number;
  content: string;
  sender: 'user' | 'assistant';
  timestamp?: Date;
  avatar?: string;
  status?: 'sent' | 'delivered' | 'read';
};
