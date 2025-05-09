'use client';

import { SunMedium, Moon } from 'lucide-react';
import { Button } from '@/client/ui/button';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';
import React from 'react';

type ThemeChangerProps = React.ComponentProps<typeof Button>;

export const ThemeChanger = ({ className, ...props }: ThemeChangerProps) => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      icon={theme !== 'light' ? SunMedium : Moon}
      variant={'ghost'}
      size={'icon'}
      className={cn('rounded-full', className)}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      {...props}
    />
  );
};
