import { MessageProps } from '@/client';

const messageList: MessageProps[] = [
  {
    content: "Hello, I'm the first message!",
    sender: 'assistant',
    timestamp: new Date('2025-03-12T10:00:00Z'),
    avatar: '/avatars/assistant.png',
    id: 0,
    status: 'read',
  },
  {
    content: "Hey, how's it going?",
    sender: 'user',
    timestamp: new Date('2025-03-12T10:01:15Z'),
    avatar: '/avatars/user.png',
    id: 1,
    status: 'delivered',
  },
  {
    content: 'Just checking in—any updates?',
    sender: 'user',
    timestamp: new Date('2025-03-12T10:02:30Z'),
    avatar: '/avatars/user.png',
    id: 2,
    status: 'read',
  },
  {
    content: 'LOL, that was hilarious!',
    sender: 'assistant',
    timestamp: new Date('2025-03-12T10:03:45Z'),
    avatar: '/avatars/assistant.png',
    id: 3,
    status: 'read',
  },
  {
    content: 'Can you send me the details?',
    sender: 'user',
    timestamp: new Date('2025-03-12T10:05:00Z'),
    avatar: '/avatars/user.png',
    id: 4,
    status: 'sent',
  },
  {
    content: "I'm running a bit late today.",
    sender: 'user',
    timestamp: new Date('2025-03-12T10:06:15Z'),
    avatar: '/avatars/user.png',
    id: 5,
    status: 'sent',
  },
  {
    content:
      "What's the plan for tomorrow? What's the plan for tomorrow? What's the plan for tomorrow? What's the plan for tomorrow? What's the plan for tomorrow? What's the plan for tomorrow? What's the plan for tomorrow? What's the plan for tomorrow?What's the plan for tomorrow? What's the plan for tomorrow?",
    sender: 'assistant',
    timestamp: new Date('2025-03-12T10:07:30Z'),
    avatar: '/avatars/assistant.png',
    id: 6,
    status: 'read',
  },
  {
    content: "Cool, I'll catch you later!",
    sender: 'user',
    timestamp: new Date('2025-03-12T10:08:45Z'),
    avatar: '/avatars/user.png',
    id: 7,
    status: 'delivered',
  },
  {
    content: 'Did you see the news today?',
    sender: 'assistant',
    timestamp: new Date('2025-03-12T10:10:00Z'),
    avatar: '/avatars/assistant.png',
    id: 8,
    status: 'read',
  },
  {
    content: "Alright, let's wrap this up soon.",
    sender: 'user',
    timestamp: new Date('2025-03-12T10:11:15Z'),
    avatar: '/avatars/user.png',
    id: 9,
    status: 'read',
  },
  {
    content: 'Typing a response...',
    sender: 'assistant',
    timestamp: new Date(),
    avatar: '/avatars/assistant.png',
    id: 10,
    status: 'sent',
  },
  {
    content: 'Yes, I saw that. Quite interesting developments!',
    sender: 'user',
    timestamp: new Date('2025-03-12T10:12:30Z'),
    avatar: '/avatars/user.png',
    id: 11,
    status: 'read',
  },
  {
    content: "I've prepared those files you requested earlier.",
    sender: 'assistant',
    timestamp: new Date('2025-03-12T10:13:45Z'),
    avatar: '/avatars/assistant.png',
    id: 12,
    status: 'read',
  },
  {
    content: 'Perfect! When can we schedule our next meeting?',
    sender: 'user',
    timestamp: new Date('2025-03-12T10:15:00Z'),
    avatar: '/avatars/user.png',
    id: 13,
    status: 'delivered',
  },
  {
    content: "I'm available tomorrow afternoon or Friday morning.",
    sender: 'assistant',
    timestamp: new Date('2025-03-12T10:16:15Z'),
    avatar: '/avatars/assistant.png',
    id: 14,
    status: 'read',
  },
  {
    content: "Friday morning works better for me. Let's say 10 AM?",
    sender: 'user',
    timestamp: new Date('2025-03-12T10:17:30Z'),
    avatar: '/avatars/user.png',
    id: 15,
    status: 'sent',
  },
];

export const getConversation = async (): Promise<MessageProps[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(messageList), 2000);
  });
};
