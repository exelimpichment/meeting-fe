// messages.ts (or wherever getConversation is defined)
export type Message = {
  id: number;
  message: string;
  timestamp: string;
};

const messageList: Message[] = [
  {
    id: 0,
    message: 'Hello, I’m the first message!',
    timestamp: '2025-03-12T10:00:00Z',
  },
  { id: 1, message: 'Hey, how’s it going?', timestamp: '2025-03-12T10:01:15Z' },
  {
    id: 2,
    message: 'Just checking in—any updates?',
    timestamp: '2025-03-12T10:02:30Z',
  },
  {
    id: 3,
    message: 'LOL, that was hilarious!',
    timestamp: '2025-03-12T10:03:45Z',
  },
  {
    id: 4,
    message: 'Can you send me the details?',
    timestamp: '2025-03-12T10:05:00Z',
  },
  {
    id: 5,
    message: 'I’m running a bit late today.',
    timestamp: '2025-03-12T10:06:15Z',
  },
  {
    id: 6,
    message: 'What’s the plan for tomorrow?',
    timestamp: '2025-03-12T10:07:30Z',
  },
  {
    id: 7,
    message: 'Cool, I’ll catch you later!',
    timestamp: '2025-03-12T10:08:45Z',
  },
  {
    id: 8,
    message: 'Did you see the news today?',
    timestamp: '2025-03-12T10:10:00Z',
  },
  {
    id: 9,
    message: 'Alright, let’s wrap this up soon.',
    timestamp: '2025-03-12T10:11:15Z',
  },
];

export const getConversation = async (): Promise<Message[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(messageList), 2000);
  });
};
