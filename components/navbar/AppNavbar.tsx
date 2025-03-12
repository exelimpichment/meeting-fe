'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { AppNavbarLayout } from '@/components/navbar';
import { Bell, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const AppNavbar = () => {
  return (
    <AppNavbarLayout>
      <div className="flex-1"></div>
      <div className="flex gap-3 py-2 px-3">
        <Button
          className="rounded-full"
          size={'icon'}
          icon={Bell}
          variant={'outline'}
        />
        <Button
          size={'icon'}
          className="rounded-full"
          icon={MessageSquare}
          variant={'outline'}
        />
        <Avatar className="h-9 w-9">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </AppNavbarLayout>
  );
};
