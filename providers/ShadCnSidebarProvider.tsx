import { SidebarProvider } from '@/components/ui/sidebar';
// import { cookies } from 'next/headers';

export const ShadCnSidebarProvider =
  //  async
  ({ children }: { children: React.ReactNode }) => {
    // const cookieStore = await cookies();
    // const defaultOpen = cookieStore.get('sidebar_state')?.value === 'true';

    return (
      <SidebarProvider
        className="h-[calc(100%-64px)]"
        // defaultOpen={defaultOpen}
      >
        {children}
      </SidebarProvider>
    );
  };
