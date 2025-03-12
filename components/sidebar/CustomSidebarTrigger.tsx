'use client';

import { useSidebar } from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { PanelLeft } from 'lucide-react';

const CustomSidebarTrigger = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <div className="p-1">
      <Button
        icon={PanelLeft}
        size={'icon'}
        variant={'ghost'}
        onClick={toggleSidebar}
        className="rounded-full"
      />
    </div>
  );
};

export default CustomSidebarTrigger;
