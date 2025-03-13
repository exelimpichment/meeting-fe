'use client';

import { useTheme } from 'next-themes';
import { Button } from '@/client/ui/button';
import { SunMedium, Moon } from 'lucide-react';

export const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <Button
        icon={theme !== 'light' ? SunMedium : Moon}
        variant={'ghost'}
        size={'icon'}
        className="rounded-full"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      />
    </div>
  );
};
