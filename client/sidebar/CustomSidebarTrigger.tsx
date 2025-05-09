'use client';

import { useSidebar } from '@/client/ui/sidebar';
import { Button } from '@/client/ui/button';
import { PanelLeft } from 'lucide-react';
import dynamic from 'next/dynamic';

const ThemeChanger = dynamic(
  () => import('@/client/navbar').then((mod) => mod.ThemeChanger),
  { ssr: false },
);

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

      <div>
        <ThemeChanger />
      </div>
    </div>
  );
};

export default CustomSidebarTrigger;
