'use client';

import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useCallback } from 'react';

export const useUrlSearchParams = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  // function to add a key-value pair to URL search params
  const add = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(key, value);
      router.push(`${pathname}?${params.toString()}`);
    },
    [searchParams, router, pathname],
  );

  // function to delete a key from URL search params
  const remove = useCallback(
    (key: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.delete(key);
      router.push(
        `${pathname}${params.toString() ? `?${params.toString()}` : ''}`,
      );
    },
    [searchParams, router, pathname],
  );

  return { add, remove };
};
