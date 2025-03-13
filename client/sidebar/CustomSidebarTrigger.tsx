'use client';

import { ThemeChanger } from '@/client/navbar';
import { useSidebar } from '@/client/ui/sidebar';
import { Button } from '@/client/ui/button';
import { PanelLeft } from 'lucide-react';

const CustomSidebarTrigger = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <div className="flex items-center justify-between p-1">
      <Button
        icon={PanelLeft}
        size={'icon'}
        variant={'ghost'}
        onClick={toggleSidebar}
        className="rounded-full"
      />

      <ThemeChanger />
    </div>
  );
};

export default CustomSidebarTrigger;
