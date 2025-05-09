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
    <div className="sticky top-0 z-50 flex items-center justify-between bg-gray-950 p-1">
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
